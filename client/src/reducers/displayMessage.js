/**
 * @function displaMessage -in case the action is CREATE SESSION
 * it changes the initial state (message) to the user's information
 * @param {object} state  -current success  state
 * @param {object} action - action to be reduce
 */

export default function displayMessage(state = { message: "hello" }, action) {
  switch (action.type) {
    case "DISPLAY_MESSAGE":
      return { ...state, message: action.message };
    default:
      return state;
  }
}
