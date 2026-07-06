function student(name){
    this.name = name
}

student.prototype.greet = function(){
    console.log("Helloo "+this.name)
}

const a1 = new student("Aswathy")
const a2 = new student("Ashika")

a1.greet()