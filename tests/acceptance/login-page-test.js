import { test } from 'qunit';
import moduleForAcceptance from 'client-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login page');

test('User can visit login page', function(assert) {
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('User can see the login form', function(assert) {
  visit('/login');

  andThen(function() {
    var inputs = find('input');

    assert.equal(inputs.length, 2);

    assert.equal(inputs.eq(0).attr('name'), 'email');
    assert.equal(inputs.eq(1).attr('name'), 'password');
  });
});
