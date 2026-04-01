class Calc{
    add (){
        let sum = 0

        for(let num of arguments){
            sum+=num
        }
        return sum
    }
}

let res = new Calc()

console.log(res.add(1,2))
console.log(res.add(4,5,1))
console.log(res.add(9,1,3,3))