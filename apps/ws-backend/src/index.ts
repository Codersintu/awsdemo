
import {client} from '@repo/db/client';
import { WebSocketServer } from 'ws';

const port = 8080;
const server = new WebSocketServer({ port });

server.on('connection', (ws) => {
  console.log('Client connected');
    ws.on('message', (message) => { 
    console.log(`Received message: ${message}`);
    const data=JSON.parse(message.toString());
    const {username,password}=data;
    const response=client.user.create({ 
        data:{
            username,
            password
        }
    });
    ws.send(JSON.stringify({
        message:'User created successfully',
        data:response
    }));
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });   
});

console.log(`WebSocket server is running at ws://localhost:${port}`);