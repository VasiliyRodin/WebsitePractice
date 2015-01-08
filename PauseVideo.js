var vid = document.getElementById("bgvid");
var pauseButton = document.getElementById("vidpause");
function vidFade() {
    vid.classList.add("stopfade");
}

vid.addEventListener('ended',function(){
    vid.pause();
    vidFade();
});

pauseButton.addEventListener("click",function(){
    vid.classList.toggle("stopfade");
    if(vid.paused){
        vid.play();
        pauseButton.innerHTML="Puase"
    } else {
        vid.pause();
        pauseButton.innerHTML="Paused"
    }
});