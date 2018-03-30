import { Container } from 'flux/utils';

import Home from '../component/Home';
import ProjectStore from '../store/ProjectStore';
import AllProjectStore from '../store/AllProjectStore';

const getStores = () => [ProjectStore, AllProjectStore];

const calculateState = () => {
    return {
        project: ProjectStore.getState(),
        allProject: AllProjectStore.getState()
    };
};

const HomeContainer = Container.createFunctional(Home, getStores, calculateState);

export default HomeContainer;
