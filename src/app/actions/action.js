import { ACCORDION_OPEN, ISDISABLED } from "../actions/types";

export const openAccordion = (index) => {
  return {
    type: ACCORDION_OPEN,
    payload: index
  };
};

export const disabledComponent = (payload) => {
    return {
      type: ISDISABLED,
      payload
    };
  };
  