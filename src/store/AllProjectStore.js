import { ReduceStore } from 'flux/utils';
import RascaloidDispatcher from '../dispatcher';
import ActionTypes from '../action-types';

class AllProjectStore extends ReduceStore {
    getInitialState() {
        return { allProject: null};
    }
    reduce(state, { type, payload }) {
        switch (type) {
            case ActionTypes.ALL_PROJECT:
                return { ...payload };
            default:
                return { ...state };
        }
    }
}

export default new AllProjectStore(RascaloidDispatcher);
