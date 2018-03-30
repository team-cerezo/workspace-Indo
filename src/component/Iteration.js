import React from 'react';
import { todoToDoing, doingToDone, doingToTodo, doneToDoing } from '../actions';

const TodoToDoingButon = ({ taskId }) => (
    <div>
        <button onClick={todoToDoing} value={taskId}>doingへ進める</button>
    </div>
);

const DoingToDoneButon = ({ taskId }) => (
    <div>
        <button onClick={doingToDone} value={taskId}>doneへ進める</button>
    </div>
);

const DoneToDoingButon = ({ taskId }) => (
    <div>
        <button onClick={doneToDoing} value={taskId}>doingに戻す</button>
    </div>
);

const DoingToTodoButon = ({ taskId }) => (
    <div>
        <button onClick={doingToTodo} value={taskId}>todoに戻す</button>
    </div>
);

const TodoStatus = ({ taskId }) => (
    <div>
        <TodoToDoingButon
            taskId={taskId}
        />
    </div>
);

const DoingStatus = ({ taskId }) => (
    <div>
        <DoingToDoneButon
            taskId={taskId}
        />
        <DoingToTodoButon
            taskId={taskId}
        />

    </div>
);
const DoneStatus = ({ taskId }) => (
    <div>
        <DoneToDoingButon
            taskId={taskId}
        />
    </div>
);
const TodoTask = ({ prop }) => {
    if (prop.lane === "todo") {
        return (
            <p>

                <ul>
                    {prop.taskName}
                    <TodoStatus
                        taskId={prop.taskId}
                    />
                </ul>

            </p>
        );
    } else {
        return (
            <p>

                <ul>

                </ul>

            </p>
        );
    }
};

const DoingTask = ({ prop }) => {
    if (prop.lane === "doing") {
        return (
            <p>

                <ul>
                    {prop.taskName} {prop.mainUser} {prop.subUser}
                    <DoingStatus
                        taskId={prop.taskId}
                    />
                </ul>

            </p>
        );
    } else {
        return (
            <p>

                <ul>

                </ul>

            </p>
        );
    }
};

const DoneTask = ({ prop }) => {
    if (prop.lane === "done") {
        return (
            <p>
                <ul>
                    {prop.taskName}
                    <DoneStatus
                        taskId={prop.taskId}
                    />
                </ul>
            </p>
        );
    } else {
        return (
            <p>
                <ul>

                </ul>
            </p>
        );
    }
};




export default ({ task, story, projectId, iterationId }) => (
    <div>
        <h1>Iteration {iterationId} (Project {projectId})</h1>
        <ul>
            <li>TODO ストーリーとタスクのデータを保持するStoreを作る</li>
            <li>TODO ストーリーの一覧を表示する</li>
            <li>TODO タスクの一覧をレーン別に表示する</li>
            <li>TODO タスクをレーン移動できるようにする（まだアサインはできなくて良い）</li>
        </ul>

        <ul>
            {story.list.filter(story => (story.projectId === Number(projectId) && story.iterationId === Number(iterationId))).map(prop => (
                <li key={story.storyId} >
                    storyId:{prop.storyId}#storyName:{prop.storyName}
                    <table border="1">
                        <p>
                            <tr>
                                <td width="400">
                                    todo
                            </td>
                                <td width="400">
                                    doing
                            </td>
                                <td width="400">
                                    done
                            </td>
                            </tr>

                        </p>
                        {task.list.filter(task => task.storyId === prop.storyId).map(prop => (
                            <p key={task.taskId} >

                                <tr height="150">
                                    <td width="400">
                                        <TodoTask
                                            prop={prop} />
                                    </td>
                                    <td width="400">
                                        <DoingTask
                                            prop={prop} />
                                    </td>
                                    <td width="400">
                                        <DoneTask
                                            prop={prop} />
                                    </td>
                                </tr>

                            </p>
                        ))}
                    </table>
                </li>
            ))}
        </ul>
    </div>
);
