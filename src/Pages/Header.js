import React from 'react';
import { useNavigate } from 'react-router-dom';
import myPic from "../images/myPicture.png"

const Header = () => {
  const navigate=useNavigate()
const about=()=>{
  navigate('/about')``
}
    return (
        <div>
            <div class="hero text-left  min-h-screen bg-base-200">
  <div class="hero-content text-left w-10/12 mx-auto flex-col lg:flex-row-reverse">
    <img src={myPic} class="w-[350px] h-[350px] rounded-full shadow-2xl" alt='mypic' />
    <div className='w-3/5 text-left'>
        <p>Hellow, I am</p>
      <h1 class="text-5xl font-bold">Asadullah</h1>
      <h4>Front End Developer</h4>
      <p class="py-6">I am a passionate and dedicated front-end developer.</p>
      <button class="btn btn-primary" onClick={about}>About Me</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Header;