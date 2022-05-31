// The nodes and the text within each node
var nodes = document.querySelectorAll(".node")
var nodetext = document.querySelectorAll(".nodetext")

// The buttons which appear when nodes are clicked. One is used
// for deleting the node while the other is for adding links
var delete_links = document.querySelectorAll(".delete-links-semi-circle")
var delete_node = document.querySelectorAll(".delete-node-semi-circle")


// Circles to appear when user is hovering over a node and
// or if the circle is clicked on.
var hovercircles = document.querySelectorAll(".node-hover-circle")
var clickcircles = document.querySelectorAll(".node-click-circle")

// The number of nodes currently on the screen as well as 
// if a node is currently selected.
var num_nodes = 3
var shellOpenIndex = -1;


/**
 * @name selectNodeListener
 * @description When user clicks on a node on the screen, apply 
 *   a selection hover effect and open a options menu that surround 
 *   the node.
 * @param nodes The nodes to appply effect to.
 */
function selectNodeListener(nodes) {
    nodes.forEach(element => { 
        
        /*
         * On click make sure to open up the click circle and also 
         * the corresponding buttons that as options to be applied 
         * to the node.
         */
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

        /*
         * When mousing over a node, make sure to have an outer highlight over it.
         */
        element.addEventListener('mouseover', function handleClick(event) {
            event.preventDefault();
            
            var hover = event.target.parentElement.querySelector(".node-hover-circle")
        
            hover.style.opacity = ".75"
        })

    })
}




/**
 * @name selectNodeTextListener
 * @description When user clicks on the text within the node on 
 *   the screen, apply a selection hover effect and open a
 *   options menu that surround the node.
 * @param nodetext The nodes to appply effect to.
 */
function selectNodeTextListener(nodetext) {
    
    nodetext.forEach( element => { 

        /*
         * On click make sure to open up the click circle and also 
         * the corresponding buttons that as options to be applied 
         * to the node.
         */
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


        /*
         * When mousing over a node, make sure to have an outer highlight over it.
         */
        element.addEventListener('mouseover', function handleClick(event) {
            event.preventDefault();
            
            var hover = event.target.parentElement.querySelector(".node-hover-circle")
            
            hover.style.opacity = ".75"

        })
    })
}




/**
 * @name deleteLinksOnNodeListener
 * @description Apply event listent to links so when
 *   user clicks on one of the outer buttons surrounding the
 *   node delete all links associated with that node.
 * @param delete_links The links that are to be deleted deleted
 */
function deleteLinksOnNodeListener(delete_links) {
    
    /*
    * Apply event listener to outter circle button for properly deleting links
    * surrounding 
    * a node.
    */
    delete_links.forEach(element => { 
        element.addEventListener('click', function handleClick(event) {
            event.preventDefault();
            event.stopImmediatePropagation();
            element.style.display = "none"

            var right = event.target.parentElement.querySelector(".delete-node-semi-circle")
            right.style.display = "none"

        })
    })
}




/**
 * @name selectNodeTextListener
 * @description When user clicks on the text within the node on 
 *   the screen, apply a selection hover effect and open a
 *   options menu that surround the node.
 * @param nodes The nodes to appply effect to.
 */
function deleteNodeListener(delete_node) {
    delete_node.forEach( element => { 
        element.addEventListener('click', function handleClick(event) {
            event.preventDefault();
            event.stopImmediatePropagation();
            element.style.display = "none"

            var left = event.target.parentElement.querySelector(".delete-links-semi-circle")
            left.style.display = "none"

        })
    })
}



/**
 * @name selectNodeTextListener
 * @description When user clicks on the text within the node on 
 *   the screen, apply a selection hover effect and open a
 *   options menu that surround the node.
 * @param nodes The nodes to appply effect to.
 */
function addHoverCircleEventListener(hovercircles) {
    hovercircles.forEach(element =>  {
        element.addEventListener("mouseover" , function handleHover(event) {
            element.style.cursor = "e-resize"
            element.style.opacity = "0.75"
        })
    })
}



/**
 * @name selectNodeTextListener
 * @description When user clicks on the text within the node on 
 *   the screen, apply a selection hover effect and open a
 *   options menu that surround the node.
 * @param nodes The nodes to apply effect to.
 */
function addClickCircleEventListener(clickcircles) {
    clickcircles.forEach(element =>  {
        element.addEventListener("mouseover" , function handleHover(event) {
            element.style.cursor = "e-resize"
        
        })
    })
}


export {selectNodeListener,
        selectNodeTextListener,
        addClickCircleEventListener,
        addHoverCircleEventListener,
        deleteNodeListener,
        deleteLinksOnNodeListener}