const texasss = [
    {
      name: 'Mike',
      age: 23,
      gender: 'm',
      us: false,
    },
    {
      name: 'Liz',
      age: 20,
      gender: 'f',
      us: true,
    },
    {
      name: 'Chris',
      age: 102,
      gender: 'm',
      us: true,
    },
    {
      name: 'Chuloo',
      age: 27,
      gender: 'm',
      us: false,
    },
    {
      name: 'Annie',
      age: 30,
      gender: 'f',
      us: true,
    },
  ]
  
//PART 1
  function filterAge(array) {
    return array.age > 24;
}

function isOlderThan24 (filterAge) {
    return texasss.filter(filterAge);
}

console.log(isOlderThan24(filterAge));

//PART2

     let addAllAges = texasss.reduce(function(prev, cur){
          return prev + cur.age
      }, 0)
      console.log(addAllAges);
      
    
    

//PART3
  function gender (array) {
      return array.gender === 'f';
  }
  function filterGender(gender){
      return texasss.filter(gender);
  }
  console.log(filterGender(gender));

  
  // Part 1 - Find all users older than 24
  // Part 2 - Find the total age of all users
  // Part 3 - List all female coders
  const newieyork = [
    {
      name: 'Michelle',
      age: 19,
      coder:true,
      gender: 'f',
      us: true,
    },
    {
      name: 'Sam',
      age: 25,
      coder:false,
      gender: 'm',
      us: false,
    },
    {
      name: 'Ivy',
      age: 26,
      coder:true,
      gender: 'f',
      us: false,
    },
    {
      name: 'Nick',
      age: 32,
      coder:true,
      gender: 'm',
      us: true,
    },
    {
      name: 'Jim Beglin',
      age: 65,
      coder:false,
      gender: 'm',
      us: true,
    },
  ]

  //PART2
  function sortedArrayByAge(array) {
      return array.sort()
  }
  console.log(sortedArrayByAge(newieyork))

  //PART3
  function callback (array) {
      if (array.gender === 'f'){
          return array.gender;
      }
  }
  function femaleCoders(callback) {
      return newieyork.filter(callback);

  }

  console.log(femaleCoders(callback))
  // Part 1 - List all users in US in ascending order
  // Part 2 - Sort all users by age
  // Part 3 -  List all female coders
  
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

  //PART 1
  function ageFilter (vegzas) {
      return vegzas < 25;
  }
   function under25List (ageFilter){
       let t = vegzas.filter(ageFilter);
       return t;
   }
   let totalList = under25List(ageFilter);
   let sum = totalList.reduce(function(prev, cur){
    return prev + cur.age
}, 0)
console.log(sum);



   
//PART 2
   function codersOver30 (vegzas) {
       return vegzas.age > 30;

   }
   function list (codersOver30) {
       return vegzas.filter(codersOver30);
   }
   console.log(list(codersOver30));

   //part 3
   function totalAge() {
   let texasssAge = addAllAges;
   let newieyorkAge = newieyork.reduce(function(prev, cur){
    return prev + cur.age
    }, 0)
    let vegzasAge = vegzas.reduce(function(prev, cur){
        return prev + cur.age
    }, 0)
    return texasssAge + vegzasAge + newieyorkAge;}
    console.log(totalAge())



  // Part 1 - Find the total age of male coders under 25
  // Part 2 - List all male coders over 30
  // Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.