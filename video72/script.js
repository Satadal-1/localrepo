console.log("coloring boxes");

// let boxes = document.getElementsByClassName(".box"); 
let boxes = document.getElementsByClassName("box");

console.log(boxes);
function getRandomColor(){
    let ran1 = Math.ceil( 0 + Math.random()*255 )
    let ran2 = Math.ceil( 0 + Math.random()*255 )
    let ran3 = Math.ceil( 0 + Math.random()*255 )
    return `rgb(${ran1} , ${ran2} ,${ran3})`
}
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})