class Animal{
    constructor(name){
        this.name = name
    }
}

class Sound extends Animal{
    constructor(name){
        super(name)
    }
}

let res = new Sound("Cat")

console.log(res.name)