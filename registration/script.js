<<<<<<< HEAD
const nam = document.getElementById("nam");
const dep = document.getElementById("dep");
const pay = document.getElementById("pay");
const select = document.getElementById("select");
const cla = document.getElementById("cla");
const entry = document.getElementById("entry");
const tBody = document.getElementById("Body");
=======
const age = 23;
const p = `Hey you are ${age} years old`;

const form = document.getElementById("Registration");
const nam1 = document.getElementById("nam");
const dep = document.getElementById("dep");
const pay = document.getElementById("pay");
const select = document.getElementById("select");
const class1 = document.getElementById("class");
const entry = document.getElementById("entry");
>>>>>>> dc7814a6cd8dc78b129874421c9b19e9bfd83f0f

const submit = document.getElementById("submit");

submit.addEventListener("click", (event) => {
  // event.preventDefault();

  const nam1 = nam.value;
  const dep1 = dep.value;
<<<<<<< HEAD
  const pay1 = pay.value;
  const select1 = select.value;
  const cl = cla.value;
  console.log(select1, cl);

  // const p = document.createElement("p")
  // p.textContent = (`Hey ${nam1}!! \n you choose ${dep1} to study and agreed to pay ${pay1} and you  can lern at ${select1} and your class is ${cl}`)
  // entry.appendChild(p)

  const raw = tableRaw([nam1, dep1, pay1, select1, cl]);
  console.log(raw);

  tBody.appendChild(raw);

=======
  const pay = pay.value;
  const select = select.value;
  const class1 = class1.value;
  console.log(nam1);
>>>>>>> dc7814a6cd8dc78b129874421c9b19e9bfd83f0f

});

function tableRaw(data) {
  // creating the entire row
  let row = document.createElement("tr");

  let buttonE = document.createElement("button");
  buttonE.textContent = "Edit";
  buttonE.className = "btnE";

  let buttond = document.createElement("button");
  buttond.textContent = "delet";
  buttond.className = "btnd";

  data.map((ele) => {
    const cell = document.createElement("td");
    cell.textContent = ele;
    row.appendChild(cell);
  });

  const cell2 = document.createElement("td");
  cell2.append(buttonE);
  cell2.append(buttond);
  row.appendChild(cell2);

  return row;
}

dep.addEventListener("change", () => {
  const selected = dep.value;
  if (dep.value == "frontend") {
    pay.value = 2000;
    console.log();
  }
  if (dep.value == "backend") {
    pay.value = 3500;
  }
  if (dep.value == "full-stack") {
    pay.value = 4000;
  }
});

tBody.addEventListener("click", (e) => {
  console.log(e.target == button)
})