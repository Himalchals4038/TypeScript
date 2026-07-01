function placeOrder (name:string, price:number, quantity:number) {
    console.log(`Order placed for ${name} at ${price} for ${quantity} units`);
}
placeOrder("Arborio", 220, 8);

function afterDiscount(price: number, discount: number): number {
    return price - (price * discount / 100);
}

function placeOrder1(order:string): string | null {
    if (!order) return null;
    return `Order placed for ${order}`
}

function voidReturn(): void{
    console.log("Void return");
}

function makeRoti(roti?: number){
    if (roti) return roti;
    return 0;
}

function placeOrder2(order: string = "Milk"){
    console.log(`Order placed for ${order}`);
}
placeOrder2();
placeOrder2("Bread");