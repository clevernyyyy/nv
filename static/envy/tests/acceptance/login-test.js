import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'envy/tests/helpers/start-app';

var application;

module('Acceptance | login', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /login', function(assert) {
  assert.expect(1);
  visit('/login');
  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('verifying login with no inputs stays on same page', function(assert) {
  assert.expect(1);
  visit('/login');
  click('button[value="Login"]');
  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('verifying login with good login takes you to demo page', function(assert) {
  assert.expect(2);
  visit('/login');
  andThen(function() {
    assert.equal(currentURL(), '/login', 'routed correctly');
  });

  fillIn('input[placeholder="Username"]','clevernyyyy');
  fillIn('input[placeholder="Password"]','cowabunga');
  click('button[value="Login"]');

  andThen(function() {
    assert.equal(currentURL(), '/demo', 'got to demo page correctly');
  });
});
