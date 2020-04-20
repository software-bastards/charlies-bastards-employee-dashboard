/**
 * @function getMonthData
 * @param {object} state  -current sucess state
 * @param {object} action - action to be reduce
 */

export default function getMonthData(state={}, action){
    switch(action.type){
        case "MONTH_HOURS":
        return {...state, monthData:action.monthData}
        default: 
        return state;
    }}