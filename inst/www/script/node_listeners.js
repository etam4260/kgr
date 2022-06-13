// The nodes and the text within each node
var nodes = document.querySelectorAll(".node")
var nodeText = document.querySelectorAll(".nodetext")

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
var shell_Open_Index = -1;


/**
 * @name selectNodeListener
 * @description When user clicks on a node on the screen, apply 
 *   a selection hover effect and open a options menu that surrounds
 *   the node.
 * @param nodes The nodes to apply listener effects to.
 * @param deleteLinksOnNodeButton The option button which appears after clicking a node which allows
 *   the user to delete links surrounding a node.
 * @param deleteNodeButton The option button which appears after clicking a node which allows
 *   the user to delete the node from the visualization.
 * @param clickHighlightNodeCircle The highlighted blue halo circle which appears after clicking a node. 
 *   This is the darker colored blue circle.
 * @param hoverHighlightNodeCircle The highlighted blue halo circle which appears when hovering over a node.
 *   This is the light colored blue circle.
 * @param shellOpenIndex The index of the node on the visualization 
 *   currently active (where the clickHighlightNode is active.)
 */
function selectNodeListener(nodes, deleteLinksOnNodeButton,
                            deleteNodeButton, clickHighlightNodeCircle,
                            hoverHighlightNodeCircle, shellOpenIndex) {
    
    nodes.forEach(element => { 
        
        /*
         * On click make sure to open up the click circle and also 
         * the corresponding buttons that as options to be applied 
         * to the node.
         */
        element.addEventListener('click', function handleClick(event) {
            event.preventDefault();
            
            //var delete_link = event.target.parentElement.querySelector(".delete-links-semi-circle")
            //var delete_node = event.target.parentElement.querySelector(".delete-node-semi-circle")
            //var highlight = event.target.parentElement.querySelector(".node-click-circle")

            if(getComputedStyle(deleteLinksOnNodeButton).display == "none") {
                
                deleteLinksOnNodeButton.style.display = "block"
                deleteNodeButton.style.display = "block"
                clickHighlightNodeCircle.style.opacity = ".75"
                
                // Grab the currently active circle and remove the click circle.
                if(shellOpenIndex >= 0 && event.target.parentElement.id != shellOpenIndex) {
                    
                    document.getElementById(shellOpenIndex).querySelector(".delete-links-semi-circle").style.display = "none"
                    document.getElementById(shellOpenIndex).querySelector(".delete-node-semi-circle").style.display = "none"
                    document.getElementById(shellOpenIndex).querySelector(".node-click-circle").style.opacity = "0"
                
                } 

                shellOpenIndex = event.target.parentElement.id

            } else {

                deleteLinksOnNodeButton.style.display = "none"
                deleteNodeButton.style.display = "none"

            }

        })

        
        /*
         * When mousing over a node, make sure to have an outer highlight over it.
         */
        element.addEventListener('mouseover', function handleClick(event) {
            event.preventDefault();
            // Each node has an associated node hover circle which is in the
            // same level as the node object itself. This is 
            // var hover = event.target.parentElement.querySelector(".node-hover-circle")
            hoverHighlightNodeCircle.style.opacity = ".75"
        })
    })
}



/**
 * @name selectNodeTextListener
 * @description When user clicks on the text within the node on 
 *   the screen, apply a selection hover effect and open a
 *   options menu that surround the node.
 * @param nodeText The text on the nodes to apply listener effects to.
 * @param deleteLinksOnNodeButton The option button which appears after clicking a node which allows
 *   the user to delete links surrounding a node.
 * @param deleteNodeButton The option button which appears after clicking a node which allows
 *   the user to delete the node from the visualization.
 * @param clickHighlightNodeCircle The highlighted blue halo circle which appears after clicking a node. 
 *   This is the darker colored blue circle.
 * @param hoverHighlightNodeCircle The highlighted blue halo circle which appears when hovering over a node.
 *   This is the light colored blue circle.
 * @param shellOpenIndex The index of the node on the visualization 
 *   currently active (where the clickHighlightNode is active.)
 */
function selectNodeTextListener(nodeText, deleteLinksOnNodeButton,
                                deleteNodeButton, clickHighlightNodeCircle,
                                hoverHighlightNodeCircle, shellOpenIndex) {
    
    nodeText.forEach(element => { 

        /*
         * On click make sure to open up the click circle and also 
         * the corresponding buttons that as options to be applied 
         * to the node.
         */
        element.addEventListener('click', function handleClick(event) {
            event.preventDefault();
            
            //var deleteLinksOnNode= event.target.parentElement.querySelector(".delete-links-semi-circle")
            //var deleteNode = event.target.parentElement.querySelector(".delete-node-semi-circle")
            //var clickHighlightNode = event.target.parentElement.querySelector(".node-click-circle")

            if(getComputedStyle(deleteLinksOnNodeButton).display == "none") {
                
                deleteLinksOnNodeButton.style.display = "block"
                deleteNodeButton.style.display= "block"
                clickHighlightNodeCircle.style.opacity = ".75"

                if(shellOpenIndex >= 0 && event.target.parentElement.id != shellOpenIndex) {
                    
                    document.getElementById(shellOpenIndex).querySelector(".delete-links-semi-circle").style.display = "none"
                    document.getElementById(shellOpenIndex).querySelector(".delete-node-semi-circle").style.display = "none"
                    document.getElementById(shellOpenIndex).querySelector(".node-click-circle").style.opacity = "0"
                    
                } 

                shellOpenIndex = event.target.parentElement.id

            } else {

                deleteLinksOnNodeButton.style.display = "none"
                deleteNodeButton.style.display = "none"

            }
        })


        /*
         * When mousing over a node, make sure to have an outer highlight over it.
         */
        element.addEventListener('mouseover', function handleClick(event) {
            event.preventDefault();
            //var hover = event.target.parentElement.querySelector(".node-hover-circle")
            hoverHighlightNodeCircle.style.opacity = ".75"
        })
    })
}




/**
 * @name deleteLinksOnNodeButtonListener
 * @description Apply event listen to the delete links button so 
 *   when user clicks on it, delete all links associated with that node.
 * @param deleteLinksOnNodeButton The option button which appears after 
 *   clicking a node which allows the user to delete links surrounding 
 *   a node. This is the same size as the number of nodes in visualization.
 */
function deleteLinksOnNodeButtonListener(deleteLinksOnNodeButton) {
    
    /*
    * Apply event listener to outer circle button for properly 
    * deleting links surrounding a node.
    */
    deleteLinksOnNodeButton.forEach(element => { 
        
        element.addEventListener('click', function handleClick(event) {
            
            event.preventDefault();
            event.stopImmediatePropagation();
            
            // Close all buttons associated with the node.
            element.style.display = "none"
            var right = event.target.parentElement.querySelector(".delete-node-semi-circle")
            right.style.display = "none"

        })
    })
}




/**
 * @name deleteNodeButtonListener
 * @description Apply event listen to the delete node button so 
 *   when user clicks on it, delete the currently selected node 
 *   and the menu associated with the button.
 * @param deleteNodeButton The button to apply effect to.
 */
function deleteNodeButtonListener(deleteNodeButton) {
    
    deleteNodeButton.forEach( element => { 
        
        element.addEventListener('click', function handleClick(event) {
            
            event.preventDefault();
            event.stopImmediatePropagation();
            
             // Close all buttons associated with the node.
            element.style.display = "none"
            var left = event.target.parentElement.querySelector(".delete-links-semi-circle")
            left.style.display = "none"

        })
    })
}



/**
 * @name addHoverCircleEventListener
 * @description When user hovers on the hoverHighlightNodeCircle that
 *   appears when hovering over the node, make sure to change the cursor 
 *   and opacity.
 * @param hoverHighlightNodeCircle The hoverHighlightNodeCircle to 
 *   apply effects to.
 */
function addHoverCircleEventListener(hoverHighlightNodeCircle) {
    
    hoverHighlightNodeCircle.forEach(element =>  {
        
        element.addEventListener("mouseover", function handleHover(event) {
            
            element.style.cursor = "e-resize"
            element.style.opacity = "0.75"
        
        })
    })
}



/**
 * @name addClickCircleEventListener
 * @description When user hovers on the clickHighlightNodeCircle that
 *   appears after clicking a node, make sure to change the cursor.
 * @param clickHighlightNodeCircle The clickHighlightNodeCircle to 
 *   apply effects to.
 */
function addClickCircleEventListener(clickHighlightNodeCircle) {
    
    clickHighlightNodeCircle.forEach(element =>  {
        
        element.addEventListener("mouseover" , function handleHover(event) {
            
            element.style.cursor = "e-resize"
        
        })
    })
}


export {selectNodeListener,
        selectNodeTextListener,
        addClickCircleEventListener,
        addHoverCircleEventListener,
        deleteNodeButtonListener,
        deleteLinksOnNodeButtonListener}