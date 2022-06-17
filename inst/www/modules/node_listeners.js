/**
 * @name selectNodeListener
 * @description When user clicks on a node on the screen, apply 
 *   a selection hover effect and open a options menu that surrounds
 *   the node.
 * @param wholeNode The whole nodes to apply listener effects to.
 * @param shellOpenIndex The index of the node on the visualization 
 *   currently active (where the clickHighlightNode is active.)
 */
function selectNodeListener(wholeNode, 
                            shellOpenIndex) {
    

    wholeNode.forEach(element => { 
        
        /*
         * On click make sure to open up the click circle and also 
         * the corresponding buttons that as options to be applied 
         * to the node.
         */

        /* 
        * @param deleteLinksOnNodeButton The option button which appears after 
        *   clicking a node which allows
        *   the user to delete links surrounding a node.
        * @param deleteNodeButton The option button which appears after clicking a 
        *   node which allows
        *   the user to delete the node from the visualization.
        * @param clickHighlightNodeCircle The highlighted blue halo circle which 
        *   appears after clicking a node. 
        *   This is the darker colored blue circle.
        * @param hoverHighlightNodeCircle The highlighted blue halo circle which 
        *   appears when hovering over a node.
        *  This is the light colored blue circle.
        */

        deleteLinksOnNodeButton = element.querySelector(".delete-links-semi-circle")
        deleteNodeButton = element.querySelector(".delete-node-semi-circle")
        clickHighlightNodeCircle = element.querySelector(".node-click-circle")
        hoverHighlightNodeCircle = element.querySelector(".node-hover-circle")

        element.addEventListener('click', function handleClick(event) {
            event.preventDefault();
            
            if(getComputedStyle(deleteLinksOnNodeButton).display == "none") {

                deleteLinksOnNodeButton.style.display = "block"
                deleteNodeButton.style.display = "block"
                clickHighlightNodeCircle.style.opacity = ".75"
                
                // Grab the currently active circle and remove the click circle.
                if(shellOpenIndex >= 0 && event.target.parentElement.id != 
                    shellOpenIndex) {
                    
                    document.getElementById(shellOpenIndex).querySelector(
                        ".delete-links-semi-circle").style.display = "none"

                    document.getElementById(shellOpenIndex).querySelector(
                        ".delete-node-semi-circle").style.display = "none"

                    document.getElementById(shellOpenIndex).querySelector(
                        ".node-click-circle").style.opacity = "0"
                
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
            // var hover = event.target.parentElement.querySelector(
            //".node-hover-circle")

            hoverHighlightNodeCircle.style.opacity = ".75"
        })
    })
}



/**
 * @name selectNodeTextListener
 * @description When user clicks on the text within the node on 
 *   the screen, apply a selection hover effect and open a
 *   options menu that surround the node.
 * @param wholeNode The whole nodes to apply listener effects to.
 * @param shellOpenIndex The index of the node on the visualization 
 *   currently active (where the clickHighlightNode is active.)
 */
function selectNodeTextListener(wholeNode, 
                                shellOpenIndex) {
    
    nodeText = wholeNode.querySelectorAll(".node-text")

    nodeText.forEach(element => {


        /* 
        * @param deleteLinksOnNodeButton The option button which appears after 
        *   clicking a node which allows
        *   the user to delete links surrounding a node.
        * @param deleteNodeButton The option button which appears after clicking a 
        *   node which allows
        *   the user to delete the node from the visualization.
        * @param clickHighlightNodeCircle The highlighted blue halo circle which 
        *   appears after clicking a node. 
        *   This is the darker colored blue circle.
        * @param hoverHighlightNodeCircle The highlighted blue halo circle which 
        *   appears when hovering over a node.
        *  This is the light colored blue circle.
        */

        deleteLinksOnNodeButton = element.parentElement.querySelector(
            ".delete-links-semi-circle")

        deleteNodeButton = element.parentElement.querySelector(
            ".delete-node-semi-circle")

        clickHighlightNodeCircle = element.parentElement.querySelector(
            ".node-click-circle")

        hoverHighlightNodeCircle = element.parentElement.querySelector(
            ".node-hover-circle")

        /*
         * On click make sure to open up the click circle and also 
         * the corresponding buttons that as options to be applied 
         * to the node.
         */
        element.addEventListener('click', function handleClick(event) {
            event.preventDefault();
            
            //var deleteLinksOnNode= event.target.parentElement.querySelector(
                //".delete-links-semi-circle")
            //var deleteNode = event.target.parentElement.querySelector(
                //".delete-node-semi-circle")
            //var clickHighlightNode = event.target.parentElement.querySelector(
                //".node-click-circle")

            if(getComputedStyle(deleteLinksOnNodeButton).display == "none") {
                
                deleteLinksOnNodeButton.style.display = "block"
                deleteNodeButton.style.display= "block"
                clickHighlightNodeCircle.style.opacity = ".75"

                if(shellOpenIndex >= 0 && event.target.parentElement.id != 
                    shellOpenIndex) {
                    
                    document.getElementById(shellOpenIndex).querySelector(
                        ".delete-links-semi-circle").style.display = "none"

                    document.getElementById(shellOpenIndex).querySelector(
                        ".delete-node-semi-circle").style.display = "none"

                    document.getElementById(shellOpenIndex).querySelector(
                        ".node-click-circle").style.opacity = "0"
                    
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
            //var hover = 
            //event.target.parentElement.querySelector(".node-hover-circle")
            hoverHighlightNodeCircle.style.opacity = ".75"
        })
    })
}




/**
 * @name deleteLinksOnNodeCircleButtonListener
 * @description Apply event listen to the delete links button so 
 *   when user clicks on it, delete all links associated with that node.
 * @param deleteLinksOnNodeButton The option button which appears after 
 *   clicking a node which allows the user to delete links surrounding 
 *   a node. This is the same size as the number of nodes in visualization.
 */
function deleteLinksOnNodeCircleButtonListener(deleteLinksOnNodeCircleButton) {
    
    /*
    * Apply event listener to outer circle button for properly 
    * deleting links surrounding a node.
    */
    deleteLinksOnNodeCircleButton.forEach(element => { 
        
        element.addEventListener('click', function handleClick(event) {
            
            event.preventDefault();
            event.stopImmediatePropagation();
            
            // Close all buttons associated with the node.
            element.style.display = "none"

            var deleteNodeCircleButton = event.target.parentElement.querySelector(
                ".delete-node-semi-circle")

            deleteNodeCircleButton.style.display = "none"

        })
    })
}




/**
 * @name deleteNodeCircleButtonListener
 * @description Apply event listen to the delete node button so 
 *   when user clicks on it, delete the currently selected node 
 *   and close the menu associated with the button.
 * @param deleteNodeButton The button to apply effect to.
 */
function deleteNodeCircleButtonListener(deleteNodeCircleButton) {
    
    deleteNodeCircleButton.forEach( element => { 
        
        element.addEventListener('click', function handleClick(event) {
            
            event.preventDefault();
            event.stopImmediatePropagation();
            
             // Close all buttons associated with the node.
            element.style.display = "none"

            var deleteNodeLinksButton = event.target.parentElement.querySelector(
                ".delete-links-semi-circle")

            deleteNodeLinksButton.style.display = "none"

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
        deleteNodeCircleButtonListener,
        deleteLinksOnNodeCircleButtonListener}