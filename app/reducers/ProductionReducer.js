import { SAVE_LIST_FERTILIZANTES, SAVE_LIST_PRODUCCTION, SAVE_LIST_RIESGO } from '../actions/types'
import { storeListFertilizantes, storeListRegisters, storeListRiesgo } from '../utils/AsyncStore';

const INIT_STATE = {
    ListProduction: [],
    ListFertilizantes: [],
    ListRiesgo: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case SAVE_LIST_PRODUCCTION:
            async function save() {
                await storeListRegisters(action.payload)
            }
            save()
            return { ...state, ListProduction: action.payload };

        case SAVE_LIST_FERTILIZANTES:
            async function save1() {
                await storeListFertilizantes(action.payload)
            }
            save1()
            return { ...state, ListFertilizantes: action.payload };
        case SAVE_LIST_RIESGO:
            async function save2() {
                await storeListRiesgo(action.payload)
            }
            save2()
            return { ...state, ListRiesgo: action.payload };

        default: return { ...state };
    }
}