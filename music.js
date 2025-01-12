

const playPauseButton = document.querySelector('.play-pause');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const audioPlayer = document.querySelector('.audio-player');
const songNameElement = document.querySelector('.song-name');

let songs = ["Hotline Miami - Blizzard", "Everlasting Summer - Everlasting Summer", "Smash Mouth - All Star", "TELL ME WHY", "Innocence Glitched (Basement)", "Dancing Pirate", "BEHELIT", "The Only Thing I Know for Real", "Noize MC - Вселенная Бесконечна?"]

let playlist = []

let index = 1;

for (song in songs) {
    playlist.push({ name: songs[song], src: "/sounds/music/" + index + ".mp3"})
    index++;
}

console.log(playlist)

let currentSongIndex = 0;

function updateSong() {
    audioPlayer.src = playlist[currentSongIndex].src;
    songNameElement.textContent = playlist[currentSongIndex].name;
    audioPlayer.load();

    playPauseButton.innerHTML = `<path d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z" fill="white"/><path d="M13 9H15V15H13V9ZM9 9H11V15H9V9Z" fill="white"/>`; // Pause icon
}

function loadFirstSong() {
    audioPlayer.src = playlist[0].src;
    songNameElement.textContent = playlist[currentSongIndex].name;
    audioPlayer.load();
}

function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        // Change the icon to Pause
        playPauseButton.innerHTML = `<path d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z" fill="white"/><path d="M13 9H15V15H13V9ZM9 9H11V15H9V9Z" fill="white"/>`; // Pause icon
    } else {
        audioPlayer.pause();
        // Change the icon to Play
        playPauseButton.innerHTML = `<path d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z" fill="white"/><path d="M9 17L17 12L9 7V17Z" fill="white"/>`; // Play icon
    }
}

function playNext() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    updateSong();
    audioPlayer.play();
}

function playPrev() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    updateSong();
    audioPlayer.play();
}

audioPlayer.addEventListener('ended', function() {
    playNext();  // Automatically play next track
});

playPauseButton.addEventListener('click', togglePlayPause);
nextButton.addEventListener('click', playNext);
prevButton.addEventListener('click', playPrev);

loadFirstSong()