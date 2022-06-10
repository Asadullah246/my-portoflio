import React from 'react';
import htmlPic from "../images/html.png"
import CSSPic from "../images/css.png"
import bootstrapPic from "../images/bootstrap.png"
import tailwindCSSPic from "../images/tailwind.png"
import JavaScriptPic from "../images/js.png"
import ReactPic from "../images/react.jfif"
import nodePic from "../images/node.png"
import ExpressPic from "../images/express.png"
import mongoDBPic from "../images/mongodb.png"

const Skills = () => {
    const skills=[
        {
            name: "HTML",
            image: htmlPic,
        },
        {
            name: "CSS",
            image: CSSPic,
        },
        {
            name: "Bootstrap",
            image: bootstrapPic,
        },
        {
            name: "Tailwind CSS",
            image: tailwindCSSPic,
        },
        {
            name: "JavaScript",
            image: JavaScriptPic,
        },
        {
            name: "React JS",
            image: ReactPic,
        },
        {
            name: "Express JS",
            image: ExpressPic,
        },
        {
            name: "MongoDB",
            image: mongoDBPic,
        },
    ]
    return (
        <div className='bg-base-200 mt-20 py-12'>
            <h2 className='font-bold text-3xl underline'>MY SKILLS</h2>
            <div className='w-10/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-32 my-16'>
            {
                skills.map(skill => {
                    return (
                        <div class="card w-40 bg-base-200 ">
                            <figure class="">
                                <img className='w-20 h-16' src={skill.image} alt="Shoes" class="rounded-xl" />
                            </figure>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title font-bold">{skill.name}</h2>
                                
                            </div>
                        </div> 
                    )
                })
            }

        </div>
            
        </div>
    );
};

export default Skills;