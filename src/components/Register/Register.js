import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)


    if (user) {
        navigate('/');
    }


    const handleEmailChange = event => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordChange = event => {
        setConfirmPassword(event.target.value)
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('your password did not match')
            return;
        }
        if (password.length < 6) {
            setError('password must be 6 character')
        }

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='container form-container'>
            <h2 className='text-center text-primary mb-4'>Register</h2>
            <form onSubmit={handleCreateUser}>
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
                <p className='text-danger'>{error}</p>
                <button type="submit" className="btn btn-primary px-5">Register</button>
            </form>
            <p className='mt-2'>Already have an account? <Link className='text-primary' to='/login'>Login</Link></p>
        </div>
    );
};

export default Register;