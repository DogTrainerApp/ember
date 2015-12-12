import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    loginUser() {
      this.transitionTo('index');
    },
  },
});
