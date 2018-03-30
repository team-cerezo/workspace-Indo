import { ReduceStore } from 'flux/utils';
import RascaloidDispatcher from '../dispatcher';
import ActionTypes from '../action-types';

class ProjectStore extends ReduceStore {
    getInitialState() {
        return { name: null, description: null };
    }
    reduce(state, { type, payload }) {
        switch (type) {
            case ActionTypes.UPDATE_PROJECT_NAME:
                const { name } = payload;
                return { ...state, name };
            case ActionTypes.UPDATE_PROJECT_DESCRIPTION:
                const { description } = payload;
                return { ...state, description };
            case ActionTypes.ADD_PROJECT:
                return { ...payload };
            default:
                return { ...state };
        }
    }
}

export default new ProjectStore(RascaloidDispatcher);
