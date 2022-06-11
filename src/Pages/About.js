import React from 'react';
import { useNavigate } from 'react-router-dom';
import myPic from "../images/myPic.png"


const About = () => {
    const navigate = useNavigate()
    const contact = () => {
        navigate("/contact")
    }
    return (
        <div className='pt-36 bg-base-200'>
            <div class="hero min-h-screen lg:w-3/4 mx-auto bg-base-200">
                <div class="hero-content flex-col lg:flex-row ">
                    <img src={myPic} class="max-w-sm rounded-lg shadow-2xl" />

                    <div className='text-left lg:ml-16'>
                        <h1 class="text-5xl font-bold">About Me</h1>
                        <p class="py-6">I am Asadullah, a junior front-end web developer. As a dedicated and passionate web develope, I always try to do my job with fully responsibility and dedicated to give the best result. </p>
                        <h2 className='text-3xl font-bold py-4'>My skills</h2>
                        <p>I am expertise in HTML, CSS , Tailwind CSS, Bootstrap, Javascript, React JS. I also love to work with firebase, React query, React form hooks,stripe, etc.</p> <br />

                        <p>I am also familiar with some modern technology like Next JS, Redux and React Native. And I am always about the latest technology.</p>
                        <button onClick={contact} class="btn btn-primary my-4 text-lg">Hire Me</button>
                    </div>

                </div>
            </div>
            <div className='lg:w-3/4 mx-auto text-left'>

            </div>

        </div>
    );
};

export default About;