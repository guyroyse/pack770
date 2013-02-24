var Pack770 = Pack770 || {};
Pack770.Tabs = Pack770.Tabs || {}; 

Pack770.Tabs.CurrentTab = (function() {

  var setTab = function(view) {
    Session.set("tab", view);
  };

  var getTab = function() {
    return Session.get("tab");
  };

  var isTab = function(view) {
    return getTab() === view;
  };
  
  return {
    set : setTab,
    is : isTab
  };
  
})();