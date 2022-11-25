import React from "react";
import {FaLinkedinIn, FaInstagram, FaTwitter} from 'react-icons/fa'
import {useRouter} from "next/router"

const Footer = () => {

  const router = useRouter();

  if(router.pathname !== "/auth/devlogin" && router.pathname !== "/auth/devsignup" && router.pathname !== "/profile" && router.pathname !== "/jobspage" && router.pathname !== "/internships" && router.pathname !== "/terms" && router.pathname !== "/contactus" && router.pathname !== "/aboutus" && router.pathname !== "/dcma" && router.pathname !== "/privacy" && router.pathname !== "/jobapplication"){
    return (
        <footer className='flex justify-center flex-col  text-center bg-gray-100 py-6'>
          <div className="flex flex-col md:justify-between md:flex-row items-center py-8 md:px-32">
            <div className="flex flex-col md:items-start">
              <b className="mb-3 text-lg">About</b>
              <a href="/about-us" target="_blank">About Us</a>
              <a href="/terms" target="_blank" className="my-1">Terms and Conditions</a>
              <a href="/privacy" target="_blank">Privacy policy</a>
            </div>

            <div className="flex flex-col my-8 md:my-0 md:items-start">
              <b className="mb-3 text-lg">Support</b>
              <a href="/contact-us" target="_blank">Contact</a>
              <a href="https://discord.gg/" target="_blank" className="my-1">Discord</a>
            </div>

            <div>
              <b className='mt-4'>Connect with us:</b>
              <div className='flex justify-center my-2'>
                  <a href='https://www.linkedin.com/' target="_blank" className='border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-green-600 hover:text-white'>
                      <FaLinkedinIn />
                  </a>
                  <a href='https://www.instagram.com/' target="_blank" className='border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-green-600 hover:text-white'>
                      <FaInstagram />
                  </a>
                  <a href='https://twitter.com/' target="_blank" className='border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-green-600 hover:text-white'>
                      <FaTwitter />
                  </a>
              </div>
            </div>
          </div>
          <p className="my-4 md:my-0">©DhandaPaani few rights reserved</p>
        </footer>
    );
  }  
};

export default Footer;