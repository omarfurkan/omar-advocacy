import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { checkoutId } = useParams();
    return (
        <div>
            <h2 className='mt-5 pt-5'>Checkout component: {checkoutId}</h2>
        </div>
    );
};

export default Checkout;