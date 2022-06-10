import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import projectPic from "../images/mern-stack.jpg"

const Projects = () => {
    const navigate=useNavigate()
    const projects = [
        {
            name: "Bike Parts Manufacturer",
            id: 1,
            description: `A website that keeps bike parts in stock. A user can see the parts and buy them. An admin can add and remove parts. An admin also make a user to a admin.`,
            image: projectPic,
            demoLink: "https://bikeparts-b2bb7.web.app/",
        },
        {
            name: "Car Warehouse",
            id: 2,
            description: `It is a car warehouse website. Users can see the cars and it's details. They can add and remove cars`,
            image: projectPic,
            demoLink: "https://car-inventory-7c113.web.app/",
        },
        {
            name: "Gym Trainer",
            id: 3,
            description: `It is a gym trainer services website. Users can see the trainers and it's services. They can take some kind of service as their needs. `,
            image: projectPic,
            demoLink: "https://personal-gym-trainer-c42fc.web.app/",
        },

    ];
    const navigateDetails = (id) => {
        navigate(`/projects/${id}`)
    }
    return (
       <div>
        <h2 className='mt-32 text-3xl font-bold underline'>Latest Projects</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-4 my-24'>
            {
                projects.map(project => {
                    return (
                        <div class="card w-96 bg-base-100 shadow-xl">
                            <figure class="px-10 pt-10">
                                <img src={project.image} alt="Shoes" class="rounded-xl" />
                            </figure>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title">{project.name}</h2>
                                <p>{project.description}</p>
                                <div class="card-actions">
                                    <button class="btn btn-primary" onClick={()=>navigateDetails(project.id)}>See Details</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
       </div>
    );
};

export default Projects;