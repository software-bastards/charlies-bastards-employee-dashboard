import React from "react";
import configureStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Enzyme, { render } from "enzyme";
import { cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import DisplayHours from "./DisplayHours";
import hoursHelper from "../../services/hoursHelper";
import { mount } from "enzyme";

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
test(" The Go Back button works", () => {
  const historyMock = { push: jest.fn() };
  const mockStore = configureStore();
  const store = mockStore(state);
  const mountComponent = () =>
    mount(
      <Router>
        <Provider store={store}>
          <DisplayHours history={historyMock} />
        </Provider>
      </Router>
    );
  const wrapper = mountComponent();

  const gobackButton = wrapper.find('[data-testid="test-dashboard-router"]');
  gobackButton.simulate("click");
  expect(mockHistoryPush).toHaveBeenCalledWith("/dashboard");
});

test(" The display hours button works", () => {
  const historyMock = { push: jest.fn() };
  const mockStore = configureStore();
  const store = mockStore(state);
  const mountComponent = () =>
    mount(
      <Router>
        <Provider store={store}>
          <DisplayHours history={historyMock} />
        </Provider>
      </Router>
    );
  const wrapper = mountComponent();

  const handleClick = jest.fn();
  handleClick(hoursHelper);

  const hoursButton = wrapper.find('[data-testid="test-hours"]');
  hoursButton.simulate("click");
  expect(handleClick).toBeCalled();
});
