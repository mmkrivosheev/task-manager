import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import './TaskList.scss';

const TaskList = ({tasks, title, selectedTaskId, changeSelectedTaskId, taskDesc}) => {

    if(!tasks.length) {
        return (
            <div className="task-list">
                <h1>Задачи не найдены!</h1>
            </div>
        );
    }

    return (
        <div className="task-list">
            <h1>{title}</h1>
            {tasks.map(task => {
                return (
                    <TaskItem
                        key={task.id}
                        task={task}
                        selectedTaskId={selectedTaskId}
                        changeSelectedTaskId={changeSelectedTaskId}
                        taskDesc={taskDesc}
                    />
                );
            })}
        </div>
    );
};

export default TaskList;