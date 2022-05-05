const share_button = document.getElementById('share');
const share_link = document.getElementById('share-link');
const text = document.getElementById('text');

if ('share' in navigator) {
  share_button.disabled = false;
} else {
  share_button.textContent = 'Your browser does not support the Web Share API';
}

share_button.addEventListener('click', async () => {
  const shareData = {
    title: 'Shared from Level Up',
    text: text.value,
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

if ('share' in navigator) {
  if (isMobileAgent && isMobileSize && isTouch) {
    share_button.disabled = false;
    share_link.style.display = 'none';
  } else {
    initialiseFallback();
  }
} else {
  initialiseFallback();
}

function initialiseFallback() {
  share_button.style.display = 'none';
  share_link.href = `https://twitter.com/share?url=${window.location.href}&text=${text.value}`;
}
