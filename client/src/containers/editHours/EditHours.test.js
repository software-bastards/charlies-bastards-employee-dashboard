import React from "react";
import EditHours ,{mapStateToProps} from "./EditHours";
import { Provider} from 'react-redux';
import {initialState, expectTruthy} from "../../../testSetup/testUltil"
import configureStore from 'redux-mock-store'
import { render, fireEvent, act, cleanup,screen} from "@testing-library/react";
import { BrowserRouter as Router}from "react-router-dom"

afterEach(cleanup)

test('if component renders without an error',  ()=>{
  
    });
