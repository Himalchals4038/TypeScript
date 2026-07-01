enum tip {
    small = "Small",
    medium = "Medium",
    large = "Large"
};
const top1 = tip.small;
const top2 = tip.medium;
const top3 = tip.large;

enum paymentStatus {
    pending = 100,
    processing,
    cancelled,
    completed
}
const status1 = paymentStatus.pending;
console.log(status1);

const enum orangeJuice {
    ingredient = "Orange",
    quantity = 2,
    price = 20
}

let ingredients: [string, number?][] = [
    ['Haldi', 4],
    ['Mirchi', 7],
    ['Jeera', 15],
    ['Adrak', 1]
];
ingredients.push(['Saunf']);
console.log(ingredients);