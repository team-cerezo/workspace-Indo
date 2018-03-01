import { ReduceStore } from 'flux/utils';
import { Iteration, IterationList } from '../models';
import RascaloidDispatcher from '../dispatcher';

class IterationStore extends ReduceStore {
    getInitialState() {
        return IterationList.empty()
            .add(Iteration.create(1,'1_aaaa'))
            .add(Iteration.create(1,'1_bbbb'))
            .add(Iteration.create(2,'2_cccc'))
            .add(Iteration.create(2,'2_dddd'))
            .add(Iteration.create(3,'3_eeee'));
    }
    reduce(state, { type, payload }) {
        switch (type) {
            default:
                return state;
        }
    }
}

export default new IterationStore(RascaloidDispatcher);
