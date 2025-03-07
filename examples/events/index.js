const click_me = document.getElementById('click_me');
const click_value = document.getElementById('click_value');
const change_me = document.getElementById('change_me');
const card = document.querySelector('.card');
console.log(typeof click_value.value);
let value = parseInt(click_value.value);
console.log('value', value);

// function clicked() {
//   console.log('Clicked!');
// }

// click_me.addEventListener('click', clicked);
click_me.addEventListener('click', () => {
  // console.log('Clicked!');
  value += 1;
  click_value.value = value;
  // console.log('value', value);
});

change_me.addEventListener('change', () => {
  console.log('change_me', change_me.value);
});

change_me.addEventListener('blur', () => {
  console.log('blur', change_me.value);
});

change_me.addEventListener('input', (event) => {
  console.log('input', event);
});

change_me.addEventListener('beforeinput', () => {
  console.log('beforeinput', change_me.value);
});

card.addEventListener('click', (event) => {
  console.log(event.composedPath());
});
