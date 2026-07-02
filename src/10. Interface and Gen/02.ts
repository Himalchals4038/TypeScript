interface Server{
    readonly IP: string,
    readonly port: number,
    protocol: string
}
const server1:Server = {
    IP: "127.0.0.1",
    port: 8080,
    protocol: "http"
}
// server1.IP = "38.0.101.76";

interface ReducePrice{
    (price: number, discount: number): number
}
const afterDiscount:ReducePrice = (price: number, discount: number): number => price-(price*discount/100);
console.log(afterDiscount(75, 10));

interface StartServer{
    start(login: number): void;
    stop(exitCode: number): void;
}
const server:StartServer = {
    start(login: number): void {
        console.log(`Server started with login ${login}`);        
    },
    stop(exitCode: number): void {
        console.log(`Server stopped with exit code ${exitCode}`);        
    }
}
server.start(623);
server.stop(0);