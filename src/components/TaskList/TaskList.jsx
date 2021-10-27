import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import './TaskList.scss';

const TaskList = ({selectedTaskId, changeSelectedTaskId, sortedAndSearchedTask, title, removeTask, taskDesc}) => {

    if(!sortedAndSearchedTask.length) {
        return (
            <div className="task-list">
                <h1>Задачи не найдены!</h1>
            </div>
        );
    }

    return (
        <div className="task-list">
            <h1>{title}</h1>
            {sortedAndSearchedTask.map(task => {
                return (
                    <TaskItem
                        key={task.id}
                        task={task}
                        selectedTaskId={selectedTaskId}
                        changeSelectedTaskId={changeSelectedTaskId}
                        taskDesc={taskDesc}
                        removeTask={removeTask}
                    />
                );
            })}
        </div>
    );
};

export default TaskList;