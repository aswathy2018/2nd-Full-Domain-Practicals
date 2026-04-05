// let obj = {
//     a: 3,
//     b: 9,
//     c: 2
// }

// let max = -Infinity
// let key = ""

// for(let val in obj){
//     if(obj[val]>max){
//         max = obj[val]
//         key = val
//     }
// }

// console.log("Key: ", key);
// console.log("Value: ", max);


///////////////////////////2nd largest value's key

let obj = {
    a: 56, 
    b: 22,
    c: 292
}

let fir = -Infinity
let sec = -Infinity

let key1 = ""
let key2 = ""

for(let val in obj){
    if(obj[val]>fir){

        // fir = obj[val]
        // key1 = val

        
        sec = fir
        key2 = key1

        fir = obj[val]
        key1 = val
    }else if(obj[val]<fir && obj[val]>sec){
        sec = obj[val]
        key2 = val
    }
}

console.log("First value: ", fir);
console.log("First key: ", key1);

console.log("Second value: ", sec);
console.log("Second key: ", key2);