
var ws = new WebSocket("ws://localhost:8080")

/**
 * @description Create a websocket connection with an application and 
 *   initialize it listeners. Websocker must be created with
 *   var ws = new WebSocket("ws://localhost:8080")
 * @param  {WebSocket} ws A websocket to add event listeners to.
 * @return {Void}      
 */
function initializeSocket(ws) {
   
    /**
     * @description Startup operations when websocket is opened
     * @type {WebSocket} - the target websocket.
     * @listens ws#open - the websocket and the event.
     */
    ws.addEventListener('open', function (event) {
        ws.send('Pinging ...');
    });


    /**
     * @description When message is received, do some operations.
     * @type {HTMLElement} - the target of the event
     * @listens ws#message - when message is received by socket.
     */
    ws.addEventListener('message', function (event) {
        /**
         * Depending on messaged received, operations are mapped 
         * from R code to Javascript code.
         * 
         * add_node(name, ...)
         * 
         * delete_node(name, ...)
         * 
         * 
         * ## Some common graph operations...
         * 
         * 
         * 
         *
         */
        console.log('Receiving... ', event.data);
    });


    return(ws)
}


/**
 * @description Send a message to the server using a websocket.
 * @param {Websocker} ws The websocket to use.
 * @param  {String} message The message to send.
 * @return {Void}      
 */
function sendMessage(ws, message) {
    ws.send(message)
}


export {initializeSocket, 
        sendMessage}