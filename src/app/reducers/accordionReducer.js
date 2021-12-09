import { ACCORDION_OPEN, ISDISABLED } from "../actions/types";

const initialState = {
  list: [
    { title: "Item 1", content: "Content for item 1", active: false },
    { title: "Item 2", content: "Content for item 2", active: false },
    { title: "Item 3", content: "Content for item 3", active: false },
  ],
  isDisabled: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACCORDION_OPEN:
      const filtered = state.list.map((item, index) => {
        if (index === action.payload) return { ...item, active: !item.active };
        else return { ...item, active: false };
      });
      return { ...state, list: filtered };

    case ISDISABLED:
      return { ...state, isDisabled: action.payload};
    default:
      return state;
  }
};
