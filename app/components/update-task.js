import Component from '@ember/component';

export default Component.extend({
  actions: {
    edit () {
      this.set('editing', true)
    },
    submit (task) {
      task.save()
        .then(() => this.set('editing', false))
        .then(() => this.get('flashMessages').success('Task Saved'))
        .catch(() => this.get('flashMessages').danger('Edit Failed'))
    },
    deleteTask () {
      this.sendAction('deleteTask', this.get('task'))
    }
  }
});
