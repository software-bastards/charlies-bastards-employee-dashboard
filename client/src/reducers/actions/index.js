export const actionTypes =  {
    CREATE_SESSION:"CREATE_SESSION",
    MONTH_HOURS: "MONTH_HOURS"
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


/**
 * @function MonthHours
 * @param {array} monthData - data related only for the selected month
 * @returns {object} - Action object tipe MONTH_HOURS 
 */
export const monthHours = (monthData) => ({
    type : actionTypes.MONTH_HOURS,
    monthData:monthData
    
});