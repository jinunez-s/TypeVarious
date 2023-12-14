let animal = {
    isSleeping:false,
    walk(){
        if(this.isSleeping){
            return 'Is sleeping';
        }else{
            return 'I walk'
        }
    },
    sleep(){
        this.isSleeping = true;        
    }
};

let rabbit = {
    __proto__:animal,
    name: 'White Rabbit'
};

//rabbit.sleep();
// console.log(rabbit.isSleeping);//false
// console.log(rabbit.walk());//I walk
// rabbit.sleep();
// console.log(rabbit.isSleeping);//true
// console.log(rabbit.walk());// Is sleeping
//console.log(Object.keys(rabbit));
//for(let prop in rabbit) //console.log(prop);
for(let prop in rabbit){
let isOwn = rabbit.hasOwnProperty(prop);
if(isOwn){
    console.log(`Our: ${prop}`);
}else{
    console.log(`Inherited: ${prop}`);
}
}
