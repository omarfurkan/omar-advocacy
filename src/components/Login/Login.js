import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();


    if (user) {
        navigate('/');
    }

    const handleEmailChange = event => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }
    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }



    return (
        <div className='container form-container'>
            <h2 className='text-center text-primary mb-4'>Login</h2>
            <form onSubmit={handleUserSignIn}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input onChange={handleEmailChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input onChange={handlePasswordChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required />
                </div>
                <p className='text-danger'>{error?.message}</p>
                <button type="submit" className="btn btn-primary px-5">Login</button>
            </form>
            <p className='mt-2'>New at omarAdvocacy? <Link className='text-primary' to='/register'>Create an account</Link></p>
        </div>
    );
};

export default Login;