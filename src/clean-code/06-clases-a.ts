(() => {
  type Gender = 'M' | 'F';

  class Person {
    constructor(public name: string, public gender: Gender, public birtdate: Date) {}
  }
  const person = new Person('Gerardo', 'M', new Date());

  console.log(person);
})();
