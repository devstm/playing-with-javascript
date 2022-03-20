const texasss = [
  {
    name: "Mike",
    age: 23,
    gender: "m",
    us: false,
  },
  {
    name: "Liz",
    age: 20,
    gender: "f",
    us: true,
  },
  {
    name: "Chris",
    age: 102,
    gender: "m",
    us: true,
  },
  {
    name: "Chuloo",
    age: 27,
    gender: "m",
    us: false,
  },
  {
    name: "Annie",
    age: 30,
    gender: "f",
    us: true,
  },
];


// Part 1 :- 
// Find all users older than 24
// hint: if i need to return array with filtered data => user filter  

let older24 = texasss.filter((ele) => ele.age > 24);



// Part 2 :- 
// Find the total age of all users
// accumulator in first loop === initial value 
// so -> if array element is object you should not user accumulator.age
// if i run reduce function without initial value and array element is object,
// you will get unexpected results
// in this example result = 201022730 and it should be 202

let totalAge = texasss.reduce(function (accumulator, curValue) {
  return accumulator + curValue.age;
},0);

// Part 3 :- 
// List all female coders

let females = texasss.filter(ele => ele.gender === 'f');





console.log('Part 1: Find all users older than 24');
console.table(older24);
console.log('Part 3: List all female coders');
console.table(females);
console.log('Part 2: Find the total age of all users');
console.log(totalAge);
