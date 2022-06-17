/**
 * @name addDeleteButtonClickEvent
 * @description Add event listener for the delete button located at the 
 *   top of the canvas. This will delete any currently select node or
 *   edge in the canvas.
 * @param deleteNodeButton The delete button to apply event listener to.
 */
function addDeleteButtonClickEvent(deleteNodeButton,
                                   shellOpenIndex) {
    
    deleteNodeButton.forEach(element =>  {
        
        element.addEventListener("click" , function handleHover(event) {
            
            /*
             * If delete button is clicked, get the index of the element that is 
             * currently open and delete it. If no element is open right now
             * then do nothing.
             */

            if (shellOpenIndex != -1) {
                    document.getElementById(shellOpenIndex).remove()
                    shellOpenIndex = -1
            }

            
        })
    })
}

export {addDeleteButtonClickEvent}
