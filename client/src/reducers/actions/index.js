export const actionTypes =  {
    CREATE_SESSION:"CREATE_SESSION"
}
/**
 * @function createSession
 * @param {number} id
 * @param {string} message 
 * @param {string} token 
 * @param {string} firstname 
 * @param {string} lastname
 * @returns {object}  - Action object tipe CREATE_SESSION
 */
export const createSession = (id,message,token,firstname,lastname) => ({
    type : actionTypes.CREATE_SESSION,
    id:id,
    message:message,
    token : token,
    firstname:firstname,
    lastname:lastname
});