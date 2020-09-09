var http = require('http');
http.createServer(handleRequest).listen(8124, "127.0.0.1");
var dispatcher = require('./dispatcher.js');

function handleRequest(req, res) {
    try {
        console.log(req.url);
        dispatcher.dispatch(req, res);
    } catch(err) {
        console.log(err);
    }
}
