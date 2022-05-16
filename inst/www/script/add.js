var add_node = document.querySelector(".add_node")
var add_node_text = document.querySelector(".add_node_text")

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

 
    add_node_event_listeners(node_screen.getElementById(num_nodes - 1).querySelector(".node"))
    add_node_text_event_listener(node_screen.getElementById(num_nodes - 1).querySelector(".nodetext"))

    add_hover_circle(node_screen.getElementById(num_nodes - 1).querySelector(".node-hover-circle"))
    add_click_circle(node_screen.getElementById(num_nodes - 1).querySelector(".node-click-circle"))
    add_hover_out(node_screen.getElementById(num_nodes - 1).querySelector(".node-hover-circle"))
})

add_node_text.addEventListener("mouseover", function handleMouseOver(event) {
    add_node.style.fill = "#ececec"
})

add_node.addEventListener("mouseover", function handleMouseOut(event) {
    add_node.style.fill = "#ececec"
})

add_node.addEventListener("mouseout", function handleMouseOut(event) {
    add_node.style.fill = "white"
})


// Adds the event listener for this node
function add_node_event_listeners(element) {
    element.addEventListener('click', function handleClick(event) {
        event.preventDefault();
        


        var delete_link = event.target.parentElement.querySelector(".delete-links-semi-circle")
        var delete_node = event.target.parentElement.querySelector(".delete-node-semi-circle")
        var highlight = event.target.parentElement.querySelector(".node-click-circle")

        if(getComputedStyle(delete_link).display == "none") {
            delete_link.style.display = "block"
            delete_node.style.display= "block"
            highlight.style.opacity = ".75"

            
            if(shellOpenIndex >= 0 && event.target.parentElement.id != shellOpenIndex) {
                document.getElementById(shellOpenIndex).querySelector(".delete-links-semi-circle").style.display = "none"
                document.getElementById(shellOpenIndex).querySelector(".delete-node-semi-circle").style.display = "none"
                document.getElementById(shellOpenIndex).querySelector(".node-click-circle").style.opacity = "0"
            } 

            shellOpenIndex = event.target.parentElement.id
        } else {
            delete_link.style.display = "none"
            delete_node.style.display = "none"
        }

    })

    element.addEventListener('mouseover', function handleClick(event) {
        event.preventDefault();
        
        var hover = event.target.parentElement.querySelector(".node-hover-circle")
       
        hover.style.opacity = ".75"


    })
}


// Add nodetext event listeners for this node
function add_node_text_event_listener(element) {
    element.addEventListener('click', function handleClick(event) {
        event.preventDefault();
        
     
        var delete_link = event.target.parentElement.querySelector(".delete-links-semi-circle")
        var delete_node = event.target.parentElement.querySelector(".delete-node-semi-circle")
        var highlight = event.target.parentElement.querySelector(".node-click-circle")

        if(getComputedStyle(delete_link).display == "none") {
            delete_link.style.display = "block"
            delete_node.style.display= "block"
            highlight.style.opacity = ".75"

            
            if(shellOpenIndex >= 0 && event.target.parentElement.id != shellOpenIndex) {
                document.getElementById(shellOpenIndex).querySelector(".delete-links-semi-circle").style.display = "none"
                document.getElementById(shellOpenIndex).querySelector(".delete-node-semi-circle").style.display = "none"
                document.getElementById(shellOpenIndex).querySelector(".node-click-circle").style.opacity = "0"
                shellOpenIndex = event.target.parentElement.id
            } 

            shellOpenIndex = event.target.parentElement.id
        } else {
            delete_link.style.display = "none"
            delete_node.style.display = "none"
        }

        
    })

    element.addEventListener('mouseover', function handleClick(event) {
        event.preventDefault();
        
        var hover = event.target.parentElement.querySelector(".node-hover-circle")
        
        hover.style.opacity = ".75"

    }) 
}



function add_delete_node(element) {
    element.addEventListener('click', function handleClick(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        element.style.display = "none"

        var left = event.target.parentElement.querySelector(".delete-links-semi-circle")
        left.style.display = "none"

    })
}

function add_delete_links(element) {
    element.addEventListener('click', function handleClick(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        element.style.display = "none"

        var right = event.target.parentElement.querySelector(".delete-node-semi-circle")
        right.style.display = "none"

    })
}

function add_hover_circle(element) {
    element.addEventListener("mouseover" , function handleHover(event) {
        element.style.cursor = "e-resize"
        element.style.opacity = "0.75"
    })
}

function add_click_circle(element) {
    element.addEventListener("mouseover" , function handleHover(event) {
        element.style.cursor = "e-resize" 
    })
}

function add_hover_out(element) {
    document.addEventListener("mouseover", function handle(event) {         
        if(event.target.className.baseVal != "node-hover-circle" && event.target.className.baseVal != "nodetext" && event.target.className.baseVal != "node") {
            element.style.opacity = 0   
        }
    })
}