import Route from '@ember/routing/route';

export default Route.extend({
  // model () {
  //   return this.store.createRecord('task', {})
  // },
  actions: {
    submit (task) {
      return task.save()
      .then(() => this.transitionTo('tasks'))
      .then(() => {
        this.get('flashMessages').success('Successfully added task')
      })
      .catch(() => {
        this.get('flashMessages').danger('Failed to add task')
      })
    }
  }
});
