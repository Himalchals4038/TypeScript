const arr1 = [1, 2, 3];
const arr2 = ["a", "b", "c"];
const arr3 = [1, "a", "b", "c"];
const arr4 = [...arr1, ...arr2, ...arr3];
console.log(arr4);

let orders = ['24', '83', '46', '18', '98', '51'];
let currOrder: string[] = [];
for (let order of orders){
    if (Number.parseInt(order)%2 === 0){
        currOrder.unshift(order);
    }
}
console.log(...currOrder);