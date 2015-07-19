import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ["auth"],

  actions: {
    login: function() {
      this.get("controllers.auth").send("login");
    }
  }
});