var Pack770 = Pack770 || {};
Pack770.Domain = Pack770.Domain || {};

Pack770.Domain.CurrentView = (function() {

  var self = Object.create(Pack770.Common.Session);

  self.set = function(view) {
    return self.sessionValue("view", view);
  };

  self.is = function(view) {
    return self.sessionValue("view") === view;
  };

  return self;

})();