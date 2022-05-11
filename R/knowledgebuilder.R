#' @import httpuv
#' @import rstudioapi

#' @title kg_builder
#' @name kg_builder
#' @export
#' @description Creates an instance of a knowledge graph builder GUI within the
#'   RStudio Viewer. Interactions on the viewer GUI client will be sent back to the
#'   RStudio server for processing of operations.
kg_builder <- function() {

  # Client will be the graph builder application. And will send data back right
  # to R server connection and allow R user to gain access to the graph
  # DB structure that is returned by the client, in whatever format they want.
  dir <- tempfile()
  dir.create(dir)
  app_path = NULL

  if(!(paste(.libPaths(), "/kgr", sep = "") %in% list.dirs(.libPaths()))) {
    stop("It doesn't look like kgr is installed in the default library")
  } else {
    # Application will be located in the www folder.
    app_path <- paste(.libPaths(), "/kgr/www", sep = "")
  }

  # Start in locally hosted server on port 8080
  s <- startServer("127.0.0.1", 8080,
                   list(
                     onWSOpen = function(ws) {
                       # The ws object is a WebSocket object
                       cat("Server connection opened.\n")

                       ws$onMessage(function(binary, message) {
                         cat("Server received message:", message, "\n")
                         ws$send(message)
                         # If message signals to end the server, end
                         # close the connection and send back data
                       })
                       ws$onClose(function() {
                         cat("Server connection closed.\n")
                       })

                     }
                   )
  )

  # need to make sure this is path to the kgr files.
  file.copy(from = app_path , to = dir, recursive = TRUE)
  system(paste("cp -R", app_path, dir, sep = " "))

  message(app_path)
  message(dir)

  # move entire application to temp folder and open it in the view. This will
  # start the server client interactions.
  message(paste(dir, "/www/canvas.html", sep = ""))
  rstudioapi::viewer(paste(dir, "/www/canvas.html", sep = ""))
}
