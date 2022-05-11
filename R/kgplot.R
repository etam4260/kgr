#' @import methods


#' @name kgplot
#' @title kgplot
#' @slot name The name of the knowledge graph
#' @slot nodes All the nodes that are in the knowledge graph
setClass("kgplot",
         slots = c(
           name = "character",
           nodes = "list",
           properties = "list"
         ),
         prototype = list(
           name = "",
           nodes = list(),
           properties = list()
         )
)

#' @name kgplot
#' @title kgplot
#' @description Helper function for creating knowledge graph object
#' @param name Name of the knowledge graph
#' @param nodes Nodes existing in knowledge graph
#' @param properties Properties associated with knowledge graph
kgplot <- function(name, nodes = NA, properties = NA) {
  new("kgplot", name = name, nodes = nodes, properties = properties)
}

#
# setMethod("getName", "kg", function(x) {
#   x@name
# })
#
# setMethod("getNodes", "kg", function(x) {
#   # Return all out nodes
# })
#
# setMethod("getProperties", "kg", function(x) {
#   # Return all in nodes
# })
#
# setMethod("merge", "kg", function(x) {
#   # Return all in nodes
# })
#
#
# setMethod("overlap", "kg", function(x) {
#   # Return all in nodes
# })
#
# setMethod("tabular_to_kg", "kg", function(x) {
#   # Return all in nodes
# })
#
# setMethod("kg_to_tabular", "kg", function(x) {
#   # Return all in nodes
# })
#
# setMethod("validate", "kg", function(x) {
#   # Return all in nodes
# })
#
# setMethod("infer", "kg", function(x) {
#   # Return all in nodes
# })
#
# setMethod("cypher", "kg", function(x) {
#   # Return all in nodes
# })
#
# setMethod("sparql", "kg", function(x) {
#   # Return all in nodes
# })
