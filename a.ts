enum Gender {
    male,
    female,
    other,
}
class Employee {
    fullName: string;
    gender: Gender;
    birthDay?: Date;
    email: string;
    phoneNumber: string;
    constructor(name: string, gender: Gender, birthday: Date, email: string, phoneNumber: string ) {
        this.fullName = name;
        this.gender = gender;
        this.birthDay = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber
    }
showEmployee(){
    console.log(this.fullName, this.gender,this.birthDay, this.email, this.phoneNumber)
}

}
let Employees: Employee[] = []
let employee1 = new Employee('John', Gender.male, new Date('03-04-1878'),'email','037111')
let employee2 = new Employee('Ada', Gender.female, new Date('03-05-1858'),'email','0378881')
Employees.push(employee1, employee2)
console.log(Employees)
Employees.splice(1,1)
console.log(Employees)
