
export const ADD_CONTACT = 'ADD_CONTACT'

export const addContact = (new_contact) => {
  return {
    type: ADD_CONTACT,
    payload: new_contact
    }
  }



export const REMOVE_CONTACT = 'REMOVE_CONTACT'

export const removeContact = (id) => {
  return {
    type: REMOVE_CONTACT,
    payload: id
    }
  }