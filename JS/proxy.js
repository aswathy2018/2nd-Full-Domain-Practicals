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