import React from "react";

import { PopUpEdit } from "./PopUpEdit";

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
        <PopUpEdit monthData={monthData} workThisMonth={workThisMonth} />
      </Provider>
    </Router>
  );

  expectTruthy(getByTestId("popup-form"));
  expectTruthy(getByTestId("popup-button"));

  expectTruthy(getAllByTestId("popup-h1"));
  expectTruthy(getAllByTestId("popup-input"));

  /*  expectTruthy(getByTestId("work-editHours")); */
});

test("if button works in popup", async () => {
  const monthData = [];
  const workThisMonth = false;

  const historyMock = { push: jest.fn() };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  const { getByTestId, getAllByTestId } = render(
    <Router history={historyMock}>
      <Provider store={store}>
        <PopUpEdit monthData={monthData} workThisMonth={workThisMonth} />
      </Provider>
    </Router>
  );
  const updateData = jest.fn();
  const day = getByTestId("popup-input");

  await act(async () => {
    await fireEvent.change(day, { target: { value: "1" } });
    await act(async () => {
      fireEvent.submit(getByTestId("popup-button"));
    });
  });

  expect(screen.getByTestId("popup-form").textContent).toMatch(
    "DayHour Submit"
  );
});
