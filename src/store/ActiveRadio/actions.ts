import { IActiveRadio } from "./ActiveRadioTypes";
import { UPDATE_ACTIVE_RADIO } from "./constants"

export const updateActiveRadioAction = (payload: IActiveRadio) => ({ type: UPDATE_ACTIVE_RADIO, payload });