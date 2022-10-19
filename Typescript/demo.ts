export {};

interface Person {
  firstName: string;
  lastName: string;
}

function fun(person: Person) {
  return person.firstName + person.lastName;
}

function fun2() {}

function fun3() {}

function fun4() {}

let p = {
  firstName: "Dion",
  lastName: "Ang",
};

console.log(fun(p));
