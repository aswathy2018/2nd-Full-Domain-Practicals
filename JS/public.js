class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

let p1 = new Person("Aswathy");

console.log(p1.name);
p1.greet();