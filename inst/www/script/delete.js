var delete_ = document.querySelectorAll(".delete")

/**
 * @name addDeleteButtonClickEvent
 * @description When user is hovering over the main document
 *   make sure the hovering effect on each node is 
 *   effectively removed.
 * @param delete_ The document to apply effects to.
 */
function addDeleteButtonClickEvent(delete_) {
    delete_.forEach(element =>  {
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

            // Allow user to do undo option... though
        })
    })
}

export {addDeleteButtonClickEvent}
