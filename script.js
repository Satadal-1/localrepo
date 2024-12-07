async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}
(async function main(){
    // let a = await sleep();
    // console.log(a)
    // let [x , y,...rest]  = [5,4,7,8,32 ,0, 78,4]
    // console.log(x,y,rest);
    let obj = {
        a : 1,
        b : 2,
        c : 3
    }
    let {a,b}= obj;
    console.log(a,b);

    let arr = [1, 2, 3];
    console.log(sum(arr[0],arr[1],arr[2]))
    console.log(sum(...arr))
    
})()