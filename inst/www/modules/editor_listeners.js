/**
 * @name initializeEditorSize
 * @description create editor in the document with specified size. 
 * @param document The document to add the editor to.
 * @param nodeEditorPopup The node editor popup object.
 */
function initializeEditorSize(document, nodeEditorPopup) {
    
    nodeEditorPopup.style.height = 
        document.documentElement.clientHeight * (1/20) + "px"
    
}



/**
 * @name exitNodeEditorButtonListener
 * @description when the exit editor button is clicked, make sure 
 *   to close the editor.
 * @param exitNodeEditorButton The button to apply listener to 
 *   close the editor.
 * @param isNodeEditorOpen Determine if the editor is open or not.
 */
function exitNodeEditorButtonListener(exitNodeEditorButton,
                                      nodeEditorTitles,
                                      nodeEditorEntries,
                                      isNodeEditorOpen,
                                      svgImage,
                                      nodeEditor) {
    
    exitNodeEditorButton.addEventListener("click", function handleClick() {
  
        nodeEditorTitles.forEach(element => {
            
            if (isNodeEditorOpen) {
                element.style.display = "none"
            } else { 
                element.style.display = "block"
            }

        });
    
        nodeEditorEntries.forEach(element => {
            
            if (editor_open) {
                element.style.display = "none"
            } else {
                element.style.display = "block"
            }

        });
    

        if (isNodeEditorOpen) {
            
            exitNodeEditorButton.innerHTML = "&#8691"

            nodeEditor.style.height = 
                document.documentElement.clientHeight * (1/20) + "px"

            svgImage.setAttribute("height",  
                document.documentElement.clientHeight * (19/20))

            isNodeEditorOpen = false
        
        } else {
        
            exitNodeEditorButton.innerHTML = "&#x2715"
            
            nodeEditor.style.height = 
                document.documentElement.clientHeight * (1/5) + "px"
            
            svgImage.setAttribute("height",
                                  document.documentElement.clientHeight * (4/5))
            
            isNodeEditorOpen = true
        
        }
    })
}

export {initializeEditorSize,
        exitNodeEditorButtonListener
       }
