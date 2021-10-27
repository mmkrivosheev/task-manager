import React from 'react';
import './TaskItem.scss';

const TaskItem = props => {

    return (
        <div className="task-item">
            <div  className="task-item__content">
                <span>{new Date(props.task.time).toLocaleDateString()}</span>
                <div>
                    <strong>{props.task.title}</strong>
                </div>
            </div>
        </div>
    );
};

export default TaskItem;