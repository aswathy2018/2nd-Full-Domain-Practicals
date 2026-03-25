let arr = [
    {f:[1,22,33,5]},
    {f:[12,44,66,7]},
    {f:[15,7,8,4]}
]

let sum = arr.reduce((acc, val) => {
    let res = val.f.reduce((acc, val) => acc+val, 0)
    return res+acc
}, 0)

console.log(sum);



// let arr = [
//     {f:[1,22,33,5]},
//     {f:[12,44,66,7]},
//     {f:[15,7,8,4]}
// ]

// let sum = 0

// for(let val of arr){
//     for(let res in val){
//         for(let i=0 ; i<val[res].length ; i++){
//             sum+=val[res][i]
//         }
//     }
// }

// console.log(sum);