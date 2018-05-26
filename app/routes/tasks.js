import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  flashMessages: service(),
  model () {
    return this.get('store').findAll('task')
  },
  actions: {
    createTask (newTask) {
      this.get('store').createRecord('task', newTask)
      .save()
      .then(() => {
        this.get('flashMessages')
          .success('You created a new task!')
      })
      .catch(() => {
        this.get('flashMessages')
          .danger('There was a problem. Please try again.')
      })
    },
    deleteTask (task) {
      task.destroyRecord()
      .then(() => {
        this.get('flashMessages')
          .warning('You deleted this task!')
      })
      .catch(() => {
        this.get('flashMessages')
          .danger('There was a problem. Please try again.')
      })
    },
    updateTask (task) {
      task.save()
      .then(() => {
        this.get('flashMessages')
          .success('You updated this task!')
      })
      .catch(() => {
        this.get('flashMessages')
          .danger('There was a problem. Please try again.')
      })
    },
    saveComplete (task) {
      task.save()
    }
  }
});
