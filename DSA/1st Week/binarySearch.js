function binarySearch(array, target, left = 0, right = array.length - 1) {
    if (left > right) {
        return -1;
    }

    let mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
        return mid;
    }

    if (target < array[mid]) {
        return binarySearch(array, target, left, mid - 1);
    }

    return binarySearch(array, target, mid + 1, right);
}

console.log(binarySearch([1,2,3,4,5,6,7],4))                                                                                


// function binary(arr, target, left = 0, right = arr.length-1){
//     if(left>right){
//         return -1
//     }
    
//     let mid = Math.floor((left+right)/2)
    
//     if(target==arr[mid]){
//         return{
//             value: arr[mid],
//             index: mid
//         }
//     }
    
//     if(target<arr[mid]){
//         return binary(arr, target, left, mid-1)
//     }
    
//     return binary(arr, target, mid+1, right)
// }

// let res = binary([1,2,3,4,5,6,7], 3)

// if(res){
//     console.log("value: ", res.value)
//     console.log("Index: ", res.index)
// }else{
//     console.log("Not found..")
// }
