// P (Parameters: whats  coming into the function [input])
// R(Returns: what is the result, what do you end up wtih?)
// E(Examples: play with the idea, write down things that
//   can actually happen)
// P(Psuedo Code: plain English what you want to happen, step by
//   step... think of these questions: 1. What could the user do? 2. What does the user see? 3. What does the user expect?)

/*
link: https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript

INTRUCTIONS:

P
R
E
P
*/

const areaOrPerimeter = function(l , w) {
  if(l==w){
  return l*w;
  }
  else{
    (l>w)
    return l*2+w*2;
  }
}
