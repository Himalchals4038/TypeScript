const arr1:string[] = ["Fire", "Wind", "Water", "Earth"];
const arr2:number[] = [18, 43, 90, 27, 64, 53, 88];
const rating:Array<number> = [3.8, 4.1, 5.0, 4.7, 4.6];

type notebook = {
    brand: string,
    price: number, 
    page: number,
    quality: string,
    isReleased: boolean
};
const merit:notebook[] = [
    {brand: "Kingfisher", price: 204, page: 395, quality: "Q3", isReleased: true},
    {brand: "Premo", price: 187, page: 195, quality: "Q1", isReleased: false}
];
merit.push({brand: "Sumo", price: 387, page: 592, quality: "Q2", isReleased: true});