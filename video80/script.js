// let obj = {
//     a: 21,
//     b: "Satadal"
// }
// console.log(obj);
// let rabbit = {
//     jumps : true
// }
// let animal ={
//     eats: true
// }
// rabbit.__proto__ = animal;// sets rabbit[[prototype]] ]= animal;

class Animal{
    constructor(name){
        this.name = name;
        console.log("Object is created.....")  
      }
      eats(){
        console.log('kha rha hoon');
        
      }
      jumps(){
        console.log('nach rha hoon');
        
      }
}
// let a = new Animal("Mini");
class lion extends Animal{
    constructor(name){
        super()
        this.name = name;
        console.log("Object is created and he is a lion.....")  
      }
      eats(){
        super.eats()
        console.log('Daharte hue kha rha hoon');
        
      }

}

let l = new lion("Shera");
console.log(l);
