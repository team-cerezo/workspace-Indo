import { ReduceStore } from 'flux/utils';
import { Story, StoryList } from '../models';
import RascaloidDispatcher from '../dispatcher';

class StoryStore extends ReduceStore {
    getInitialState() {
        return StoryList.empty()
            .add(Story.create(1, 1, 'Story1'))
            .add(Story.create(1, 1, 'Story2'))
            .add(Story.create(1, 1, 'Story3'))
            .add(Story.create(1 ,2, 'Story4'))
            .add(Story.create(1, 2, 'Story5'))
            .add(Story.create(2, 3, 'Story6'))
            .add(Story.create(2, 3, 'Story7'))
            .add(Story.create(2, 3, 'Story8'))
            .add(Story.create(2, 3, 'Story9'))
            .add(Story.create(2, 4, 'Story10'))
            .add(Story.create(3, 5, 'Story11'));
    }
    reduce(state, { type, payload }) {
        switch (type) {
            default:
                return state;
        }
    }
}

export default new StoryStore(RascaloidDispatcher);
