// audio.js
let audio;
let isPlaying = false;

function initAudio() {
    audio = new Audio('/static/audio/margaret.mp3');
    audio.loop = true;
}

function toggleMusic() {
    if (!audio) initAudio();
    
    if (isPlaying) {
        audio.pause();
        document.getElementById('musicToggle').innerHTML = '<i class="fas fa-volume-mute"></i>';
    } else {
        audio.play();
        document.getElementById('musicToggle').innerHTML = '<i class="fas fa-volume-up"></i>';
    }
    isPlaying = !isPlaying;
}
