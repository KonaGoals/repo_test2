//This is a constant for kelvin. No matter what we change it to it will convert it to Fahrenheit
const kelvin = 150;
/*Because we are only finding out what celcius is; we need to create another const and assign it to the following below*/
const celcius = kelvin - 273;
//As before so below. Just a different equation this time using let because it will be changing as the kelvin constant is changed.
let fahrenheit = celcius * (9/5)+32;
//Same concept except converting celcius to Newton
let newton = celcius * (33/100);
newton = Math.floor(newton);
console.log(`The temparature is ${newton} degrees Newton.`);
//Converted to farhenhei
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//The rankine conversion is the same as the fahrenheit conversion except we add a constant of 459.67
const rankine = fahrenheit + 459.67;
console.log(`The temperature is ${rankine} degrees Rankine.`);

//NOTE THE ONLY CONSTANT TO BE CHANGED IN VALUE FOR ACCURATE RESULTS IS KELVIN


