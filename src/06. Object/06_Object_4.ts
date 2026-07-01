type smartPhone = {
    model: string,
    price: number,
    release: number,
    battery: number
};
const updatePhone = (updates: Partial<smartPhone>) => {
    console.log("Updating phone with features", updates);
};
updatePhone({release: 2020});
updatePhone({battery: 4000});

type TV = {
    model? :string,
    price?: number,
    release?: number,
    battery?: number
};
const updateTV = (updates: Required<TV>) => {
    console.log("Updating TV with features", updates);
};
// updateTV({release: 2020});
// updateTV({battery: 4000});
updateTV({
    model: "LG",
    release: 2020,
    battery: 4000,
    price: 10000
});

type desktop = {
    ram: number,
    ssd: number,
    processor: string
};
const updateDesktop = (updates: Pick<desktop, "ram" | "ssd">) => {
    console.log("Updating desktop with features", updates);
};
updateDesktop({
    ram: 8, 
    ssd: 500
});
// updateDesktop({ram: 8, ssd: 500, processor: "i7"});

type microwave = {
    model: string,
    price: number,
    release: number,
    battery: number
};
const updateMicrowave = (updates: Omit<microwave, "release">) => {
    console.log("Updating microwave with features", updates);
};
updateMicrowave({
    model: "LG",
    battery: 4000,
    price: 10000
});
// updateMicrowave({release: 2020});
// updateMicrowave({model: "LG", battery: 4000, price: 10000, release: 2020});