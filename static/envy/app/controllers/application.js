import Ember from 'ember';

export default Ember.Controller.extend({
  login: null,
  init: function() {
    var t = this;
    this.store.find('login').then(function(records){
      t.set('login',records);
    });
  },
});
