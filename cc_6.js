class Employee {

    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `${this.name} works in the ${this.department} department.`;
    }

}

class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    describe() {
        return `${this.name} is a manager in the ${this.department} department and manages ${this.teamSize} employees.`;
    }

}

const employee1 = new Employee("Alice Johnson", "Sales");
const employee2 = new Employee("David Martinez", "Marketing");

const manager1 = new Manager("Bob Smith", "Engineering", 8);
const manager2 = new Manager("Karen Lee", "Human Resources", 4);

class Company {

    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        this.employees.forEach(employee => {
            console.log(employee.describe());
        });
    }

}

const company = new Company();

company.addEmployee(employee1);
company.addEmployee(employee2);

company.addEmployee(manager1);
company.addEmployee(manager2);

company.listEmployees();