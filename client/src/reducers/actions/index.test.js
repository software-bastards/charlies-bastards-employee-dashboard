import {createSession,actionTypes} from "./index"

describe('createSession',()=>{
    
    test('returns an action with type `CREATE_SESSION`',()=>{
       const action = createSession ();
       expect(action).toHaveProperty("type","firstname","lastname","message","token")
    })
})