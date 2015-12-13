import { test } from 'qunit';
import moduleForAcceptance from 'client-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | dashboard/rounds', {
  beforeEach() {
    authenticate();
  },
});

test('User can visit rounds index when authenticated', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentRouteName(), 'dashboard.rounds.index');
  });
});

test('User can see list of rounds', function(assert) {
  visit('/');

  andThen(function() {
    let rounds = find('.round-list-item');
    let firstRoundDate = findWithAssert('.round-list-item__date').eq(0);
    let firstRoundTime = findWithAssert('.round-list-item__time').eq(0);
    let firstRoundPrecentange = findWithAssert('.round-list-item__precentage').eq(0);

    assert.equal(rounds.length, 3);
    assert.includes(firstRoundDate.text(), 'Nov 22, 2015');
    assert.includes(firstRoundTime.text(), '10mins');
    assert.includes(firstRoundPrecentange.text(), '75%');
  });
});
