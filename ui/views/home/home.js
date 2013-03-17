(function() {

  if (Meteor.isClient) {

    var controller = (function() {

      var self = Object.create(null);

      self.onStartup = function() {
      };

      self.onSelectScout = function() {
        Pack770.Domain.CurrentView.set("scoutList");
      };

      self.onSelectDen = function() {
        Pack770.Domain.CurrentView.set("denList");
      };

      self.onSelectPack = function() {
        Pack770.Domain.CurrentView.set("pack");
      };

      return self;

    })();

    Meteor.startup(function() { controller.onStartup(); });

    Template.home.events = {
      'click #home-manage-scouts' : function() { controller.onSelectScout(); },
      'click #home-manage-den' : function() { controller.onSelectDen(); },
      'click #home-manage-pack' : function() { controller.onSelectPack(); }
    };

  }

})();