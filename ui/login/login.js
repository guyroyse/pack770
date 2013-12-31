(function() {

  if (Meteor.isClient) {

    var session = (function() {

      var self = Object.create(Pack770.Common.Session);

      self.loginFailed = function(failed) {
        return self.sessionValue("loginFailed", failed);
      };

      return self;

    })();

    var view = (function() {

      var self = Object.create(Pack770.Common.PassiveView);

      self.email = self.fieldFn("sign-in-email");
      self.password = self.fieldFn("sign-in-password");

      return self;

    })();

    var controller = (function() {

      var self = Object.create(null);

      self.onStartup = function() {
        session.loginFailed(false);
      };

      self.onSignIn = function() {
        Meteor.loginWithPassword(view.email(), view.password(), function(error) {
          var failed = error !== undefined;
          session.loginFailed(failed);
          if (!failed) {
            view.password('');
            view.email('');
          }
        });
      };

      self.onSignUp = function() {
        Router.go('signup');
      };

      self.onSignOut = function() {
        Meteor.logout();
      };
      
      return self;

    })();

    Meteor.startup(function() { controller.onStartup(); });

    Template.login.loginFailed = function() {
      return session.loginFailed();
    };

    Template.login.events = {
      'click .sign-up' : function() { controller.onSignUp(); },
      'click #sign-out' : function() { controller.onSignOut(); },
      'submit #sign-in-form' : function() { controller.onSignIn(); return false; }
    };

  }

})();
