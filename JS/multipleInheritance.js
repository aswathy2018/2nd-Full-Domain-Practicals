const A = {
    show(){
        console.log("Showing A..");  
    }
}

const B = {
    show(){
        console.log("Showing B..");
    }
}

class Display{}

Object.assign(Display.prototype, A, B)

let res = new Display()

res.show()