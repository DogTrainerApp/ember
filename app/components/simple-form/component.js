import Ember from 'ember';
const {get} = Ember;

export default Ember.Component.extend({
  tagName: 'form',
  formValues: {},

  submit(ev) {
    ev.preventDefault();

    this.sendAction('onsubmit', get(this, 'formValues'));
  },
});
