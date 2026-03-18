function callB(name, callback){
    console.log("Hii ", name)
    callback()
}

function val(){
    console.log("Good morning..")
}

callB("Aswathy", val)

// function callB(a,b, callBack){
//     console.log(a+b)
//     callBack()
// }

// function val(){
//     console.log("Sum is obtained")
// }

// callB(2,3,val)