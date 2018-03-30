import React from 'react';
import { Link } from 'react-router-dom';

import { updateProjectName, updateDescription, addProject, allProject } from '../actions';

class Initializer extends React.Component {

    componentDidMount() {
        allProject();
    }
    render() {

        return (
            <span />
        );
    }
}

const ShowProject = (allProject) => {

    let array = allProject.allProject.allProject;
    if (array == null) {
        console.log(array);
        return (
            <span />
        );
    } else {
        return (
            <ul>
                {array.map(prop =>
                    <li key={prop.id}>
                        <Link to={"/projects/" + prop.id}>{prop.name}</Link>
                    </li>
                )}
            </ul>
        );
    }
};

export default ({ project, name, hello, allProject }) => (

    <div>
        <h1>Home</h1>


        <input type="text" placeholder="PJ名"
            onChange={event => updateProjectName(event.target.value)} />
        <input type="text" placeholder="説明"
            onChange={event => updateDescription(event.target.value)} />
        <button onClick={event => addProject(project.name, project.description)}>プロジェクト追加</button>


        <ShowProject allProject={allProject} />
        <Initializer />

    </div>
);

