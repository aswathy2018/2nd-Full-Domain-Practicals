let obj = {
    name: "Babluu"
}

let obj1 = {
    name: "Kaliyaa"
}

let fn = function(a){
    console.log(a+this.name)
}

fn.apply(obj1, ["Hlooo "])