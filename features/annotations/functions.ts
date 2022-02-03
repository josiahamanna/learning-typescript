// Arrow function
const add = (a: number, b: number): number => {
  return a + b;
};

// We do not rely on type inference here

const subtract = (a: number, b: number) => {
  a - b; // we are not returning anything but still typescript did not yell at us
};

// Function
function divide(a: number, b: number): number {
  return a / b;
}

// Anonimous function
const multiply = function (a: number, b: number): number {
  return a * b;
};

// Function not returning anything
// applies for null, undefined
const logger = (message: string): void => {
  console.log(message);
};

// Function not fully excecuted
const throwError = (message: string): never => {
  throw new Error(message);
};

// while destructuring
const todaysWeather = {
  date: new Date(),
  weather: "sunny"
};
const logWeather = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
