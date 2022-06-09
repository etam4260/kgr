/**
 * @name handleWindowClicks
 * @description Handles when window is clicked. If so, then current selected node
 *   should be unselected.
 * @param nodes The nodes on the canvas subject to these rules.
 */
function handleWindowClicks(nodes) {

    window.addEventListener("click", function(event) {
        if(event.target.className.baseVal != "node" && 
           event.target.className.baseVal != "nodetext") {
            
            // Remove highlights and close any buttons.
            nodes.forEach(element => { 
                element.querySelector(".node-click-circle").style.opacity = "0"
                element.querySelector(".delete-node-semi-circle").style.display = "none"
                element.querySelector(".delete-links-semi-circle").style.display = "none"
                
            })
        }
    });
}


/**
 * @name handleWindowResize
 * @description Handles when window is resized. If so, then current canvas and options menu
 *   should be resized with it.
 * @param svg_image The svg object inside the canvas.
 * @param node_editor The node editor customization dropdown.
 */
function handleWindowResize(svg_image, node_editor) {

    window.addEventListener('resize', function(event) {
    
        if (!editor_open) {
            
            svg_image.setAttribute("height",  document.documentElement.clientHeight * (19/20))
            svg_image.setAttribute("width", window.innerWidth)
        
            node_editor.style.height = document.documentElement.clientHeight * (1/20) + "px"

        } else if (editor_open) {
            
            svg_image.setAttribute("height", window.innerHeight * (4/5))
            svg_image.setAttribute("width", window.innerWidth)
        
            node_editor.style.height = document.documentElement.clientHeight * (1/5) + "px"

        }
    });
}


export {handleWindowClicks, handleWindowResize}