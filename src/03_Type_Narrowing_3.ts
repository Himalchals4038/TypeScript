class bankFunction1{
    fetchAccount(){
        return "Account fetched successfully";
    }
}
class atmFunction1{
    withdrawMoney(){
        return "Amount withdrawn successfully";
    }
}
function customer(bank: bankFunction1 | atmFunction1){
    if (bank instanceof bankFunction1){
        console.log(bank.fetchAccount());
    }
    else if (bank instanceof atmFunction1){
        console.log(bank.withdrawMoney());
    }
}
customer(new bankFunction1());
customer(new atmFunction1());