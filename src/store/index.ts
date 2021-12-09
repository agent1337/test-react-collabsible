import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { accordionsReducer } from './Accordions/accordionsReducer';
import { activeRadioReducer } from './ActiveRadio/activeRadioReducer';

const rootReducer = combineReducers({
    accordions: accordionsReducer,
    activeRadio: activeRadioReducer,
})

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer,{},composeWithDevTools());