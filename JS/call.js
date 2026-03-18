let obj = {
    name: "Kaliya"
}

let obj1 = {
    name: "Babluu"
}

let fn = function (a){
    console.log(a+this.name)
}

fn.call(obj1, "Hiii ")