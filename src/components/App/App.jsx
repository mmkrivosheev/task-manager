import React, {useState} from 'react';
import TaskList from '../TaskList/TaskList';
import TaskForm from '../TaskForm/TaskForm';
import TaskFilter from '../TaskFilter/TaskFilter';
import TaskDescription from '../TaskDescription/TaskDescription';
import TaskSearch from '../TaskSearch/TaskSearch';
import Button from '../UI/Button/Button';
import Show from '../UI/Show/Show';
import {dataBase} from './database';
import {useTasks} from '../../hooks/useTask';
import './App.scss';

const App = () => {
    const [tasks, setTasks] = useState(dataBase);
    const [showTaskForm, setShowTaskForm] = useState(false);
    const [taskDescription, setTaskDescription] = useState('');
    const [selectedTaskId, setSelectedTaskId] = useState('');
    const [filter, setFilter] = useState('time');
    const [search, setSearch] = useState('');
    const sortedAndSearchedTask = useTasks(tasks, filter, search);

    const changeSelectedTaskId = (id) => {
        setSelectedTaskId(id);
    };

    const createTask = (newTask) => {
        setTasks([...tasks, newTask]);
        setShowTaskForm(false);
    };

    const taskDesc = (task) => {
        setTaskDescription(task);
    };

    const closeTask = () => {
        setShowTaskForm(false);
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
                        <Button className="header__button" onClick={() => setShowTaskForm(true)}>
                            Добавить новую задачу
                        </Button>
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
            <Show show={showTaskForm}>
                <TaskForm
                    createTask={createTask}
                    closeTask={closeTask}
                />
            </Show>
        </div>
    );
};

export default App;