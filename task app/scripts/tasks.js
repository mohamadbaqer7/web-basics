var tasks = [];
var nextId = 1;
var searchText = "";

// Add task
function addTask() {
  var input = document.getElementById("task-input");
  var text = input.value.trim();

  if (text === "") return false;

  tasks.push({ id: nextId, text: text, done: false });
  nextId++;
  input.value = "";

  renderTasks();
  updateUserCard();
  return false;
}

// Toggle done
function toggleTask(id) {
  var i;
  for (i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) tasks[i].done = !tasks[i].done;
  }
  renderTasks();
  updateUserCard();
}

// Search
function onSearchChange() {
  var s = document.getElementById("search-input");
  searchText = s.value.toLowerCase();
  renderTasks();
}

// Render list
function renderTasks() {
  var list = document.getElementById("task-list");
  var html = "";
  var i;

  for (i = 0; i < tasks.length; i++) {
    var t = tasks[i];

    if (
      searchText !== "" &&
      t.text.toLowerCase().indexOf(searchText) === -1
    ) continue;

    var cls = "task-item card-hover ";
    cls += t.done ? "done" : "notdone";

    html +=
      '<li class="' + cls + '">' +
        '<span>#' + t.id + ' - ' + t.text + '</span>' +
        '<button class="btn btn-small" onclick="toggleTask(' + t.id + ')">' +
        (t.done ? "Undo" : "Done") +
        "</button>" +
      "</li>";
  }

  list.innerHTML = html;
  updateTaskStats();
}

// Stats
function updateTaskStats() {
  var el = document.getElementById("task-stats");
  var total = tasks.length;
  var done = 0;
  var i;

  for (i = 0; i < tasks.length; i++) {
    if (tasks[i].done) done++;
  }

  var pending = total - done;

  if (total === 0) {
    el.textContent = "No tasks yet. Add your first task.";
  } else {
    el.textContent =
      "Total: " + total +
      " • Completed: " + done +
      " • Pending: " + pending;
  }
}

// Chips: visual only
function activateChip(name) {
  var all = document.getElementById("chip-all");
  var todo = document.getElementById("chip-todo");
  var done = document.getElementById("chip-done");

  all.className = "home-tag home-tag-all";
  todo.className = "home-tag home-tag-todo";
  done.className = "home-tag home-tag-done";

  document.getElementById("chip-" + name).className += " home-tag-active";
}

renderTasks();
activateChip("all");
