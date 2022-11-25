import React from "react";
import {FaLinkedinIn, FaInstagram, FaTwitter} from 'react-icons/fa'
import {useRouter} from "next/router"
import Link from "next/link";

const Footer = () => {

  const router = useRouter();

    return (
        <footer className='flex justify-center flex-col  text-center bg-gray-100 py-6'>
          <div className="flex flex-col md:justify-between md:flex-row items-center py-8 md:px-32">
            <div className="flex flex-col md:items-start">
              <b className="mb-3 text-lg">About</b>
              <Link href="/aboutus" target="_blank">About Us</Link>
              <Link href="/terms" target="_blank" className="my-1">Terms and Conditions</Link>
              <Link href="/privacy" target="_blank">Privacy policy</Link>
            </div>

            <div className="flex flex-col my-8 md:my-0 md:items-start">
              <b className="mb-3 text-lg">Support</b>
              <Link href="/contactus" target="_blank">Contact</Link>
              <Link href="https://discord.gg/" target="_blank" className="my-1">Discord</Link>
            </div>

            <div>
              <b className='mt-4'>Connect with us:</b>
              <div className='flex justify-center my-2'>
                  <Link href='https://www.linkedin.com/' target="_blank" className='border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-green-600 hover:text-white'>
                      <FaLinkedinIn />
                  </Link>
                  <Link href='https://www.instagram.com/' target="_blank" className='border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-green-600 hover:text-white'>
                      <FaInstagram />
                  </Link>
                  <Link href='https://twitter.com/' target="_blank" className='border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-green-600 hover:text-white'>
                      <FaTwitter />
                  </Link>
              </div>
            </div>
          </div>
          <p className="my-4 md:my-0">©DhandaPaani few rights reserved</p>
        </footer>
    );
  }  

export default Footer;