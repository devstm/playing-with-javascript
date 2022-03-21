// ARRAY 3
const vegzas = [
    {
      name: 'Charly',
      age: 32,
      coder:true,
      gender: 'm',
    },
    {
      name: 'Law',
      age: 21,
      coder:true,
      gender: 'm',
    },
    {
      name: 'Rosey',
      age: 42,
      coder:false,
      gender: 'f',
    },
    {
      name: 'Steph',
      age: 18,
      coder:true,
      gender:'f'
    },
    {
      name: 'Jon',
      age: 47,
      coder:false,
      gender: 'm',
    },
  ]
  
  // Part 1 - Find the total age of male coders under 25
  let total = 0;
  vegzas.forEach(ele => {
      if( ele.gender=== 'm' && ele.age<25){
          total += ele.age
      }
  });
  console.log('Part 1 - Find the total age of male coders under 25');
  console.log(total);
  // Part 2 - List all male coders over 30
  let maleCodersOver30 = vegzas.filter(ele => (ele.gender=== 'm' && ele.age > 30) )

  console.log('Part 2 - List all male coders over 30');
  console.table(maleCodersOver30)

