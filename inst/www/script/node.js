var nodes = document.querySelectorAll(".node")
    
var delete_links = document.querySelectorAll(".delete-links-semi-circle")
var delete_node = document.querySelectorAll(".delete-node-semi-circle")
    
var nodetext = document.querySelectorAll(".nodetext")
var hovercircles = document.querySelectorAll(".node-hover-circle")
var clickcircles = document.querySelectorAll(".node-click-circle")

var num_nodes = 3

var shellOpenIndex = -1;

nodes.forEach( element => { 
    element.addEventListener('click', function handleClick(event) {
        event.preventDefault();
        
        var delete_link = event.target.parentElement.querySelector(".delete-links-semi-circle")
        var delete_node = event.target.parentElement.querySelector(".delete-node-semi-circle")
        var highlight = event.target.parentElement.querySelector(".node-click-circle")

        if(getComputedStyle(delete_link).display == "none") {
            delete_link.style.display = "block"
            delete_node.style.display= "block"
            highlight.style.opacity = ".75"

           
            if(shellOpenIndex >= 0 && event.target.parentElement.id != shellOpenIndex) {
                document.getElementById(shellOpenIndex).querySelector(".delete-links-semi-circle").style.display = "none"
                document.getElementById(shellOpenIndex).querySelector(".delete-node-semi-circle").style.display = "none"
                document.getElementById(shellOpenIndex).querySelector(".node-click-circle").style.opacity = "0"
                shellOpenIndex = event.target.parentElement.id
            } 

            shellOpenIndex = event.target.parentElement.id
        } else {
            delete_link.style.display = "none"
            delete_node.style.display = "none"
        }

       
    })

    element.addEventListener('mouseover', function handleClick(event) {
        event.preventDefault();
        
        var hover = event.target.parentElement.querySelector(".node-hover-circle")
        console.log(hover)
        hover.style.opacity = ".75"


    })

})

nodetext.forEach( element => { 
    element.addEventListener('click', function handleClick(event) {
        event.preventDefault();
        
        var delete_link = event.target.parentElement.querySelector(".delete-links-semi-circle")
        var delete_node = event.target.parentElement.querySelector(".delete-node-semi-circle")
        var highlight = event.target.parentElement.querySelector(".node-click-circle")

        if(getComputedStyle(delete_link).display == "none") {
            delete_link.style.display = "block"
            delete_node.style.display= "block"
            highlight.style.opacity = ".75"

           
            if(shellOpenIndex >= 0 && event.target.parentElement.id != shellOpenIndex) {
                document.getElementById(shellOpenIndex).querySelector(".delete-links-semi-circle").style.display = "none"
                document.getElementById(shellOpenIndex).querySelector(".delete-node-semi-circle").style.display = "none"
                document.getElementById(shellOpenIndex).querySelector(".node-click-circle").style.opacity = "0"
                shellOpenIndex = event.target.parentElement.id
            } 

            shellOpenIndex = event.target.parentElement.id
        } else {
            delete_link.style.display = "none"
            delete_node.style.display = "none"
        }

       
    })

    element.addEventListener('mouseover', function handleClick(event) {
        event.preventDefault();
        
        var hover = event.target.parentElement.querySelector(".node-hover-circle")
        
        hover.style.opacity = ".75"

    })
})


delete_links.forEach( element => { 
    element.addEventListener('click', function handleClick(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        element.style.display = "none"

        var right = event.target.parentElement.querySelector(".delete-node-semi-circle")
        right.style.display = "none"

    })
})

delete_node.forEach( element => { 
    element.addEventListener('click', function handleClick(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        element.style.display = "none"

        var left = event.target.parentElement.querySelector(".delete-links-semi-circle")
        left.style.display = "none"

    })
})

hovercircles.forEach(element =>  {
    element.addEventListener("mouseover" , function handleHover(event) {
        element.style.cursor = "e-resize"
        element.style.opacity = "0.75"
    })
})

clickcircles.forEach(element =>  {
    element.addEventListener("mouseover" , function handleHover(event) {
        element.style.cursor = "e-resize"
       
    })
})



/**
 * Send a message to the server.
 * @param  {String} message The message to send.
 * @return {Void}      
 */
 document.addEventListener("mouseover", function handle(event) {
    
    if(event.target.className.baseVal != "node-hover-circle" && event.target.className.baseVal != "nodetext" && event.target.className.baseVal != "node") {
        
        hovercircles.forEach(element => {
            element.style.opacity = 0
           
        });
    }
})