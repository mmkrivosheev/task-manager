import React, {useEffect, useRef, useState} from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import Textarea from '../UI/Textarea/Textarea';
import './TaskForm.scss';

const TaskForm = ({createTask, closeTask}) => {
    const [task, setTask] = useState({title: '', body: ''});
    const [collapse, setCollapse] = useState(false);

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...task,
            id: Math.random(),
            time: Date.now()
        };
        createTask(newPost);
        setTask({title: '', body: ''});
    };

    const collapseNewPost = (e) => {
        e.preventDefault();
        setCollapse(!collapse);
    };

    const closeNewPost = (e) => {
        e.preventDefault();
        closeTask();
        setTask({title: '', body: ''});
        setCollapse(false);
    };

    return (
        <div className={collapse ? "task-form collapse" : "task-form"}>
            <div className="task-form__container">
                <form className="task-form__form" onSubmit={addNewPost}>
                    <div className="task-form__body">
                        <div>
                            <label>Тема задачи</label>
                            <Input
                                className="task-form__input"
                                type="text"
                                value={task.title}
                                onChange={e => setTask({...task, title: e.target.value})}
                            />
                        </div>
                        <div>
                            <label>Описание задачи</label>
                            <Textarea
                                className="task-form__textarea"
                                type="text"
                                value={task.body}
                                onChange={e => setTask({...task, body: e.target.value})}
                            />
                        </div>
                    </div>
                    <Button className="task-form__btn_send">Записать</Button>
                    <Button className="task-form__btn_collapse" onClick={collapseNewPost}>
                        <span> </span>
                    </Button>
                    <Button className="task-form__btn_close" onClick={closeNewPost}>
                        <span> </span>
                        <span> </span>
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default TaskForm;