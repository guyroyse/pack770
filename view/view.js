if (Meteor.isClient) {

  var session = (function() {
    
    var self = Object.create(Pack770.Common.Session);
    
    self.currentView = function(view) {
      return self.sessionValue("view", view);
    };

    self.currentViewIs = function(view) {
      return self.sessionValue("view") === view;
    };

    return self;
    
  })();

  var controller = (function() {
    
    var self = Object.create(null);

    self.onStartup = function() {
      session.currentView("home");
    };
  
    return self;
  
  })();

  Meteor.startup(function() { controller.onStartup(); });

  Template.view.home = function() { return session.currentViewIs("home"); };
  Template.view.scoutList = function() { return session.currentViewIs("scoutList"); };
  
}