import React from "react";
import configureStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import { cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import Clock from "./Clock";
import { mount } from "enzyme";

afterEach(cleanup);
Enzyme.configure({ adapter: new EnzymeAdapter() });
const state = { data: "2:41:16 PM" };
test("if component renders without an error", () => {
  const historyMock = { push: jest.fn() };
  const mockStore = configureStore();
  const store = mockStore(state);
  const mountComponent = () =>
    mount(
      <Router>
        <Provider store={store}>
          <Clock history={historyMock} />
        </Provider>
      </Router>
    );
  const wrap = mountComponent();
  expect(state.data).toBe("2:41:16 PM");
  expect(wrap).toMatchSnapshot();
});
const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));


