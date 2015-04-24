import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    checkLogin: function() {
      var bool = false;

      //check here

      if (bool ) {
        alert("Worked");
      } else  {
        alert("Didn't work");
      }
    }
  }
});
