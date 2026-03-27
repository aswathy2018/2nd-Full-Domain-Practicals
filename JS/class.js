class Detailes{
    constructor(name, age, place){
        this.name = name,
        this.age = age,
        this.place = place
    }

    print(){
        return{
            name: this.name,
            age: this.age,
            place: this.place
        }
    }
}

let res = new Detailes("Aswathy", 22, "Thrissur")

console.log(res.print())