import RascaloidDispatcher from './dispatcher';
import ActionTypes from './action-types';


export const updateProjectName = (name) => {
    RascaloidDispatcher.dispatch({
        type: ActionTypes.UPDATE_PROJECT_NAME,
        payload: { name }
    });
};

export const updateDescription = (description) => {
    RascaloidDispatcher.dispatch({
        type: ActionTypes.UPDATE_PROJECT_DESCRIPTION,
        payload: { description }
    });
};


export const addProject = (name, description) => {
    const body = new URLSearchParams({ name, description });
    fetch('/projects', {
        method: 'POST',
        headers: {
            'X-Bouncr-Credential':'eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyMSIsIm5hbWUiOiJUZXN0IHVzZXIxIiwicGVybWlzc2lvbnMiOlsicHJvamVjdDpyZWFkIiwicHJvamVjdDpjcmVhdGUiLCJwcm9qZWN0OnVwZGF0ZSIsInByb2plY3Q6ZGVsZXRlIl19.lfegO1IXi1hlBETymqw8nqRaq7POrnriJU_5YK2R-PI'
        },
        body})
    .then(responce => responce.text())
    .then(newProject => {
        RascaloidDispatcher.dispatch({
             type: ActionTypes.ADD_PROJECT,
             payload: { name, description }
        });
    })
};

export const allProject = event => {

    fetch('/projects', {
        method: 'GET',
        headers: {
            "accept" : "application/json",
            'X-Bouncr-Credential':'eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyMSIsIm5hbWUiOiJUZXN0IHVzZXIxIiwicGVybWlzc2lvbnMiOlsicHJvamVjdDpyZWFkIiwicHJvamVjdDpjcmVhdGUiLCJwcm9qZWN0OnVwZGF0ZSIsInByb2plY3Q6ZGVsZXRlIl19.lfegO1IXi1hlBETymqw8nqRaq7POrnriJU_5YK2R-PI'
        }
    })
    .then(responce => responce.json())
    .then(allProject => {
        RascaloidDispatcher.dispatch({
             type: ActionTypes.ALL_PROJECT,
             payload: {allProject}
        });
    })
    
};



export const todoToDoing = event => {
    const taskId = event.target.value;
    RascaloidDispatcher.dispatch({
        type: ActionTypes.TODO_TO_DOING,
        payload: { taskId }
    });
};

export const doingToDone = event => {
    const taskId = event.target.value;
    RascaloidDispatcher.dispatch({
        type: ActionTypes.DOING_TO_DONE,
        payload: { taskId }
    });
};

export const doingToTodo = event => {
    const taskId = event.target.value;
    RascaloidDispatcher.dispatch({
        type: ActionTypes.DOING_TO_TODO,
        payload: { taskId }
    });
};

export const doneToDoing = event => {
    const taskId = event.target.value;
    RascaloidDispatcher.dispatch({
        type: ActionTypes.DONE_TO_DOING,
        payload: { taskId }
    });
};
