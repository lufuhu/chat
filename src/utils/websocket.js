import ReconnectingWebSocket from 'reconnecting-websocket';

let url = process.env.NODE_ENV === "production" ? "ws://chat.lufuhu.com" : "ws://192.168.1.3:8285";

let ws = new ReconnectingWebSocket(url, null, {debug: true, reconnectInterval: 3000});

ws.onopen = function () {
    ws.send("发送数据");
    console.log("数据发送中...");
};

ws.onmessage = function (evt) {
    console.log(evt)
};

ws.onclose = function () {
    console.log("连接已关闭...");
};