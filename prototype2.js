let animal = {
    isSleeping:false,
    walk(){
        if(this.isSleeping){
            return 'I walk';
        }else{
            return 'Is sleeping'
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
console.log(rabbit.isSleeping);
console.log(rabbit.walk());
rabbit.sleep();
console.log(rabbit.isSleeping);
console.log(rabbit.walk());
//console.log(Object.keys(rabbit));
//for(let prop in rabbit) //console.log(prop);
for(let prop in rabbit){
let isOwn = rabbit.hasOwnProperty(prop);
if(isOwn){
    //console.log(`Our: ${prop}`);
}else{
    //console.log(`Inherited: ${prop}`);
}
}
