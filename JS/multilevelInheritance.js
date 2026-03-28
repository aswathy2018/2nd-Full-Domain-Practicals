class Animal{
    eat(){
        console.log("eating...")
    }
}

class Dog extends Animal{
    sound(){
        console.log("Bow boww..");
    }
}

class Cat extends Dog{
    voice(){
        console.log("Meowww..");
    }
}

const res = new Cat()

res.voice()
res.sound()
res.eat()