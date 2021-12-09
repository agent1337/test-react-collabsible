import { ERadio } from "./ActiveRadioTypes";
import { UPDATE_ACTIVE_RADIO } from "./constants"

export const updateActiveRadioAction = (payload: ERadio) => ({ type: UPDATE_ACTIVE_RADIO, payload });