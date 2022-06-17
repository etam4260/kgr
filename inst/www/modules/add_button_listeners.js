import * as node_listeners from './node_listeners.js'

/**
 * @name addNewNodeListener
 * @description When user clicks the add node button, make sure 
 *   to append a new node to the document alongside with its 
 *   associated components.
 * @param addNodeButton The add button to apply effects to.
 * @param svgImage The svg object where the add node.
 * @param numNodes The current number of nodes on the canvas.
 *   button is located.
 */
function addNewNodeButtonListener(addNodeButton,
                                  svgImage,
                                  numNodes) {
    
    addNodeButton.addEventListener("click", function handleClick() {
        
        // Make new node ...
        
        initialX.push(0)
        initialY.push(0)
    
        yOffset.push(0)
        xOffset.push(0)
    
        newNode =     
        `
        <g id = ${numNodes}>
            <circle cx="60" cy="60" r="40" fill="white" stroke = "grey" stroke-dasharray="5,5" stroke-width = "1" display = none class = "delete-node-semi-circle"/>
            <circle cx="60" cy="60" r="30" fill="white" stroke = "grey" stroke-dasharray="5,5" stroke-width = "1" display = none class = "delete-links-semi-circle"/>
            
            <circle cx="60" cy="60" r="25" opacity = "0" class = "node-click-circle"/>
            
            <circle cx="60" cy="60" r="25" opacity = "0" class = "node-hover-circle"/>
            
            <circle cx="60" cy="60" r="20" fill="white" stroke = "grey" stroke-dasharray="5,5" stroke-width = "1" class = "node"/>
            <text x="40" y="65" font-family="Verdana" font-size="12" fill="black" class = "nodetext"> Node 2</text>
    
            <line x1="60" y1="80" x2="60" y2="170" stroke-width="1" stroke-dasharray="5,5" stroke="black" class = "edge"/>
        </g>
        `
        
        svgImage.insertAdjacentHTML("afterbegin", newNode)
    
        numNodes += 1
    
        node_listeners.selectNodeListener(
            svgImage.getElementById(numNodes - 1).querySelector(
                ".node"))
        
        node_listeners.selectNodeTextListener(
            svgImage.getElementById(numNodes - 1).querySelector(
                ".nodetext"))
        
        node_listeners.deleteLinksOnNodeButtonListener(
            svgImage.getElementById(numNodes - 1).querySelector(
                "delete-node-semi-circle"))

        node_listeners.deleteNodeButtonListener(
            svgImage.getElementById(numNodes - 1).querySelector(
                ".delete-links-semi-circle"))

        node_listeners.addHoverCircleEventListener(
            svgImage.getElementById(numNodes - 1).querySelector(
                ".node-hover-circle"))

        node_listeners.addClickCircleEventListener(
            svgImage.getElementById(numNodes - 1).querySelector(
                ".node-click-circle"))

    })

    return(numNodes)
}


/**
 * @name addNewNodeTextListener
 * @description When user clicks the add node button text,
 *   make sure to append a new node to the document alongside
 *   with its associated components.
 * @param addNodeButtonText The text in the add button to apply listener to.
 * @param svgImage The svg object where the add node button is located.
 * @param numNodes The current number of nodes on the canvas.
 *   button is located.
 */
function addNewNodeTextButtonListener(addNodeButtonText,
                                      svgImage,
                                      numNodes) {

    addNodeButtonText.addEventListener("click", function handleClick() {
        
        initialX.push(0)
        initialY.push(0)

        yOffset.push(0)
        xOffset.push(0)

        new_node =     
        `
        <g id = ${numNodes}>
            <circle cx="60" cy="60" r="40" fill="white" stroke = "grey" stroke-dasharray="5,5" stroke-width = "1" display = none class = "delete-node-semi-circle"/>
            <circle cx="60" cy="60" r="30" fill="white" stroke = "grey" stroke-dasharray="5,5" stroke-width = "1" display = none class = "delete-links-semi-circle"/>
            
            <circle cx="60" cy="60" r="25" opacity = "0" class = "node-click-circle"/>
            
            <circle cx="60" cy="60" r="25" opacity = "0" class = "node-hover-circle"/>
            
            <circle cx="60" cy="60" r="20" fill="white" stroke = "grey" stroke-dasharray="5,5" stroke-width = "1" class = "node"/>
            <text x="40" y="65" font-family="Verdana" font-size="12" fill="black" class = "nodetext"> Node 2</text>

            <line x1="60" y1="80" x2="60" y2="170" stroke-width="1" stroke-dasharray="5,5" stroke="black" class = "edge"/>
        </g>
        `
        
        svgImage.insertAdjacentHTML("afterbegin", newNode)

        numNodes += 1
    })

    return(numNodes)
}


export {addNewNodeButtonListener,
        addNewNodeTextButtonListener}