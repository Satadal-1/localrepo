factorial = 1
let n = prompt("Enter the value of n ")
for (let i = 1; i <+ n; i++) {
    factorial *= i;
}
console.log(factorial)
alert(`Factorial is ${factorial}`)