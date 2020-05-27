import Enzyme, { render, mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Dashboard from "./Dashboard";
import { cleanup } from "@testing-library/react";
import React from "react";
import configureStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { deleteSession } from "../../reducers/actions/index";

afterEach(cleanup);
Enzyme.configure({ adapter: new EnzymeAdapter() });
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
test("if component renders without an error", () => {
  const historyMock = { push: jest.fn() };
  const mockStore = configureStore();
  const store = mockStore(state);
  const renderComponent = () =>
    render(
      <Router>
        <Provider store={store}>
          <Dashboard history={historyMock} />
        </Provider>
      </Router>
    );
  const wrapper = renderComponent();
});
