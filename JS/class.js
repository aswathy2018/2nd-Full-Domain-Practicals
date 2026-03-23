class Detailes{
    constructor(name, age, place){
        this.name = name,
        this.age = age,
        this.place = place
    }

    print(){
        console.log("Name: ", this.name)
        console.log("Age: ", this.age)
        console.log("Place: ", this.place)
    }
}

let res = new Detailes("Aswathy", 22, "Thrissur")

res.print()