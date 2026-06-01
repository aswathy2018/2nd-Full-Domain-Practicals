class Getting{
    constructor(name){
        this.name = name
    }

    get getting(){
        return this.name
    }

    set setting(val){
        this.name = val
    }
}

let res = new Getting()

res.setting = "Aswathy Sudhakaran"
console.log(res.getting)