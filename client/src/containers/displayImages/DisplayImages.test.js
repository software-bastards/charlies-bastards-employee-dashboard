import React from "react";
import configureStore from "redux-mock-store";
import { BrowserRouter as Router } from "react-router-dom";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Enzyme, { render } from "enzyme";
import { cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import DisplayImages from "./DisplayImages";
import displayImages from "../../services/API/displayImages";
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
          <DisplayImages history={historyMock} />
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
test(" The displayImage button works", () => {
  const historyMock = { push: jest.fn() };
  const mockStore = configureStore();
  const store = mockStore(state);
  const mountComponent = () =>
    mount(
      <Router>
        <Provider store={store}>
          <DisplayImages history={historyMock} />
        </Provider>
      </Router>
    );
  const wrapper = mountComponent();
  const handleClick = jest.fn();
  handleClick(displayImages);
  const displayButton = wrapper.find(
    '[data-testid="test-displayimage-router"]'
  );
  displayButton.props().onClick;
  expect(handleClick).toBeCalled();
});

describe("<DisplayImage />", () => {
  let wrapper;
  const setUploadFile = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation((init) => [init, setUploadFile]);

  beforeEach(() => {
    wrapper = Enzyme.mount(Enzyme.shallow(<DisplayImages />).get(0));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
