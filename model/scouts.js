Scouts = new Meteor.Collection("scouts");

var Pack770 = Pack770 || {};
Pack770.Model = Pack770.Model || {};

Pack770.Model.Scouts = {};

Pack770.Model.Scouts.all = function() {
  return Scouts.find({}, { sort: { firstName: 1, lastName: 1 } });
};

Pack770.Model.Scouts.activate = function(scout) {
  Scouts.update({_id: scout}, {$set: {active: true}});
};

Pack770.Model.Scouts.deactivate = function(scout) {
  Scouts.update({_id: scout}, {$set: {active: false}});
};

Pack770.Model.Scouts.insert = function(scout) {
  scout.active = true;
  Scouts.insert(scout);  
};