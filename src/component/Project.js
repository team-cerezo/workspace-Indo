import React from 'react';
import { Link } from 'react-router-dom'

export default ({ iteration, projectId }) => (
    <div>
        <h1>Project {projectId}</h1>
        <ul>
            <li>TODO イテレーションのデータを保持するStoreを作る</li>
            <li>TODO イテレーションの一覧を表示する</li>
            <li>TODO イテレーション詳細へリンクする</li>
        </ul>
        <ui>

            {iteration.list.filter(iteration => iteration.projectId === Number(projectId)).map(prop => (
                <li key={prop.iterationId} >
                    <Link to={'/projects/' + prop.projectId + '/iterations/' + prop.iterationId}>{prop.iterationName}</Link>
                </li>
            ))}
        </ui>

    </div>
);