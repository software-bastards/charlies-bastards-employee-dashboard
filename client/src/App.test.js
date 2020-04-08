import React from "react";
import App from "./App";
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
   const wrapper = shallow(<App {...props}/>)
   return wrapper
 }

test('renders app component',  ()=>{
const wrapper = setup();
const componentApp = wrapper.find('[data-test="component-app"]')
expect(componentApp.length).toBe(1)

}
);
