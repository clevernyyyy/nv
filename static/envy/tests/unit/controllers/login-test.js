import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:login', 'LoginController', {
  // Specify the other units that are required for this test.
  needs: ['controller:login']
});


test('working', function(assert) {
  assert.expect(1);

  var controller = this.subject();

  console.log(this);
  var username = controller.get('username');
  



  assert.equal(username,'1');
});