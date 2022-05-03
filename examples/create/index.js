const card = document.querySelector('.card');

card.innerHTML = '<h3>Hello World</h3>';

const heading = document.createElement('h3');
heading.innerText = 'Hello World';
card.appendChild(heading);

// card.remove(heading);

const wrapper = document.createElement('ul');

let fam = ['Mum', 'Dad', 'Brother', 'Sister'];

fam.forEach((member) => {
  const li = document.createElement('li');
  li.innerText = member;
  wrapper.appendChild(li);
});

card.appendChild(wrapper);
