#!/usr/bin/env node

const degToRad = (degrees) => {
  return (degrees * Math.PI) / 180;
};

const [degrees] = process.argv.slice(2).map(Number);

if (isNaN(degrees)) {
  console.error("Invalid input. Please provide a valid number for degrees.");
  console.error("Usage: deg-to-rad-cli <degrees>");
  process.exit(1);
}

const radians = degToRad(degrees);

console.log(`Degrees: ${degrees}°`);
console.log(`Radians: ${radians} rad`);