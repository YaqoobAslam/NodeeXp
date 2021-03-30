
//Node server which will handle socket io connections.
const io = require('socket.io')(8000)
const users = {};

io.on('connection', socket =>{
    socket.on('new-user-joined', name =>{
    console.log(name) 
    //Pushing new user in user object.
    users[socket.id] = name;
   
    //Broadcast event show his/her name...user has joined.
    socket.broadcast.emit('user-joined', name)
  })
   //If someone try to send message would handle here and send to all.
    socket.on('send', message =>{
    socket.broadcast.emit('receive', {message: message, name: users[socket.id]})
  })
})
