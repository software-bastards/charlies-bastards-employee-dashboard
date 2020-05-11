/**
 * @function authorization -in case the action is CREATE SESSION 
 * it changes the initial state (id,token,firstname...) to the user's information
 * @param {object} state  -current success  state
 * @param {object} action - action to be reduce
 */

export default function authorization(state = {}, action) {
  switch (action.type) {
    case "CREATE_SESSION":
      return {
        ...state,
        token: action.token,
        firstname: action.firstname,
        lastname: action.lastname,
        message: action.message,
        id: action.id,
      };
    case "DELETE_SESSION":
      return {
        ...state,
        token: "",
        firstname: "",
        lastname: "",
        message: "",
        id: "",
      };
    default:
      return state;
  }
}
