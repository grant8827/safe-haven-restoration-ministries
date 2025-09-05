import React from 'react'
import Image from 'next/image'
import mentalHealth from '../components/images/mental-health-counselors.png'
import marriagecounseling from '../components/images/marriage-counselor.jpg'
import familycounseling from '../components/images/family-counseling.png'
import christiancounseling from '../components/images/christian-counseling.png'
import womenChildren from "../components/images/women-children.png"

const ServicesPage = () => {
  return (
    <div className='justify-center items-center flex flex-col gap-5 m-px text-white text-center align-center justify-center w-[100%]'>
          <hr className="w-[90%] m-auto text-white" />
          <br/>
       <div className=" flex gap-5 w[300px] bg-gray-800 p-5 rounded-lg">
          <Image src={mentalHealth} alt="hero" className=" w-[250px] h-[150px] m-px rounded-[20px]" />
          <div>
          <p className='text-left mt-[10px] text-white'>Mental Health Therapy</p>
          <p className='text-left mt-[10px] text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className='bg-blue-800 text-white p-2 rounded-lg mt-5 mb-5'>Learn More</button>
          </div>
        </div>


        <div className=" flex gap-5 w[300px] bg-gray-800 p-5 rounded-lg">
            <Image src={marriagecounseling } alt="hero" className=" w-[250px] h-[150px] m-px rounded-[20px]" />
            <div>
            <p className='text-left mt-[10px] text-white'>Marriage Counseling</p>
            <p className='text-left mt-[10px] text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className='bg-blue-800 text-white p-2 rounded-lg mt-5 mb-5'>Learn More</button>
            </div>
          </div>

        <div className=" flex gap-5 w[300px] bg-gray-800 p-5 rounded-lg">
            <Image src={familycounseling} alt="hero" className=" w-[250px] h-[150px] m-px rounded-[20px]" />
            <div>
            <p className='text-left mt-[10px] text-white'>Family Counseling</p>
            <p className='text-left mt-[10px] text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className='bg-blue-800 text-white p-2 rounded-lg mt-5 mb-5'>Learn More</button>
            </div>
          </div>

        <div className=" flex gap-5 w[300px] bg-gray-800 p-5 rounded-lg">
            <Image src={christiancounseling} alt="hero" className=" w-[250px] h-[150px] m-px rounded-[20px]" />
            <div>
            <p className='text-left mt-[10px] text-white'>Christian Counseling</p>
            <p className='text-left mt-[10px] text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className='bg-blue-800 text-white p-2 rounded-lg mt-5 mb-5'>Learn More</button>
            </div>
          </div>

           <div className=" flex gap-5 w[300px] bg-gray-800 p-5 rounded-lg">
            <Image src={womenChildren} alt="hero" className=" w-[250px] h-[150px] m-px rounded-[20px]" />
            <div>
            <p className='text-left mt-[10px] text-white'>Abused Women & Children</p>
            <p className='text-left mt-[10px] text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className='bg-blue-800 text-white p-2 rounded-lg mt-5 mb-5'>Learn More</button>
            </div>
          </div>
          <br />
    </div>
  )
}

export default ServicesPage