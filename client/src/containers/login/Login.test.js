import React from "react";
import Login  from "./Login";
import { Provider} from 'react-redux';
import {initialState, expectTruthy} from "../../../testSetup/testUltil"
import configureStore from 'redux-mock-store'
import { render, fireEvent, act, cleanup,screen} from "@testing-library/react";
import { BrowserRouter as Router}from "react-router-dom"

  afterEach(cleanup)

  test('if component renders without an error',  ()=>{
    const historyMock = { push: jest.fn() };
    const mockStore = configureStore()
      const store = mockStore(initialState)
      const {getByTestId,getAllByTestId} = render(
        <Router history={historyMock}>
        <Provider store={store} >
              <Login />
           </Provider>
           </Router>
      )
      expectTruthy(getByTestId("input-form-email"));
      expectTruthy(getByTestId("form-component"));
      expectTruthy(getAllByTestId("test-label"));
      expectTruthy(getByTestId("submit-button"));
     
      });

  test('"This field is required" should be in the DOM', async()=>{
    const historyMock = { push: jest.fn() };
    const mockStore = configureStore()
      const store = mockStore(initialState)
      const {getByTestId,getByText,findBy,container} = render(
        <Router>
        <Provider store={store} >
              <Login history={historyMock} />
           </Provider>
           </Router>
      )
    const onSubmit = jest.fn()
    const inputEmail = getByTestId("input-form-email")

    await act(async()=>{
      await fireEvent.change(inputEmail,{target:{value:"test@gmail"}})
    await act(async ()=>{
      fireEvent.submit(getByTestId("form-component"))
    })
    })
     
    expect(screen.getByTestId('form-component').textContent).toMatch("This field is required")
   
})
     