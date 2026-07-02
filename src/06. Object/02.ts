type tyre = {material: string};
let metalTyre: tyre = {material: "alloy"};
let rubberTyre = {material: "rubber", pressure: 20};
metalTyre = rubberTyre;

type paper = {type: string};
const book = {type: "hardcover", pages: 300};
const newspaper: paper = book;

// type user = {
//     username: string,
//     id: number
// };
// const user1:user = {
//     username: "Mallik"
// };