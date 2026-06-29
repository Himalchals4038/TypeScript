let newData:any;
newData = "abc";
newData = 36.15;
// newData = true;
// newData = [48, 37, 95, 20, 64];
try {
    console.log(newData.toUpperCase());
} catch (error) {
    // console.log(error.message);
    if (error instanceof Error) console.log(error.message);
    else console.log(error);
}

const data:unknown = "Random Text";
const strData:string  = data as string;