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
  expect(wrapper).toMatchSnapshot();
});
test("if the logout button dispatches and redirects to main page", () => {
  const historyMock = { push: jest.fn() };
  const mockStore = configureStore();
  const store = mockStore(state);
  const mountComponent = () =>
    mount(
      <Router>
        <Provider store={store}>
          <Dashboard history={historyMock} />
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

test(" if the display hours button redirects to displayhours page", () => {
  const historyMock = { push: jest.fn() };
  const mockStore = configureStore();
  const store = mockStore(state);
  const mountComponent = () =>
    mount(
      <Router>
        <Provider store={store}>
          <Dashboard history={historyMock} />
        </Provider>
      </Router>
    );
  const wrapper = mountComponent();

  const displayButton = wrapper.find('[data-testid="test-display-router"]');
  displayButton.simulate("click");
  expect(mockHistoryPush).toHaveBeenCalledWith("/displayhours");
});
test(" if the insert button redirects to insert page", () => {
  const historyMock = { push: jest.fn() };
  const mockStore = configureStore();
  const store = mockStore(state);
  const mountComponent = () =>
    mount(
      <Router>
        <Provider store={store}>
          <Dashboard history={historyMock} />
        </Provider>
      </Router>
    );
  const wrapper = mountComponent();

  const insertButton = wrapper.find('[data-testid="test-insert-router"]');
  insertButton.simulate("click");
  expect(mockHistoryPush).toHaveBeenCalledWith("/insert");
});
test(" render", () => {
  const historyMock = { push: jest.fn() };
  const mockStore = configureStore();
  const store = mockStore(state);
  const mountComponent = () =>
    mount(
      <Router>
        <Provider store={store}>
          <Dashboard history={historyMock} />
        </Provider>
      </Router>
    );
  const wrapper = mountComponent();

  const editButton = wrapper.find('[data-testid="test-edit-router"]');
  editButton.simulate("click");
  expect(mockHistoryPush).toHaveBeenCalledWith("/edit");
});
test(" if the upload button redirects to upload page", () => {
  const historyMock = { push: jest.fn() };
  const mockStore = configureStore();
  const store = mockStore(state);
  const mountComponent = () =>
    mount(
      <Router>
        <Provider store={store}>
          <Dashboard history={historyMock} />
        </Provider>
      </Router>
    );
  const wrapper = mountComponent();

  const uploadButton = wrapper.find('[data-testid="test-upload-router"]');
  uploadButton.simulate("click");
  expect(mockHistoryPush).toHaveBeenCalledWith("/upload");
});
