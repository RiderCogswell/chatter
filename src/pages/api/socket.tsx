import { Server } from 'socket.io';
import messageHandler from '../../utils/sockets/messageHandler';

export default function SocketHandler(req: any, res: any): void {
  if (res.socket.server.io) {
    console.log('Already set up');
    res.end();
    return;
  } 

  const io = new Server(res.socket.server); // create new Server
  res.socket.server.io = io; // set io equal to socket io

  const onConnection = (socket: any) => {
    messageHandler(io, socket); // send server and socket
  };

  io.on('connection', onConnection);

  console.log('Setting up socket');
  res.end(); 
}