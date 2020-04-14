import React from "react";
import Login  from "./Login";
import { Provider} from 'react-redux';
import Enzyme, { mount, ShallowWrapper,shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import {findByTestAttr,initialState,storeFactory, expectTruthy} from "../../../testSetup/testUltil"
import configureStore from 'redux-mock-store'
import { render, fireEvent, act, cleanup,screen} from "@testing-library/react";
import { BrowserRouter as Router}from "react-router-dom"
  Enzyme.configure({ adapter: new EnzymeAdapter() });

  afterEach(cleanup)

  test('if component renders without an error',  ()=>{
    const historyMock = { push: jest.fn() };
    const mockStore = configureStore()
      const store = mockStore(initialState)
      const {getByTestId,getAllByTestId} = render(
        <Router>
        <Provider store={store} >
              <Login history={historyMock}/>
           </Provider>
           </Router>
      )
      expectTruthy(getByTestId("input-form-email"));
      expectTruthy(getByTestId("form-component"));
      expectTruthy(getAllByTestId("test-label"));
      expectTruthy(getByTestId("submit-button"));
     
      });

  test('if onSubmit is called', async()=>{
    const historyMock = { push: jest.fn() };
    const mockStore = configureStore()
      const store = mockStore(initialState)
      const {getByTestId,getByText,findBy} = render(
        <Router>
        <Provider store={store} >
              <Login history={historyMock} />
           </Provider>
           </Router>
      )
     const onSubmit = jest.fn(() => Promise.reject({data:"Some data"}))
    const inputEmail = getByTestId("input-form-email")
    const inputPassword = getByTestId("input-form-password")

    await act(async()=>{
      await fireEvent.change(inputEmail,{target:{value:"test@gmail"}})
    await act(async ()=>{
      fireEvent.submit(getByTestId("form-component"))
    })
    })
    const find = screen.findByText("jhgf")
    
    console.log(screen.debug())

 

    
})
    