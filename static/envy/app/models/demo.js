import DS from 'ember-data';

export default DS.Model.extend({
  status: function() {
    var status_code = this.get('status_code');
    return status_code === 1 ? 'Unassigned' : 'Assigned';
  }.property('status_code')
});
