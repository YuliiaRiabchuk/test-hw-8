import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
console.log(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function (runVideoTime) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(Math.round(runVideoTime.seconds))
    );
  }, 1000)
);

const currentTime = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (currentTime) {
  player.setCurrentTime(currentTime);
}
