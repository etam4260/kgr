
var ws = new WebSocket("ws://localhost:8080")
var buffer = []

/**
 * Operations on website socket connection open event.
 * @type {WebSocket} - the target websocket.
 * @listens ws#open - the websocket and the event.
 */

ws.addEventListener('open', function (event) {
    ws.send('Hello Server!');
    console.log("Sent message to server.")
});

/**
 * Listen to mousedown event
 *
 * @type {HTMLElement} - the target of the event
 * @listens document#mousedown - the namespace and name of the event
 */
ws.addEventListener('message', function (event) {
    // print message from server to console
    console.log('Message from server ', event.data);
    
    // push data to the buffer
    buffer.push(event.data)
});


/**
 * Send a message to the server.
 * @param  {String} message The message to send.
 * @return {Void}      
 */
function sendMessage(message) {
    ws.send(message)
}

/**
 * Get the buffer of messages returned by the server
 * @return {Array}  returns an array of 
 *   strings which the server has sent to this application.
 */
function getMessages() {
    return(buffer)
}