const liElements = document.querySelectorAll(["#one, #two, #three"]);
const name = document.getElementById("a")
a.value
liElements.forEach((ele) => {
  ele.style.color = "red";
});
// Add => innertHTML, textContent, innerText
// create =>

const H1 = document.createElement("h1");

const div = document.createElement("div");
div.innerHTML = "<h1>Hello world</h1>";

H1.textContent = "Hello World!"; = a

const mine = document.getElementById("area");
mine.append(div);
console.log(mine);

liElements.addEventListener("click", () => {
  mine.classList.toggle("hidden");
});
