var http = require("http");
var url = require("url");

// ルーティングの為の関数を引数で指定
function start(route, handle) {
    function onRequest(request, response) {
        // postDataを扱う部分と (node-formidableが直接取り扱うことになる)
        // request.setEncodingの行を削除
        // 代わりにrequestをルータに渡す
        var pathname = url.parse(request.url).pathname;
        console.log("Request for" + pathname + "received.");
        route(handle, pathname, response, postData);
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;