import { choseData, loadTasks, storage } from "./app"
function choseTask(){
 
  const deletTask = document.querySelectorAll('.addTask')
  const input = document.createElement('button')
  input.classList.add('inputBtn')
  console.log(typeof(deletTask))
  deletTask.forEach((item) => {
    item.appendChild(input)
    item.classList.add('choose')
    
    })
  

    delTask()
 

}

function delTask(){

  const loadInput = document.querySelectorAll('.inputBtn')
  let value
  loadInput.forEach((item) => {
    item.addEventListener('click', e => {
    value = item.parentNode.querySelector('h1').textContent
    console.log(value)
    choseData(value)
   
     item.parentElement.remove()    
   

     const storedTasks = localStorage.getItem("task");
     let tasks = JSON.parse(storedTasks);

  
      
     tasks = tasks.filter(task => task.title !== value);

     localStorage.setItem("task", JSON.stringify(tasks));
     
  })
  })

 
}


// APP FUNCTIONALITY



export {choseTask, delTask}