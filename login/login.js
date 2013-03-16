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

      self.onSignOut = function() {
        Meteor.logout();
      };

      self.onSignIn = function() {
        Meteor.loginWithPassword(view.email(), view.password(), function(error) {
          console.log(error);
          session.loginFailed(error !== undefined);
        });
      };

      return self;

    })();

    Meteor.startup(function() { controller.onStartup(); });

    Template.login.loginFailed = function() {
      return session.loginFailed();
    };

    Template.header.events = {
      'click #sign-out' : function() { controller.onSignOut(); },
      'click #sign-in' : function() { controller.onSignIn(); },
      'keydown #sign-in-email' : function(event) { if (event.which === 13) controller.onSignIn(); },
      'keydown #sign-in-password' : function(event) { if (event.which === 13) controller.onSignIn(); }
    };

  }

})();