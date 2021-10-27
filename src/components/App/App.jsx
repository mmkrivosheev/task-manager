import React, {useState} from 'react';
import {dataBase} from './database';
import TaskList from '../TaskList/TaskList';
import './App.scss';

const App = () => {
    const [tasks, setTasks] = useState(dataBase);

    return (
        <div className="wrapper">
            <div className="header">
                <div className="header__container">
                    <div>
                        <span className="header__title">Менеджер задач</span>
                    </div>
                </div>
            </div>
            <div className="body">
                <div className="body__task-list">
                    <TaskList
                        title={"Список задач"}
                        tasks={tasks}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;