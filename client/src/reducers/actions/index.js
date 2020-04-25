export const actionTypes = {
  CREATE_SESSION: "CREATE_SESSION",
  DELETE_SESSION: "DELETE_SESSION",
};
/**
 * @function createSession
 * @param {string} message
 * @param {string} token
 * @param {string} firstname
 * @param {string} lastname
 * @param {int} id
 * @returns {object}  - Action object tipe CREATE_SESSION
 */
export const createSession = (message, token, firstname, lastname, id) => ({
  type: actionTypes.CREATE_SESSION,
  message: message,
  token: token,
  firstname: firstname,
  lastname: lastname,
  id: id,
});
export const deleteSession = (message, token, firstname, lastname, id) => (
  console.log("HIII"),
  {
    type: actionTypes.DELETE_SESSION,
    message: message,
    token: token,
    firstname: firstname,
    lastname: lastname,
    id: id,
  }
);
