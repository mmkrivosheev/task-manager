import Input from '../UI/Input/Input';
import React from 'react';
import './TaskSearch.scss';

const TaskSearch = ({search, setSearch}) => {
    return (
        <div className="task-search">
            <Input
                className="task-search__input"
                placeholder="Поск по теме задачи..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
        </div>
    );
};

export default TaskSearch;