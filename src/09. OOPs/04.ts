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