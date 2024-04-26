// eslint-disable-next-line no-unused-vars
import React from 'react';
import img from "../photo_2022-01-17_23-08-42.jpg"

function About() {
    return (
        <div style={{ display: 'flex', width:"100%" }}>
            <div style={{ width: '30%' }}>
                <img src={img} alt="img" style={{ width: '100%' }} />
            </div>
            <div className="about-container"  style={{ width: '70%' }}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet,
                    consectetur
                    adipisicing elit...</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet,
                    consectetur
                    adipisicing elit...</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet,
                    consectetur
                    adipisicing elit...</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet,
                    consectetur
                    adipisicing elit...</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet,
                    consectetur
                    adipisicing elit...</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet,
                    consectetur
                    adipisicing elit...</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet,
                    consectetur
                    adipisicing elit...</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet,
                    consectetur
                    adipisicing elit...</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet,
                    consectetur
                    adipisicing elit...</p>
            </div>
        </div>
    );
}

export default About;
