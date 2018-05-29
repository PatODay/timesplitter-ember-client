import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  category: DS.attr('string'),
  date: DS.attr('string'),
  is_completed: DS.attr('boolean'),
  location: DS.attr('string'),
  description: DS.attr('string'),
  user: DS.belongsTo('user')
});
