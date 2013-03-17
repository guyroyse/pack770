(function() {

  if (Meteor.isClient) {

    var view = (function() {

      var self = Object.create(Pack770.Common.PassiveView);

      return self;

    })();

    var controller = (function() {

      var self = Object.create(null);

      self.onStartup = function() {
      };
      
      self.onSignUp = function() {
        Pack770.Domain.CurrentView.set("profile");
      };
      
      self.onCancel = function() {
        Pack770.Domain.CurrentView.set("home");        
      };

      return self;

    })();

    Meteor.startup(function() { controller.onStartup(); });

    Template.signUp.events = {
      'click #sign-up-cancel' : function() { controller.onCancel(); },
      'submit #sign-up-form' : function() { controller.onSignUp(); return false; }
    };

  }

})();