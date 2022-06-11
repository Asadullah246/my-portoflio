import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import bikeImage1 from "../images/siteSkinshoots/bikeParts/Screenshot_1.png"
import bikeImage2 from "../images/siteSkinshoots/bikeParts/Screenshot_2.png"
import bikeImage3 from "../images/siteSkinshoots/bikeParts/Screenshot_3.png"
import carImage1 from "../images/siteSkinshoots/car/Screenshot_1.png"
import carImage2 from "../images/siteSkinshoots/car/Screenshot_2.png"
import carImage3 from "../images/siteSkinshoots/car/Screenshot_3.png"
import zymImage1 from "../images/siteSkinshoots/Zym/Screenshot_1.png"
import zymImage2 from "../images/siteSkinshoots/Zym/Screenshot_2.png"
import zymImage3 from "../images/siteSkinshoots/Zym/Screenshot_3.png"

const Projects = () => {
    const navigate=useNavigate()
    const projects = [
        {
            name: "Bike Parts Manufacturer",
            id: 1,
            description: `A website that keeps bike parts in stock. A user can see the parts and buy them. An admin can add and remove parts. An admin also make a user to a admin.`,
            image1: bikeImage1,
            image2: bikeImage2,
            image3: bikeImage3,
            demoLink: "https://bikeparts-b2bb7.web.app/",
            githubClient: "https://github.com/Asadullah246/Bike-Parts-client-side",
            githubServer: "https://github.com/Asadullah246/Bike-Parts-Server-Side",
            usedTechnology:[
                "HTML", "TailwindCSS", "React JS, Node JS","Express", "MongoDB", "Firebase","React Form", "React Query"
            ]
            
        },
        {
            name: "Car Warehouse",
            id: 2,
            description: `It is a car warehouse website. Users can see the cars and it's details. They can add and remove cars`,
            image1: carImage1,
            image2: carImage2,
            image3: carImage3,
            demoLink: "https://car-inventory-7c113.web.app/",
            githubClient: "https://github.com/Asadullah246/Car-Inventory-Client-side/",
            githubServer: "https://github.com/Asadullah246/Car-Inventory-server-side/",
            usedTechnology:[
                "HTML", "TailwindCSS", "React JS, Node JS","Express", "MongoDB", "Firebase","React Form", "React Query"
            ]
        },
        {
            name: "Gym Trainer",
            id: 3,
            description: `It is a gym trainer services website. Users can see the trainers and it's services. They can take some kind of service as their needs. `,
            image1: zymImage1,
            image2: zymImage2,
            image3: zymImage3,
            demoLink: "https://personal-gym-trainer-c42fc.web.app/",
            githubClient: "https://github.com/Asadullah246/Gym-Trainer",
            usedTechnology:[
                "HTML", "TailwindCSS", "React JS", "Firebase","React Router"
            ]
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
                        <div class="card w-96 bg-base-100 shadow-xl mx-auto">
                            <figure class="">
                                <img src={project.image1} alt={project.name}  class=" w-full" />
                            </figure>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title">{project.name}</h2>
                                {/* <p>Technology: {project.usedTechnology}</p> */}
                                <p className='text-left'><span className='font-bold'>Technology :</span> {project.usedTechnology.map(tech=>{
                        return (
                            <span className=' '>{tech}, </span>
                        )
                    } )} </p>
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