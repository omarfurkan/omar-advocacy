import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');



    const handleEmailChange = event => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordChange = event => {
        setConfirmPassword(event.target.value)
    }

    return (
        <div className='container form-container'>
            <h2 className='text-center text-primary mb-4'>Register</h2>
            <form >
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input onChange={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input onChange={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputConfirmPassword1">Confirm Password</label>
                    <input onChange={handleConfirmPasswordChange} type="password" className="form-control" id="exampleInputConfirmPassword1" placeholder="Confirm Password" required />
                </div>
                <button type="submit" className="btn btn-primary px-5">Register</button>
            </form>
            <p className='mt-2'>Already have an account? <Link className='text-primary' to='/login'>Login</Link></p>
        </div>
    );
};

export default Register;