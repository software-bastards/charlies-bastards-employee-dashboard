import {actionTypes} from "./actions/index"
import getMonthData from "./getMonthData"

test('returns default initial state of undefine when no action',()=>{
const newState= getMonthData(undefined,{type:actionTypes.MONTH_HOURS})
expect(newState).toEqual({"monthData": undefined})
})
test('returns state of true upon receiving an action of type `CREATE _SESSION',()=>{
const newState=getMonthData(undefined,{type:actionTypes.MONTH_HOURS})
expect(newState).toBeTruthy()
})