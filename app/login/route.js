import Ember from 'ember';
const { get } = Ember;

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  beforeModel() {
    if (get(this, 'session.isAuthenticated')) {
      this.transitionTo('dashboard');
    }
  },

  actions: {
    loginUser(formValues) {
      this.get('session').authenticate('authenticator:oauth2', formValues.email, formValues.password).catch(() => {
      });
    },
  },
});
