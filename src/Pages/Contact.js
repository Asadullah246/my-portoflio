import { success } from 'daisyui/src/colors';
import React from 'react';
import { useState } from 'react';

const Contact = () => {
    const [error, setError]=useState("")
    const [success, setSuccess]=useState("")
    const contact=(e)=>{
        e.preventDefault();
        setSuccess("successfully email sent")
        
    }
    return (
        <div className='pt-24'>

            <div className='bg-base-200 lg:w-1/2 mx-auto lg:pt-12 lg:pb-8 lg:px-24'>
                <h1 className='text-3xl font-bold mb-12'>Contact with me</h1>
                <form onSubmit={contact} className='text-left mx-auto w-full'>
                    <label htmlFor="name">Your name</label><br />
                    <input type="text" placeholder="Type here" name="name" class="input input-bordered input-primary w-full block mb-6" required />
                    <label htmlFor="email">Your email</label><br />
                    <input type="text" placeholder="Type here" name="name" class="input input-bordered input-primary w-full block mb-6 " required />
                    <label htmlFor="name">Message</label><br />

                    <textarea name="" id="" cols="30" rows="10" class="input input-bordered input-primary w-full block " required ></textarea>
                    <p>{error} </p>
                    <p>{success}</p>
                    <button type='submit' className='btn btn-primary text-lg w-full my-12'>Submit</button>
                </form>

            </div>

        </div>
    );
};

export default Contact;