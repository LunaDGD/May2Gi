----EASY----/

function exercise(sport) {
  console.log(`today's exercise: ${sport}`);
} // returns void (console.log())

const run = exercise("running");
console.log(run);

const swim = exercise("swimming");
console.log(swim);

//----MEDIUM----//

function cutPizzaSlices(numofSlices) {
  function people(numofPeople) {
    let slices = numofSlices / numofPeople;
    return `Each person gets ${slices} slices of Pizza`;
  }
  return people;
}
var sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2));
console.log(sharePizza(3));

//----HARD----//
function person() {
  function privatePerson() {
    const pii = {
      name: "Diego",
      snn: 12345,
      get name() {
        return this.name;
      },
    };
  }
}
console.log(person());

//----VERY HARD----//
class User {
  constructor(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
    let exercise = () => {
      console.log("Running is fun said no one ever");
    };

    let fetchJob = () => console.log(`${this.name} is a ${this.job}`);
  }
}
let userOne = new User("Diego", "student", 21);

console.log(userOne);
