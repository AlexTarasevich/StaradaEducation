// создайте несколько разных объектов с разными уровнями вложенности 
// скопируйте их c помощью structuredClone 
// убедитесь что данные независимы (поменяйте их и проверьте разницу) 



const person = {
    name: 'John Doe',
    age: 30
};


const employee = {
    name: 'Jane Smith',
    department: 'IT',
    salary: 50000
};


const company = {
    name: 'Acme Corp',
    employees: [
        {
            name: 'John Smith',
            department: 'Sales',
            salary: 60000
        },
        {
            name: 'Alexa Done',
            department: 'IT',
            salary: 70000
        }
    ],
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    }
};


const personCopy = structuredClone(person);
const employeeCopy = structuredClone(employee);
const companyCopy = structuredClone(company);


person.age = 31;
employee.salary = 55000;
company.employees[0].salary = 65000;
company.address.city = 'New City';


personCopy.age = 32;
employeeCopy.salary = 60000;
companyCopy.employees[0].salary = 70000;
companyCopy.address.city = 'Old City';


console.log('Original person:', person);
console.log('Copied person:', personCopy);

console.log('Original employee:', employee);
console.log('Copied employee:', employeeCopy);

console.log('Original company:', company);
console.log('Copied company:', companyCopy);