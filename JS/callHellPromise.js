function getUser(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("Hii user..")
            resolve("user1")
        }, 500)
    })
}

function getOrder(user){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("Order confirmed of user: ", user)
            resolve(["Order1", "Order2"])
        }, 500)
    })
}

function getPayment(orders){
    return new Promise(resolve=>{
        setTimeout(()=>{
            console.log("Payment processed: ", orders)
            resolve("Payment done")
        }, 500)
    })
}

getUser()
.then(user=>getOrder(user))

.then(orders=>getPayment(orders))

.then(payment=>console.log(payment))

.catch(err=>console.log(err))