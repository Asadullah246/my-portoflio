import React from 'react';
import { useParams } from 'react-router-dom';
import bikeImage1 from "../images/siteSkinshoots/bikeParts/Screenshot_1.png"
import bikeImage2 from "../images/siteSkinshoots/bikeParts/Screenshot_2.png"
import bikeImage3 from "../images/siteSkinshoots/bikeParts/Screenshot_3.png"
import carImage1 from "../images/siteSkinshoots/car/Screenshot_1.png"
import carImage2 from "../images/siteSkinshoots/car/Screenshot_2.png"
import carImage3 from "../images/siteSkinshoots/car/Screenshot_3.png"
import zymImage1 from "../images/siteSkinshoots/Zym/Screenshot_1.png"
import zymImage2 from "../images/siteSkinshoots/Zym/Screenshot_2.png"
import zymImage3 from "../images/siteSkinshoots/Zym/Screenshot_3.png"

const ProjectDetail = () => {
    const { id } = useParams();
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
    const project = projects.find(project => project.id == id)

    return (
        <div className='bg-base-200'>
            <div class="carousel w-1/3 mx-auto pt-36 ">
                <div id="slide1" class="carousel-item relative w-full border-2">
                    <img src={project.image1} class="w-full h-[350px]" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full border-2">
                    <img src={project.image2} class="w-full h-[350px]" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full border-2">
                    <img src={project.image3} class="w-full h-[350px]" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

                <div className='text-left w-1/3 mx-auto'>
                    <h1 className='text-3xl font-bold mt-12 mb-4'>{project.name} </h1>
                    <p><span className='font-bold'>About : </span> {project.description} </p>
                    <h2 className='font-bold text-2xl my-4'>Used Technology:</h2>
                    <p className='leading-10 text-left'>{project.usedTechnology.map(tech=>{
                        return (
                            <span className='border-red-600 bg-slate-300 rounded px-2 mx-4 my-2'>{tech}</span>
                        )
                    } )} </p>
                    <div className='text-center my-4 pb-8'>
                    <a href={project.demoLink} target="_blank" className='btn btn-primary mx-4'>Demo</a>
                    <a href={project.githubClient} target="_blank"  className='btn btn-primary mx-4'>GitHub client</a>
                    <a href={project.githubServer} target="_blank"  className='btn btn-primary mx-4'>GitHub Server</a>
                    </div>

                </div>


        </div>
    );
};

export default ProjectDetail;