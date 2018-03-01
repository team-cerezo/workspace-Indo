import React from 'react';
import { Link } from 'react-router-dom';

export default ({ project }) => (

    <div>
        <h1>Home</h1>

        <ul>
            <li>TODO プロジェクトのデータを保持するStoreを作る</li>
            <li>TODO プロジェクトの一覧を表示する</li>
            <li>TODO プロジェクト詳細へリンクする</li>
        </ul>

        <ui>
            {project.list.map(prop => (
                <li key={prop.projectId} >
                    <Link to={'/projects/' + prop.projectId}>{prop.projectName}</Link>
                </li>
            ))}
        </ui>
    </div>
);


