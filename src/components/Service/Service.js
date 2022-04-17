import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, price, description } = service;
    const navigate = useNavigate();
    const navigateToCheckout = id => {
        navigate(`/checkout/${id}`)
    }
    return (
        <div className='service-container text-center  mb-5'>
            <img style={{ height: '350px', width: '100%' }} className='img-fluid' src={img} alt="" />
            <h3 className='mt-5'>{name}</h3>
            <h5>Price <small>starts with: </small>{price}</h5>
            <p className='px-3'>{description}</p>
            <button onClick={() => navigateToCheckout(id)} className='btn btn-primary px-5' >Checkout</button>
        </div>
    );
};

export default Service;