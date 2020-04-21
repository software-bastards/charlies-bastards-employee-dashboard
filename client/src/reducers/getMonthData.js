/**
 * @function getMonthData
 * @param {array} state  -current sucess state
 * @param {object} action - action to be reduce
 */

export default function getMonthData(state={monthData:[]}, action){
    switch(action.type){
        case "MONTH_HOURS":
        return {...state, monthData:action.monthData}
        default: 
        return state;
    }}