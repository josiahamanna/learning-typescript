// No need to memorize the properties
const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// Need to memorize the order of properties (like first index is color, second index is 'is carbonated')
// we need special annotation for representing a tuple

//const pepsi: [string, boolean, number] = ["brown", true, 10];

// we can make use of type alias
type Drink = [string, boolean, number];
const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 0];
