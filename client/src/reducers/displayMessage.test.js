import {actionTypes} from "./actions/index"
import displayMessage from "./displayMessage"

test('returns default initial when no action',()=>{
const newState= displayMessage(undefined,{type:actionTypes.DISPLAY_MESSAGE})
expect(newState).toEqual({"message": undefined})
})
test('returns state of true upon receiving an action of type `DISPLAY_MESSAGE',()=>{
const newState=displayMessage(undefined,{type:actionTypes.DISPLAY_MESSAGE})
expect(newState).toBeTruthy()

})