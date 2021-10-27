import React, {useState} from 'react';
import {dataBase} from './database';
import TaskList from '../TaskList/TaskList';
import TaskDescription from '../TaskDescription/TaskDescription';
import './App.scss';

const App = () => {
    const [tasks, setTasks] = useState(dataBase);
    const [taskDescription, setTaskDescription] = useState('');
    const [selectedTaskId, setSelectedTaskId] = useState('');

    const changeSelectedTaskId = (id) => {
        setSelectedTaskId(id);
    };

    const taskDesc = (task) => {
        setTaskDescription(task);
    };

    const removeTask = (task) => {
        setTasks(tasks.filter(p => p.id !== task.id));

        if(task.id === selectedTaskId) {
            setTaskDescription('');
        }
    };

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
                        selectedTaskId={selectedTaskId}
                        changeSelectedTaskId={changeSelectedTaskId}
                        taskDesc={taskDesc}
                        removeTask={removeTask}
                    />
                </div>
                <div className="body__task-description">
                    <TaskDescription taskDescription={taskDescription} />
                </div>
            </div>
        </div>
    );
};

export default App;