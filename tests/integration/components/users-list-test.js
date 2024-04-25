import { module, test } from 'qunit';
import { setupRenderingTest } from 'front/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | users-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<UsersList />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <UsersList>
        template block text
      </UsersList>
    `);

    assert.dom().hasText('template block text');
  });
});
