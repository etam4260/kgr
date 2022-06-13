/**
 * document_handler.js
 * 
 * File contains functions related to handling document related events. 
 * 
 */


/**
 * @name clearEffectsOnDocumentMouseover
 * @description When user is hovering over the main document
 *   make sure the hovering effect on each node is 
 *   effectively removed.
 * @param document The document to apply effects
 * @param hoverHighlightNodeCircle The hover circle objects to hide.
 */
function clearEffectsOnDocumentMouseoverListener(document,
                                                 hoverHighlightNodeCircle) {
    
    
    document.addEventListener("mouseover", function handle(event) {
        
        // If user is no longer hovering over the node, its text, or
        // other extremities on the node, make sure hover effect is off.

        if (event.target.className.baseVal != "node-hover-circle" &&
            event.target.className.baseVal != "node-text" &&
            event.target.className.baseVal != "node") {
            
            hoverHighlightNodeCircle.forEach(element => {

                element.style.opacity = 0

            });
        }
    })
}



/**
 * @name addHoverEffectForAddAndDelete
 * @description When user is hovering over the delete and add buttons
 *   on the screen, make sure apply an effect.
 * @param document The document to apply effects.
 * @param addNodeButton The addNodeButton located at the top of the canvas.
 * @param deleteButton The deleteButton located at the top of the canvas.
 */
function addHoverEffectForAddAndDelete(document, addNodeButton, deleteButton) {

    document.addEventListener("mouseover", function handle(event) {
            
        // If mousing over the delete button or delete image, make sure to 
        // apply a hover effect.
        if (event.target.className.baseVal == "add_node" ||
            event.target.className.baseVal == "add_node_text") {
            
            addNodeButton.style.fill = "#d6d6d6"

        }

        // If mousing over the add node button or the add node image,
        // make sure to apply a hover effect.
        if (event.target.className.baseVal == "delete") {
            
            deleteButton.style.fill = "#d6d6d6"
        
        }

    })
}

export {clearEffectsOnDocumentMouseoverListener,
        addHoverEffectForAddAndDelete}