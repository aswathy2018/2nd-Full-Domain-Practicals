class Inheritance{
    person(){
        console.log("Hii my name is Athira")
    }
}

class Child extends Inheritance{
    job(){
        console.log("I'm a developer")
    }
}

let res = new Child()

res.person()
res.job()