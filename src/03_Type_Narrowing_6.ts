type adminUser = {
    name: string;
    id: number;
    type: "Admin";
}

function isValidAdminUser(obj:any):obj is adminUser{
    return(
        typeof obj === "object" && 
        obj !== null && 
        typeof obj.username === "string" &&
        typeof obj.userId === "number" &&
        obj.type === "Admin"
    )
}
function checkAdminUser(obj:any){
    if (isValidAdminUser(obj)){
        console.log(`Username: ${obj.name}`);
        console.log(`User ID: ${obj.id}`);
    }
    else console.log("Invalid admin user");
}
checkAdminUser({username: "John", userId: 123, type: "Admin"});