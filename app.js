var http = require('http');
var server = http.createServer(function (request, response)
{
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello World, this is my server & app!");
});
server.listen(process.env.VCAP_APP_PORT || 3000);
console.log("App Server started!");