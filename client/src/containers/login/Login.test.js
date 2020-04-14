import React from "react";
import Login  from "./Login";
import { Provider} from 'react-redux';
import Enzyme, { mount, ShallowWrapper,shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import {findByTestAttr,initialState,storeFactory, expectTruthy} from "../../../testSetup/testUltil"
import configureStore from 'redux-mock-store'
import { render, fireEvent} from "@testing-library/react";
import { BrowserRouter as Router}from "react-router-dom"
  Enzyme.configure({ adapter: new EnzymeAdapter() });

/* describe('test if component renders without error', ()=>{
  const {getByTestId, getAllByTestId} =render(<Login/>)
  test('display all forms elements',()=>{
    expectTruthy(getAllByTestId('test-label'))
  })
}) */



/* test('renders without error', ()=>{
  
    const wrapper = shallow( <Login/>
    )
expect(wrapper).toMatchSnapshot()
    
      }) */
      


    test('login component',  ()=>{
      const historyMock = { push: jest.fn() };
      const mockStore = configureStore()
        const store = mockStore(initialState)
        const {getByTestId} = render(
          <Router>
          <Provider store={store} >
                <Login history={historyMock}/>
             </Provider>
             </Router>
        )
        console.log(getByTestId("submit-button"))  
             /*  const submitButton= findByTestAttr(wrapper,"submit-button")
        submitButton.simulate('click')
        expect(historyMock.push).toBeCalled() */
        });
      

 

/* const setup = (initialState={}, props={}) =>{
const store = storeFactory(initialState)
    const wrapper = shallow(<Provider store={store}><Login/></Provider>).dive().dive()
  console.log(wrapper.debug())}

  setup()
  */


 /* test('login component',  ()=>{
     const componentLogin= findByTestAttr(wrapper,"login-component")
    expect(componentLogin.length).toBe(1) 
  });*/

/* 
describe ('renders without an error ', () => {
    test('login component',  ()=>{
        const componentLogin= findByTestAttr(wrapper,"login-component")
        expect(componentLogin.length).toBe(1)
      });
      test('form', () => {
        const componentForm= findByTestAttr(wrapper,"form-component")
        expect(componentForm.length).toBe(1)
      })
      test(' input', ()=>{
        const InputForm= findByTestAttr(wrapper,"input-form")
        expect(InputForm.length).toBe(2)
        })
      test(' submit button ', ()=>{
        const submitButton= findByTestAttr(wrapper,"submit-button")
        expect(submitButton.length).toBe(1)
        }) 
  
})
 */

