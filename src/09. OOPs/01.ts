class Employee {
    name: string;
    id: number;
    type: string;
    constructor(name: string, id: number, type: string){
        this.name = name;
        this.id = id;
        this.type = type;
    }
}
const Employee1 = new Employee("Chandrasekhar", 123, "Technical");
console.log(Employee1);