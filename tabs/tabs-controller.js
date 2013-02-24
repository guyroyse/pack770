var Pack770 = Pack770 || {};
Pack770.Tabs = Pack770.Tabs || {}; 

Pack770.Tabs.Controller = (function() {
  
  var onStartup = function() {
    Pack770.Tabs.CurrentTab.set("scouts");
  };
  
  var onTabSelection = function(tab) {
    Pack770.Tabs.CurrentTab.set(tab);    
  }
  
  var onTabSelectionFn = function(tab) {
    return function() {
      onTabSelection(tab);
    };
  };
  
  return {
    onStartup : onStartup,
    onScoutsSelection : onTabSelectionFn("scouts"),
    onDensSelection : onTabSelectionFn("dens"),
    onPackSelection : onTabSelectionFn("pack")
  };
  
})();