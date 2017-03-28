var $ = require('jquery');

module.exports = {

  countTodos: function(todos, priority) {
    var count = todos.filter((todo) => {
      return (priority == todo.priority);
    }).length;

    return count;
  },
  filterTodos: function (todos, showCompleted, searchText, priority) {
    var filteredTodos = todos;

    // Filter by showCompleted and priority
    filteredTodos = filteredTodos.filter((todo) => {
      return (!todo.completed || showCompleted);
    });

    filteredTodos = filteredTodos.filter((todo) => {
      return (priority == todo.priority);
    });



    // Filter by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      var text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });

    // Sort todos with non-completed first
    filteredTodos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1;
      } else if (a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    return filteredTodos;
  }
};
