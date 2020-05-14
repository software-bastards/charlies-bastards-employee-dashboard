import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Enzyme, { render, mount } from "enzyme";
import { Provider } from "react-redux";
import DisplayHours from "./DisplayHours";
import configureStore from "redux-mock-store";
import { fireEvent, act, cleanup, screen } from "@testing-library/react";
import hoursHelper from "../../services/hoursHelper";

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
/* test(" The Go Back button works", () => {
  const historyMock = { push: jest.fn() };
  const mockStore = configureStore();
  const store = mockStore(state);
  const renderComponent = () =>
    render(
      <Router>
        <Provider store={store}>
          <DisplayHours history={historyMock} />
        </Provider>
      </Router>
    );
  const wrapper = renderComponent();
  const handleClick = jest.fn();
  handleClick(hoursHelper);
  wrapper.find('[data-testid="test-dashboard-router"]').simulate("click");

  expect(mockHistoryPush).toHaveBeenCalledWith("/dashboard");
}); */

/* test(" The display hours button works", async () => {
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
  const hoursButton = wrapper.find('[data-testid="test-hours"]');
  const handleClick = jest.fn();
  hoursButton.props().onClick();
  await act(async () => {
    await fireEvent.change(inputEmail, { target: { value: "test@gmail" } });
    await act(async () => {
      fireEvent.click(hoursHelper("form-component"));
    });
  });
  expect(hoursHelper).toBeCalled();
});
 */
