import React from "react";
import Login from "./Login";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import mockAxios from 'axios'
import onSubmit from "./Login"

  import {findByTestAttr} from "../../../test/testUltil"
  Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}, state=null) =>{
    const wrapper =  shallow (<Login {...props}/>)
    if (state) {wrapper.setState(state)}
    return wrapper
  }

  export const actionTypes ={
    CHECK_STATUS: "CHECK_STATUS"
  }


test('renders login component without error',  ()=>{
const wrapper = setup();
const componentLogin= findByTestAttr(wrapper,"login-component")
expect(componentLogin.length).toBe(1)

}
);
test('renders form without error', () => {
const wrapper = setup();
const componentForm= findByTestAttr(wrapper,"form-component")
expect(componentForm.length).toBe(1)

})
test(' renders input without error ', ()=>{
  const wrapper = setup();
const InputForm= findByTestAttr(wrapper,"input-form")
expect(InputForm.length).toBe(2)
})
test(' renders submit button without error ', ()=>{
  const wrapper = setup();
const submitButton= findByTestAttr(wrapper,"submit-button")
expect(submitButton.length).toBe(1)
})

const fakeUserListCorrect =[
{email: "ligia@gmail", password:"ligia",
}
]
const fakeUserListIncorrect =[
  { email: "fake@gmail"}
]
test("check status 200 on axios promise",async ()=>{
  mockAxios.get.mockImplementationOnce(()=>{
  Promise.resolve({data:fakeUserListCorrect})
   })
   const submit = await onSubmit()

  expect(submit).toBeDefined()
  expect(mockAxios.post).toHaveBeenCalledWith("./login")
})






    
    
