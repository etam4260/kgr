var delete_ = document.querySelectorAll(".delete")

var delete_image = document.getElementById("delete_image")
var delete_button = document.getElementById("delete_button")
// Need to keep track of selected item.

delete_.forEach(element =>  {
    element.addEventListener("click" , function handleHover(event) {
       if(shellOpenIndex != -1) {
            document.getElementById(shellOpenIndex).remove()
            shellOpenIndex = -1
       }

       // Allow user to do undo option... though
    })
})

delete_image.addEventListener("mouseover", function handleMouseOver(event) {
    delete_button.style.fill = "#ececec"
})


delete_button.addEventListener("mouseover", function handleMouseOut(event) {
    delete_button.style.fill = "#ececec"
})

delete_button.addEventListener("mouseout", function handleMouseOut(event) {
    delete_button.style.fill = "white"
})
