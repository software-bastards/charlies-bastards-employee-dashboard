import { combineReducers} from 'redux'
import authorization from "./authorization"
import getMonthData from "./getMonthData"

const allReducers = combineReducers({
authorization: authorization,
getMonthData:getMonthData
})
export default allReducers