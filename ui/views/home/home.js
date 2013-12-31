(function() {

  if (Meteor.isClient) {

    var controller = (function() {

      var self = Object.create(null);

      self.onStartup = function() {
      };

      self.onSelectScout = function() {
        Router.go('scouts');
      };

      self.onSelectDen = function() {
        Router.go('dens');
      };

      self.onSelectPack = function() {
        Router.go('pack');
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
