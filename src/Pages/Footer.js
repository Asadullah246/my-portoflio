import React from 'react';
import facebookLogo from "../images/facebook.png"
import linkedInLogo from "../images/linkedin.png"

const Footer = () => {
    return (
        <div>
            <footer class="footer footer-center p-10 text-base-content rounded">
                <div>
                    <h4 className='font-semibold text-2xl my-6'>Connect with me</h4>
                    <div class="grid grid-flow-col gap-4">
                      
                        <a href="" target="_blank"> <img src={facebookLogo} alt="" className=' w-8 h-auto' /> </a>
                        <a href="" target="_blank"><img src={linkedInLogo} alt=""  className='ml-4 w-8 h-auto' /> </a>

                    </div>
                </div>
                <div>
                    <p className='font-semibold'>Copyright &copy; 2022 - All right reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;