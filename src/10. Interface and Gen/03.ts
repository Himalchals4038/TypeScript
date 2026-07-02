interface giveReview{
    [rating1: string]: number
}
const review:giveReview = {
    "Excellent": 5,
    "Very Good": 4,
    "Good": 3,
    "Average": 2,
    "Poor": 1
}

interface product{
    id: number,
    name: string
}
interface product{
    price: number,
    quantity: number
}
const product1:product = {
    id: 1,
    name: "Pen",
    price: 10,
    quantity: 10
}
console.log(product1);