import { combineReducers} from 'redux'
import authorization from "./authorization"

const allReducers = combineReducers({
authorization: authorization
})
export default allReducers