import React from 'react';
import banner from '../../images/banner.jpg'

const Banner = () => {
    return (
        <div>
            <img className='w-100 img-fluid' src={banner} alt="" />
        </div>
    );
};

export default Banner;