<<<<<<< HEAD
import { combineReducers } from "redux";
import authorization from "./authorization";

const allReducers = combineReducers({
  authorization: authorization,
});
export default allReducers;
=======
import { combineReducers} from 'redux'
import authorization from "./authorization"
import getMonthData from "./getMonthData"
import displayMessage from './displayMessage'
const allReducers = combineReducers({
authorization: authorization,
getMonthData:getMonthData,
displayMessage:displayMessage
})
export default allReducers
>>>>>>> development
