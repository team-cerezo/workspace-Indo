import { ReduceStore } from 'flux/utils';
import { Task, TaskList } from '../models';
import RascaloidDispatcher from '../dispatcher';
import ActionTypes from '../action-types';

class TaskStore extends ReduceStore {
    getInitialState() {
        return TaskList.empty()
            .add(Task.create('Story1のタスク1', 1))
            .add(Task.create('Story1のタスク2', 1))
            .add(Task.create('Story2のタスク3', 2))
            .add(Task.create('Story2のタスク4', 2))
            .add(Task.create('Story3のタスク5', 3))
            .add(Task.create('Story4のタスク6', 4))
            .add(Task.create('Story4のタスク7', 4))
            .add(Task.create('Story5のタスク8', 5))
            .add(Task.createTest('Story6のタスク9', 6, "todo"))
            .add(Task.createTest('Story7のタスク10', 7, "todo"))
            .add(Task.createTest('Story8のタスク11', 8, "todo"))
            .add(Task.createTest('Story9のタスク12', 9, "todo"))
            .add(Task.createTest('Story10のタスク13', 10, "todo"))
            .add(Task.createTest('Story11のタスク14', 11, "todo"))
            .add(Task.createTest('Story11のタスク15', 11, "todo"));
    }
    reduce(state, { type, payload }) {
        switch (type) {
            case ActionTypes.TODO_TO_DOING: {
                const { taskId } = payload;
                return state.setDoingUser(taskId, "main", "sub");
            }
            case ActionTypes.DOING_TO_DONE: {
                const { taskId } = payload;
                return state.setDone(taskId);
            }
            case ActionTypes.DOING_TO_TODO: {
                const { taskId } = payload;
                return state.setTodo(taskId);
            }
            case ActionTypes.DONE_TO_DOING: {
                const { taskId } = payload;
                return state.setDoing(taskId);
            }
            default:
                return state;
        }
    }
}

export default new TaskStore(RascaloidDispatcher);
