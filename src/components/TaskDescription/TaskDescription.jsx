import React from 'react';
import './TaskDescription.scss';

const TaskDescription = ({taskDescription}) => {

    return (
        <div className="task-description">
            <h1>Подробное описание задачи</h1>
                <div
                    className="task-description__body"
                    style={{color: taskDescription ? '#778899' : '#FF7F50'}}
                >
                    {!taskDescription
                        ?
                        'Нажмите на задачу из списка чтобы посмотреть подробное описание.'
                        :
                        <div>
                            <div className="task-description__field">
                                <span className="task-description__prop">Дата создания:</span>
                                <span>{new Date(taskDescription.time).toLocaleDateString()}</span>
                            </div>
                            <div className="task-description__field">
                                <span className="task-description__prop">Время создания:</span>
                                <span>{new Date(taskDescription.time).toLocaleTimeString()}</span>
                            </div>
                            <div className="task-description__field">
                                <span className="task-description__prop">Тема:</span>
                                {taskDescription.title}
                            </div>
                            <div className="task-description__field">
                                <span className="task-description__prop">Описание:</span>
                                {taskDescription.body}
                            </div>
                        </div>
                    }
                </div>
        </div>
    );
};

export default TaskDescription;