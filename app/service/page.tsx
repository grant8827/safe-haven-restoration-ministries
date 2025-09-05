'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import mentalHealth from '../components/images/mental-health-counselors.png';
import marriagecounseling from '../components/images/marriage-counselor.jpg';
import familycounseling from '../components/images/family-counseling.png';
import christiancounseling from '../components/images/christian-counseling.png';
import familybg from '../components/images/Family.png';

const ServicesPage = () => {
  return (
    <div className='py-8 px-4'>
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center mb-12 text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">Our Services</h1>
        <p className="text-white text-lg max-w-3xl">
          At Safe Haven Restoration Ministries, we offer a range of professional counseling services 
          designed to support you through life&apos;s challenges. Our compassionate approach combines 
          evidence-based practices with faith-centered care to help you find healing and growth.
        </p>
      </div>
      
      
      {/* Mental Health Therapy */}
      <div className="mb-16 flex flex-wrap items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 px-4">
          <Image 
            src={mentalHealth} 
            alt="Mental Health Therapy" 
            className="rounded-xl shadow-lg w-full" 
          />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-6">Mental Health Therapy</h2>
          <p className="text-white text-lg mb-6">
            Find professional support for anxiety, depression, stress, and emotional well-being. 
            Our mental health services provide a safe, confidential space where you can express yourself 
            freely and work toward healing and personal growth.
          </p>
          
          <h3 className="text-xl text-yellow-400 mb-4">How We Can Help:</h3>
          <ul className="text-white mb-8">
            <li className="mb-3 flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 mr-3 mt-1" />
              <span>Individual therapy sessions tailored to your specific needs</span>
            </li>
            <li className="mb-3 flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 mr-3 mt-1" />
              <span>Evidence-based approaches to managing anxiety and depression</span>
            </li>
            <li className="mb-3 flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 mr-3 mt-1" />
              <span>Stress management and coping skills development</span>
            </li>
            <li className="mb-3 flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 mr-3 mt-1" />
              <span>Trauma recovery and emotional healing</span>
            </li>
          </ul>
          
          <Link href="/contact" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-300 inline-flex items-center">
            Schedule a Consultation
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Link>
        </div>
      </div>
      
      <hr className="w-[90%] mx-auto text-white mb-12" />
      
      {/* Marriage Counseling */}
      <div className="mb-16 flex flex-wrap items-center flex-row-reverse">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 px-4">
          <Image 
            src={marriagecounseling} 
            alt="Marriage Counseling" 
            className="rounded-xl shadow-lg w-full" 
          />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-6">Marriage Counseling</h2>
          <p className="text-white text-lg mb-6">
            Strengthen your marriage, improve communication, and rediscover the connection that brought 
            you together. Our marriage counseling services help couples work through conflicts, rebuild trust, 
            and create a stronger foundation for your relationship.
          </p>
          
          <h3 className="text-xl text-yellow-400 mb-4">How We Can Help:</h3>
          <ul className="text-white mb-8">
            <li className="mb-3 flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 mr-3 mt-1" />
              <span>Communication skills development for effective dialogue</span>
            </li>
            <li className="mb-3 flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 mr-3 mt-1" />
              <span>Conflict resolution strategies that strengthen bonds</span>
            </li>
            <li className="mb-3 flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 mr-3 mt-1" />
              <span>Rebuilding trust and intimacy in your relationship</span>
            </li>
            <li className="mb-3 flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 mr-3 mt-1" />
              <span>Faith-based approaches to marriage restoration</span>
            </li>
          </ul>
          
          <Link href="/contact" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-300 inline-flex items-center">
            Schedule a Consultation
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Link>
        </div>
      </div>
      
      <hr className="w-[90%] mx-auto text-white mb-12" />
      
      {/* Family Counseling */}
      <div className="mb-16 flex flex-wrap items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 px-4">
          <Image 
            src={familycounseling} 
            alt="Family Counseling" 
            className="rounded-xl shadow-lg w-full" 
          />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-6">Family Counseling</h2>
          <p className="text-white text-lg mb-6">
            Rebuild trust, improve communication, and create lasting harmony within your family. 
            Our counselors help you navigate challenges together and foster a loving home environment 
            where each family member feels valued, understood, and supported.
          </p>
          
          <h3 className="text-xl text-yellow-400 mb-4">How We Can Help:</h3>
          <ul className="text-white mb-8">
            <li className="mb-3 flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 mr-3 mt-1" />
              <span>Improving family communication and understanding</span>
            </li>
            <li className="mb-3 flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 mr-3 mt-1" />
              <span>Addressing parent-child relationship challenges</span>
            </li>
            <li className="mb-3 flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 mr-3 mt-1" />
              <span>Navigating life transitions and family adjustments</span>
            </li>
            <li className="mb-3 flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 mr-3 mt-1" />
              <span>Creating healthy boundaries and family structures</span>
            </li>
          </ul>
          
          <Link href="/contact" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-300 inline-flex items-center">
            Schedule a Consultation
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Link>
        </div>
      </div>
      
      <hr className="w-[90%] mx-auto text-white mb-12" />
      
      {/* Christian Counseling */}
      <div className="mb-16 flex flex-wrap items-center flex-row-reverse">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 px-4">
          <Image 
            src={christiancounseling} 
            alt="Christian Counseling" 
            className="rounded-xl shadow-lg w-full" 
          />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-6">Closer Walk With God</h2>
          <p className="text-white text-lg mb-6">
            Experience spiritual growth and renewed faith through our Christian counseling. 
            We guide you on your journey to a deeper, more meaningful relationship with God, 
            integrating faith-based principles with practical therapeutic approaches.
          </p>
          
          <h3 className="text-xl text-yellow-400 mb-4">How We Can Help:</h3>
          <ul className="text-white mb-8">
            <li className="mb-3 flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 mr-3 mt-1" />
              <span>Faith-integrated counseling for spiritual growth</span>
            </li>
            <li className="mb-3 flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 mr-3 mt-1" />
              <span>Scripture-based guidance for life&apos;s challenges</span>
            </li>
            <li className="mb-3 flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 mr-3 mt-1" />
              <span>Spiritual direction and discipleship</span>
            </li>
            <li className="mb-3 flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 mr-3 mt-1" />
              <span>Support for questions of faith and spiritual doubt</span>
            </li>
          </ul>
          
          <Link href="/contact" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-300 inline-flex items-center">
            Schedule a Consultation
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Link>
        </div>
      </div>
      
      <hr className="w-[90%] mx-auto text-white mb-12" />
      
      {/* Additional Services - Group Therapy */}
      <div className="mb-16 flex flex-wrap items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0 px-4">
          <Image 
            src={familybg} 
            alt="Group Therapy" 
            className="rounded-xl shadow-lg w-full" 
          />
        </div>
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-6">Group Therapy</h2>
          <p className="text-white text-lg mb-6">
            Connect with others who are experiencing similar challenges in a supportive group environment. 
            Our group therapy sessions offer a powerful opportunity for shared healing, mutual understanding, 
            and building community.
          </p>
          
          <h3 className="text-xl text-yellow-400 mb-4">How We Can Help:</h3>
          <ul className="text-white mb-8">
            <li className="mb-3 flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 mr-3 mt-1" />
              <span>Specialized support groups for various needs</span>
            </li>
            <li className="mb-3 flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 mr-3 mt-1" />
              <span>Safe environment for sharing experiences</span>
            </li>
            <li className="mb-3 flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 mr-3 mt-1" />
              <span>Learning from others&apos; perspectives and journeys</span>
            </li>
            <li className="mb-3 flex items-start">
              <FontAwesomeIcon icon={faCheckCircle} className="text-yellow-400 mr-3 mt-1" />
              <span>Building a supportive community network</span>
            </li>
          </ul>
          
          <Link href="/contact" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-300 inline-flex items-center">
            Schedule a Consultation
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Link>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-[#23272f] rounded-xl shadow-lg p-8 text-center">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-6">Ready to Take the First Step?</h2>
        <p className="text-white text-lg mb-8 max-w-3xl mx-auto">
          We understand that seeking help can be difficult, but you don&apos;t have to face your challenges alone. 
          Our compassionate team is here to support you on your journey to healing and growth. Contact us today 
          to learn more about our services or to schedule a consultation.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/contact" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center">
            Contact Us
            <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;