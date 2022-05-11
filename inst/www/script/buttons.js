var add_node = document.querySelector(".add_node")
var delete_ = document.querySelectorAll(".delete")

var add_node_text = document.querySelector(".add_node_text")

add_node.addEventListener("click", function handleClick(event) {
    // Make new node ...
    var node_screen = document.querySelector(".svg_image")
    initialX.push(0)
    initialY.push(0)

    yOffset.push(0)
    xOffset.push(0)

    node_screen.innerHTML = 
    `
    <g id = ${num_nodes}>
        <circle cx="100" cy="60" r="40" fill="white" stroke = "grey" stroke-dasharray="5,5" stroke-width = "1" display = none class = "delete-node-semi-circle"/>
        <circle cx="100" cy="60" r="30" fill="white" stroke = "grey" stroke-dasharray="5,5" stroke-width = "1" display = none class = "delete-links-semi-circle"/>
        
        <circle cx="40" cy="40" r="25" opacity = "0" class = "node-click-circle"/>
                    
        <circle cx="40" cy="40" r="25" opacity = "0" class = "node-hover-circle"/>
        
        <circle cx="100" cy="60" r="20" fill="white" stroke = "grey" stroke-dasharray="5,5" stroke-width = "1" class = "node"/>
        <text x="80" y="65" font-family="Verdana" font-size="12" fill="black" class = "nodetext"> Node 2</text>
        
        <line x1="100" y1="80" x2="100" y2="190" stroke-width="1" stroke-dasharray="5,5" stroke="black" class = "edge"/>
    </g>
    ` +  node_screen.innerHTML 

    num_nodes += 1
    
})

delete_.forEach(element => { 
    element.addEventListener("click", function handleClick(event) {
        console.log("Deleting")
        console.log(selected_item)
        if(selected_item != null) {
            selected_item.remove()
        }
    })

})

