const person = [[], [], [], []];

const array = [
  [
    [null],
    [null],
    [null],
    [null],
    [null],
    [null],
    [null],
    [null],
    [null],
    [null],
    [null],
    [null],
    [null],
  ],
  [
    [null],
    [null],
    [null],
    [null],
    [null],
    [null],
    [null],
    [null],
    [null],
    [null],
    [null],
    [null],
    [null],
  ],
];
let entry = array[0][1];
console.log(entry);

if (entry[0] === null) {
  entry[0] = person;
} else {
  console.log(2);
  entry.push(person);
}

console.log(array);
