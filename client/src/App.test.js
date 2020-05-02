import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { initialState, expectTruthy } from "../testSetup/testUltil";
import configureStore from "redux-mock-store";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import Login from "./containers/login/Login";

test("full app rendering withou error", () => {
  const state = {
    authorization: {
      token: "something",
      id: "someth",
      email: "sth",
      firstname: "sth",
      lastname: "sth",
    },
    data: "2:41:16 PM",
  };
  const historyMock = { push: jest.fn() };
  const mockStore = configureStore();
  const store = mockStore(state);
  const renderComponent = () =>
    render(
      <Router>
        <Provider store={store}>
          <App history={historyMock} />
        </Provider>
      </Router>
    );
  const wrapper = renderComponent();
  expect(wrapper).toMatchSnapshot();
});
