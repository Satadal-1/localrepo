async function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(455)

        }, 3500);
    })
    
}
async function main() {
    console.log("loading modelues");
console.log("do something else");
console.log("loading Data")
let data = await getData();

    console.log(data);

    console.log('processing data');
    

}
main();



// console.log("loading modelues");
// console.log("do something else");
// console.log("loading Data")
// let data = getData();
// data.then((v)=>{
//     console.log(data);

//     console.log('processing data');
    
// })

