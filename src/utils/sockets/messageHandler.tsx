export default (io: any, socket: { broadcast: { emit: (arg0: string, arg1: any) => void; }; on: (arg0: string, arg1: (msg: any) => void) => void; }) => {
  const createdMessage = (msg: any) => {
    socket.broadcast.emit('newIncomingMessage', msg) // name, content
  };

  socket.on('createdMessage', createdMessage)
}