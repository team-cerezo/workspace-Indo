import { Container } from 'flux/utils';

import Iteration from '../component/Iteration';
import StoryStore from '../store/StoryStore';
import TaskStore from '../store/TaskStore';

const getStores = () => [StoryStore, TaskStore];

const calculateState = (prevState, { match: { params: { projectId, iterationId } } }) => {
    return {
        story: StoryStore.getState(),
        task: TaskStore.getState(),
        projectId,
        iterationId
    };
};

const IterationContainer = Container.createFunctional(Iteration, getStores, calculateState, { withProps: true });

export default IterationContainer;
