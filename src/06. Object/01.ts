const rice = {
    name: "Basmati",
    price: 200,
    quantity: 10,
    export: true
}
// {
//     name: string,
//     price: number,
//     quantity: number,
//     export: boolean
// }
let food: {
    name: string,
    price: number,
    quantity: number,
    export: boolean
};
food = {
    name: "Arborio",
    price: 220,
    quantity: 8,
    export: false
}
type watch = {
    name: string,
    price: number,
    parts: string[],
    export: boolean
}
const watch1:watch = {
    name: "Rolex",
    price: 10000,
    parts: ["case", "crystal", "dial"],
    export: true
};