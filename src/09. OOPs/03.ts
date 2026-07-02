class Register{
    #balance: number = 0;
    deposit(amount: number){
        this.#balance += amount;
    }
    withdraw(amount: number){
        this.#balance -= amount;
    }
    getBalance(){
        return this.#balance;
    }
}
const register1 = new Register();
register1.deposit(1000);
register1.withdraw(500);
console.log(register1.getBalance());