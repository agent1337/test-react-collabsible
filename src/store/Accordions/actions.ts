import { IAccordion } from "./AccordionTypes";
import { UPDATE_ACCORDION } from "./constants"

export const updateAccordionAction = (payload: IAccordion) => ({ type: UPDATE_ACCORDION, payload });