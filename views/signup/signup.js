(function() {

  if (Meteor.isClient) {

    var view = (function() {

      var self = Object.create(Pack770.Common.PassiveView);

      self.email = self.fieldFn("sign-up-email");
      self.password = self.fieldFn("sign-up-password");

      return self;

    })();

    var controller = (function() {

      var self = Object.create(null);

      self.onStartup = function() {
      };
      
      self.onSignUp = function() {
        Accounts.createUser({
          email: view.email(), 
          password: view.password() 
        }, function(status) {
          console.log(status);
        });
        Pack770.Domain.CurrentView.set("home");
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