import React from "react";
import { EditHours } from "./EditHours";
import { Provider } from "react-redux";
import { initialState, expectTruthy } from "../../../testSetup/testUltil";
import configureStore from "redux-mock-store";
import {
  render,
  fireEvent,
  act,
  cleanup,
  screen,
} from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);

test("if component renders without an error", () => {
  const monthData = [];
  const workThisMonth = false;

  const historyMock = { push: jest.fn() };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  const { getByTestId, getAllByTestId } = render(
    <Router history={historyMock}>
      <Provider store={store}>
        <EditHours monthData={monthData} workThisMonth={workThisMonth} />
      </Provider>
    </Router>
  );
  expectTruthy(getByTestId("component-editHours"));
  expectTruthy(getByTestId("h1-editHours"));
  expectTruthy(getAllByTestId("button-editHours"));
  expectTruthy(getByTestId("work-editHours"));
});

test("The month's button works", async () => {
  const monthData = [];

  const historyMock = { push: jest.fn() };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  const { getByTestId, getAllByTestId } = render(
    <Router>
      <Provider store={store}>
        <EditHours history={historyMock} monthData={monthData} />
      </Provider>
    </Router>
  );
  const handleClick = jest.fn();
  act(() => {
    const button = getAllByTestId("button-editHours");
    fireEvent.click(button[0]);
  });
  handleClick(EditHours.handleId);

  expect(handleClick).toHaveBeenCalled();
});
