import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('simple-form', 'Integration | Component | simple form', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{simple-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#simple-form}}
      template block text
    {{/simple-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it can capture user input', function(assert) {
  this.render(hbs`
    {{#simple-form onsubmit="captureSubmit" as |formValues|}}
      {{input value=formValues.name}}

      <button class="form-submit">Submit</button>
    {{/simple-form}}
  `);

  this.on('captureSubmit', function(formValues) {
    assert.equal(formValues.name, 'Tomster');
  });

  this.$('input').val('Tomster');
  this.$('input').change();
  this.$('button').click();
});
