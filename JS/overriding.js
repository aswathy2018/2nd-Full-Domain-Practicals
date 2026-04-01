class Animal{
    speak(){
        console.log("Category of animals..");
    }
}

class Dog extends Animal{
    speak(){
        console.log("Dog is processing..");
    }
}

class Cat extends Animal{
    speak(){
        console.log("Cat is processing..");
    }
}

let res

res = new Dog()
res.speak()

res = new Cat()
res.speak()