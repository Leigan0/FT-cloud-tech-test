var { server, port } = require('./server');

server.listen(port);
console.log('Api server started on: ' + port);
