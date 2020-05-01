export const actionTypes = {
  CREATE_SESSION: "CREATE_SESSION",
};
/**
 * @function createSession
 * @param {string} message
 * @param {string} token
 * @param {string} firstname
 * @param {string} lastname
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
