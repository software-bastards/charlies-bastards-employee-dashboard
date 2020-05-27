import React from "react";
import UserHours from "./UserHours";
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
        <UserHours monthData={monthData} workThisMonth={workThisMonth} />
      </Provider>
    </Router>
  );

  expectTruthy(getByTestId("user-table"));
  expectTruthy(getByTestId("user-table-head"));

  expectTruthy(getByTestId("user-table-button"));
  expectTruthy(getAllByTestId("table-cell"));

  /*  expectTruthy(getByTestId("work-editHours")); */
});
