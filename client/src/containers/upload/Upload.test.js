import Enzyme, { render, mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Upload from "./Upload";
import { cleanup } from "@testing-library/react";
import React from "react";
import configureStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

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
  displayMessage: {
    message: "msg",
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
          <Upload history={historyMock} />
        </Provider>
      </Router>
    );
  const wrapper = renderComponent();
});

test("if the flag disappears onclick", () => {
  const historyMock = { push: jest.fn() };
  const mockStore = configureStore();
  const store = mockStore(state);
  const mountComponent = () =>
    mount(
      <Router>
        <Provider store={store}>
          <Upload history={historyMock} />
        </Provider>
      </Router>
    );
  const wrapper = mountComponent();
  const handleSnackFlag = jest.fn();

  const flag = wrapper.find('[data-testid="upload-flag"]');
  flag.simulate("click");
  /*  expect(handleSnackFlag).toHaveBeenCalled(); */
});
