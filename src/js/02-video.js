
const _ = require('lodash');
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

console.log(localStorage.getItem('videoplayer-current-time'));

const savedTime = localStorage.getItem('videoplayer-current-time')
if (savedTime !== null) {
    player.setCurrentTime(savedTime)
}

// player.on('play', function (event) {
//     const currentTime = localStorage.getItem('videoplayer-current-time')
//     console.log(currentTime);
//     if (currentTime == null) {
//         return console.log('played the video!');
//     }
//     player.setCurrentTime(currentTime)
// });

// player.getVideoTitle().then(function (title) {
//     console.log('title:', title);
// });

player.on('timeupdate', _.throttle(saveTime, 1000));

function saveTime(event) {
    const currentTime = event.seconds
    localStorage.setItem('videoplayer-current-time', `${currentTime}`)
    console.log(currentTime);
}