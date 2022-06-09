/**
 * @name clearEffectsOnDocumentMouseover
 * @description When user is hovering over the main document
 *   make sure the hovering effect on each node is 
 *   effectively removed.
 * @param document The document to apply effects
 */
function clearEffectsOnDocumentMouseoverListener(document) {
    document.addEventListener("mouseover", function handle(event) {
        
        // If user is no longer hovering over the node, its text, or
        // other extremities on the node, make sure hover effect is off.
        if (event.target.className.baseVal != "node-hover-circle" &&
            event.target.className.baseVal != "nodetext" &&
            event.target.className.baseVal != "node") {
            
            hovercircles.forEach(element => {
                element.style.opacity = 0
            });
        }
    })
}


/**
 * @name addHoverEffectForAddAndDelete
 * @description When user is hovering over the delete and add buttons
 *   on the screen, make sure apply an effect.
 * @param document The document to apply effects
 */
function addHoverEffectForAddAndDelete(document) {
    document.addEventListener("mouseover", function handle(event) {
            
        // If mousing over the delete button or delete image, make sure to 
        // apply a hover effect.
        if (event.target.className.baseVal == "add_node" ||
            event.target.className.baseVal == "add_node_text") {
            add_node.style.fill = "#d6d6d6"
        }

        // If mousing over the add node button or the add node image,
        // make sure to apply a hover effect.
        if (event.target.className.baseVal == "delete") {
            add_node.style.fill = "#d6d6d6"
        }

    })
}

export {clearEffectsOnDocumentMouseoverListener,
        addHoverEffectForAddAndDelete}