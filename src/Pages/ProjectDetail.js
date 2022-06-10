import React from 'react';
import { useParams } from 'react-router-dom';
import projectPic from "../images/mern-stack.jpg"


const ProjectDetail = () => {
    const {id}=useParams();
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
    const project=projects.find(project=>project.id==id)
 
    return (
        <div>
            <h2> { project?.name}</h2>
            <h2> { project?.image}</h2>
            <h2> { project?.description}</h2>
            
        </div>
    );
};

export default ProjectDetail;