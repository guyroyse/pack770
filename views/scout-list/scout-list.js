(function() {

  if (Meteor.isClient) {

    var model = Pack770.Model.Scouts;
    
    var view = (function() {
      
      var self = Object.create(Pack770.Common.PassiveView);

      self.firstName = self.fieldFn("addScoutFirstName");
      self.lastName = self.fieldFn("addScoutLastName");
      self.rank =  self.fieldFn("addScoutRank");
      self.focusFirstName = self.focusFn("addScoutFirstName");
      
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
      
      self.onStartup = function() {
        Session.set("scoutsFilter", "active");
      };
      
      self.onViewActive = function() {
        Session.set("scoutsFilter", "active");
      };

      self.onViewInactive = function() {
        Session.set("scoutsFilter", "inactive");
      };

      self.onViewAll = function() {
        Session.set("scoutsFilter", "all");
      };

      self.onAddScout = function() {
        var scout = extractScout();
        resetForm();
        insertScout(scout);
      };
      
      self.onScoutSelect = function(id) {
        console.log("scout selected " + id);
      };
      
      self.onToggleScoutStatus = function(id) {
        var scout = model.fetchById(id);
        scout.toggleActive();
      };

      return self;
      
    })();

    Meteor.startup(controller.onStartup);

    Template.scouts.scouts = function() {
      var filter = Session.get("scoutsFilter"); 
      if (filter === "all")
        return model.fetchAll();
      if (filter == "active")
        return model.fetchActive();
      if (filter == "inactive")
        return model.fetchInactive();
    };
    
    Template.scouts.events = {
      'keydown .addScout' : function(event) {
        if (event.which === 13) 
          controller.onAddScout();
      },
      'click #viewAllScouts' : function(event) {
        controller.onViewAll();
      },
      'click #viewActiveScouts' : function(event) {
        controller.onViewActive();        
      },
      'click #viewInactiveScouts' : function(event) {
        controller.onViewInactive();
      }
    };
    
    Template.scout.events = {
      'click .toggleActive' : function(event) {
        controller.onToggleScoutStatus(this._id);
      },
      'click .editScout' : function(event) {
        controller.onScoutSelect(this._id);
      }      
    };
    
  };

})();
