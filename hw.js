//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
  pizza:["Deep Dish","South Side Thin Crust"],
  tacos:"Anything not from Taco bell",
  burgers:"Portillos Burgers",
  ice_cream:["Chocolate","Vanilla","Oreo"],
  shakes:[{
      oberwise:"Chocolate",
      dunkin:"Vanilla",
      culvers:"All of them",
      mcDonalds:"Sham-rock-shake",
      cupids_candies:"Chocolate Malt"
  }]
}


function displayFavorites(person) {
  for (let foodCatagory in person) {
    let favorites = person[foodCatagory];

    if (Array.isArray(favorites)) {
      favorites.forEach(favorite => {
        console.log(favorite);
      });
    }
    else {
      console.log(favorites);
    }
  }
}

displayFavorites(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

function Person(name, age) {
  this.name = name
  this.age = age
}

// Use an arrow to create the printInfo method
Person.prototype.printInfo = function() {
  let method = () => {
    console.log(`Name: ${this.name}, Age: ${this.age}`)
  };
  return method();
}


// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
Person.prototype.addAge = function(yearsToAdd = 1) {
  let method = (years) => {
    this.age += years;
  };
}


let person1 = new Person('Dimitrius', 21)
let person2 = new Person('Nia', 20)
console.log(person1)
console.log(person2)

// =============Exercise #3 ============//
/*

  Create a Promised based function that will check a string to determine if it's length is greater than 10.
  If the length is greater than ten console log "Big word". 
  If the length of the string is less than 10 console log "Small Number"
*/

function checkStringLength(inputString) {
  return new Promise((resolve, reject) => {
    if (typeof inputString !== 'string') {
      reject(new Error('Error'))
    } else if (inputString > 10) {
      console.log('Big Word');
      resolve('Big Word')
    } else {
      console.log('Small Number')
      resolve('Small Number')
    }
  })
}

checkStringLength('')


console.log('------------------------------------------------------------------------------')
console.log('Code Wars Problems')

// https://www.codewars.com/kata/search/javascript?q=&r%5B%5D=-8&beta=false&order_by=total_completed%20desc
function numberToString(num) {
  return num.toString()
}

// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
function repeatStr(n, s) {
  let result = '';
  for (let i = 0; i < n; i++) {
      result += s;
  }
  return result;
}
