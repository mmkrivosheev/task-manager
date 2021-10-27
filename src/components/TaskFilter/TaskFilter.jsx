import React from 'react';
import Select from '../UI/Select/Select';
import './TaskFilter.scss';

const TaskFilter = ({filter, setFilter}) => {

    return (
        <div className="task-filter">
            <span>Сортировка</span>
            <Select
                value={filter}
                onChange={selected => setFilter(selected)}
                options={[
                    {value: 'time', name: 'по дате'},
                    {value: 'title', name: 'по теме'}
                ]}
            />
        </div>
    );
};

export default TaskFilter;