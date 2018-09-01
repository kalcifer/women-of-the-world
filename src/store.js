import { createStore, combineReducers } from "redux";

import { reducer as tooltip } from "redux-tooltip";

const initialState = {
  title: "With Redux Tooltip",
  contentType: "GII Rank"
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_CONTENT_TYPE": {
      const { contentType } = action.payload;
      return { ...state, contentType };
    }
    default:
      return state;
  }
};

export const initStore = (initState = { app: initialState }) => {
  return createStore(combineReducers({ app: appReducer, tooltip }), initState);
};
