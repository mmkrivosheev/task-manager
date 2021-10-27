import React, {useState} from 'react';
import {dataBase} from './database';
import TaskList from '../TaskList/TaskList';
import TaskDescription from '../TaskDescription/TaskDescription';
import {useTasks} from '../../hooks/useTask';
import './App.scss';
import TaskSearch from "../TaskSearch/TaskSearch";
import TaskFilter from "../TaskFilter/TaskFilter";

const App = () => {
    const [tasks, setTasks] = useState(dataBase);
    const [taskDescription, setTaskDescription] = useState('');
    const [selectedTaskId, setSelectedTaskId] = useState('');
    const [filter, setFilter] = useState('time');
    const [search, setSearch] = useState('');
    const sortedAndSearchedTask = useTasks(tasks, filter, search);

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
                    <TaskSearch search={search} setSearch={setSearch} />
                </div>
            </div>
            <div className="body">
                <div className="body__task-list">
                    <div className="body__sort">
                        <TaskFilter filter={filter} setFilter={setFilter} />
                    </div>
                    <TaskList
                        title={"Список задач"}
                        sortedAndSearchedTask={sortedAndSearchedTask}
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