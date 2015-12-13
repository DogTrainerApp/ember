import { test } from 'qunit';
import moduleForAcceptance from 'client-app/tests/helpers/module-for-acceptance';
import { invalidateSession } from 'client-app/tests/helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | dashboard/acess', {
  beforeEach() {
    authenticate();
  },
});

test('Guests should be redirect to login page', function(assert) {
  invalidateSession(this.application);
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('Logged in user should see home page', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
