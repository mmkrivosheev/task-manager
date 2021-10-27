import React from 'react';
import './TaskItem.scss';

const TaskItem = props => {

    const click = () => {
        props.taskDesc(props.task);
        props.changeSelectedTaskId(props.task.id);
    };

    return (
        <div
            className="task-item"
            style={{outline: props.selectedTaskId === props.task.id
                    ? '2px solid #778899'
                    : '1px solid #ced4da'
            }}
            onClick={click}
        >
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