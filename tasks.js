function newTask(text, priority) {
	'use strict';
	if (typeof priority === 'undefined') {
		priority = 0;
	}
	var task = {
		text: text,
		priority: priority,
		done: false,
		order: null,

		markDone: function() {
			this.done = true;
		},

		markUndone: function() {
			this.done = false;
		},

		isDone: function() {
			return this.done;
		}
	};
	return task;
}

var todoList = [];
todoList.nextId = 1;

todoList.addTask = function(text, priority) {
	var aTask = newTask(text,priority);
	aTask.order = this.nextId++;
	this.push(aTask);
};

todoList.show = function () {
	console.log('Task report');
  this.forEach(function (task, index) {
    console.log(
    	'['+task.priority+'] - '+
    	(index+1)+': '+
    	task.text+(task.isDone() ? '✓' : '')
    );
  });
  console.log(this.length+' items listed');
};

todoList.markDone = function (index) {
  var listIndex = index - 1; // user indices start by 1, list indices start by 0
  this[listIndex].markDone();
};

todoList.markUndone = function (index) {
  var listIndex = index - 1;
  this[listIndex].markUndone();
};

todoList.remove = function(index) {
	var listIndex = index - 1;
	this.splice(listIndex,1);
};

todoList.sortByOrder = function () {
  this.sort(function (taskA, taskB) {
    return taskA.order - taskB.order;
  });
  this.show();
};

todoList.sortByPriority = function () {
  this.sort(function (taskA, taskB) {
    return taskB.priority - taskA.priority;
  });
  this.show();
};

todoList.clearDone = function() {
	var index = 0;
	while (index < this.length) {
		var task = this[index];
		if (task.isDone()) {
			this.splice(index,1);
		} else {
			index++;
		}
	}
}

todoList.addTask('Learn JavaScript', 1);
todoList.addTask('Do some practice');
todoList.markDone(1);
todoList.addTask('two', 3);
todoList.addTask('four');
todoList.markDone(3);

todoList.show();

todoList.remove(1);

todoList.sortByPriority();
todoList.sortByOrder();

todoList.markDone(3);
todoList.clearDone();
todoList.sortByOrder();
todoList.sortByPriority();

