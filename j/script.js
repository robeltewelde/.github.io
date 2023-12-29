const input1 = document.getElementById("name")
const input2 = document.getElementById("phone")
const submit = document.getElementById("submit")

const add = document.getElementById("add")

    const nam = input1.value // "YAred"
    const phone = input2.value // 23

add.addEventListener("click", () => {
    const sum = nam + phone
    alert (`the sum is ${sum}`)
})



















submit.addEventListener("click", (event) => {
    event.preventDefault()

    const nam = input1.value // "YAred"
    const phone = input2.value // 23

    console.log(nam, phone);

    if (nam == "yared") {
        alert(`Hey Yared! Your number is, ${phone}`)
    } else {
        alert('Please enter a valid name')
    }
})

function calculator () {
    const num = Number(input1.value)
    const num2 = Number(input2.value)
}

