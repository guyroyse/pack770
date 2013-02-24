(function() {

  if (Meteor.isClient) {
    
    var model = Pack770.Model.Scouts;
    
    var view = (function() {
      
      var self = Object.create(Pack770.Common.PassiveView);

      self.firstName = self.getSetFieldFn("addScoutFirstName");
      self.lastName = self.getSetFieldFn("addScoutLastName");
      self.rank =  self.getSetFieldFn("addScoutRank");
      self.focusFirstName = self.setFocusFn("addScoutFirstName");
      
      return self;
      
    })();
    
    var controller = (function() {
      
      var self = Object.create(null);

      var extractScout = function() {
        return {
          firstName: view.firstName(),
          lastName: view.lastName(),
          rank: view.rank()
        };
      };
      
      var resetForm = function() {
        view.firstName('');
        view.lastName('');
        view.rank('');
        view.focusFirstName();
      };
      
      var insertScout = function(scout) {
        model.insert(scout);
      };

      self.onAddScout = function() {
        var scout = extractScout();
        resetForm();
        insertScout(scout);
      };
      
      self.onToggleScoutStatus = function(id) {
        model.toggleStatus(id);
      };

      return self;
      
    })();
    
    Template.scouts.scouts = function() {
      return model.all();
    };
    
    Template.scouts.events = {
      'keydown .addScout' : function(event) {
        if (event.which === 13) 
          controller.onAddScout();
      },
      'click .star' : function(event) {
        controller.onToggleScoutStatus(this._id);
      }
    };
    
  };

})();
