import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ["auth"],
  login: null,

  init: function() {
    var t = this;
    this.store.find('login').then(function(records){
      t.set('login',records);
    });
  },
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
    checkLogin: function(form, username, password) {
      this.get("controllers.auth").send("login");

      //var bool = false;
      //var login = this.get('login');

      //bool = this.checkUser(username, password, login);

      //if (bool) {
        //this.transitionTo('demo');
      //} else  {
        //Ember.$("#loginError strong").text("Error!  A problem has occured while logging in, please try again.").show().parent().fadeIn().delay(2000).fadeOut('slow', function() {
          //Ember.$("#loginError strong").text("");
        //});

      //}
    }
  }
});
