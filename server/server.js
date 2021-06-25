const {createServer} = require('http');
const express = require('express');
const socket = require('socket.io');
const {parse} = require('url');
const next = require('next');

const _app = express();
const PORT = 8000;
const server = _app.listen(PORT, () => {
  console.log('IRC server is running on port ' + PORT);
})
const io = socket(server);
io.on('connection', socket => {
  console.log("socket=",socket.id);
  socket.on('CLIENT_MSG', data => {
    console.log("msg=",data);
    io.emit('SERVER_MSG', data);
  })
});

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const {pathname, query} = parsedUrl

    if (pathname === '/a') {
      app.render(req, res, '/a', query)
    } else if (pathname === '/b') {
      app.render(req, res, '/b', query)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
