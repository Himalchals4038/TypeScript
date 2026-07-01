type checkUser = {
    username: string;
    userId: number;
}
function isValidUser(obj:any):obj is checkUser{
    return(
        typeof obj === "object" && 
        obj !== null && 
        typeof obj.username === "string" &&
        typeof obj.userId === "number"
    )
}
function checkUser(obj:any){
    if (isValidUser(obj)){
        console.log(`Username: ${obj.username}`);
        console.log(`User ID: ${obj.userId}`);
    }
    else console.log("Invalid user");
}
checkUser({username: "John", userId: 123});
checkUser({type: "Admin", id: 456});

function transactUser(item:checkUser | string){
    if (isValidUser(item)){
        console.log(`Username: ${item.username}`);
        console.log(`User ID: ${item.userId}`);
    }
    else console.log("Invalid user");
}
transactUser({username: "John", userId: 123});
transactUser("Admin");