class Project {
    constructor(projectId, projectName) {
        this.projectId = projectId;
        this.projectName = projectName;
    }
    setDone(done) {
        return new Project(this.projectId, this.projectName);
    }
    static idGenerator = 0;
    static create(projectName) {
        return new Project(++Project.idGenerator, projectName);
    }
}

class ProjectList {
    constructor(list) {
        this.list = list;
    }
    static empty() {
        return new ProjectList([]);
    }
    add(project) {
        return new ProjectList([...this.list, project]);
    }
}


class Iteration {
    constructor(projectId, iterationId, iterationName) {
        this.projectId = projectId;
        this.iterationId = iterationId;
        this.iterationName = iterationName;  
    }
    setDone(done) {
        return new Iteration(this.projectId, this.iterationId, this.iterationName);
    }
    static idGenerator = 0;
    static create(projectId, iterationName) {
        return new Iteration(projectId, ++Iteration.idGenerator, iterationName);
    }
}

class IterationList {
    constructor(list) {
        this.list = list;
    }
    static empty() {
        return new IterationList([]);
    }
    add(iteration) {
        return new IterationList([...this.list, iteration]);
    }
}


class Task {
    constructor(taskId, taskName, storyId, lane, mainUser, subUser) {
        this.taskId = taskId;
        this.taskName = taskName;
        this.storyId = storyId;  
        this.lane = lane;
        this.mainUser = mainUser;
        this.subUser = subUser;
    }


    setDoingUser(taskId, mainUser, subUser) {
        return new Task(this.taskId, this.taskName, this.storyId, "doing", mainUser, subUser);
    }



    setDoing(taskId) {
        return new Task(this.taskId, this.taskName, this.storyId, "doing");
    }
    setDone(taskId) {
        return new Task(this.taskId, this.taskName, this.storyId, "done");
    }
    setTodo(taskId) {
        return new Task(this.taskId, this.taskName, this.storyId, "todo");
    }
    static idGenerator = 0;
    static create(taskName, storyId) {
        return new Task(++Task.idGenerator, taskName, storyId, "todo");
    }
    static createTest(taskName, storyId, lane) {
        return new Task(++Task.idGenerator, taskName, storyId, lane);
    }
    static ChangeDoing(taskId){
        return"";
    }

}

class TaskList {
    constructor(list) {
        this.list = list;
    }
    static empty() {
        return new TaskList([]);
    }
    add(task) {
        return new TaskList([...this.list, task]);
    }

    setDoingUser(taskId, mainUser, subUser) {
        return new TaskList(this.list.map(task => {
            if (task.taskId === Number(taskId)) {
                return task.setDoingUser(taskId, mainUser, subUser);
            }
            return task;
        }));
    }


    setDoing(taskId) {
        return new TaskList(this.list.map(task => {
            if (task.taskId === Number(taskId)) {
                return task.setDoing(taskId);
            }
            return task;
        }));
    }
    setTodo(taskId) {
        return new TaskList(this.list.map(task => {
            if (task.taskId === Number(taskId)) {
                return task.setTodo(taskId);
            }
            return task;
        }));
    }
    setDone(taskId) {
        return new TaskList(this.list.map(task => {
            if (task.taskId === Number(taskId)) {
                return task.setDone(taskId);
            }
            return task;
        }));
    }
}

class Story {
    constructor(projectId, iterationId, storyId, storyName) {
        this.projectId = projectId;
        this.iterationId = iterationId; 
        this.storyId = storyId;
        this.storyName = storyName;  
    }
    setDone(done) {
        return new Story(this.projectId, this.iterationId, this.storyId, this.storyName);
    }
    static idGenerator = 0;
    static create(projectId, iterationId, storyName) {
        return new Story(projectId, iterationId, ++Story.idGenerator, storyName);
    }
}

class StoryList {
    constructor(list) {
        this.list = list;
    }
    static empty() {
        return new StoryList([]);
    }
    add(story) {
        return new StoryList([...this.list, story]);
    }
}

export { Project, ProjectList, Iteration, IterationList, Task, TaskList, Story, StoryList };