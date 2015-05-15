import Ember from 'ember';

export default Ember.Component.extend({
  apiName: '',
  apiPass: '',
  checkUser: function(name, pass, apiName, apiPass) {
    if (name === apiName && pass === apiPass) {
      return true;
    } else {
      return false;
    }
  },
  actions: {
    checkLogin: function() {
      var bool = false;

      var name = this.$(username).val();
      var pass = password.value;
      console.log(name + ' ' + pass);

      //get Django working here
      //var apiName = ?
      //var apiPass = ?

      bool = true; //checkUser(name, pass, apiName, apiPass);

      if (bool) {
        alert("Worked");
      } else  {
        alert("Didn't Work");
      }
    }.observes('username', 'password')
  }
});