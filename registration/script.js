const age = 23;
const p = `Hey you are ${age} years old`;
const entry = document.getElementById("entry");

const nam = document.getElementById("nam");
const dep = document.getElementById("dep");
const pay = document.getElementById("pay");
const select = document.getElementById("select");
const class1 = document.getElementById("class");

const submit = document.getElementById("submit");

submit.addEventListener("click", (event) => {
  event.preventDefault();

  const nam1 = nam.value;
  const dep1 = dep.value;
  const pay1 = pay.value;
  const select1 = select.value;
  const class1 = class1.value;
  console.log(dep1);

  const p = document.createElement("p")
  p.textContent(`Hey ${nam1}!! \n you choose ${dep1} to study and agreed to pay `)
});
