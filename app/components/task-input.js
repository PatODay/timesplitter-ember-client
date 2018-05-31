import Component from '@ember/component'
// import { alias } from '@ember/object/computed'

export default Component.extend({
  newTask: '',
  actions: {
    submit () {
      this.set('newTask', this.get('store').createRecord('task', {}))
      this.set('newTask.name', this.get('name'))
      this.set('newTask.category', this.get('category'))
      this.set('newTask.date', this.get('date'))
      this.set('newTask.location', this.get('location'))
      this.set('newTask.description', this.get('description'))
      this.set('newTask.is_completed', this.get('is_completed'))
      this.sendAction('submit', this.get('newTask'))
    }
  }
})
