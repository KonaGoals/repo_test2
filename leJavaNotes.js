//exercise 1

const person = {
  firstName: 'Elizabeth',
  lastName: 'Harmon',
  age: 22,
  eyeColor: 'Hazel',
  greeting: function () {
    return `Hi, I am ${this.firstName} ${this.lastName}.`;
  },
};

console.log(person.greeting());

//exercise 2
class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
    greeting() {
      return `Hi, I am ${this.firstName} ${this.lastName}.`;
    }
  }
  const person = new Person('Elizabeth', 'Harmon');
console.log(person);


//exercise 3
class Person {
    greeting() {
      return `Hi, I am ${this.firstName} ${this.lastName}.`;
    }
  }
  const person = new Person();
person.firstName = 'Elizabeth';
person.lastName = 'Harmon';
person.age = 22;
person.eyeColor = 'Hazel';
console.log(person);

