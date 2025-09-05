'use client'
import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF ,faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';
import NavDrawer from './NavDrawer';
import '../../app/styles.css'
const Navbar = () => {
  return (
    <div className='navbar '>
        <div className='flex flex-col justify-center items-center justify-evenly'>
  <h1 className='text-yellow-400 font-bold text-2xl font-[Arial, Helvetica, sans-serif] text-center w-full'>S.H.R.M - Safe Haven Restoration Ministries</h1>
       
       
       <div className='flex justify-around items-center w-full'>
            <div className='flex gap-5 text-white'>
            <FontAwesomeIcon icon={faFacebookF} color='blue' size='xl' />
            <FontAwesomeIcon icon={faInstagram} color='#AA336A' size='xl'  />
            <FontAwesomeIcon icon={faYoutube}color='red' size='xl'  />
           
            </div>
            
        <ul className='navLinks flex text-white gap-5'>
            <li className='text-blue hover:text-yellow-500 '><Link href="/">Home</Link></li>
            <li className='text-blue hover:text-yellow-500 '><Link href="/about">About</Link></li>
            <li className='text-blue hover:text-yellow-500 '><Link href="/service">Services</Link></li>
            <li className='text-blue hover:text-yellow-500 '><Link href="/contact">Contact</Link></li>
        </ul>
        <div className='navbars mt-[30px]'><NavDrawer/></div>
        
        <button>Get Started</button>
        </div>
        <br />
         <hr className="w-[100%] text-white" />
        <div className='flex flex-col mt-[50px] justify-around items-center w-full'>
  <h2 className='text-yellow-400 font-bold text-2xl text-center text-[30px] mb-5'>Restoring Hope. Empowering Families. Transforming Lives.</h2>
  <p className='text-gray-400 font-bold text-center text-[16px] w-2/4 mb-5'>We are dedicated to providing a safe haven for healing, restoration, and spiritual growth. Discover compassionate support and guidance for you and your loved ones.</p>
  <button className='bg-blue-800 text-white p-2 rounded-lg mt-5 mb-5'>Learn More</button>
        </div>
        </div>
    </div>
  )
}

export default Navbar