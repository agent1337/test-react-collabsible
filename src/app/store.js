import { combineReducers, createStore } from "@reduxjs/toolkit";
import {reducer} from "./reducers/accordionReducer"

const reducers = combineReducers({
  list: reducer,
});

export const store = createStore(reducers);
