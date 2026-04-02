class Animal{
    start(){
        this.#speak()
    }

    #speak(){
        console.log("Animals make sounds..")
    }
}


let res = new Animal()
res.start()
