import { ReduceStore } from 'flux/utils';
import { Project, ProjectList } from '../models';
import RascaloidDispatcher from '../dispatcher';


class ProjectStore extends ReduceStore {
    getInitialState() {
        return ProjectList.empty()
            .add(Project.create('aaaa'))
            .add(Project.create('bbbb'))
            .add(Project.create('cccc'));
    }
    reduce(state, { type, payload }) {
        switch (type) {
            default:
                return state;
        }
    }
}

export default new ProjectStore(RascaloidDispatcher);
