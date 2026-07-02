class Admin {
    private pass: number = 37485162;
    private pin: number = 3652;
    reveal(){
        return `Password: ${this.pass}, Pin: ${this.pin}`;
    }
};

class Brand{
    protected regNo:number = 148623;
    protected GSTNo: number = 35478162;
}
class Company extends Brand{
    getName(){
        return `RegNo: ${this.regNo}, GSTNo: ${this.GSTNo}`;
    }
}