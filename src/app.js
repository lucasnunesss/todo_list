import { createH1 } from "./index.js";
import { delTask } from "./deletTask.js";
function TodoList(title, description, project, dueDate, priority) {
  let task = { title, description, project, dueDate, priority };
  console.log("esses são as:", task);
  return task;
}

let task = [];
let arr = [];
function pegarValores(itens) {
  loadTasks();

  task.push(
    TodoList(
      itens.title,
      itens.description,
      itens.project,
      itens.dueDate,
      itens.priority,
    ),
  );

  storage();
  return task;
}

let permit;
function choseData(value) {
  for (let i = 0; i < task.length; i++) {
    delete task[i];
    task = task.filter((i) => {
      return i;
    });
    return task;
  }
}

function loadTasks() {
  const storedTasks = localStorage.getItem("task");
  let tam = task.length;
  if (storedTasks) {
    task = JSON.parse(storedTasks);
    if (task.length > tam) {
      for (let i = 0; i < task.length; i++) {
        delTask();
        createH1(
          task[i].title,
          task[i].description,
          task[i].project,
          task[i].dueDate,
          task[i].priority,
        );
      }
    }
  }
}

function storage() {
  localStorage.setItem("task", JSON.stringify(task));
  console.log("Tarefas salvas:", task);
}

export { pegarValores, choseData, loadTasks, storage, task };
