console.log("I am promises");

let prom1 = new Promise((resolve,reject)=>{
    let r = Math.random();
    if (r < 0.5) {
        reject("random not allows you to complete");            
    } else {
        setTimeout(() => {
            console.log("yes I am done")
        resolve("Satadal");
        }, 3000);
    }
    
    prom1.then((a)=>{
        console.log(a);
        
    }).catch((err)=>{
        console.log("err");
        
    })
    
})