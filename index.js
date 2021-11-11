const http = require('http');
const port = process.env.PORT || 2000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'My Name is Rehamt Ali\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});