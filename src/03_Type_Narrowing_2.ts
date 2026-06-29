function withdrawAmount(amount: 'Small' | 'Medium' | 'Large' | number, cost: number){
    if (typeof amount === "number") console.log(`Amount: ${amount}`);
    else if (amount === "Small") console.log(`Small amount`);
    else if (amount === "Medium" || amount === "Large") console.log(`Extra amount`);
    console.log(`Cost: ${cost}`);
}
withdrawAmount(100, 50);
withdrawAmount("Small", 50);
withdrawAmount("Medium", 150);
withdrawAmount("Large", 250);
withdrawAmount(200, 350);