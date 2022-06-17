import * as document_listeners from './modules/document_listeners.js'
import * as editor_listeners from './modules/editor_listeners.js'
import * as node_listeners from './modules/node_listeners.js'
import * as edge_listeners from './modules/edge_listeners.js'
import * as canvas_listeners from './modules/canvas_listeners.js'
import * as add_button_listeners from './modules/add_button_listeners.js'
import * as delete_button_listeners from './modules/delete_button_listeners.js'
import * as websocket_listeners from './modules/websocket_listeners.js'
import * as window_listeners from './modules/window_listeners.js'

/******************************************************************************/

var wholeNodes = document.querySelectorAll(".whole-node")
var nodeEditor = document.querySelector(".node-editor")
var editorOpen = false

var canvas = document.querySelector(".canvas");
var svgImage = document.querySelector(".svg-image")


window_listeners.handleWindowClicksListener(wholeNodes = wholeNodes)

window_listeners.handleWindowResizeListener(
    svgImage = svgImage,
    nodeEditor = nodeEditor,
    editorOpen = editorOpen
)

/******************************************************************************/

// Need to fix issues with global variable inside these functions...
minimalNode = wholeNodes.querySelectorAll(".node")

canvas_listeners.initializeSizeOfSVG(svgImage)
canvas_listeners.initializeDragOfCanvas(canvas)

/******************************************************************************/

var addNodeButton = document.querySelector(".add-button")
var addNodeButtonText = document.querySelector(".add-button-text")

num_Nodes = add_button_listeners.addNewNodeButtonListener(
    addNodeButton = addNodeButton,
    svgImage = svgImage,
    numNodes = numNodes
)

num_Nodes = add_button_listeners.addNewNodeTextButtonListener(
    addNodeButtonText = addNodeButtonText,
    svgImage = svgImage,
    numNodes = numNodes
)

/******************************************************************************/

var deleteNodeButtonElements = document.querySelectorAll(".delete")

delete_button_listeners.addDeleteButtonClickEvent(
    deleteNodeButton = deleteNodeButtonElements,
    shellOpenIndex = shellOpenIndex
)

/******************************************************************************/


var ws = new WebSocket("ws://localhost:8080")

websocket_listeners.initializeSocket(ws)
websocket_listeners.sendMessage(ws = ws, "Starting connection...")

/******************************************************************************/

var hoverHighlightNodeCircle = wholeNodes.querySelector(".node-hover-circle")
var deleteButton = document.getElementById("delete-node-button")

document_listeners.addButtonHoverEffectForAddAndDeleteNodeButtons(
    document = document,
    addNodeButton = addNodeButton,
    deleteNodeButton = deleteButton
)

document_listeners.clearNodeHoverEffectsOnDocumentMouseoverListener(
    document = document,
    hoverHighlightNodeCircle = hoverHighlightNodeCircle
)


/******************************************************************************/

var exitNodeEditorButton = document.querySelector(".exit-editor-button")

var nodeEditor = document.querySelector(".node-editor")

var nodeEditorTitles = document.querySelector(".node-editor-titles")

var nodeEditorEntries = document.querySelector(".node-editor-entries")

var isNodeEditorOpen = false


editor_listeners.initializeEditorSize(document = document,
                                      nodeEditor = nodeEditor)

editor_listeners.exitNodeEditorButtonListener(
    exitNodeEditorButton = exitNodeEditorButton,
    nodeEditorTitles = nodeEditorTitles,
    nodeEditorEntries = nodeEditorEntries,
    isNodeEditorOpen = isNodeEditorOpen,
    svgImage = svgImage,
    nodeEditor = nodeEditor
)


/******************************************************************************/

deleteLinksOnNodeCircleButton = wholeNodes.querySelectorAll(
    ".delete-links-semi-circle")

deleteNodeCircleButton = wholeNodes.querySelectorAll(".delete-node-semi-circle")

hoverHighlightNodeCircle = wholeNodes.querySelectorAll(".node-hover-circle")

clickHighlightNodeCircle = wholeNodes.querySelectorAll(".node-click-circle")


node_listeners.selectNodeListener(
    nodes = wholeNodes,  
    shellOpenIndex = shellOpenIndex
)

node_listeners.selectNodeTextListener(
    nodeText = wholeNodes, 
    shellOpenIndex = shellOpenIndex
)

node_listeners.deleteLinksOnNodeCircleButtonListener(
    deleteLinksOnNodeCircleButton = deleteLinksOnNodeCircleButton
)

node_listeners.deleteNodeCircleButtonListener(
    deleteNodeCircleButton = deleteLinksOnNodeCircleButton
)


node_listeners.addHoverCircleEventListener(
    hoverHighlightNodeCircle = hoverHighlightNodeCircle
)

node_listeners.addClickCircleEventListener(
    clickHighlightNodeCircle = clickHighlightNodeCircle
)

/******************************************************************************/

