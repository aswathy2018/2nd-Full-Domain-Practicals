class Animal{
    aim(){
        console.log("It's an animal");
    }
}

class Dog extends Animal{
    sound(){
        console.log("Bow bowww..");
    }
}

class Cat extends Animal{
    voice(){
        console.log("Meowwwww..");
    }
}

let cl1 = new Dog()
let cl2 = new Cat()

cl1.sound()
cl1.aim()

cl2.voice()
cl2.aim()