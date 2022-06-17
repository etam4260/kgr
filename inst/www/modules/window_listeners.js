/**
 * @name handleWindowClicksListener
 * @description Handles when window is clicked. If so, then
 *   the currently selected node should be unselected.
 * @param wholeNodes The nodes on the canvas with class whole-node. These are 
 *   the grouped SVG node objects.
 */
function handleWindowClicksListener(wholeNodes) {

    window.addEventListener("click", function(event) {
        
        if(event.target.className.baseVal != "node" && 
           event.target.className.baseVal != "nodetext") {
            
            // Remove highlights and close any buttons.
            wholeNodes.forEach(element => { 

                element.querySelector(
                    ".node-click-circle").style.opacity = "0"

                element.querySelector(
                    ".delete-node-semi-circle").style.display = "none"

                element.querySelector(
                    ".delete-links-semi-circle").style.display = "none"
                
            })
        }

    });
}



/**
 * @name handleWindowResizeListener
 * @description Handles when window is resized. If so, then current
 *   canvas and options menu
 *   should be resized with it.
 * @param svgImage The svg object inside the canvas.
 * @param nodeEditor The node editor customization dropdown.
 * @param editorOpen Is the editor open or not?
 */
function handleWindowResizeListener(svgImage, nodeEditor, editorOpen) {

    window.addEventListener('resize', function(event) {
    
        if (!editorOpen) {
            
            svgImage.setAttribute("height",
                document.documentElement.clientHeight * (19/20))

            svgImage.setAttribute("width",
                window.innerWidth)
        
            nodeEditor.style.height = 
                document.documentElement.clientHeight * (1/20) + "px"

        } else if (editorOpen) {
            
            svgImage.setAttribute("height", window.innerHeight * (4/5))
            svgImage.setAttribute("width", window.innerWidth)
        
            nodeEditor.style.height = 
                document.documentElement.clientHeight * (1/5) + "px"

        }

    });
}


export {handleWindowClicksListener, handleWindowResizeListener}