const express = require('express')

const server = express()

server.listen(4000, () => {
    console.log('\n*** Server Running on http://localhost:4000 ***\n');
  });
  
server.use(express.json())
const postRouter = require('./posts/posts-router')


server.use('/api/posts', postRouter)

server.use('*', (req, res) =>
res.status(404).json({
  status: 404,
  message: 'No endpoint matches that URL.'
}))