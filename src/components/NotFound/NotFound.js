import React from 'react';
import notFound from '../../images/not-found.jpg'

const NotFound = () => {
    return (
        <div >
            <img className='img-fluid rounded mx-auto d-block' src={notFound} width='850px' alt="" />
        </div>
    );
};

export default NotFound;