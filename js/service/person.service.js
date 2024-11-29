import {add} from "./../infra/person.repository.js"
 export const personService = { 
    add
 }

 function add(person) {
    add(person)
    .then(res => {
      console.log("Adicionado: ", res)
      alert("Adicionado cvom sucesso!")
  })
    .catch(error => {
      console.log("error: ", error)
        alert("Adicionado cvom sucesso!")
    })
    }