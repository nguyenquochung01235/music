const ws = new WebSocket("ws://localhost:8082");

// Music
var linkMusicInput = document.getElementById("link_music")
var listenButton = document.getElementById("listen_music")
var iframeMusic = document.getElementById("iframeMusic")

ws.addEventListener("open", ()=>{
    ws.send("Get link music")
})


listenButton.addEventListener("click", ()=>{
    music = linkMusicInput.value;
    ws.send(music);
})


ws.addEventListener("message", (e) => {
    iframeMusic.setAttribute("src", e.data);
});








