setClass("edge",
         slots = c(
           name = "character",
           in_node = "list",
           out_node = "list",
           properties = "list"
         ),

)

# setValidity("edge", function(object){
#   # Check if
#   if(length(object@in_node) != 1 || length(object@out_node) != 1)  {
#     "in node and out node must both be length 1"
#   } else {
#     TRUE
#   }
# })

# Need to implement a way to convert tabular datasets in tibble/dataframe format
# to the format of a graph data structure.
# setMethod("show", "edge", function(object) {
#   cat(is(object)[[1]], "\n",
#       "  Name: ", object@name, "\n",
#       sep = ""
#   )
# })
#
# setMethod("getName", "edge", function(x) {
#
# })
#
# setMethod("getOutNodes", "edge", function(x) {
#   # Return all out nodes
# })
#
# setMethod("getInNodes", "edge", function(x) {
#   # Return all in nodes
# })
#
# setMethod("getProperties", "edge", function(x) {
#   # Return all properties
# })
#
#
#
#
# setMethod("setName", "edge", function(x) {
#
# })
#
# setMethod("setInNodes", "edge", function(x) {
#
# })
#
# setMethod("setOutNodes", "edge", function(x) {
#
# })
#
# setMethod("setProperties", "edge", function(x) {
#
# })


