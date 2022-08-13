const WebSocket = require('ws');

const wss = new WebSocket.Server({
    port: 8082,
})

const clients = new Set();

var constData = "https://www.nhaccuatui.com/bai-hat/call-girl-trung-tu.fWcImHfhrtPV.html"
// var iframeMusic

wss.on("connection", ws =>{
    clients.add(ws);
    console.log("New client connected!");


    ws.on("message", data =>{

    if(data == "Get link music"){
      ws.send(`${constData}`)
    }else{
    constData = data
    for(let client of clients) {
        client.send(`${constData}`);
        }
    }
    
    })

    ws.on("close", ()=>{
        console.log("Client has dissconnected!");
    });
});


