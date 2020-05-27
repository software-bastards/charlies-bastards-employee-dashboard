import Enzyme, { render } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Insert from "./Insert";
import { cleanup } from "@testing-library/react";
import React from "react";
import configureStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

afterEach(cleanup);

Enzyme.configure({ adapter: new EnzymeAdapter() });
const state = {
  authorization: {
    token: "token",
    id: "id",
    email: "email",
    firstname: "name",
    lastname: "last name",
  },
};
test("Insert render is okay", () => {
  const historyMock = { push: jest.fn() };
  const mockStore = configureStore();
  const store = mockStore(state);
  const shallowComponent = () =>
    render(
      <Router>
        <Provider store={store}>
          <Insert history={historyMock} />
        </Provider>
      </Router>
    );
  const wrapper = shallowComponent();
  expect(wrapper).toMatchSnapshot();
});
