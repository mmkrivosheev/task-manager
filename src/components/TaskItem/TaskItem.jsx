import React from 'react';
import './TaskItem.scss';

const TaskItem = props => {

    const click = () => {
        props.taskDesc(props.task);
        props.changeSelectedTaskId(props.task.id);
    };

    return (
        <div
            className={props.selectedTaskId === props.task.id
                ? "task-item selected"
                : "task-item"
            }
             onClick={click}
        >
            <div  className="task-item__content">
                <span>{new Date(props.task.time).toLocaleDateString()}</span>
                <div>
                    <strong>{props.task.title}</strong>
                </div>
            </div>
            <div className="task-item__btn" onClick={e => e.stopPropagation()}>
                <button onClick={() => props.removeTask(props.task)}> </button>
            </div>
        </div>
    );
};

export default TaskItem;