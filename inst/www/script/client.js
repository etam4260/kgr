// Create connection to localhost: 8080
var ws = new WebSocket("ws://localhost:8080")
var buffer = []

ws.addEventListener('open', function (event) {
    ws.send('Hello Server!');
    console.log("Sent message to server.")
});


ws.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
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
 * @return {Array}  returns an array of strings which the server has sent.
 */
function getMessages() {
    return(buffer)
}