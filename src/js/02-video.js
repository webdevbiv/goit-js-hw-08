const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
console.log(localStorage.getItem('videoplayer-current-time'));

player.on('play', function (event) {
    const currentTime = localStorage.getItem('videoplayer-current-time')
    console.log(currentTime);
    if (currentTime == null) {
        return console.log('played the video!');
    }
    player.setCurrentTime(currentTime)
});

// player.getVideoTitle().then(function (title) {
//     console.log('title:', title);
// });

player.on('timeupdate', saveTime)

function saveTime(event) {
    const currentTime = event.seconds
    localStorage.setItem('videoplayer-current-time', `${currentTime}`)
}