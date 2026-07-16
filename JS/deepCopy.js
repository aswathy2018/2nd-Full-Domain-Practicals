let arr = [1,2,3,[4,5,[6,7]]]

let cp = JSON.parse(JSON.stringify(arr))


cp[2] = 89
cp[3][1] = 12
cp[3][2][1] = 27

console.log("Updated array: ", cp)
console.log("Normal: ", arr);