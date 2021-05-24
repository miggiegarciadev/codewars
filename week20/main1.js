// P (Parameters: whats  coming into the function [input])
// R(Returns: what is the result, what do you end up wtih?)
// E(Examples: play with the idea, write down things that
//   can actually happen)
// P(Psuedo Code: plain English what you want to happen, step by
//   step... think of these questions: 1. What could the user do? 2. What does the user see? 3. What does the user expect?)

https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  console.log(distanceToPump, mpg, fuelLeft)

  if (distanceToPump / mpg == fuelLeft || distanceToPump / mpg <= fuelLeft){
    return true
  } else {
    return false
  }
};
