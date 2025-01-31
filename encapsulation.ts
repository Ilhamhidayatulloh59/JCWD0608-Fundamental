class Employee {
  employeeName: string = "";

  setEmployeeName(name: string) {
    this.employeeName = name;
  }

  getEmployeeName() {
    return this.employeeName;
  }
}

const employee = new Employee();

employee.setEmployeeName("John");

console.log(employee.getEmployeeName());
