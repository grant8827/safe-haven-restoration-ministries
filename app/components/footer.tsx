import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="mt-auto w-full">
      <div className='bg-[#23272f] p-6 w-full flex flex-wrap justify-center items-start'>
        <div className='flex flex-col gap-4 text-white w-full md:w-[20%] mb-8 md:mb-0 mx-4'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>Quick Links</h2>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-yellow-400 transition-colors">About</Link></li>
            <li><Link href="/service" className="hover:text-yellow-400 transition-colors">Services</Link></li>
            <li><Link href="/reviews" className="hover:text-yellow-400 transition-colors">Reviews</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
          </ul>
        </div>
       
        <div className='flex flex-col gap-4 text-white w-full md:w-[20%] mb-8 md:mb-0 mx-4'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>Follow Us</h2>
          <ul className="space-y-3">
            <li><a href='#' className='hover:text-yellow-400 transition-colors'>Facebook</a></li>
            <li><a href='#' className='hover:text-yellow-400 transition-colors'>Instagram</a></li>
            <li><a href='#' className='hover:text-yellow-400 transition-colors'>YouTube</a></li>    
          </ul>
        </div>

        <div className='flex flex-col gap-4 text-white w-full md:w-[20%] mb-8 md:mb-0 mx-4'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>Get In Touch</h2>
          <ul className="space-y-3">
            <li>1234 Healing Way, Suite 100</li>
            <li>Hope City, CA 90210</li>
            <li>Email: <a href='mailto:info@safehavenrm.org' className='hover:text-yellow-400 transition-colors'>info@safehavenrm.org</a></li>
            <li>Phone: <a href='tel:+1234567890' className='hover:text-yellow-400 transition-colors'>(123) 456-7890</a></li>
          </ul>
        </div>

        <div className='flex flex-col gap-4 text-white w-full md:w-[20%] mb-8 md:mb-0 mx-4'>
          <h2 className='text-2xl font-bold text-yellow-400 mb-4'>Subscribe</h2>
          <p className="mb-2">Subscribe to our newsletter for updates.</p>
          <div className="space-y-3">
            <input type='email' placeholder='Enter your email' className='p-2 w-full rounded-lg bg-[#2a2f3a] text-white border border-gray-700 outline-none' />
            <button className='bg-yellow-400 hover:bg-yellow-500 text-black font-bold p-2 rounded-lg w-full transition-colors'>Subscribe</button>
          </div>
        </div>
      </div>

      <div className='bg-[#1a1d24] py-4 w-full flex justify-center items-center'>
        <p className='text-white text-sm'>&copy; {new Date().getFullYear()} Safe Haven Restoration Ministries | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;