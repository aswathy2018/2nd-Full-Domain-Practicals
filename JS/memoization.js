function sqrt(){
    let cached = {}

    return function(num){
        if(cached[num]){
            console.log("From Cache")
            return cached[num]
        }
        console.log("Calculating..")
        let result = num*num
        cached[num] = result

        return result
    }
}

let res = sqrt()

console.log(res(5))
console.log(res(5))
console.log(res(6))
console.log(res(6))