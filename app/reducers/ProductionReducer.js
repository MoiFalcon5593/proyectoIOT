import { SAVE_LIST_PRODUCCTION } from '../actions/types'
import { storeListRegisters } from '../utils/AsyncStore';

const INIT_STATE = {
    ListProduction: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case SAVE_LIST_PRODUCCTION:
            return { ...state, ListProduction: action.payload };
            
        default: return { ...state };
    }
}