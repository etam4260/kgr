var add_node = document.querySelector(".add_node")
var add_node_text = document.querySelector(".add_node_text")


/**
 * @name addNewNodeListener
 * @description When user clicks the add node button, make sure to append a new node
 *   to the document alongside with its associated components.
 * @param add_node The button to add effects to
 */
function addNewNodeListener(add_node) {
    add_node.addEventListener("click", function handleClick(event) {
        // Make new node ...
        var node_screen = document.querySelector(".svg_image")
        initialX.push(0)
        initialY.push(0)
    
        yOffset.push(0)
        xOffset.push(0)
    
        new_node =     
        `
        <g id = ${num_nodes}>
            <circle cx="60" cy="60" r="40" fill="white" stroke = "grey" stroke-dasharray="5,5" stroke-width = "1" display = none class = "delete-node-semi-circle"/>
            <circle cx="60" cy="60" r="30" fill="white" stroke = "grey" stroke-dasharray="5,5" stroke-width = "1" display = none class = "delete-links-semi-circle"/>
            
            <circle cx="60" cy="60" r="25" opacity = "0" class = "node-click-circle"/>
            
            <circle cx="60" cy="60" r="25" opacity = "0" class = "node-hover-circle"/>
            
            <circle cx="60" cy="60" r="20" fill="white" stroke = "grey" stroke-dasharray="5,5" stroke-width = "1" class = "node"/>
            <text x="40" y="65" font-family="Verdana" font-size="12" fill="black" class = "nodetext"> Node 2</text>
    
            <line x1="60" y1="80" x2="60" y2="170" stroke-width="1" stroke-dasharray="5,5" stroke="black" class = "edge"/>
        </g>
        `
        
        node_screen.insertAdjacentHTML("afterbegin", new_node)
    
        num_nodes += 1
    
     
        add_node_event_listeners(node_screen.getElementById(num_nodes - 1).querySelector(".node"))
        add_node_text_event_listener(node_screen.getElementById(num_nodes - 1).querySelector(".nodetext"))
    
        add_hover_circle(node_screen.getElementById(num_nodes - 1).querySelector(".node-hover-circle"))
        add_click_circle(node_screen.getElementById(num_nodes - 1).querySelector(".node-click-circle"))
        add_hover_out(node_screen.getElementById(num_nodes - 1).querySelector(".node-hover-circle"))
    })
}


/**
 * @name addNewNodeTextListener
 * @description When user clicks the add node button text,
 *   make sure to append a new node to the document alongside
 *   with its associated components. effectively removed.
 * @param document The text in a button to add effects to.
 */
function addNewNodeTextListener(add_node_text) {

    add_node_text.addEventListener("click", function handleClick(event) {
        // Make new node ...
        var node_screen = document.querySelector(".svg_image")
        initialX.push(0)
        initialY.push(0)

        yOffset.push(0)
        xOffset.push(0)

        new_node =     
        `
        <g id = ${num_nodes}>
            <circle cx="60" cy="60" r="40" fill="white" stroke = "grey" stroke-dasharray="5,5" stroke-width = "1" display = none class = "delete-node-semi-circle"/>
            <circle cx="60" cy="60" r="30" fill="white" stroke = "grey" stroke-dasharray="5,5" stroke-width = "1" display = none class = "delete-links-semi-circle"/>
            
            <circle cx="60" cy="60" r="25" opacity = "0" class = "node-click-circle"/>
            
            <circle cx="60" cy="60" r="25" opacity = "0" class = "node-hover-circle"/>
            
            <circle cx="60" cy="60" r="20" fill="white" stroke = "grey" stroke-dasharray="5,5" stroke-width = "1" class = "node"/>
            <text x="40" y="65" font-family="Verdana" font-size="12" fill="black" class = "nodetext"> Node 2</text>

            <line x1="60" y1="80" x2="60" y2="170" stroke-width="1" stroke-dasharray="5,5" stroke="black" class = "edge"/>
        </g>
        `
        
        node_screen.insertAdjacentHTML("afterbegin", new_node)

        num_nodes += 1
    })
}

export {addNewNodeListener,
        addNewNodeTextListener}