///////// front /////////////

let arr = [1,2,3,4,5,6,7,8,9]
let val = 0

for(let i=0 ; i<arr.length ; i++){
    if(arr[i]%2==0){
        let temp = arr[i]

        for(let j=i ; j>val ; j--){
            arr[j] = arr[j-1]
        }
        arr[val] = temp
        val++
    }
}

console.log(arr)


/////// Back //////////////

// let arr = [1,2,3,4,5,6,7,8,9]
// let val = arr.length-1

// for(let i=val ; i>=0 ; i--){
//     if(arr[i]%2==0){
//         let temp = arr[i]

//         for(let j=i ; j<val ; j++){
//             arr[j] = arr[j+1]
//         }

//         arr[val] = temp
//         val--
//     }
// }

// console.log(arr)