import { ActiveRadioAction, ActiveRadioState, ERadio } from "./ActiveRadioTypes"
import { UPDATE_ACTIVE_RADIO } from "./constants"

const defaulteState: ActiveRadioState = {
    active: ERadio.Accordion
}

export const activeRadioReducer = (state: ActiveRadioState = defaulteState, action: ActiveRadioAction) => {
    switch (action.type) {
        case UPDATE_ACTIVE_RADIO:
            return {
                ...state, active: action.payload
            }

        default:
            return state;
    }
}
