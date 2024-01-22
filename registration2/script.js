const nam1 = document.getElementById("nam");
const dep = document.getElementById("department");
const pey = document.getElementById("payment");
const sch = document.getElementById("sch");
const shift = document.getElementById("shift");
const class1 = document.getElementById("class");
const submit = document.getElementById("submit");
const entry = document.getElementById("entry");
const tBody = document.getElementById("Body");

submit.addEventListener("click", (event) => {
  event.preventDefault();

  const nam1 = nam.value;
  const dep1 = dep.value;
  const pey1 = pey.value;
  const sch1 = sch.value;
  const shift1 = shift.value;
  const class2 = class1.value;
  const data = [nam1, dep1, pey1, sch1, shift1, class2];

  for (let i = 0; i <= data.length; i++) {
    if (data[i] === "") {
      alert("Please enter", data[i]);
      break;
    } else {
      const raw = tableRaw([nam1, dep1, pey1, sch1, shift1, class2]);
      tBody.appendChild(raw);
      clearForm();
      break;
    }
  }
});

function clearForm() {
  nam.value = "";
  dep.value = "";
  pey.value = "";
  sch.value = "";
  shift.value = "";
  class1.value = "";
}

function tableRaw(data) {
  let row = document.createElement("tr");

  let buttonE = document.createElement("button");
  buttonE.textContent = "Edit";
  buttonE.className = "btnE";

  let buttonD = document.createElement("button");
  buttonD.textContent = "Delete";
  buttonD.className = "btnD";

  data.map((rob) => {
    const cell = document.createElement("td");
    cell.textContent = rob;
    row.appendChild(cell);
  });

  const cell2 = document.createElement("td");
  cell2.append(buttonE);
  cell2.append(buttonD);
  row.appendChild(cell2);

  return row;
}

dep.addEventListener("change", () => {
  const selected = dep.value;
  if (dep.value == "full-stack") {
    pey.value = 6000;
  }
  if (dep.value == "frontend") {
    pey.value = 4500;
  }
  if (dep.value == "backend") {
    pey.value = 5000;
  }
});

tBody.addEventListener("click", (e) => {
  const element = e.target;
  if (element.textContent == "Delete") {
    const tr_del = element.parentElement.parentElement;
    tr_del.remove();
  }
  if (element.textContent == "Edit") {
    const tr_edit = element.parentElement.parentElement;

    console.log(tr_edit.getElementsByTagName("td")[0]);
    document.getElementById("nam").value =
      tr_edit.getElementsByTagName("td")[0].textContent;
  }
});
