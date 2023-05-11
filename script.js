// Copyright (c) 2022 Olantu All rights reserved.

// Created by: Olantu
// Created on: May 2022

// This file contains the JS functions for index.html

"use strict";

// This function displays all numbers within the specified range
function displayNumbers() {
  // Get the user input for the minimum and maximum numbers
  let minNum = parseInt(document.getElementById("minInput").value);
  let maxNum = parseInt(document.getElementById("maxInput").value);

  // Validate the input
  if (isNaN(minNum) || isNaN(maxNum) || !Number.isInteger(minNum) || !Number.isInteger(maxNum)) {
    alert("Invalid input! Please enter valid whole numbers.");
    return;
  }

  // Initialize the counter to the minimum number
  let counter = minNum;

  // Initialize numbers as an empty string
  let numbers = "";

  // Determine the step value based on the direction of the range
  let step = minNum <= maxNum ? 1 : -1;

  // Use a while loop to display the numbers within the range
  while ((minNum <= maxNum && counter <= maxNum) || (minNum > maxNum && counter >= maxNum)) {
    // Build the string of numbers with a line break each time
    numbers += counter + "<br>";

    // Increment or decrement the counter based on the step value
    counter += step;
  }

  // Return the string of numbers back to HTML
  document.getElementById("display-results").innerHTML = numbers;
}
