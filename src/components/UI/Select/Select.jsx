import React from 'react';
import './Select.scss';

const Select = ({options, value, onChange}) => {
    return (
        <select
            className="select"
            value={value}
            onChange={e => onChange(e.target.value)}
        >
            {options.map(option => {
                return (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                );
            })}
        </select>
    );
};

export default Select;