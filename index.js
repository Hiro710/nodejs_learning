var server = require("./server");
// ルーティングの為の関数をサーバに組み込む
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
// 新しいリクエストハンドラを/showというURLにマッピングする
handle["/show"] = requestHandlers.show;

server.start(router.route, handle);