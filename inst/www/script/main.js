import * as document_listeners from './document_listeners.js'
import * as editor_listeners from './editor_listeners'
import * as node_listeners from './node_listeners.js'
import * as edge_listeners from './edge_listeners.js'
import * as canvas_listeners from './canvas_listeners.js'
import * as add_button_listeners from './add_button_listeners.js'
import * as delete_button_listeners from './delete_button_listeners.js'
import * as websocket_listeners from './websocket_listeners.js'
import * as window_listeners from './window_listeners.js'


var dragItem = document.querySelector(".node")
var container = document.querySelector(".canvas");
var svg_image = document.querySelector(".svg_image")
var all_nodes = document.querySelectorAll("g")
// svg_image.setAttribute("width", document.documentElement.clientWidth)
// svg_image.setAttribute("height",  document.documentElement.clientHeight * (19/20))

// Is the node currently active?
var active = false;

// Current X and Y position of node being dragged.
var currentX;
var currentY;

// Initial X and Y position of node going to be dragged.
var initialX = new Array(num_nodes).fill(0);
var initialY =  new Array(num_nodes).fill(0);

// The offset of X and Y
var xOffset = new Array(num_nodes).fill(0);
var yOffset = new Array(num_nodes).fill(0);

var index;


var node_editor = document.querySelector(".node_editor")
var exit_editor = document.querySelector(".exit_editor")

var editor_open = false

var ws = new WebSocket("ws://localhost:8080")


canvas.initializeSizeOfCanvas(svg_image)
canvas.initializeDragOfCanvas(container)

editor.initializeEditor(document)
editor.exitNodeEditor(exit_editor, editor_open)

window_handler.handleWindowClicks(all_nodes)
window_handler.handleWindowResize(svg_image, node_editor)

document_handler.addHoverEffectForAddAndDelete(document)
document_handler.clearEffectsOnDocumentMouseoverListener(document)

websocket.initializeSocket(ws)

var add_node_button_html = document.querySelector(".add_node")
var add_node_text_html = document.querySelector(".add_node_text")

add_button.addNewNodeListener(add_node_button_html)
add_button.addNewNodeTextListener(add_node_text_html)


var delete_button_html = document.querySelectorAll(".delete")

delete_button.addDeleteButtonClickEvent(delete_button_html)



node.selectNodeListener()
node.selectNodeTextListener()