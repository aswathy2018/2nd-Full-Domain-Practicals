let obj = {
    name: "kaaliyaa"
}

let obj1 = {
    name: "Babluu"
}

let fn = function (n){
    console.log(n+this.name)
}

let val = fn.bind(obj1, "Hloo Mister ")

val()