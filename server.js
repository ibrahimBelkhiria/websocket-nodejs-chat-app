const express = require('express');
const socket = require('socket.io');
const app= express();
app.use(express.static('public'));

const server = app.listen(process.env.PORT || 4000,()=> console.log('listening to port 4000'));

// setup socket 

const io = socket(server);

io.on('connection',(socket)=>{

    console.log('connection established',socket.id);

    socket.on('chat',(data)=>{
        io.sockets.emit('chat',data);
    });

    socket.on('typing',(handle)=>{
        socket.broadcast.emit('typing',handle);

    });

});