const {createServer} = require('http');
const {parse} = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const routes = require('../routes')
const handler = routes.getRequestHandler(app)
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(handler).listen(3000)
})
