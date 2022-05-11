
var dragItem = document.querySelector(".node")
var container = document.querySelector(".canvas");
var svg_image = document.querySelector(".svg_image")


svg_image.setAttribute("width", document.documentElement.clientWidth)
svg_image.setAttribute("height",  document.documentElement.clientHeight)

// Is the node currently active
var active = false;

// Current X and Y position of node being dragged.
var currentX;
var currentY;

// Initial X and Y position of node going to be dragged.
var initialX = new Array(num_nodes).fill(0);
var initialY =  new Array(num_nodes).fill(0);

// The offset of X and Y
var xOffset = new Array(num_nodes).fill(0);
var yOffset = new Array(num_nodes).fill(0);

var index;
var selected_item = null;

/**
 * Listen to touchstart event
 *
 * @type {container} - the target of the event
 * @listens document#touchstart- the namespace and name of the event
 */
container.addEventListener("touchstart", dragStart, false);

container.addEventListener("touchend", dragEnd, false);

container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);

container.addEventListener("mouseup", dragEnd, false);

container.addEventListener("mousemove", drag, false);




/**
 * Send a message to the server.
 * @param  {String} message The message to send.
 * @return {Void}      
 */
function dragEnd(e) {
    initialX[index] = currentX;
    initialY[index] = currentY;

    active = false;
    dragItem.style.cursor = "grab"
}

/**
 * Send a message to the server.
 * @param  {String} event The event
 * @return {Void}      
 */
function dragStart(e) {
   if(e.target.className.baseVal == "node" || e.target.className.baseVal == "nodetext") {
  
    dragItem = e.target
    active = true;

    index = e.target.parentElement.id
   }
  
    if (e.type === "touchstart") {
        initialX[index] = e.touches[0].clientX - xOffset[index];
        initialY[index] = e.touches[0].clientY - yOffset[index];
    }  else {
        initialX[index] = e.clientX - xOffset[index];
        initialY[index] = e.clientY - yOffset[index];
    }
}


/**
 * Send a message to the server.
 * @param  {String} message The message to send.
 * @return {Void}      
 */
function drag(e) {
    if (active) {
  
        e.preventDefault()
      
        if (e.type === "touchmove") {
            currentX = e.touches[0].clientX - initialX[index];
            currentY = e.touches[0].clientY - initialY[index];
        } else {
            currentX = e.clientX - initialX[index];
            currentY = e.clientY - initialY[index];
        }

        xOffset[index] = currentX;
        yOffset[index] = currentY;
 
        setTranslate(currentX, currentY, dragItem);
    }
}


/**
 * Send a message to the server.
 * @param  {String} message The message to send.
 * @return {Void}      
 */
function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  //Translate also the shell and text

  var left = el.parentElement.querySelector(".delete-links-semi-circle")
  var right = el.parentElement.querySelector(".delete-node-semi-circle")
  var text = el.parentElement.querySelector(".nodetext")
  var node = el.parentElement.querySelector(".node")
  var edge = el.parentElement.querySelector(".edge")
  var hover_circle =  el.parentElement.querySelector(".node-hover-circle")
  var hover_click  = el.parentElement.querySelector(".node-click-circle")


  left.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  right.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";      
  text.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  node.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  edge.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  hover_circle.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  hover_click.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}



// Handler to close things when they are opened.
window.addEventListener("click", function(event) {
    console.log(event.target.className.baseVal)
    
    // If base element... make sure to remove highlight
    console.log(event.target.className.baseVal)
    if(event.target.className.baseVal != "node" && event.target.className.baseVal != "nodetext") {
        nodes = document.querySelectorAll("g")
 
        nodes.forEach(element => { 
            console.log(element)
            console.log(element.querySelector(".node-click-circle"))
            element.querySelector(".node-click-circle").style.opacity = "0"
            element.querySelector(".delete-node-semi-circle").style.display = "none"
            element.querySelector(".delete-links-semi-circle").style.display = "none"
            
        })
    }
});