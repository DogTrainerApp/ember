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
    assert.equal(currentRouteName(), 'dashboard.rounds');
  });
});

test('User can see list of rounds', function(assert) {
  visit('/');

  andThen(function() {
    let rounds = find('.round-list-item');
    let firstRoundDate = findWithAssert('.round-list-item__date').eq(0);
    // let firstRoundTime = find('.round-list-item__times').eq(0);
    // let firstRoundPrecentange = find('.round-list-item__precentages').eq(0);

    assert.equal(rounds.length, 3);
    assert.includes(firstRoundDate.text(), 'Nov 22, 2015');
  });
});
