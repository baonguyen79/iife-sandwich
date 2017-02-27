var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
 
var cheesePrices = {"Cheddar":0.10, "Provolone":0.20, "Swiss":0.12}
     
  // Augment the original object with another method
  maker.addCheese = function(cheeseChoice) {
    
    if (cheeseChoice in cheesePrices){
         return cheesePrices[cheeseChoice];
    }
       
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});