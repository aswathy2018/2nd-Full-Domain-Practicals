let arr = [1,2,3,4,5,6,7]
let arr2 = [...arr]

arr2[2] = 9
arr2[4] = 11

console.log("Original array: ", arr)

console.log("Copied array: ", arr2)