const socket = io.connect('http://localhost:4000');

const message = document.getElementById('message');
handle  = document.getElementById('handle');
btn = document.getElementById('send');
output = document.getElementById('output');
feedback = document.getElementById('feedback');

// emitting event

btn.addEventListener('click', ()=> {
    socket.emit('chat',{
        message : message.value,
        handle:  handle.value
    });
});


message.addEventListener('keypress',()=>{

    socket.emit('typing',handle.value);

});



// listening
socket.on('chat',(data)=>{
    feedback.innerHTML ="";
    output.innerHTML += '<p><strong>'+data.handle +':</strong>'+data.message + '</p>';

});


socket.on('typing',(info)=>{
    feedback.innerHTML = '<p><em>'+ info + ' is typing a message...</em></p>';
});