import RascaloidDispatcher from './dispatcher';
import ActionTypes from './action-types';

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
