import { AccordionsAction, AccordionsState } from "./AccordionTypes"
import { UPDATE_ACCORDION } from "./constants"

const defaulteState: AccordionsState = {
    accordions: [{
        id: 1,
        title: 'Item 1',
        content: 'Content Item 1',
        active: false
    },
    {
        id: 2,
        title: 'Item 2',
        content: 'Content Item 2',
        active: false
    },
    {
        id: 3,
        title: 'Item 3',
        content: 'Content Item 3',
        active: false
    }],
}

export const accordionsReducer = (state: AccordionsState = defaulteState, action: AccordionsAction) => {
    switch (action.type) {
        case UPDATE_ACCORDION:
            return {
                ...state, accordions: state.accordions.map(item => {
                    if (item.id === action.payload.id) return { ...item, active: action.payload.active };
                    else return { ...item, active: false }; 
                })
            }

        default:
            return state;
    }
}
