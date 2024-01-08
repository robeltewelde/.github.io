// const input1 = document.getElementById("email")
// const input2 = document.getElementById("password")
// const submit = document.getElementById("submit")

// // CRUD = > 

// submit.addEventListener("click", (event) =>{
//     event.preventDefault()

//    const email = input1.value
//    const password = input2.value


//    console.log(email, password) 

//    if (password == "0000"){
//     alert(`hey robel your email is , ${email}`)
//    }else {
//     alert('Please enter a valid password')
//    }  
// })

const nam1 = document.getElementById("number1")
const nam2 = document.getElementById("number2")

const add = document.getElementById("add")
const sub = document.getElementById("sub")
const div = document.getElementById("div")
const mul = document.getElementById("mul")

add.addEventListener("click", (event) => {
    event.preventDefault()
    const num1 = Number(nam1.value)
    const num2 = Number(nam2.value)
    const sum = num1 + num2
    console.log(num1, num2, sum)
    alert(`the sum is, ${sum}`)
    })

sub.addEventListener("click", (event) =>{
    event.preventDefault()
    const num1 = Number(nam1.value)
    const num2 = Number(nam2.value)
    const diff = num1 - num2
    console.log(num1, num2, diff)
    alert(`the difference is, ${diff}`)
    
})

div.addEventListener("click", (event) =>{
    event.preventDefault()
    const num1 = Number(nam1.value)
    const num2 = Number(nam2.value)
    const div = num1 / num2
    console.log(num1, num2, div)
    alert(`the division is, ${div}`)
})

mul.addEventListener("click", (event) =>{
    event.preventDefault()
    const num1 = Number(nam1.value)
    const num2 = Number(nam2.value)
    const mul = num1 * num2
    console.log(num1, num2, mul)
    alert(`the multiplication is, ${mul}`)
})


function page() {
    return (
        <div></div>
    )NAv
}