import {
    ADD_CONTACT,
REMOVE_CONTACT 
}
from './actions'

// Write your code below this line!
let initialState = 
const reducer = (store, action) => {
  switch (action.type) {
    case ADD_CONTACT:
     let new_contact = action.payload
      return store, [...state, new_contact]
    case REMOVE_CONTACT:
      let theSelectedId = action.payload
       return state.filter(contact => contact.id != Number(theSelectedId)
          default:
      return store;
  }
 }
