import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Enzyme, { render, mount } from "enzyme";
import { Provider } from "react-redux";
import DisplayHours from "./DisplayHours";
import configureStore from "redux-mock-store";
import { cleanup } from "@testing-library/react";
import hoursHelper from "../../services/API/hoursHelper";

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
  const shallowComponent = () =>
    render(
      <Router>
        <Provider store={store}>
          <DisplayHours history={historyMock} />
        </Provider>
      </Router>
    );
  const wrap = shallowComponent();
});
const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));
