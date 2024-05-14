function groupEmployeesByAttribute(employees, attribute) {
    const groupedEmployees = {};

    employees.forEach(employee => {
        const value = employee[attribute];
        if (!groupedEmployees[value]) {
            groupedEmployees[value] = [];
        }
        groupedEmployees[value].push(employee);
    });

    return groupedEmployees;
}

const employeesList = [
    { id: 1, name: 'Alice', age: 25, department: 'HR' },
    { id: 2, name: 'Bob', age: 30, department: 'IT' },
    { id: 3, name: 'Charlie', age: 25, department: 'Marketing' },
    { id: 4, name: 'David', age: 35, department: 'IT' },
    { id: 5, name: 'Eve', age: 30, department: 'HR' }
];

const groupedByAge = groupEmployeesByAttribute(employeesList, 'age');
console.log(groupedByAge);

const groupedByDepartment = groupEmployeesByAttribute(employeesList, 'department');
console.log(groupedByDepartment);
