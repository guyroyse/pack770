var Pack770 = Pack770 || {};
Pack770.Data = Pack770.Data || {};

Pack770.Data.Scouts = (function() {

  var self = Object.create(Pack770.Common.Data);

  self.collection = new Meteor.Collection("scouts");
  self.sort = { sort: { firstName: 1, lastName: 1 } };

  self.active = function() {
    return this.collection.find({active: true}, self.sort);
  };

  self.inactive = function() {
    return this.collection.find({active: false}, self.sort);
  };

  return self;

})();