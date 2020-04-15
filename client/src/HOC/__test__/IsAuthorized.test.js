import React from "react";
import IsAuthorized from "../IsAuthorized";
import { render, fireEvent, act, cleanup,screen} from "@testing-library/react";
import configureStore from 'redux-mock-store';
import { Provider} from 'react-redux';
import { BrowserRouter as Router}from "react-router-dom"
import {initialState} from "../../../testSetup/testUltil"


    test('Should render the component only when prop is true', () => {
        const historyMock = { push: jest.fn() };
        const mockStore = configureStore()
        const store = mockStore(initialState)
      const Component = <h1>Test</h1>;
      const ConditionalHOC = IsAuthorized(Component);
      const {container, getByText} = render(
        <Router history={historyMock}>
        <Provider store={store} >
              <ConditionalHOC />
           </Provider>
           </Router>
      )
     expect(getByText(/Test/i)).toBeInTheDocument() 
    expect(getByText(/TestFail/i)).not.toBeInTheDocument() 

     });
      

  

