var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
 
var breadPrices = {"whiteBread":.15, "wholeWheat":.20}
     
  // Augment the original object with another method
  maker.addBread = function(breadChoice) {
    
    if (breadChoice in breadPrices){
         return breadPrices[breadChoice];
    }
       
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
