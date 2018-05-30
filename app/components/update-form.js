import Component from '@ember/component';

export default Component.extend({
  actions: {
    update (task) {
      this.set('task.name', this.get('name'))
      this.set('task.category', this.get('category'))
      this.set('task.date', this.get('date'))
      this.set('task.location', this.get('location'))
      this.set('task.description', this.get('description'))
      this.set('task.is_completed', this.get('is_completed'))
      this.sendAction('update', this.get('task'))
    }
  }
});
