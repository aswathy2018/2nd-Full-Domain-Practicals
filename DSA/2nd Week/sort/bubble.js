// function bubble(arr){
//     for(let i=0 ; i<arr.length ; i++){
//         for(let j=i+1 ; j<arr.length ; j++){
//             if(arr[i]>arr[j]){
//                 [arr[i], arr[j]] = [arr[j], arr[i]]
//             }
//         }
//     }
//     return arr
// }
// console.log(bubble([3,6,1,4,2]))


function bubble(arr){
    for(let i=0 ; i<arr.length ; i++){
        for(let j=i+1 ; j<arr.length ; j++){
            if(arr[i].length<=arr[j].length){
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr
}

console.log(bubble(["Bablu", "Oranguttan", "Jabajaba", "Microoo", "Kaliyaa", "Chottu"]))