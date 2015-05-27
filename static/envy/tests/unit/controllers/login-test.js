import Ember from 'ember';
import startApp from '../../helpers/start-app';
import {
  moduleFor,
  test
} from 'ember-qunit';

var App;
var store;

moduleFor('controller:login', 'LoginController', {
  // Specify the other units that are required for this test.
  needs: ['controller:login'],
  setup: function () {
    App = startApp();
    store = App.__container__.lookup('store:main');
  },
 
  teardown: function () {
    Ember.run(App, App.destroy);
  }
});
