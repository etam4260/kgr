#' @name node
#' @title node
#' @slot name
#' @slot edges
#' @slot nodes
#' @slot properties
setClass("node",
         slots = c(
           name = "character",
           out_edges = "list",
           in_edges = "list",
           properties = "list"
         ),
         prototype = list(
           name = "",
           in_edges = list(),
           out_edges = list(),
           properties = list()
         )
)



#' @name node
#' @title node
#' @description Helper function for creating node object
#' @param name Name of the node
#' @param in_edges in edges connected to node
#' @param out_edges out edges connected to node
#' @param properties properties associated with node
node <- function(name, in_edges, out_edges, properties) {

  new("node", in_edges = in_edges, out_edges = out_edges, properties = properties)
}


setMethod("show", "node", function(object) {
  cat(is(object)[[1]], "\n",
      "  Name: ", object@name, "\n",
      sep = ""
  )
})

#
# setMethod("getName", "node", function(x) {
#   x@name
# })
#
# setMethod("getOutNodes", "node", function(x) {
#   # Return all out nodes
# })
#
# setMethod("getInNodes", "node", function(x) {
#   # Return all in nodes
# })
#
# setMethod("getProperties", "node", function(x) {
#   # Return all properties
# })
#
#
#
#
# setMethod("setName", "node", function(x) {
#
# })
#
# setMethod("setInEdges", "node", function(x) {
#
# })
#
# setMethod("setOutEdges", "node", function(x) {
#
# })
#
# setMethod("setProperties", "node", function(x) {
#
# })
