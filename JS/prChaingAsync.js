function getUser(){
    return Promise.resolve({id: 1, name: "Aswathy"})
}

function getOrder(userId){
    return Promise.resolve(["Top", "Bottom"])
}

function getPayment(order){
    return Promise.resolve(`ordered item is ${order}`)
}

async function fetchItems(){
    let user = await getUser()
    let order = await getOrder(user.id)
    let payment = await getPayment(order[0])
    console.log(payment)
}

fetchItems()