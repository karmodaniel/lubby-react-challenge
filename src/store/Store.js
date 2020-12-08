import { createStore } from "redux";

const INITIAL_STATE = {};

function profile(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_PROFILE":
      return { ...state, state, data: [action.profile] };

    default:
      return state;
  }
}

const store = createStore(profile);

export default store;
