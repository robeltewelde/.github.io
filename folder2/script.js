const input1 = document.getElementById("one");
const input2 = document.getElementById("two");
const input3 = document.getElementById("three");
const input4 = document.getElementById("fhour");
const submit = document.getElementById("submit");

submit.addEventListener("click", (event) => {
  event.preventDefault();
  const one = input1.value;
  const two = input2.value;
  const three = input3.value;
  const fhour = input4.value;

  console.log();
});

// const register = document.querySelectorAll([
//   "#one, #two, #three, #fhour, #submit",
// ]);
// console.log(register);
