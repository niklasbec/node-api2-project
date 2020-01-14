const express = require('express')

const server = express()

server.listen(4000, () => {
    console.log('\n*** Server Running on http://localhost:4000 ***\n');
  });
  
server.use(express.json())
const postRouter = require('./posts/posts-router')


server.use('/api/posts', postRouter)