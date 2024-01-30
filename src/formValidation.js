let valid
let validTitle = false
import { values } from "lodash"
import { section } from "./index.js"
export default function formValid(item){
  let day 
  if(item.getDate() !== 31){
    day = item.getDate() + 1
  } else {
    day = item.getDate
  }

  const month = item.getMonth() + 1
  const year = item.getFullYear()
 

  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const dayAsNumber = parseInt(today.getDate())
  const monthAsNumber = parseInt(today.getMonth()) + 1
  const yearAsNumber = parseInt(today.getFullYear())

  if(day < dayAsNumber && month <= monthAsNumber || year < yearAsNumber){
    valid = true
    return valid
  } else {
    valid = false
    return valid
  }
}

function warning(){
  const msg = document.createElement('div')
  section.appendChild(msg)

  
  if(valid === true){
    setTimeout(() => {
      section.classList.remove('off')
      msg.innerText = ''
      msg.classList.remove('warning')
    }, 1000)}
 section.classList.add('off')
  msg.classList.add('warning')
  msg.innerText = 'Invalid Date'
  }

function warningTitle(){
  const msg = document.createElement('div')
  section.appendChild(msg)
  if(validTitle === true){
  setTimeout(() => {
    section.classList.remove('off')
    msg.innerText = ''
    msg.classList.remove('warning')
  }, 1000)
  section.classList.add('off')
  msg.classList.add('warning')
  msg.innerText = 'repeated title'

}
}


function titleValidation(item){
const h1 = document.querySelectorAll('.choose')
  

  for (let i = 0; i < h1.length; i++){
    if (item === h1[i].textContent){
      validTitle = true
      console.log('nao') 
      return 
    } 

    if(item !== h1[i].textContent){
      validTitle = false
      console.log('liberado')
    }
  }
} 




export {valid, warning, validTitle, titleValidation, warningTitle}