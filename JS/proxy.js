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