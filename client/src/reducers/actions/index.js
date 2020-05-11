export const actionTypes =  {
  CREATE_SESSION:"CREATE_SESSION",
  MONTH_HOURS: "MONTH_HOURS",
  DISPLAY_MESSAGE :"DISPLAY_MESSAGE"
}
/**
 * @function createSession
 * @param {string} message
 * @param {string} token
 * @param {string} firstname


/**
 * @function createSession -build an action that store al the user’s  information
 * @param {number} id
 * @param {string} message 
 * @param {string} token 
 * @param {string} firstname 
 * @param {string} lastname
 * @returns {object}  - Action object CREATE_SESSION
 */
export const createSession = (id,message,token,firstname,lastname) => ({
    type : actionTypes.CREATE_SESSION,
    id:id,
    message:message,
    token : token,
    firstname:firstname,
    lastname:lastname
});


/**
 * @function MonthHours
 * @param {array} monthData - data related only for the selected month
 * @returns {object} - Action object  MONTH_HOURS 
 */
export const monthHours = (monthData) => ({
    type : actionTypes.MONTH_HOURS,
    monthData:monthData
    
});


/**
 * @function setMessage  - store messages send via the server
 * @param {string} message - message that will be dispatched
 * @returns {object} - Action object  DISPLAY_MESSAGE 
 */
export const setMessage = (message) => ({
    type : actionTypes.DISPLAY_MESSAGE,
    message:message
    
});
