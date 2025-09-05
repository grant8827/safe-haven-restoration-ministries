import React from 'react'

const Footer = () => {
  return (

    <div>
    <div className='bg-gray-800 bg-blue-500  h-[auto] position-relative top-0 p-4 w-full flex flex-wrap justify-center items-center'>
      <ul className='flex flex-col gap-4 text-white w-[20%] h-[200px] m-5 '>
        <h2 className='text-2xl font-bold text-yellow-400'>Quick Links</h2>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Services</a></li>
        <li><a href='#'>Reviews</a></li>
        
      </ul>
     
      <ul className='flex flex-col gap-4 text-white w-[20%] h-[200px] m-5'>
        <h2 className='text-2xl font-bold text-yellow-400'>Follow Us</h2>
        <li><a href='#' className='text-blue-500 hover:underline'>Facebook</a></li>
        <li><a href='#' className='text-blue-500 hover:underline'>Instagram</a></li>
        <li><a href='#' className='text-blue-500 hover:underline'>Twitter</a></li>    
      </ul>
      <ul className='flex flex-col gap-4 text-white w-[20%] h-[200px] m-5'>
        <h2 className='text-2xl font-bold text-yellow-400'>Get In Touch</h2>
        <li>Orlando Fl, USA</li>
        
        <li>Email: <a href='mailto:BxNtD@example.com' className='text-blue-500 hover:underline'>BxNtD@example.com</a></li>
        <li>Phone: <a href='tel:+1234567890' className='text-blue-500 hover:underline'>+1234567890</a></li>
      </ul>

      <ul className='flex flex-col gap-4 text-white w-[20%] h-[200px] m-5'>
        <h2 className='text-2xl font-bold text-yellow-400'>Subscribe</h2>
        <li>Subscribe to our newsletter for updates.</li>
        <li><input type='email' placeholder='Enter your email' className='p-2 rounded-lg bg-gray-700 text-white outline-none' /></li>
        <li><button className='bg-blue-500 text-white p-2 rounded-lg'>Subscribe</button></li>
      </ul>
    </div>
      <hr className="w-[90%] m-auto text-white" />
    <div className='bg-gray-800 h-[50px] w-full flex justify-center items-center'>
        <p className='text-white'> © Copyright Safe Haven Restoration Ministries | All Rights Reserved</p>
    </div>
    </div>
  )
}

export default Footer