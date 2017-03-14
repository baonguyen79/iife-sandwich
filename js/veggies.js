var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
 
var veggiePrices = {"Mushrooms":0.10, "Lettuce":0.12, "Tomatoes":0.11}
     
  // Augment the original object with another method
  maker.addVeggie = function(veggieChoice) {
    
    if (veggieChoice in veggiePrices){
         return veggiePrices[veggieChoice];
    }
       
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});