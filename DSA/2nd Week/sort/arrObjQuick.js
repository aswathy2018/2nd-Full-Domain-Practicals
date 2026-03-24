let product = [
    {name: "Fan", price: 2410, category: "Electronics"},
    {name: "Lipstick", price: 730, category: "Makeup product"},
    {name: "Pan", price: 6283, category: "Kitchen product"},
    {name: "Fridge", price: 35872, category: "Electronics"},
    {name: "Car", price: 95836, category: "Vehicles"}
]

let cash = product.map(obj=>obj.price)

function quick(arr){
    if(arr.length<2){
        return arr
    }

    let pivot = arr[arr.length-1]
    let left = []
    let right = []

    for(let i=0 ; i<arr.length-1 ; i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quick(left), pivot, ...quick(right)]
}

console.log(quick(cash))