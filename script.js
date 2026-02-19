const mainAudio = document.getElementById("main-audio");
const playPauseBtn = document.getElementById("play-pause");
let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
}

function playSong() {
    isPlaying = true;
    playPauseBtn.innerText = "Pause";
    mainAudio.play();
}

function pauseSong() {
    isPlaying = false;
    playPauseBtn.innerText = "Play";
    mainAudio.pause();
}

playPauseBtn.addEventListener("click", togglePlay);


mainAudio.addEventListener("ended", () => {
    playPauseBtn.innerText = "Play";
    isPlaying = false;
});