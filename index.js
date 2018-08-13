//katzDeli is an empty array that represents the empty deli at the beginning of the day
var katzDeli = [];


// function takeANumber accepts two parameters katzDeli and customerName, it checks using if statement if the katzDeli array is empty (katzDeli.length > 0). If the array is not empty it pushes the argument for parameter customerName to the end of the katzDeli array and returns the following string `Welcome ${customerName}. You are number ${katzDeli.length} in line.`
function takeANumber(katzDeli, customerName) {
  if (katzDeli.length > 0);
  katzDeli.push(customerName);
  return (`Welcome, ${customerName}. You are number ${katzDeli.length} in line.`)
};

//function nowServing
function nowServing(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    i++;
  }
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return (`Currently serving ${katzDeli.shift()}.`)
  }
};
