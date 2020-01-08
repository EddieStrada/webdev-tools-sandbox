const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 }
];

function makeGreen() {
  const p = document.getElementById("myDiv");
  p.classList.toggle("mystyle");
}

// Regular
console.log("hello");

// Interpolated
const poop = "💩";
console.log("I am a %s string!", "💩");
console.log(`I am a ${poop} string!`);

// Styled
console.log("%c I am some great text", "font-size:50px; background:red;");

// warning!
console.warn("OOOOHHH NO!!");

// Error :|
console.error("💩");

// Info
console.info("Crocodiles eat 3-4 people per year");

// Testing
const p = document.getElementById("myDiv");

console.assert(p.classList.contains("ouch"), "That is wrong!");
// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);
// console.clear();

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});
// counting

console.count("ME");
console.count("ME");
console.count("YOU");
console.count("YOU");
console.count("ME");
console.count("YOU");
console.count("ME");
console.count("YOU");
console.count("YOU");
console.count("YOU");
console.count("YOU");
console.count("YOU");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/EddieStrada")
  .then(data => data.json())
  .then(data => {
    console.timeEnd("fetching data");
    console.table(data);
  });

console.table(dogs);
