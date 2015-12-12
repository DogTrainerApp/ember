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

test('User can login with valid credentials', function(assert) {
  visit('/login');
  fillIn('[name=email]', 'valid@example.com');
  fillIn('[name=password]', 'password1234');
  click('.form-submit');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
