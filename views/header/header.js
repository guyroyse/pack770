(function() {
  
  if (Meteor.isClient) {

    var controller = (function() {

      var self = Object.create(null);

      self.onStartup = function() {
      };

      self.onSelectPackName = function() {
        Pack770.Domain.CurrentView.set("home");
      };

      return self;

    })();

    Template.header.packName = function() {
      return "Pack 770";
    };

    Template.header.packLocation = function() {
      return "Huber Ridge, Westerville, Ohio";
    };

    Meteor.startup(function() { controller.onStartup(); });

    Template.header.events = {
      'click #header-pack-name' : function() { controller.onSelectPackName(); }
    };
    
  }
  
})();