type adminUser = {
    name: string;
    id: number;
    type: "Admin";
}
type techEmp = {
    type: "Technical";
    id: number;
    name: string;
    commits: number;
}
type productEmp = {
    type: "Product";
    id: number;
    name: string;
    sales: number;
}
type financeEmp = {
    type: "Finance";
    id: number;
    name: string;
    expenses: number;
}
type HREmp = {
    type: "HR";
    id: number;
    name: string;
    projects: number;
}

type Employee = adminUser | techEmp | productEmp | financeEmp | HREmp;
function isValidEmployee(obj:any):obj is Employee{
    return(
        typeof obj === "object" && 
        obj !== null && 
        typeof obj.username === "string" &&
        typeof obj.userId === "number" &&
        typeof obj.type === "string"
    )
}
isValidEmployee({name: "Chandrasekhar", id: 123, type: "Admin"});

function makeEmployee(order: Employee){
    switch (order.type){
        case "Admin":
            return `Admin User`;
            break;
        case "Technical":
            return `Tech Employee`;
            break;
        case "Product":
            return `Product Employee`;
            break;
        case "Finance":
            return `Finance Employee`;
            break;
        case "HR":
            return `HR Employee`;
            break;
    }
}
makeEmployee({name: "Chandrasekhar", id: 123, type: "Admin"});
makeEmployee({type: "Technical", id: 456, name: "Vijay", commits: 10});
makeEmployee({type: "Product", id: 789, name: "Jay", sales: 20});
makeEmployee({type: "Finance", id: 101, name: "Mahendra", expenses: 30});
makeEmployee({type: "HR", id: 202, name: "Parul", projects: 40});

function searchCompany(order: adminUser | techEmp | productEmp | financeEmp | HREmp){
    if ("commits" in order) console.log(`Commits: ${order.commits}`);
    else if ("sales" in order) console.log(`Sales: ${order.sales}`);
    else if ("expenses" in order) console.log(`Expenses: ${order.expenses}`);
    else if ("projects" in order) console.log(`Projects: ${order.projects}`);
    else console.log("Invalid order");
}
searchCompany({name: "Chandrasekhar", id: 123, type: "Admin"});
searchCompany({type: "Technical", id: 456, name: "Vijay", commits: 10});
searchCompany({type: "Product", id: 789, name: "Jay", sales: 20});
searchCompany({type: "Finance", id: 101, name: "Mahendra", expenses: 30});
searchCompany({type: "HR", id: 202, name: "Parul", projects: 40});