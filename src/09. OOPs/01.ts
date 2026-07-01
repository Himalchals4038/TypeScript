class Employee {
    name: string;
    id: number;
    type: string;
    constructor(name: string, id: number, type: string){
        this.name = name;
        this.id = id;
        this.type = type;
    }
}
const Employee1 = new Employee("Chandrasekhar", 123, "Technical");
console.log(Employee1);

class Admin {
    private pass: number = 37485162;
    private pin: number = 3652;
    reveal(){
        return `Password: ${this.pass}, Pin: ${this.pin}`;
    }
};

class Brand{
    protected regNo:number = 148623;
    protected GSTNo: number = 35478162;
}
class Company extends Brand{
    getName(){
        return `RegNo: ${this.regNo}, GSTNo: ${this.GSTNo}`;
    }
}

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

class Wallet{
    readonly maxCapacity: number = 35100;
    constructor(maxCapacity: number){
        this.maxCapacity = maxCapacity;
    }
    private _key = 4;
    get key(){
        return this._key;
    }
    set key(value: number){
        if (value > 10) throw new Error("Invalid key");
        this._key = value;
    }   
}
const wallet1 = new Wallet(1000);
console.log(wallet1.key);
wallet1.key = 11;
console.log(wallet1.key);