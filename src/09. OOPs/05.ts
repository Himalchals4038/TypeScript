class placeOrder{
    static outletName = "Costco"; 
    constructor (public item: string){}
}
console.log(placeOrder.outletName);
const order1 = new placeOrder("Arborio");
console.log(order1.item);

abstract class Deliver{
    abstract deliver(): void;
}
class Order extends Deliver{
    deliver(){
        console.log("Delivered");
    }
}

class ProcessTransaction{
    process(){}
}
class CheckTransaction{
    constructor(private check: ProcessTransaction){}
    verify(){
        this.check.process();
    }
}