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

                       # Messages should be sent and returned in a
                       # json format. Need to maintain consistency between
                       # R and external app.
                       ws$onMessage(function(binary, message) {
                         cat("Server received message:", message, "\n")
                         ws$send(message)
                          x <<- 2

                         # Depending on the message, we want to do some action
                         # Node was added on the application, update
                         # the R environment
                         if (message == "1") {

                         # Delete operation, make sure to delete the right
                         # object.
                         } else if (message == "2") {

                         # New edge was added, make sure to update...
                         } else if (message == "3") {

                         # New properties were added to either node or edge.
                         } else if (message == "4") {

                         }

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

  web_app <- startServer("127.0.0.1", 8100,
                   app = list(
                     staticPaths = list("/"= paste(dir, "/www", sep = ""))
                   )
  )

  # move entire application to temp folder and open it in the view. This will
  # start the server client interactions.

  rstudioapi::viewer("http://localhost:8100")

  # Make sure that when this function is exited
  # on.exit(httpuv::stopServer(s), add = TRUE)
  # on.exit(httpuv::stopServer(web_app), add = TRUE)
}
