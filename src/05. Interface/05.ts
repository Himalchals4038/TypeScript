type Config = {
    readonly AppName: string,
    readonly AppVersion: number,
    signature: string,
    isDebug: boolean,
    isProduction: boolean
};

const config1: Config = {
    AppName: "MyApp",
    AppVersion: 3,
    signature: "abc123",
    isDebug: true,
    isProduction: false
};

// config1.AppName = "NewApp";
// console.log(config1);
// config1.AppVersion = 4;
// console.log(config1);

config1.signature = "xyz456";
console.log(config1);
config1.isDebug = false;
console.log(config1);
config1.isProduction = true;
console.log(config1);