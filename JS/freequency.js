function freq(arr){
    let fre = {}

    for(let val of arr){
        fre[val] = (fre[val] || 0)+1
    }

    for(let val in fre){
        // console.log(`${val}: ${fre[val]}`)

        if(fre[val]<=1){
            console.log(val)
        }
    }
}

freq([1,3,4,5,1,7,2,6,3,7])