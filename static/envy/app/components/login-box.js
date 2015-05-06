import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    checkLogin: function() {
      var bool = false;

      var name = username.value;
      var pass = password.value;
      console.log(name + ' ' + pass);

      //check here

      if (bool) {
        alert("Worked");
      } else  {
        alert("Didn't Work");
      }
    }.observes('username', 'password')
  }
});
