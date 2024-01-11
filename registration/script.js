const age = 23;
const p = `Hey you are ${age} years old`;

const form = document.getElementById("Registration");
const nam1 = document.getElementById("nam");
const dep = document.getElementById("dep");
const pay = document.getElementById("pay");
const select = document.getElementById("select");
const class1 = document.getElementById("class");
const entry = document.getElementById("entry");

const submit = document.getElementById("submit");

submit.addEventListener("click", (event) => {
  // event.preventDefault();

  const nam1 = nam.value;
  const dep1 = dep.value;
  const pay = pay.value;
  const select = select.value;
  const class1 = class1.value;
  console.log(nam1);

  const p = document.createElement("p")
  p.textContent(`Hey ${nam1}!! \n you choose ${dep1} to study and agreed to pay `)
});
