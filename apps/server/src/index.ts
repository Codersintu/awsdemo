import express from 'express';
import {client} from '@repo/db/client';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/data', (req, res) => {
 const {username,password}=req.body;

 const response=client.user.create({
  data:{
    username,
    password
  }
 });
 return res.status(201).json({
    message:'User created successfully',
    data:response
 });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});