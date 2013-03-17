(function() {
  
  if (Meteor.isClient) {

    Template.header.packName = function() {
      return "Pack 770";
    };

    Template.header.packLocation = function() {
      return "Huber Ridge, Westerville, Ohio";
    };
    
  }
  
})();