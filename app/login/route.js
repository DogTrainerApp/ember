import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  actions: {
    loginUser(formValues) {
      this.get('session').authenticate('authenticator:oauth2', formValues.email, formValues.password).catch(() => {
      });
    },
  },
});
