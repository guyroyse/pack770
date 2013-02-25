Scouts = new Meteor.Collection("scouts");

var Pack770 = Pack770 || {};
Pack770.Model = Pack770.Model || {};

Pack770.Model.Scouts = (function() {

  var self = Object.create(null);
  
  var sortByFirstLast = { sort: { firstName: 1, lastName: 1 } };
  
  var addMethodsToScout = function(scout) {

    if (scout !== undefined) {
      scout.toggleActive = function() {
        this.active = !this.active;
        Scouts.update({_id: this._id}, {$set: {active: this.active}});
      };
    }

  };
  
  self.fetchAll = function() {
    return Scouts.find({}, sortByFirstLast);
  };
  
  self.fetchActive = function() {
    return Scouts.find({active: true}, sortByFirstLast);    
  };

  self.fetchInactive = function() {
    return Scouts.find({active: false}, sortByFirstLast);
  };

  self.fetchById = function(id) {
    var scout = Scouts.findOne({_id: id});
    addMethodsToScout(scout);
    return scout;
  };

  self.insert = function(scout) {
    scout.active = true;
    Scouts.insert(scout);
  };
  
  return self;
  
})();