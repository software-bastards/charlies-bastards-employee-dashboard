/**
 * @function authorization
 * @param {object} state  -current sucess state
 * @param {object} action - action to be reduce
 */

export default function authorization(state={}, action){
switch(action.type){
    case "CREATE_SESSION":
    return {...state, token:action.token, firstname:action.firstname,lastname:action.lastname,message:action.message}
    default: 
    return state;
}}