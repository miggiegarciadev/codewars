link: wwww.codewars.com/kata/54fe05c4762e2e3047000add/train/javascript


Instructions:


PREP:
P (Parameters: whats  coming into the function [input])
R(Returns: what is the result, what do you end up wtih?)
E(Examples: play with the idea, write down things that
  can actually happen)
P(Psuedo Code: plain English what you want to happen, step by
  step... think of these questions: 1. What could the user do? 2. What does the user see? 3. What does the user expect?)


Definitions:


Answer:
class Ship {
  constructor(draft,crew){
    this.draft = draft;
    this.crew = crew;
  }
  isWorthIt(){
    return this.draft - this.crew * 1.5 > 20;
  }
}


Extra Notes:
