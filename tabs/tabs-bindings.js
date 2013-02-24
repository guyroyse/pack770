if (Meteor.isClient) {
  
  Meteor.startup(function() { Pack770.Tabs.Controller.onStartup(); });
  
  Template.tabs.events({
    'click li#scouts-tab' : function() { Pack770.Tabs.Controller.onScoutsSelection(); },
    'click li#dens-tab'   : function() { Pack770.Tabs.Controller.onDensSelection(); },
    'click li#pack-tab'   : function() { Pack770.Tabs.Controller.onPackSelection(); }
  }); 
  
  Template.tab.scouts = function() { return Pack770.Tabs.CurrentTab.is("scouts"); };

}