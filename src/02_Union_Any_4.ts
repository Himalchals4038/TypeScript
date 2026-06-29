// let arr5 = [24, 76, 38, 13, 50, 69];
let arr5 = [24, 76, 38, 12, 50, 69];
let res5 : number | undefined;
for (let num of arr5){
    if (num === 12){
        res5 = num;
        break
    }
}
console.log(res5);