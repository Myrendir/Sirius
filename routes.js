const routes = require('next-routes')

module.exports = routes()
  .add('register', '/register/:selector/:validator')
