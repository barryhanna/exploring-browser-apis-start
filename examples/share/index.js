const share_button = document.getElementById('share');

if ('share' in navigator) {
  share_button.disabled = false;
} else {
  share_button.textContent = 'Your browser does not support the Web Share API';
}

share_button.addEventListener('click', async () => {
  const text = document.getElementById('text').value;
  const shareData = {
    title: 'Shared from Level Up',
    text,
    url: 'https://leveluptutorials.com',
  };
  await navigator.share(shareData);
});

let isMobileAgent;

if (
  /Android|webOS|iPhone|iPad|Blackberry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) ||
  /Android|webOS|iPhone|iPad|Blackberry|IEMobile|Opera Mini/i.test(
    navigator.platform
  )
) {
  isMobileAgent = true;
} else {
  isMobileAgent = false;
}

share_button.innerText = isMobileAgent;
console.log(`Is Mobile? ${isMobileAgent}`);

const isMobileSize = window.matchMedia(
  'only screen and (max-width: 760px'
).matches;

console.log(`Is Mobile Size? ${isMobileSize}`);

const isTouch = 'ontouchstart' in document.documentElement;
console.log(`isTouch? ${isTouch}`);
