function rev(arr){
    let left = 0
    let right = arr.length-1

    while(left<right){
        while(left<right && arr[left]%2!==0){
            left++
        }

        while(left<right && arr[right]%2!==0){
            right--
        }

        if(left<right){
            let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp

            left++
            right--
        }
    }
    return arr
}

let arr = [1,2,3,4,5,6,7,8,9]
console.log(rev(arr));