
// function takes value1 and value2 stores numbers inside the function,
//  I used an if/else statement to check lower and high numbers.
function higherOrLower(value1, value2) {
  if (value1 > value2) {
    return "higher";
  } else if (value1 < value2) {
    return "lower";
  }else { return "equal"}
}
console.log(higherOrLower(5, 6)); // => "lower"
console.log(higherOrLower(6.2, 5)); // => "higher"
console.log(higherOrLower(6, 6)); // => "equal"

// used the sort() method to sort the array in ascending alphabetical order.
function dvdCollection(movies1, movies2, movies3) {
  const allMovies = [...movies1, ...movies2, ...movies3];
  return allMovies.sort();

}
console.log(dvdCollection(
  ["The Hangover", "Zoolander"],
  ["The Godfather", "The Notebook"],
  ["The Matrix", "The Avengers"]
));

//used the reduce method to calculate the total age and total grade of all students.
// calculate the average age and average grade by dividing the total age and total grade by the number of students
function studentBody(students) {
  const numStudents = students.length;
  const totalAge= students.reduce((acc, cur)=>acc + cur.age, 0);
  const avgAge = totalAge/numStudents;
  const totalGrade = students.reduce((acc, cur)=>acc + cur.grade, 0);
  const avgGrade = totalGrade/numStudents;
  return {
    numStudents,
    avgAge,
    avgGrade
  };
}
console.log(studentBody([
  { name: "Alice", age: 18, grade: 85 },
  { name: "Bob", age: 17, grade: 92 },
  { name: "Charlie", age: 16, grade: 80 },
  { name: "Dave", age: 17, grade: 88 }
]));

// used the map method to create the array of fruit then displays random fruit.
class Fruit {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  eat() {
    return `You ate a ${this.name}!`;
  }

  throwAway() {
    return `You threw away a ${this.name}!`;
  }
}

function fruitBasket(fruitNames) {
  const fruits = fruitNames.map(name => new Fruit(name, Math.floor(Math.random() * 10) + 1));
  return fruits;
}

  const fruits = fruitBasket(["apple", "banana", "orange"]);
console.log(fruits[0].name); // "apple"
console.log(fruits[0].weight); //  prints random number between 1 and 10
console.log(fruits[0].eat()); // "You ate a apple!"
console.log(fruits[0].throwAway()); // "You threw away a apple!"

// used the reduced method to go through each book and accumulate the books in the group
function getBooksByLanguage(books) {
  return books.reduce((acc, cur) => {
    if (!acc[cur.language]) {
      acc[cur.language] = [];
    }
    acc[cur.language].push(cur.title);
    return acc;
  }, []);
}
const books = [ {title: "The Catcher in the Rye", language: "English"}, {title: "Don Quixote", language: "Spanish"}, {title: "One Hundred Years of Solitude", language: "Spanish"}, { title: "Pride and Prejudice", language: "English" },  { title: "The Picture of Dorian Gray", language: "English" }];
const result= getBooksByLanguage(books);
console.log(result);



/**
 * The code below exports your functions so they can be tested.
 * Notice that the names are currently commented out.
 * Uncomment the functions as you write them.
 */
module.exports = {
   higherOrLower,
   dvdCollection,
   studentBody,
   fruitBasket,
   getBooksByLanguage,
  // coinMachine,
};
