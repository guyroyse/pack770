Scouts = new Meteor.Collection("scouts");

var Pack770 = Pack770 || {};
Pack770.Model = Pack770.Model || {};

Pack770.Model.Scouts = {};

Pack770.Model.Scouts.all = function() {
  return Scouts.find({}, { sort: { firstName: 1, lastName: 1 } });
};

Pack770.Model.Scouts.toggleStatus = function(id) {
  var status = !Scouts.findOne({_id: id}).active;
  Scouts.update({_id: id}, {$set: {active: status}});
};

Pack770.Model.Scouts.insert = function(scout) {
  scout.active = true;
  Scouts.insert(scout);  
};