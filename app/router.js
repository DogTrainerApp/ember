import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function() {
  this.route('login');

  this.route('dashboard', { path: '/' }, function() {
    this.route('rounds', { path: '/' }, function() {

    });
  });
});

export default Router;
