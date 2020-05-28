import Enzyme, { render, mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Menu from "./Menu";
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
test("if the logout button dispatches and redirects to main page", () => {
  const historyMock = { push: jest.fn() };
  const mockStore = configureStore();
  const store = mockStore(state);
  const mountComponent = () =>
    mount(
      <Router>
        <Provider store={store}>
          <Menu history={historyMock} />
        </Provider>
      </Router>
    );
  const wrapper = mountComponent();

  const dispatch = jest.fn();
  dispatch(deleteSession);

  const logoutButton = wrapper.find('[data-testid="test-logout"]');
  logoutButton.simulate("click");
  expect(dispatch).toBeCalled();
});

const mockHistoryPush = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));
