// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var breadChooser = document.getElementById("bread-chooser");
var meatChooser = document.getElementById("meat-chooser");
var cheeseChooser = document.getElementById("cheese-chooser");
var condimentChooser = document.getElementById("condiments-chooser");
var veggieChooser = document.getElementById("veggies-chooser");
var orderTotal = document.getElementById("Total");

/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
breadChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen
  SandwichMaker.addTopping(SandwichMaker.addBread(selectedTopping));

  // Add the topping to the SandwichMaker to increase the total price
  orderTotal.innerHTML = " Your sandwich order total is: " + SandwichMaker.getTotal();
});

//Meat
meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen
  SandwichMaker.addTopping(SandwichMaker.addMeat(selectedTopping));

  // Add the topping to the SandwichMaker to increase the total price
  orderTotal.innerHTML = " Your sandwich order total is: " + SandwichMaker.getTotal();
});

// Cheese
cheeseChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen
  SandwichMaker.addTopping(SandwichMaker.addCheese(selectedTopping));

  // Add the topping to the SandwichMaker to increase the total price
  orderTotal.innerHTML = " Your sandwich order total is: " + SandwichMaker.getTotal();
});

// Condiments
condimentChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen
  SandwichMaker.addTopping(SandwichMaker.addCondiment(selectedTopping));

  // Add the topping to the SandwichMaker to increase the total price
  orderTotal.innerHTML = " Your sandwich order total is: " + SandwichMaker.getTotal();
});

// veggies
veggieChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;

  // Determine the price of the topping chosen
  SandwichMaker.addTopping(SandwichMaker.addVeggie(selectedTopping));

  // Add the topping to the SandwichMaker to increase the total price
  orderTotal.innerHTML = " Your sandwich order total is: " + SandwichMaker.getTotal();
});

