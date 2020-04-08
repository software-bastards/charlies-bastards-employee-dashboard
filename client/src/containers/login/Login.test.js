import React from "react";
import Login from "./Login";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
  import {findByTestAttr} from "../../../test/testUltil"
  Enzyme.configure({ adapter: new EnzymeAdapter() });

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



/* describe(" controlled input field",()=>{
  test('message state updates values',() =>{
    const mockSetMessage = jest.fn();
    React.useState = jest.fn(()=>["",mockSetMessage]);

    const wrapper = setup();
    const componentForm= findByTestAttr(wrapper,"form-component")
    componentForm.simulate('submit')

    expect(mockSetMessage).not.toHaveBeenCalledWith("")
  
  })

}) */


    
    
