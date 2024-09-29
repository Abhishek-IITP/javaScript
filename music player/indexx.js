const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const songTitle = document.getElementById('song-title');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const progressBar = document.getElementById('progress-bar');
const coverImg = document.getElementById('cover-img');

let currentSongIndex = 0;
let songs = [];

function loadSong(song) {
    audioPlayer.src = song.preview; 
    songTitle.textContent = song.title;
    coverImg.src = song.album.cover_medium; 
    progressBar.value = 0;
    playBtn.textContent = '▶';
}

playBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playBtn.textContent = '❚❚';
    } else {
        audioPlayer.pause();
        playBtn.textContent = '▶';
    }
});

searchBtn.addEventListener('click', () => {
    const query = searchInput.value;
    if (query) {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${query}`)
            .then(response => response.json())
            .then(data => {
                if (data && data.data.length > 0) {
                    songs = data.data; 
                    currentSongIndex = 0; 
                    loadSong(songs[currentSongIndex]);
                } else {
                    songTitle.textContent = 'No results found';
                }
            })
            .catch(error => console.error('Error fetching song data:', error));
    }
});


nextBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    audioPlayer.play();
    playBtn.textContent = '❚❚';
});

prevBtn.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    audioPlayer.play();
    playBtn.textContent = '❚❚';
});

audioPlayer.addEventListener('timeupdate', () => {
    const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progressPercent;
});

progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
});
