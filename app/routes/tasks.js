import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  flashMessages: service(),
  model () {
    return this.get('store').findAll('task')
  },
  actions: {
    deleteTask (task) {
      return task.destroyRecord()
      .then(() => {
        this.get('flashMessages')
          .warning('You deleted this task!')
      })
      .catch(() => {
        this.get('flashMessages')
          .danger('There was a problem. Please try again.')
      })
    },
    toggleTaskDone (task) {
      return task.save()
      .then(() => this.get('flashMessages').success('Task Status Updated'))
      .catch(() => this.get('flashMessages').danger('Failed to chage task status'))
    },
    closeEdit (task) {
      this.set('editing', false)
      // return true
      task.reload()
    },
    saveComplete (task) {
      task.save()
    }
  }
});
