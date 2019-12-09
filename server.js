var StaticServer = require('static-server');
var server = new StaticServer({
  rootPath: './Dist/',            
  port: 1337,               
  });
server.start(function () {
  console.log('Server started at port', server.port);
});