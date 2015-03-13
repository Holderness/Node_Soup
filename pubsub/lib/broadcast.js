
var axon = require('axon');
var socket = axon.socket('pub');

socket.bind(8001);

/**
* Send a badge to the publish socket
*/


// This code does the same as the code below.
// exports.send = socket.send;

exports.send = function(badge) {
  socket.send(badge);
};

