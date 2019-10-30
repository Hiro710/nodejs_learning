var server = require("./server");
// ルーティングの為の関数をサーバに組み込む
var router = require("./router");

server.start(router.route);
