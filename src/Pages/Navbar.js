import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import resume from "../pdf/resume.pdf"


const Navbar = () => {

    const actived = ({ isActive }) => {
        return {
            color: isActive ? '#94C300' : 'black',
            fontWeight: isActive ? 'bold' : 'normal',
            backgroundColor: "white",
        }
    }
   
    return (
        <div className="navbar bg-base-100 fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink style={actived} to='/contact'>Contact Me</NavLink></li>
                        <li><NavLink style={actived} to='/about'>About Me</NavLink></li>
                        <li><a href={resume} className="bg-primary px-4 py-0 text-white" download>Download Resume</a></li>
                    
                    </ul>
                </div>
                <img src="" alt="logo" className='w-[24px] lg:w-[32px] lg:h-auto' />
                <Link to="/" className="btn btn-ghost normal-case text-xl md:text-2xl lg:text-3xl lg:pl-2">Home</Link>
            </div>
            <div className="navbar-center lg:ml-[55vw] hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><NavLink style={actived} to='/contact'>Contact Me</NavLink></li>
                    <li><NavLink style={actived} to='/about'>About Me</NavLink></li>
                    <li><a href={resume} className="bg-primary px-4 py-0 text-white" download>Download Resume</a></li>

                </ul>
            </div>
            <div className="navbar-end">
               
            </div>
        </div>
    );
};

export default Navbar;