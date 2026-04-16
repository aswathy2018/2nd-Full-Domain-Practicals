let arr = [1, 2, 3, 2, 1]
function palin(arr) {
    let nArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        nArr.push(arr[i])
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== nArr[i]) {
            return false
        }
    }
    return true
}
console.log(palin(arr))