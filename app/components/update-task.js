import Component from '@ember/component';
import { alias } from '@ember/object/computed'

export default Component.extend({
  classNameBindings: ['crossed'],
  crossed: alias('task.is_completed'),
  actions: {
    edit () {
      this.set('editing', true)
    },
    closeEdit (task) {
      this.sendAction('closeEdit', task)
    },
    update (task) {
      task.save()
        .then(() => this.set('editing', false))
        .then(() => this.get('flashMessages').success('Task Saved'))
        .catch(() => {
          this.get('flashMessages').danger('Edit Failed')
          // this.transitionTo('tasks')
          // task.destroyRecord()
        })
    },
    deleteTask (task) {
      this.sendAction('deleteTask', this.get('task'))
    },
    toggleTaskDone () {
      this.toggleProperty('crossed')
      this.sendAction('toggleTaskDone', this.get('task'))
    }
  }
});
