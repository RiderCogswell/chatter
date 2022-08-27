export default (io, socket) => {
  const createdMessage = (msg) => {
    socket.broadcast.emit('newIncomingMessage', msg) // name, content
  };

  socket.on('createdMessage', createdMessage)
}