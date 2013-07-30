var app = require('express')(),
    io = require('socket.io').listen(app.listen(3000));

app.get('/', function (req, res) {
  res.sendfile('./index.html');
});

function sendHello () {
  io.sockets.emit('notification', {title: 'hi there', message: new Date()});
  setTimeout(sendHello, 3000);
}
sendHello()
