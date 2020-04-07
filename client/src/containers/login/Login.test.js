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



test('renders login component withou error',  ()=>{
const wrapper = setup();
const componentLogin= findByTestAttr(wrapper,"login-component")
expect(componentLogin.length).toBe(1)

}
);
test('renders form component', () => {
const wrapper = setup();
const componentForm= findByTestAttr(wrapper,"form-component")
expect(componentForm.length).toBe(1)

})

/* test('renders messages erros ', ()=>{
    const wrapper = setup ({success:false})
const message = findByTestAttr(wrapper, 'message')
expect(message.text().length).not.toBe(0)
}) */
 
/* test('default value state email = null ', ()=>{
const wrapper = setup();
const InitualValueState = wrapper.state('email')
expect(InitualValueState).not.toMatch(/\w/)
})  */
    
    
