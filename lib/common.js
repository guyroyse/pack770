Pack770 = {};

Pack770.Common = Pack770.Common || {};

Pack770.Common.Data = (function() {

  var self = Object.create(null);

  self.insert = function(item) {
    return this.collection.insert(item);
  };

  self.all = function() {
    return this.collection.find({}, this.sort);
  }

  self.byId = function(id) {
    return this.collection.findOne({_id: id});
  };

  self.setField = function(id, field, value) {
    var fields = {};
    fields[field] = value;
    this.collection.update({_id: id}, {$set: fields});
  };
  
  self.toggleField = function(id, field) {
    var value = !this.byId(id)[field];
    var fields = {};
    fields[field] = value;
    this.collection.update({_id: id}, {$set: fields});    
  };

  return self;

})();

Pack770.Common.Session = (function() {

  var self = Object.create(null);

  self.sessionValue = function(name, value) {
    if (value !== undefined) Session.set(name, value);
    return Session.get(name);
  };

  self.clearValue = function(name) {
    Session.set(name, undefined);
  };

  return self;

})();

if (Meteor.isClient) {

  Pack770.Common.PassiveView = (function() {

    var self = Object.create(null);

    var getField = function(id) {
      return $('#' + id).val();
    };

    var setField = function(id, value) {
      $('#' + id).val(value);
    };

    var focus = function(id) {
      $('#' + id).focus();
    };

    var field = function(id, value) {
      if (value !== undefined) setField(id, value);
      return getField(id);
    };

    self.fieldFn = function(id) {
      return function(value) {
        return field(id, value);
      };
    };

    self.focusFn = function(id) {
      return function() {
        focus(id);
      };
    };

    return self;

  })();

}
