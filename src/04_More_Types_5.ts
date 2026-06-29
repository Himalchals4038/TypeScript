// type Role = "admin" | "user";
// type Role = "admin" | "user" | any;
type Role = "admin" | "user" | "founder" | "guest";
function redirectBasedOnRole(role:Role): void{
    if (role === "admin"){
        console.log("Redirecting to admin panel");
        return;
    }
    else if (role === "user"){
        console.log("Redirecting to user interface");
        return;
    }
    role;
};

function neverReturn():never{
    while(true){}
}