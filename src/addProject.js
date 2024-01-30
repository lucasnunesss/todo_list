import { add, pick } from "lodash"
import listTask, { saveToLocalStorage }  from './navTask'
import { contTask, load, projectClick } from "./navTask"
import { delTask } from "./deletTask"
import { task } from "./app"
const nav = document.querySelector('nav')
const ul = document.querySelector('ul')
export default function addProjectBtn(){
const btn = document.querySelector('#btn')
btn.classList.add('btnInp')
btn.addEventListener('click', createInput)
}
let count = 0
function createInput(){
  const input = document.createElement('input')
  const btnInput = document.createElement('button')
  
  nav.appendChild(input)
  nav.appendChild(btnInput)
  btnInput.innerText = 'Add Project'
  envInput(btnInput, input)

  return input
}

function envInput(btnInput, input){
  btnInput.addEventListener('click', e => {

    const ul = document.querySelector('ul')
    nav.appendChild(ul)
    const li = document.createElement('li')
    const p = document.createElement('p')
    
    ul.appendChild(li)
    ul.appendChild(p)
    p.classList.add(input.value)
    p.classList.add("independent")
    let value2 = input.value
    li.innerText = input.value
    li.classList.add(input.value)
    p.innerText = 0
   
    input.classList.toggle('hide')
    btnInput.classList.toggle('hide')
    
    pickValue(value2)
    addCount()
  })
}

function pickValue(value){

  const project = document.querySelector('#project');
  const options = document.createElement('option');
 
 
  options.value = value;
  options.textContent = value
  project.appendChild(options);

}

function storageNavTask(){
  localStorage.setItem("task", JSON.stringify(nav.childNodes))
}


let liAll 
function addNav(){

  
 const nav2 = localStorage.getItem("task")
 const navBar = JSON.parse(nav2)

 liAll = []
 if (navBar){
 
    console.log(navBar)
    const li = document.createElement('li')
    li.innerText = navBar[0].project
    const p = document.createElement('p')
    nav.appendChild(ul)
    ul.appendChild(li)
    ul.appendChild(p)
    console.log(navBar[0]) 
    p.classList.add(navBar[0].project)
    li.classList.add(navBar[0].project)
    pickValue(navBar[0].project)
    console.log('a', liAll)
    liAll.push(navBar[0].project)
    for (let i = 1; i < navBar.length; i++){
      let names = navBar[i].project
     if(!liAll.includes(names)) {

        liAll.push(names)
        const li = document.createElement('li')
        li.innerText = names
        const p = document.createElement('p')
        nav.appendChild(ul)
        ul.appendChild(li)
        ul.appendChild(p)
        p.classList.add(names)
        li.classList.add(names)
        pickValue(names)
      } 

    } 
  }
  const p = document.querySelectorAll('p')
  const li = document.querySelectorAll('li')
  const storedTasks = localStorage.getItem("project");
  let task = JSON.parse(storedTasks);
  if (task) {
    for (let i = 0; i < task.length; i++){
      if(li[i].innerText === task[i].content){
        if (p[i].innerText === task[i].val){
          p[i].innerText = parseInt(task[i].val) + 1
          projectClick()
        }
        }
      }
    }
  
 }


function call(){

}

function addCount(){
  
 
}

window.addEventListener("DOMContentLoaded", e => {
  addNav()
  addCount()
  projectClick()
})

export {pickValue, addNav, addCount}


