const users = [
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
  const users2 = [
    {
      name: "Michelle",
      age: 19,
      gender: "f",
      us: true,
    },
    {
      name: "Sam",
      age: 25,
      gender: "m",
      us: false,
    },
    {
      name: "Ivy",
      age: 26,
      gender: "f",
      us: false,
    },
    {
      name: "Nick",
      age: 32,
      gender: "m",
      us: true,
    },
  ];

  // 1- Array.at(index) -> return element in index 
  //  Negative integers count back from the last item in the array.
  let last = users.at(-1);
  console.log('Last Element In Users Array');
  console.table(last);

  // 2- Array.concat(array)
  // merge two or more arrays ->two array as Array.concat(array1,array2)
  let merged = users.concat(users2);
  console.log('Merged Array Using Concat');
  console.table(merged);

  // 3- Array.filter(function)
  // creates a new array with all elements that pass the test implemented by the provided function
  let usersUnder25 = users.filter(({ age }) => age < 25 );
  console.log('Filter Array To Return All Users Under Age 25');
  console.table(usersUnder25);

  // 4- Array.find(function)
  // returns the first element in the provided array that satisfies the provided testing function
  let ChrisUser = users.find(({ name }) => name === 'Chris' );
  console.log('User With Name "Chris"');
  console.table(ChrisUser);

  // 5- Array.forEach(function)
  // Executes a provided function once for each array element.
  let copyArray = Array.from(users);
  copyArray.forEach(ele => ele.name = 'saleh');
  console.log('All User Name Should Become "Saleh"');
  console.table(copyArray);

  // 6- Array.from(iterable object)
  // creates a new, shallow-copied Array instance from an input object
  let ArrayFromMyName = Array.from('Saleh');
  console.log('Array From My Name "Saleh"');
  console.table(ArrayFromMyName);

  // 7- Array.includes(element)
  // determines whether an array includes a value, returning true or false as appropriate
  const pets = ['cat', 'dog', 'bat', 'dog'];
  let isInclude = pets.includes('cat');
  console.log("Q: Is Array Includes Liz In Elements? A:" , isInclude);

  // 8- Array.indexOf(value)
  // returns the first index at which a given element can be found in the array,
  // -1 if it is not present
  let firstDogIndex = pets.indexOf('dog');
  let secDogIndex = pets.indexOf('dog', 2);
  console.log('index of 1st dog in array', firstDogIndex);
  console.log('index of 2nd dog in array', secDogIndex);

  // 9- Array.join();
  // creates and returns a new string by concatenating all of the elements in an array
  let myNameString = ArrayFromMyName.join('');
  console.log('Join Array From My Name ', myNameString);

  // 10- Array.map(function)
  // creates a new array populated with the results of calling a provided function on every element in the calling array
  let mapped = pets.map(ele => ele+=" animal");
  console.log(mapped);

  // 11- Array.pop()
  // removes the last element from an array and returns that element
  console.log('Length before remove', users.length);
  let pop = users.pop();
  console.log('Remove And return last element and length become', users.length);
  console.table(pop); 

  // 12- Array.push(element)
  const Omar = {
    name: "Omar",
    age: 33,
    gender: "m",
    us: false,
  }
  users.push(Omar)
  console.table(users);

  // 13- Array.reduce(function)
  let totalAge = users.reduce((init , next) => init+next.age,0);
  console.log("Total Age = ", totalAge);

  // 14- Array.reverse()
  console.log("before reverse",pets);
  let reverse1 = pets.reverse();
  console.log("after  reverse",reverse1);

  // 15- Array.shift()
  // removes the first element from an array and returns that removed element
  const firstElement = pets.shift();
  console.log(pets);

  // 16- Array.toString()
  // returns a string representing the specified array and its elements.
  const stringArray = pets.toString();
  console.log('string array = ', stringArray);

  // 17- Array.splice(start, deleteCount, item1, item2, itemN)
  const months = ['Jan', 'March', 'April', 'June'];
  months.splice(1, 0, 'Feb');
  console.log(months);

  // 18- Array.sort()
  const nums = [6, 9, 4, 8, 7, 3, 1, 5, 2];
  const sorted = nums.sort((a,b)=>a-b);
  console.log(nums);

  // 19- Array.some()
  // tests whether at least one element passes the test implemented by function.
  // It returns true if, it finds an element passes the test; otherwise it returns false.
  const isPass = nums.some(ele => ele/3 ===3);
  const isPass2 = nums.some(ele => ele/3 ===4);
  console.log(isPass);
  console.log(isPass2);

  // 20- Array.slice(start, end)
  // method returns a copy of a portion of an array into a new array selected from start to end.
  let slice1 = nums.slice(2);
  console.log('slice2', slice1);
  let slice2 = nums.slice(3,5);
  console.log('slice3-5', slice2);



