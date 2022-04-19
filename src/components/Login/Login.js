import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);





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

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if (user) {
        navigate(from, { replace: true });
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

            <p> Rorget Password?
                <button className='btn btn-link'
                    onClick={async () => {
                        if (email) {
                            await sendPasswordResetEmail(email);
                            toast('Sent email');
                        }
                        else {
                            toast('please enter your email address')
                        }
                    }}
                >
                    Reset password
                </button>
            </p>

            <p className='mt-2'>New at omarAdvocacy? <Link className='text-primary' to='/register'>Create an account</Link></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;