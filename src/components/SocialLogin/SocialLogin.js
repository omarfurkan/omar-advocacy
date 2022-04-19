import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../images/google-logo.png';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;
    if (error) {
        errorElement = <div>
            <p className='text-danger mt-3 text-center'>Error: {error?.message}</p>
        </div>
    }

    if (user) {
        navigate('/')
    }

    return (
        <div>
            <div className='d-flex  align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-light d-block mx-auto'>
                    <img style={{ width: '35px', paddingRight: "10px" }}
                        src={google} alt="" />
                    <span> Google Sign In</span>
                </button>
                {errorElement}
            </div>
        </div>
    );
};

export default SocialLogin;