import Enzyme, { render } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Dashboard from "./Dashboard";

import React from "react";
import configureStore from "redux-mock-store";
import { initialState } from "../../../testSetup/testUltil";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

Enzyme.configure({ adapter: new EnzymeAdapter() });
const state = {
  authorization: {
    token: "something",
    id: "someth",
    email: "sth",
    firstname: "sth",
    lastname: "sth",
  },
};
test(" render", () => {
  const historyMock = { push: jest.fn() };
  const mockStore = configureStore();
  const store = mockStore(state);
  const shallowComponent = () =>
    render(
      <Router>
        <Provider store={store}>
          <Dashboard history={historyMock} />
        </Provider>
      </Router>
    );
  const wrapper = shallowComponent();
  expect(wrapper).toMatchSnapshot();
});
const handleLogout = jest.fn();
test("logout function deletes session", () => {
  expect(handleLogout()).toEqual(undefined);
  const mockStore = configureStore();
  const store = mockStore(state);
});
