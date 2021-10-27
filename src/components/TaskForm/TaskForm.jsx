import React, {useState} from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import Textarea from '../UI/Textarea/Textarea';
import './TaskForm.scss';

const TaskForm = ({createTask, collapseTask, closeTask}) => {
    const [task, setTask] = useState({title: '', body: ''});
    const [collapse, setCollapse] = useState(false);
    const styles = ['task-form'];

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
        collapseTask(e);
        setCollapse(!collapse);
    };

    const closeNewPost = (e) => {
        closeTask(e);
        setTask({title: '', body: ''});
        setCollapse(false);
    };

    collapse ? styles.push('collapse') : '';

    return (
        <div className={styles.join(' ')}>
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
                    <Button className="task-form__btn_collapse" onClick={collapseNewPost}> </Button>
                    <Button className="task-form__btn_close" onClick={closeNewPost}> </Button>
                </form>
            </div>
        </div>
    );
};

export default TaskForm;