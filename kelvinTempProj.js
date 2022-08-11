//This is a constant for kelvin. No matter what we change it to it will convert it to Fahrenheit
const kelvin = 0;
/*Because we are only finding out what celcius is; we need to create another const and assign it to the following below*/
const celcius = kelvin - 273;
//As before so below. Just a different equation this time using let because it will be changing as the kelvin constant is changed.
let fahrenheit = celcius * (9/5)+32;

fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);