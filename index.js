var app = require('express')(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server);

server.listen(3000);

app.get('/', function (req, res) {
  res.sendfile('./index.html');
});

function sendHello () {
  io.sockets.emit('notification', {title: 'hi there', message: new Date()});
  setTimeout(sendHello, 3000);
}
sendHello()
