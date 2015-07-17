import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ["auth"],

  actions: {
    login: function(username, password) {
      var un = this.get('username');
      console.log(un, '  username:', username);


      this.get("controllers.auth").send("login");
    }
  }
});
