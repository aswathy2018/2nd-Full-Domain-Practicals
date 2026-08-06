///////////////////////////////////////////////getting value from a obj///////////////////////////////
// let person = {
//     name: "Aswathy"
// }

// const proxy = new Proxy(person, {
//     get(target, property){
//         console.log(`We fetched it from the ob person's key ${property}`)
//         return target[property]
//     }
// })

// console.log(proxy.name)


////////////////////To find length of the string ////////////////////
let user = {
    name: "Aswathy"
}

let proxy = new Proxy(user, {
    get(target, property){
        if(property=='length'){
            return target.name.length
        }
        return target[property]
    }
})

console.log(proxy.length)
//////////////////////////////Setting value in an obj////////////////////////
// const user = {};

// const proxy = new Proxy(user, {
//     set(target, property, value) {
//         console.log(`Setting ${property}`);

//         target[property] = value;

//         return true;
//     }
// });

// proxy.name = "Aswathy";
// console.log(proxy.name);


///////////////////// If the place length that in the object is leass than 6 then =>
///////////////////// show the length is less than 6 otherwise show the place

// let obj = {
//     place: "Thrissur"
// }

// let proxy = new Proxy(obj, {
//     get(target, property){
//         if(property=='place'){
//             if(target.place.length<6){
//                 return "Length is less than 6"
//             }else{
//                 return target.place
//             }
//         }
//         return target[property]
//     }
// })

// console.log(proxy.place)