"use strict";

// [x] Add variable for title, type, amount, date
// [x] Use prompts and save to variable
// [x] Log to console


// Get inputs
let title = prompt('Please type a title.');
let type = prompt('Please set a type.');
let amount = prompt('Please set the amount.');
let date = prompt('Please set the correct date.');

console.log('Title: ' + title);
console.log('Type: ' + type);
console.log('Amount: ' + amount);
console.log('Date: ' + date);

// Overall balance
let income;
let outgoing;
let balance;