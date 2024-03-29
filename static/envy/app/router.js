import Ember from 'ember';
// import config from './config/environment';

var Router = Ember.Router.extend({
  location: 'hash'
});

Router.map(function() {
  // Login Page
  this.route('login', {path: '/login'});

  this.route('session', {path: '/session'});

  // Scorecard
  this.resource('scorecard', function() {
    // Survey Questions
    this.route('survey', function() {
      this.route('core');
      this.route('custom');
      this.route('all');
    });
    // Categories
    this.route('indices');

    // Engagement Hierarchy
    this.route('engagement-hierarchy');
  });

  // Any other route not found above
  this.route('error', {path: '/*path'});
  this.route('feed', {path: '/feed'});
});

export default Router;

