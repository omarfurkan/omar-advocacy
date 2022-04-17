import React from 'react';
import './ClientReview.css'
import clientReview1 from '../../images/clients/c1.jpg'
import clientReview2 from '../../images/clients/c2.jpg'
import clientReview3 from '../../images/clients/c3.jpg'
import clientReview4 from '../../images/clients/c4.jpg'

const CleintReview = () => {
    return (
        <div className='container review-container'>
            <div>
                <h1 className='text-center'>Our Happy Clients</h1>
            </div>
            <div>

                <div>
                    <div className='client-review'>
                        <div className='client-img'>
                            <img src={clientReview1} alt="" />
                        </div>
                        <div className='review-text'>
                            <p>The most professional lawyer that I have ever met</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='client-review'>
                        <div className='client-img'>
                            <img src={clientReview2} alt="" />
                        </div>
                        <div className='review-text'>
                            <p>I’m very thankful I decided to go with OmarAdvocacy.  My charges against me were dismissed and will be expunged, I couldnt ask for a better outcome. He was professional and easily accessible every step of the way.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='client-review'>
                        <div className='client-img'>
                            <img src={clientReview3} alt="" />
                        </div>
                        <div className='review-text'>
                            <p>The absolute BEST. From start to finish, Omar made an extremely stressful situation for me so much easier. Highly, highly recommend</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='client-review'>
                        <div className='client-img'>
                            <img src={clientReview4} alt="" />
                        </div>
                        <div className='review-text'>
                            <p>Good Attorney. Very knowledgable.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CleintReview;