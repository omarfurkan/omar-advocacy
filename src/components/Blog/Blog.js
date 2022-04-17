import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h2 className='text-center'>Ques-Ans</h2>
            <div>
                <h3>Ques1: Difference between authorization and authentication?</h3>
                <p>Authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data use have to access.</p>
                <p>Authentication is the process of verifying the identity of an individual. A user can interact with a web application using multiple actions. Access to certain actions or pages can be restricted using user levels. Authorization is the process of controlling user access via assigned roles and privileges.Authentication and authorization both play important roles in online security systems. They confirm the identity of the user and grant access to the website or application.  </p>
                <h3>Ques2: Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p>Firebase is a platform developed by  Google for creating mobile and web applications.Firebase is a Backend Service. It provides developers with a variety of tools and services to help develop quality apps , grows their user base, and earn profit.</p>
                <p>I use firebase because: 1.Incredibly Built-In Analytics 2.App development made easy 3. Growth and User Engagement 4. Increase Earning </p>
                <p>There are lots of alternative to Firebase. Some are given below
                    <li>Parse</li>
                    <li>Back4App</li>
                    <li>AWS Amplify</li>
                    <li>Kuzzle</li>
                    <li>Couchbase</li>
                    <li>NativeScript</li>
                    <li>RxDB</li> etc
                </p>
                <h3>Ques3: What other services does firebase provide other than authentication?</h3>
                <p>There are manuy services which Firebase provide. Most useful of them are:
                    <li>Cloud Funtions</li>
                    <li>Hosting</li>
                    <li>Clod Storage</li>
                    <li>Predictions</li>
                    <li>Cloud Messaging</li>
                    <li>Dynamic Links</li>
                    <li>Remote Config</li>
                </p>
            </div>
        </div>
    );
};

export default Blog;