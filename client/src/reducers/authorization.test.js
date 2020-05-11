import { actionTypes } from "./actions/index";
import authorization from "./authorization";

<<<<<<< HEAD
test("returns default initial state of undefine when no action", () => {
  const newState = authorization(undefined, {});
  expect(newState).toEqual({});
});
test("returns state of true upon receiving an action of type `CREATE _SESSION", () => {
  const newState = authorization(undefined, {
    type: actionTypes.CORRECT_GUESS,
  });
  expect(newState).toBeTruthy();
});
=======
test('returns default initial state of undefine when no action',()=>{
const newState= authorization({},{type:actionTypes.CREATE_SESSION})
expect(newState).toEqual({})
})
test('returns state of true upon receiving an action of type `CREATE _SESSION',()=>{
const newState=authorization(undefined,{type:actionTypes.CREATE_SESSION})
expect(newState).toBeTruthy()
})
>>>>>>> development
