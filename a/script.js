const add = document.getElementById("add");
const sub = document.getElementById("sub");
const mul = document.getElementById("mul");
const div = document.getElementById("div");

const input1 = document.getElementById("number");
const input2 = document.getElementById("number1");

const answer = document.getElementById("answer");

function add1(a, b) {
  return a + b;
}
// CRUD;
add.addEventListener("click", (event) => {
  event.preventDefault();
  const num1 = Number(input1.value);
  const num2 = Number(input2.value);
  const sum = num1 + num2;

  answer.innerHTML = `<p>the sum is, ${sum}</p>`;
  answer.style.color = "red";
  a.href = "";
  input1.value = "";
  input2.value = "";
});

function sub1(a, b) {
  return a - b;
}

sub.addEventListener("click", (event) => {
  event.preventDefault();
  const num1 = Number(input1.value);
  const num2 = Number(input2.value);
  const sum = num1 - num2;
  console.log(num1, num2, sum);
  alert(`the difference is, ${sum}`);
});

function mul1(a, b) {
  return a * b;
}

mul.addEventListener("click", (event) => {
  event.preventDefault();
  const num1 = Number(input1.value);
  const num2 = Number(input2.value);
  const sum = num1 * num2;
  console.log(num1, num2, sum);
  alert(`the  is, ${sum}`);
});

function div1(a, b) {
  return a / b;
}

div.addEventListener("click", (event) => {
  event.preventDefault();
  const num1 = Number(input1.value);
  const num2 = Number(input2.value);
  const sum = num1 / num2;
  console.log(num1, num2, sum);
  alert(`the division is, ${sum}`);
});
