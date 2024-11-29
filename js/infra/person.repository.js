import { collection, addDoc, db } from "./firebase.js"

export async function add(person) {

    return await addDoc(collection(db,  "person"), { ...person}); 

}
export async function queryPerson(){

}