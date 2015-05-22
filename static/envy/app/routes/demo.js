import Ember from 'ember';
import Todo from '../models/demo';

export default Ember.Route.extend({
  model: function () {
    var todos = [];
    // return $.getJSON("api/demo").then(function(response) {
    //   response.forEach(function(data) {
    //     todos.pushObject(Todo.create(data));
    //   });
    //   return todos;  
    // });
    var first = Todo.store.createRecord({id: 1, status_code: 1, project: 'first'});
    var second = Todo.store.createRecord({id: 2, status_code: 1, project: 'second'});
    var third = Todo.store.createRecord({id: 3, status_code: 1, project: 'third'});
    var last = Todo.store.createRecord({id: 4, status_code: 2, project: 'last'});
    return [first, second, third, last];
  }
});