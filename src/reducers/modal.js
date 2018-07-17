import {
    TOGGLE_MODAL, 
    EDIT_RECIPE, 
    CREATE_RECIPE
} from '../actions/types';

const INITIAL_MODAL_STATE = {
    isOpen: false,
    newEntry: false
}

function ModalReducer(state = INITIAL_MODAL_STATE, action) {
    switch (action.type) {
        case TOGGLE_MODAL:
            return Object.assign({}, state, { isOpen: !state.isOpen });
        case EDIT_RECIPE:
            return Object.assign({}, state, { newEntry: false });
        case CREATE_RECIPE:
            return Object.assign({}, state, { newEntry: true });
        default:
            return state;
    }
}

export default ModalReducer;