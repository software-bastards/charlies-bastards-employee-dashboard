import React from "react";
import Dashboard from "./Dashboard";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new EnzymeAdapter() });
/** 
 * Factory function to create a ShallowWrapper for the App Component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @param {any} state - Initial state for setup
 * @return {ShallowWrapper}
 *  */

 const setup = (props={})=>{
   const wrapper = shallow(<Dashboard {...props}/>)
   return wrapper
 }

test('renders app component',  ()=>{
const wrapper = setup();
const componentDash = wrapper.find('[data-test="component-dash"]')
expect(componentDash.length).toBe(1)

}
);
