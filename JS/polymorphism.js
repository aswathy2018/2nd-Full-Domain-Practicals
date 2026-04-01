class Animal{
    speak(){
        console.log("Different types of animal..");
    }
}

class Dog{
    speak(){
        console.log("Dog can bark..");
    }
}

class Cat{
    speak(){
        console.log("Cat is like a fox..");
    }
}

let animals = [new Dog(), new Cat()]

animals.forEach(a=>a.speak())