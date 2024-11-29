let a = prompt("Enter the first number")
let b = prompt("Enter the second number")


if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Galat kar rhe ho vai")
}
let sum = parseInt(a) +parseInt(b) ;
// let x = 1;
try {
    console.log(sum *x);
} catch (error) {
    console.log("Error aa gya vaii");
    
}finally{
    console.log("Your files are being closed");
    
}