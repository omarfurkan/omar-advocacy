import React from 'react';
import './About.css'
import aboutGoal from '../../images/about-goal.jpg'

const About = () => {
    return (
        <div className='container pt-5'>
            <h2 className='text-center my-5 text-primary'>About</h2>
            <div className='about-container'>
                <div className="about-text">
                    <h2>My Goal and Achievement</h2>
                    <p className='text-justify'>Goal is a simple word but to achievement such goal I have to face lots of struggle, hardwork and sacrifice. By education I am a lawyer but I want to be a web devloper because I love such kind of technology and make my career on that field but as I am an advocate its hard to take such decision in this stage. In one hand if I do practice as advocate I may earn money, get social respert and all but on the other hand it will kill my dream to be web-developer.So at this stage I choose to be web-developer, I know it will make me struggle, no earning and lots of leaning but I believe one day I will achieve my goal and be a Web-developer </p>
                </div>
                <div className="about-img ">
                    <h3 className='text-center'>Omar Furkan</h3>
                    <img src={aboutGoal} className='img-fluid' alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;