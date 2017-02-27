
// This SandwichMaker IIFE augments the original one

var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
 
var meatPrices = {"Ham":1.45, "Turkey":1.15}
     
  // Augment the original object with another method
  maker.addMeat = function(meatChoice) {
    
    if (meatChoice in meatPrices){
         return meatPrices[meatChoice];
    }
       
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);
