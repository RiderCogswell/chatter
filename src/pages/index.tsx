import io from 'socket.io-client';
import { useState, useEffect } from 'react';

let socket;

type Message = {
  author: string;
  message: string;
};

export default function Home() {
  const [username, setUsername] = useState('');
  const [chosenUsername, setChosenUsername] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<Message>>([]);

  useEffect(() => {
    socketInitializer(); // fetch api/socket logic
  }, []);

  const socketInitializer = async () => {
    // call it because we do not need anything else from it
    await fetch('/api/socket');

    socket = io();

    socket.on('newIncomingMessage', (msg) => {
      setMessages((currentMsg) => [
        ...currentMsg, // doesnt affect other msgs
        { author: msg.author, message: msg.message },
      ]);
      console.log(messages);
    })
  }
}