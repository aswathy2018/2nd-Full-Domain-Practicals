class Person{
    constructor(name){
        this._name = name
    }
}

class Students extends Person{
    print(){
        console.log(this._name)
    }
}

let res = new Students("Aswathy")

res.print()

console.log(this._name) //It will print undefined because name is protected using underscore(_)