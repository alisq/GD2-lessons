const express = require('express')
const app = express()

const http = require('http').Server(app);
const io = require('socket.io')(http);


app.use(express.static('public')); //load files from this route

const port = 3333;

io.on('connection', (socket) => {

	//socket.emit("welcome","welcome to your first socket.io application!")

	socket.on('button clicked', (buttonSize) => {
		io.emit('clicked',buttonSize)
	})


	socket.on('chat', (data) => {
		io.emit('new message',data)
	})



});



http.listen(port, () => {
  console.log('listening on *:3333');
});

