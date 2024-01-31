import _, { add } from "lodash";
import "./style.css";
import { pegarValores, loadTasks } from "./app.js";
import formValid from "./formValidation.js";
import {
  valid,
  warning,
  titleValidation,
  validTitle,
  warningTitle,
} from "./formValidation.js";
import { choseTask, delTask } from "./deletTask.js";
import listTask, {
  createDiv,
  projectClick,
  saveToLocalStorage,
} from "./navTask.js";
import addProjectBtn from "./addProject.js";
import { addCount } from "./addProject.js";
// AQUI SÃO FUNCIONALIDADES DO DOM
const section = document.querySelector(".content");
const p = document.createElement("p");

let esconder = false;

window.addEventListener("DOMContentLoaded", loadTasks);

function showLevels(e) {
  const high = document.querySelector("label");

  high.appendChild(p);
  if (e.target.id === "low") {
    p.innerText = "Prioridade Baixa";
    p.style.color = "Green";
    setTimeout(() => {
      p.innerText = "";
    }, 1000);
  }

  if (e.target.id === "medium") {
    p.innerText = "Prioridade Normal";
    p.style.color = "Blue";

    setTimeout(() => {
      p.innerText = "";
    }, 1000);
  }

  if (e.target.id === "high") {
    p.innerText = "Prioridade Alta";
    p.style.color = "Red";
    setTimeout(() => {
      p.innerText = "";
    }, 1000);
  }
}

function levels() {
  const check = document.querySelectorAll(".check");

  check.forEach((item) => {
    item.addEventListener("click", showLevels);
  });
}

const task = { title, description, dueDate, project, priority: "" };
const pegarInput = (e) => {
  e.preventDefault();
  const input = document.querySelectorAll("input");
  const valores = [];
  const date = [];
  input.forEach((item) => {
    if (item.id === "title") {
      titleValidation(item.value);
      if (validTitle === true) {
        warningTitle();
        return pegarInput();
      } else {
        task.title = item.value;
        valores.push(item.value);
        item.value = "";
      }
    }

    if (item.id === "description") {
      task.description = item.value;
      valores.push(item.value);

      item.value = "";
    }

    if (item.id === "dueDate") {
      const vality = new Date(item.valueAsDate);
      formValid(vality);
      if (valid === true) {
        warning();
        return pegarInput();
      } else {
        date.push(
          `${vality.getDate() + 1} / ${vality.getMonth() + 1} / ${vality.getFullYear()}`,
        );
        task.dueDate = date;
      }
    }
  });

  const project = document.querySelector("#project");
  task.project = project.value;
  valores.push(project.value);

  if (validTitle === true) {
    return pegarInput();
  } else {
    createH1(valores[0], valores[1], valores[2], date, taskPriority());
  }

  pegarValores(task);
};

function taskPriority() {
  const low = document.querySelector("#low");
  const medium = document.querySelector("#medium");
  const high = document.querySelector("#high");

  if (low.checked) {
    task.priority = "Low";
    return "Low";
  } else if (medium.checked) {
    task.priority = "Medium";
    return "Medium";
  } else if (high.checked) {
    task.priority = "High";
    return "High";
  }

  localStorage.setItem("priority", taskPriority);
}

function addTask() {
  const btn = document.querySelector(".env");
  btn.addEventListener("click", pegarInput);
}
let count = 0;

const createH1 = (title, description, project, dueDate, priority) => {
  const div = document.createElement("div");

  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const a = document.createElement("a");
  h1.classList.add("choose");

  div.classList.add("addTask");
  taskPriority();
  section.appendChild(div);
  div.appendChild(h1);
  div.appendChild(h2);
  div.appendChild(p);
  div.appendChild(a);

  projectClick();

  h1.innerText = title;
  h2.innerText = description;
  a.innerText = project;
  p.innerText = dueDate;
  if (priority === "Medium") {
    div.style.backgroundColor = "rgb(177, 221, 255)";
    const h3 = document.createElement("h3");
    div.appendChild(h3);
    h3.classList.add("priorityStyle");
    h3.style.color = "Blue";
    h3.innerText = "Medium Priority";
  } else if (priority === "Low") {
    div.style.backgroundColor = "rgb(217, 234, 217)";
    const h3 = document.createElement("h3");
    div.appendChild(h3);
    h3.classList.add("priorityStyle");
    h3.style.color = "Green";
    h3.innerText = "Low Priority";
  } else if (priority === "High") {
    div.style.backgroundColor = "rgb(238, 196, 196)";
    const h3 = document.createElement("h3");
    div.appendChild(h3);
    h3.classList.add("priorityStyle");
    h3.style.color = "rgb(39, 12, 12)";
    h3.innerText = "High Priority";
  }
  choseTask();
  listTask(a.innerText);
};

levels();
addTask();
addProjectBtn();

export { section, createH1, taskPriority };
