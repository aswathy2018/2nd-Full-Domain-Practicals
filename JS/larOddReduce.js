let arr = [44,76,36,4,8,5,3,67,23]

let lar = arr.reduce((max, num)=>{
    if(num%2!==0 && num>max){
        return num
    }
    return max
},-Infinity)

console.log(lar);