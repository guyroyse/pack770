if (Meteor.isClient) {

  var controller = (function() {
    
    var self = Object.create(null);

    self.onStartup = function() {
      Pack770.Domain.CurrentView.set("home");
    };
  
    return self;
  
  })();

  Meteor.startup(function() { controller.onStartup(); });

  Template.view.home = function() { return Pack770.Domain.CurrentView.is("home"); };
  Template.view.signUp = function() { return Pack770.Domain.CurrentView.is("signUp"); };
  Template.view.scoutList = function() { return Pack770.Domain.CurrentView.is("scoutList"); };
  
}