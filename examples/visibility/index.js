const audio = document.getElementById('audio');

let hidden;
let visibilityChange;

if (typeof document.hidden !== 'undefined') {
  hidden = 'hidden';
  visibilityChange = 'visibilitychange';
} else if (typeof document.msHidden !== 'undefined') {
  hidden = 'msHidden';
  visibilityChange = 'msvisibilitychange';
} else if (typeof document.webkitHidden !== 'undefined') {
  hidden = 'webkitHidden';
  visibilityChange = 'webkitvisibilitychange';
}

document.addEventListener(visibilityChange, () => {
  if (document[hidden]) {
    document.title = '😴';
    audio.onpause();
  } else {
    document.title = '🙉';
    audio.onplay();
  }
});
