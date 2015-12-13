import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  time() {
    return faker.random.number({min: 1, max: 10}) + 'mins';
  },

  date() {
    return faker.date.past();
  },

  percentage() {
    return faker.random.number({min: 40, max: 100}) + '%';
  },
});
