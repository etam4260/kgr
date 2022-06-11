
var dragItem = document.querySelector(".node")
var container = document.querySelector(".canvas");
var svg_image = document.querySelector(".svg_image")

// svg_image.setAttribute("width", document.documentElement.clientWidth)
// svg_image.setAttribute("height",  document.documentElement.clientHeight * (19/20))

// Is the node currently active?
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



/**
 * @name initializeSizeOfCanvas
 * @description Initialize the size of the canvas on which the nodes will
 *   be moving on.
 * @param svg_image The svg object inside the container(canvas).
 */
function initializeSizeOfCanvas(svg_image) {
    svg_image.setAttribute("width", document.documentElement.clientWidth)
    svg_image.setAttribute("height",  document.documentElement.clientHeight * (19/20))
}


/**
 * @name initializeDragOfCanvas
 * @description Initialize the dragging behavior used by the canvas. 
 * @param container The html div element containing the svg object.
 */
function initializeDragOfCanvas(container) {
    
    /**
     * @description Listen to touchstart event
     * @type {container} - the target of the event
     * @listens container#dragStart- the namespace and name of the event
     */
    container.addEventListener("touchstart", dragStart, false);




    container.addEventListener("touchend", dragEnd, false);

    container.addEventListener("touchmove", drag, false);

    container.addEventListener("mousedown", dragStart, false);

    container.addEventListener("mouseup", dragEnd, false);

    container.addEventListener("mousemove", drag, false);


    /**
     * @name dragEnd
     * @description Listens to the drag ending event of picked up node.
     * @param {event} e The event target.
     */
    function dragEnd(e) {
        initialX[index] = currentX;
        initialY[index] = currentY;

        active = false;
        dragItem.style.cursor = "grab"
    }


    /**
     * @name dragEnd 
     * @description Listens to the drag starting event of picked up node.
     * @param {event} e The event target.   
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
     * @name drag
     * @description Listens the ongoing drag event of picked up node.
     * @param {event} e The event target.   
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
     * @name setTranslate
     * @description Tranlates the node across the canvas into the new position.
     * @param {Number} xPos The current X position of the object.
     * @param {Number} yPos The current Y position of the object.
     * @param {Node} el The current object to translate.
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
}






export {initializeSizeOfCanvas, initializeDragOfCanvas}