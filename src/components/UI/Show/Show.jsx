import React from 'react';
import './Show.scss';

const Show = ({children, show}) => {
    const styles = ['show'];

    if(show) {
        styles.push('active');
    }

    return (
        <div className={styles.join(' ')}>
            {children}
        </div>
    );
};

export default Show;