import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='container form-container'>
            <h2 className='text-center text-primary mb-4'>Login</h2>
            <form >
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required />
                </div>
                <button type="submit" className="btn btn-primary px-5">Login</button>
            </form>
            <p className='mt-2'>New at omarAdvocacy? <Link className='text-primary' to='/register'>Create an account</Link></p>
        </div>
    );
};

export default Login;