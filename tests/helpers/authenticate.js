import Ember from 'ember';
import { authenticateSession } from 'client-app/tests/helpers/ember-simple-auth';

export default Ember.Test.registerAsyncHelper('authenticate', function(app) {
  return authenticateSession(app);
});
