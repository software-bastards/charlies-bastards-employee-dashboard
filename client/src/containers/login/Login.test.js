import React from "react";
import Login  from "./Login";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import axios from 'axios'
import loginHelper from "../../services/loginHelper"
import {findByTestAttr} from "../../../test/testUltil"
import {onSubmit} from "./Login"

jest.mock('axios')

  Enzyme.configure({ adapter: new EnzymeAdapter() });
/** 
 * Factory function to create a ShallowWrapper for the App Component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @param {any} state - Initial state for setup
 * @return {ShallowWrapper}
 *  */
const setup = (props={}, state=null) =>{
    const wrapper =  shallow (<Login {...props}/>)
    if (state) {wrapper.setState(state)}
    return wrapper
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

const fakeUserListCorrect ={email: "ligia@gmail", password:"ligia"}

describe("api", ()=>{
  test("check  request successfull, retrieve the response",async ()=>{
    const data = fakeUserListCorrect;
    axios.post.mockImplementationOnce(() => Promise.resolve(data));
    await expect(loginHelper("ligia@gmail", "ligia")).resolves.toEqual(data);
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith("/login", (data));})

    test("check  request failure, retrieve an error", async () =>{
      const error = 'Something went wrong';

      axios.post.mockImplementation(() => Promise.reject(new Error(error)));
      await expect(loginHelper()).rejects.toThrow(error);
     
    }) 
})


describe('testing async function', ()=>{
  test ("should return data with a successful request ", () =>{
    const mockSubmit = jest.fn();
    const wrapper = shallow(<Login onSubmit={mockSubmit}/>);
    const submitButton= findByTestAttr(wrapper,"submit-button")
    submitButton.simulate('click')
    const componentForm= findByTestAttr(wrapper,"form-component")
    componentForm.at(0).simulate('submit')
    expect(mockSubmit).toHaveBeenCalledTimes(1);
    }) 

});

/* 
describe('testing async function', ()=>{
  const fakeUserData =("ligia@gmail", "ligia")
  const mockingSetState=jest.fn()
 React.useState = jest.fn( ()=>[ "", mockingSetState])
 const wrapper = setup()

 test("show default message",()=>{
  const messageComp = findByTestAttr(wrapper,"h1-login-component")
  expect(messageComp).toBeNull()
 })
 test ("should return data with a successful request ", () =>{
   const submit = jest.fn(() => Promise.resolve({}))
   submit.mockImplementationOnce(() => Promise.resolve("authenticated"));
   const submitButton= findByTestAttr(wrapper,"submit-button") 
   submitButton.simulate('click')
   expect(onSubmit).toHaveBeenCalledTimes(1);
   }) 

  test(" check it displays the message",async ()=>{
    const componentForm= findByTestAttr(wrapper,"form-component")
    const messageComp = findByTestAttr(wrapper,"h1-login-component")
    await componentForm.simulate('submit')

    expect(messageComp).resolves.not.toBe("")
  })
}) 

 

 */



