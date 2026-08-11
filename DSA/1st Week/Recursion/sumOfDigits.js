// function sum(n){
//     if(n==0){
//         return 0
//     }

//     return (n%10)+sum(Math.floor(n/10))
// }

// console.log(sum(1234))




let num=12345

function digits(num){
    if(num==0){
        return 0
    }

    return (num%10)+digits(Math.floor(num/10))
}
console.log(digits(num))