const input = document.querySelector('#input');
const renderBtn = document.querySelector('button');
const list = document.querySelector('#boxes');
let value = [];
let salary = 0;
let devSum = 0;

input.addEventListener('blur', onGetValue);
renderBtn.addEventListener('click', onRenderSalary);

function onGetValue(event) {
  value.push(event.currentTarget.value.split(' '));
  console.log(value);
  event.currentTarget.value = '';
}
function onRenderSalary() {
  let sum = 0;

  const element = document.createElement('li');
  const p = document.createElement('p');

  value[0].forEach(element => {
    devSum += 1;
    sum = sum + +element;
  });
  if (sum > 41) {
    salary += sum * 0.6;
    console.log(salary);
    p.textContent = `Зарплата:${salary}грн, за доставку ${devSum}грн`;
    element.appendChild(p);
    console.log(element);
    list.append(element);
    value = [];
  } else {
    salary += 25;
    p.textContent = `Зарплата:${salary}грн. За доставку ${devSum}грн`;
    element.appendChild(p);
    list.append(element);
    value = [];
  }
}
