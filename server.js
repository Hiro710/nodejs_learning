var http = require("http");
var url = require("url");

// ルーティングの為の関数を引数で指定
function start(route) {
    function onRequest(request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log("Request for"+ pathname  +"received.");

	route(pathname);

	response.writeHead(200, {"Content-Type":"text/plain"});
	response.write("Hello, World!");
	response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;