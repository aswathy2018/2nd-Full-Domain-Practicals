/////////////////////////// Also an example for Private access modifier ///////////////

class Balance{
    #balance = 0
    
    deposit(amount){
        this.#balance +=amount
    }
    
    withdraw(amount){
        if(amount<=this.#balance){
            this.#balance-=amount
        }
    }
    
    balance(){
        return this.#balance
    }
}

let val = new Balance()

val.deposit(3000)

console.log(val.balance())

val.withdraw(2500)

console.log(val.balance())