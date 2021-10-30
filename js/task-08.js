const input = document.querySelector('#input');
const renderBtn = document.querySelector('button');
const list = document.querySelector('#boxes');
let value = [];
let salary = 0;

input.addEventListener('blur', onGetValue);
renderBtn.addEventListener('click', onRenderSalary);

function onGetValue(event) {
  value.push(event.currentTarget.value.split(' '));
  event.currentTarget.value = '';
}
function onRenderSalary() {
  let sum = 0;

  const element = document.createElement('li');
  element.classList.add('boxes__element');
  const p = document.createElement('p');
  p.classList.add('boxes__text');

  value[0].forEach(element => {
    sum = sum + +element;
  });
  if (sum > 61) {
    salary += sum * 0.7;
    console.log(salary);
    p.textContent = `Зарплата: ${Math.round(salary)}грн.`;
    element.appendChild(p);
    console.log(element);
    list.append(element);
    value = [];
  } else {
    salary += 40;
    p.textContent = `Зарплата: ${Math.round(salary)}грн.`;
    element.appendChild(p);
    list.append(element);
    value = [];
  }
}

document.body.addEventListener('keydown', function (event) {
  if (event.code !== 'Enter') {
    return;
  }
  return onRenderSalary();
});
