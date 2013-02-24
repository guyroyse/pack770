var Pack770 = Pack770 || {};
Pack770.Common = Pack770.Common || {};

if (Meteor.isClient) {

  Pack770.Common.PassiveView = (function() {

    var getField = function(id) {
      return $('#' + id).val();
    };

    var setField = function(id, value) {
      $('#' + id).val(value);
    };

    var setFocus = function(id) {
      $('#' + id).focus();
    };

    var getSetField = function(id, value) {
      if (value !== undefined) setField(id, value);
      return getField(id);
    };

    var getSetFieldFn = function(id) {
      return function(value) {
        return getSetField(id, value);
      };
    }

    var setFocusFn = function(id) {
      return function() {
        setFocus(id);
      };
    };
    
    return {
      getSetFieldFn: getSetFieldFn,
      setFocusFn: setFocusFn
    };

  })();
  
}