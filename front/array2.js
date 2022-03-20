const newieyork = [
  {
    name: "Michelle",
    age: 19,
    coder: true,
    gender: "f",
    us: true,
  },
  {
    name: "Sam",
    age: 25,
    coder: false,
    gender: "m",
    us: false,
  },
  {
    name: "Ivy",
    age: 26,
    coder: true,
    gender: "f",
    us: false,
  },
  {
    name: "Nick",
    age: 32,
    coder: true,
    gender: "m",
    us: true,
  },
  {
    name: "Jim Beglin",
    age: 65,
    coder: false,
    gender: "m",
    us: true,
  },
];
// Part 1 :-
// List all users in US in ascending order
// solution:
// 1 - Filter
const usersInUS = newieyork.filter((ele) => ele.us === true);

// 2 - sort method
const mySort = (a, b) => {
  if (a.name < b.name) return -1;
  else if (a.name > b.name) return +1;
  else return 0;
};

// 3 - Sort users in US in ascending order
const usersInUSInAscending = usersInUS.sort(mySort);

// Part 2 - Sort all users by age
const usersByAge = newieyork.sort((pre, next) => pre.age - next.age);

// Part 3 -  List all female coders
const femaleCoders = newieyork.filter(
  (ele) => ele.gender === "f" && ele.coder === true
);
console.log('Part 1 - List all users in US in ascending order');
console.table(usersInUSInAscending);
console.log('Part 2 - Sort all users by age');
console.table(usersByAge);
console.log('Part 3 -  List all female coders');
console.table(femaleCoders);
