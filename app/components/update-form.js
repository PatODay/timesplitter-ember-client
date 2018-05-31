import Component from '@ember/component';
import { alias } from '@ember/object/computed'


export default Component.extend({
  name: alias('task.name'),
  category: alias('task.category'),
  date: alias('task.date'),
  location: alias('task.location'),
  description: alias('task.description'),
  is_completed: alias('task.is_completed'),
  actions: {
    update (task) {
      this.set('task.name', this.get('name'))
      this.set('task.category', this.get('category'))
      this.set('task.date', this.get('date'))
      this.set('task.location', this.get('location'))
      this.set('task.description', this.get('description'))
      this.set('task.is_completed', this.get('is_completed'))
      this.sendAction('update', this.get('task'))
    },
    deleteTask () {
      return this.sendAction('deleteTask', this.get('task'))
    }
  }
});
