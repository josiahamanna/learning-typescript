// const carMakers: string[] = [];
const carMakers = ["ford", "toyota", "chevy"];

// const dates: Date[] = [];
const dates = [new Date(), new Date()];

//const carsByMake: string[][] = [];
const carsByMake = [["f150"], ["corolla"], ["camaro"]];

// Help with inference when extrcting values
// hover on the bellow vairables you will know
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
//carMakers.push(100);

// Help with map
carMakers.map((car: string): string => {
  return car.toUpperCase(); // type script knows the type of variable passed and will provide auto complete: like toUpperCase
});

console.log();

// Flexible types
// hower on the variable and check the type
const importantDates = [new Date(), "2030-10-10"];
//const importantDates: (string | Date)[] = [];

// Where to use typed arrays?
// Any time we need to represent a collection of records with some arbitary sort order

// Tuple: Array-like structure where each element represents some property of a record
