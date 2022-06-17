// Initial X and Y position of nodes going to be dragged.
var initialX = new Array(numNodes).fill(0);
var initialY =  new Array(num_nodes).fill(0);

// The offsets of nodes given their X and Y
var xOffset = new Array(num_nodes).fill(0);
var yOffset = new Array(num_nodes).fill(0);

/**
 * @name initializeSizeOfSVG
 * @description Initialize the size of the canvas on which the nodes will
 *   be moving on.
 * @param svgImage The svg object inside the canvas(canvas).
 */
function initializeSizeOfSVG(svgImage) {
    
    svgImage.setAttribute(
        "width", document.documentElement.clientWidth)
    
    svgImage.setAttribute(
        "height", document.documentElement.clientHeight * (19/20))

}


/**
 * @name initializeDragOfCanvas
 * @description Initialize the dragging behavior used by the canvas. 
 * @param canvas The html div element containing the svg object.
 */
function initializeDragOfCanvas(canvas) {
    
    /**
     * @description Listen to touchstart event
     * @type {canvas} - the target of the event
     * @listens canvas#touchstart- the namespace and name of the event
     */
    canvas.addEventListener("touchstart", dragStart, false);

    canvas.addEventListener("touchend", dragEnd, false);

    canvas.addEventListener("touchmove", drag, false);


    canvas.addEventListener("mousedown", dragStart, false);

    canvas.addEventListener("mouseup", dragEnd, false);

    canvas.addEventListener("mousemove", drag, false);

    dragItem = null;
    active = false;
    index = -1;
    
    // Current X and Y position of node being dragged.
    var currentX;
    var currentY;


    /**
     * @name dragStart
     * @description Listens to the drag starting event of picked up node.
     * @param {event} e The event target.   
     */
    function dragStart(e) {
    
        if(e.target.className.baseVal == "node" ||
           e.target.className.baseVal == "nodetext") {
    
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

        // Get elements of the node and make sure to tranlate them too...
        var deleteLinksOnNodeButton = el.parentElement.querySelector(
            ".delete-links-semi-circle")
        
        var deleteLinksOnNode = el.parentElement.querySelector(
            ".delete-node-semi-circle")

        var nodeText = el.parentElement.querySelector(
            ".node-text")

        var node = el.parentElement.querySelector(
            ".node")

        var edge = el.parentElement.querySelector(
            ".edge")

        var hoverHighlightNodeCircle =  el.parentElement.querySelector(
            ".node-hover-circle")

        var clickHighlightNodeCircle  = el.parentElement.querySelector(
            ".node-click-circle")


        deleteLinksOnNodeButton.style.transform = 
            "translate3d(" + xPos + "px, " + yPos + "px, 0)";
        
        deleteLinksOnNode.style.transform = 
            "translate3d(" + xPos + "px, " + yPos + "px, 0)";      
        

        nodeText.style.transform = 
            "translate3d(" + xPos + "px, " + yPos + "px, 0)";
        
        node.style.transform = 
            "translate3d(" + xPos + "px, " + yPos + "px, 0)";
        

        edge.style.transform = 
            "translate3d(" + xPos + "px, " + yPos + "px, 0)";
        

        hoverHighlightNodeCircle.style.transform = 
            "translate3d(" + xPos + "px, " + yPos + "px, 0)";

        clickHighlightNodeCircle .style.transform = 
            "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }


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
}


export {initializeSizeOfSVG, initializeDragOfCanvas}