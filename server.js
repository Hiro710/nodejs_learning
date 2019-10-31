var http = require("http");
var url = require("url");

// ルーティングの為の関数を引数で指定
function start(route, handle) {
    function onRequest(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request for" + pathname + "received.");

        // 受信データのエンコーディングをUTF-8と定義
        request.setEncoding("utf8");

        // 新しいPOSTデータの塊を受信する度にpostData変数に追記していく”data”イベントリスナーを追加
        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("Received POST data chunk '" +
                postDataChunk + "'.");
        });

        // 全てのPOSTデータが収集できた時にだけ呼び出されるよう
        // ルータ呼び出し部分をendイベントコールバック内に移動
        request.addListener("end", function() {
            route(handle, pathname, response, postData);
        });
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;