let audio = document.createElement("audio");
audio.src = "sounds/fuck you.mp3";
audio.loop = false;

function play_easter() {
    if (audio.paused){
        audio.play();
    }
}