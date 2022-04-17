import React from 'react';

import Banner from '../Banner/Banner';
import CleintReview from '../ClientReview/ClientReview';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <CleintReview></CleintReview>
        </div>
    );
};

export default Home;