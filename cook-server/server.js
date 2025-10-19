const { log } = require('console')
const http = require('http')

const hostname = '127.0.0.1'
const port = '3000'

const server = http.createServer((req, res) => {
  if (req.url === '/about') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end(`About US page it is`)
  }
  else {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('FUCK YOU EVERYONE \n')
  }
});

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`)
})
