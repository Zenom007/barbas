import { validateEmail, validateName, validatePassword, validateTel } from '../service/validator.js'
import{Person} from "../domain/Person.js"


validateName()
validateEmail()
validateTel()
validatePassword()

submitForm()

function getFormPerson(){
    const person = new Person()
    person.name = document.querySelector("#nameInput").value
    person.name = document.querySelector("#emailInput").value
    person.name = document.querySelector("#telInput").value
    person.name = document.querySelector("#passwordInput").value
    return person
}
function submitForm(person){
   const buttonSubmit = document.querySelector("#submitForm")
   buttonSubmit.addEventListener("click" , () => { 
    const person = getFormPerson()
    console.log(person)

   })

}