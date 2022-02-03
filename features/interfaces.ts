const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}\nYear: ${this.year}\nBroken: ${this.broken}\n`;
  },
};

// Type annotation here is very long; had to read; maybe we have dublicate this annotations every where we make use of it.
const printVechicle = (vehicle: {
  name: string;
  year: Date;
  broken: boolean;
}): void => {
  console.log("Without interface");
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}\n`);
};

printVechicle(oldCivic);

// inteface way of doing it

interface vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const printVechicleTwo = (vehicle: vehicle): void => {
  console.log("With interface");
  console.log(vehicle.summary());
};

printVechicleTwo(oldCivic);

// refactoring
interface Reportable {
  summary(): string;
}

const printSummary = (item: Reportable): void => {
  console.log("After Refactor");
  console.log(item.summary());
};

// something interesting
const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

// I can call print summary with this object too
// Generic looking interface

printSummary(drink);
