/////////////////////// Also an example for Private access modifier ///////////////

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

val.deposit(5000)

console.log(val.balance())

val.withdraw(3500)

console.log(val.balance())