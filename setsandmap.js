
"use strict";
// let events = new Set();
// let event1 = {type: "Concert", day: "Saturday"};

// events.add(event1);
// console.log(events);

// for (let item of events.values()) {
//     console.log(item);
// }

// console.log(events.has(event1));


//KEYED COLLECTIONS
// let citys = new Set();

// let city_one = { name: "London"};
// let city_two = { name: "Tokio"};
// let city_three = {name:"New York"};
// let city_four = {name:"Barcelona"}
// let city_five = {name: "Madrid"};
// let city_six = { name: "Roma"};

// citys.add(city_one);
// citys.add(city_two);
// citys.add(city_three);
// citys.add(city_four);
// citys.add(city_five);
// citys.add(city_six);

// citys.forEach((x) => {
//     console.log(x);
// })

const newMap = new Map();
const location ={
    'latitude': 37.422131,
    'longitude': -122.084801
}

newMap.set('Company', 'Google Head Quarters');
newMap.set('Location', location);
newMap.set('Payment', 10000);
// newMap.set(Window, 200);
// console.log(newMap.get(Window));

//obtener keys
//console.log(newMap.keys());
//obtener values
//console.log(newMap.values());
//obtner key-value
//console.log(newMap.entries());

//iteration over a map
//newMap.forEach((value,key) => console.log(`${key}: ${value}`));

const intinerario = {
    'Lugar': 'Mexico',
    'Fecha ida': 'Diciembre',
    'Fecha regreso': 'Enero',
    'Motivo': 'turismo'
};

//console.log(intinerario);

const intinerarioMap = new Map(Object.entries(intinerario))
//intinerarioMap.forEach((x, k) => console.log(`${k}: ${x}`));
intinerarioMap.set('Precio', 360);
//intinerarioMap.forEach((x, k) => console.log(`${k}: ${x}`));

//Convert Map to Object
const object_map = Object.fromEntries(intinerarioMap);
//console.log(object_map);

//convert a Map into Array
const new_array = Array.from(intinerarioMap);
//new_array.forEach(function(x){console.log(x)});
//console.log(new_array[0][1]);

//Set
//Create a set
const new_Set = new Set();
new_Set.add('Sandia');
new_Set.add('Pina');
new_Set.add('Naranja');

//new_Set.forEach((x) => console.log(x));

const has_result = new_Set.has('Sandia');
//console.log(has_result);

//new_Set.clear();

//How to iterate over a set
    // console.log(new_Set.keys());
    // console.log(new_Set.values());

for (const value of new_Set) {
    //console.log(value);
}
//convert a set into array
const new_set_array = [...new_Set];
//console.log(new_set_array);

new_set_array.push('Sandia');
//console.log(new_set_array);

const test_testOne = [1,2,3,4,1,1,1,2,2,2,3,4];

const test_set_array = [... new Set(test_testOne)];
test_set_array.forEach((x) => console.log(x));