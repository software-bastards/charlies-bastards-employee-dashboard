import React from "react";
import IsAuthorized, {Authentication,mapStateToProps}  from "../IsAuthorized";
import Enzyme, { mount, ShallowWrapper,shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import configureStore from 'redux-mock-store';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/* const setup = (props={})=>{
    const wrapper = shallow(<IsAuthorized {...props}/>)
    return wrapper
  } */

describe('',()=>{
    beforeEach(()=>{
        const mockStore = configureStore()
    })
   
    test('', () =>{
 
    })  
})
