interface Box<T>{
    content: T;
}
const itemBox: Box<string> = {content: "Bhim"};
const numberBox: Box<number> = {content: 315};

interface connectAPI<T>{
    status: number,
    data: T
}
const VPN1: connectAPI<string> = {status: 200, data: "Connected"};
const VPN2: connectAPI<number> = {status: 200, data: 315};
const VPN3: connectAPI<boolean> = {status: 200, data: true};
const VPN4: connectAPI<{name: string}> = {status: 200, data: {name: "Docomo"}};