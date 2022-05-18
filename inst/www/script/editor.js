var node_editor = document.querySelector(".node_editor")
var exit_editor = document.querySelector(".exit_editor")

var editor_open = false

node_editor.style.height = document.documentElement.clientHeight * (1/20) + "px"


exit_editor.addEventListener("click", function handleClick(event) {
    node_editor_items = node_editor.querySelectorAll(".titles")
    
    node_editor_items.forEach(element => {
        if(editor_open == true) {
            element.style.display="none"
        } else {
            element.style.display="block"
        }
    });

    node_editor_items = node_editor.querySelectorAll(".entries")
    
    node_editor_items.forEach(element => {
        if(editor_open == true) {
            element.style.display="none"
        } else {
            element.style.display="block"
        }
    });

    if(editor_open == true) {
        exit_editor.innerHTML = "&#8691"
        node_editor.style.height = document.documentElement.clientHeight * (1/20) + "px"
        svg_image.setAttribute("height",  document.documentElement.clientHeight * (19/20))
        editor_open = false
    } else {
        exit_editor.innerHTML = "&#x2715"
        node_editor.style.height = document.documentElement.clientHeight * (1/5) + "px"
        svg_image.setAttribute("height",  document.documentElement.clientHeight * (4/5))
        editor_open = true
    }
})

