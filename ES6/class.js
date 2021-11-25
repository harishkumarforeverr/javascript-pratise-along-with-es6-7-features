class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHello() {
    return `Hello ${this.firstName} ${this.lastName}`;
  }
  static isStudent(obj) {
    return obj.constructor === Student;
  }
}

const obj1 = new Student();
console.log(Student.isStudent(obj1));
console.log(obj1);
