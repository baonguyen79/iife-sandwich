var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
 
var condimentPrices = {"Mayonnaise":0.05, "Mustard":0.06, "Salsa":0.07}
     
  // Augment the original object with another method
  maker.addCondiment = function(condimentChoice) {
    
    if (condimentChoice in condimentPrices){
         return condimentPrices[condimentChoice];
    }
       
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});