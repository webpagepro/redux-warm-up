let ADD_CONTACT = 'ADD_CONTACT'
let REMOVE_CONTACT = 'REMOVE_CONTACT'

// Write your code below this line!
let initialState = 
const reducer = (store, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return store, {counter: store.counter + 1});
    case REMOVE_CONTACT:
      return store, {counter: store.counter - 1});
    default:
      return store;
  }
 }
