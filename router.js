/*
function route(pathname) {
	console.log("About to route a request for" + pathname);
}

exports.route = route;

*/


/*
// ルータにルーティングする先のものを渡すことで、
// リクエストハンドラとルータを繋ぎ合わせることができる
function start() {
    console.log("Request handler 'start' was called.");
}

function upload() {
    console.log("Request handler 'upload' was called.");
}

exports.start = start;
exports.upload = upload;
*/

// /uploadページで、受け取った内容を表示します。
// postDataをリクエストハンドラに渡す必要がある
function route(handle, pathname, response, postData) {
    console.log("About to route a request for" + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, postData);
    } else {
        console.log("No request handler found for" + pathname);
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;