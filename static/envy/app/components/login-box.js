import Ember from 'ember';

export default Ember.Component.extend({
  login: null,
  checkUser: function(name, pass, login) {
    var ret = false;
    for (var i = 0; i < login.get('length'); i ++) {
      if (name === login.objectAt(i).get('username') && pass === login.objectAt(i).get('password')) {
        ret = true;
      }
      if (ret === true) {
        break;
      }
    }
  return ret;    
  },
  actions: {
    checkLogin: function() {
      var bool = false;

      var login = this.get('login');

      var name = this.$(username).val();
      var pass = password.value;
      
      bool = this.checkUser(name, pass, login);

      if (bool) {
        this.transitionTo('demo');
      } else  {
        alert("Incorrect Username/Password");
      }
    }.observes('username', 'password')
  }
});