import Component from '@ember/component'
import { alias } from '@ember/object/computed'
import { inject as service } from '@ember/service'

export default Component.extend({
  tagName: 'div',
  classNames: ['navbar-header'],
  auth: service(),
  isAuthenticated: alias('auth.isAuthenticated')
})
