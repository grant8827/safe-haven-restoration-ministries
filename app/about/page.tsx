'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import familybg from '../components/images/Family.png';
import familySunrise from '../components/images/familySunrise.webp';
import road from '../components/images/road.png';
import landscape from '../components/images/landScape.png';

const AboutPage = () => {
  return (
    <div className="aboutContainer py-8 px-4">
      {/* Hero Section */}
      <div className="flex flex-wrap justify-center items-center mb-16">
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-yellow-400 mb-6">About Safe Haven Restoration Ministries</h1>
          <p className="text-white text-lg mb-6">
            Safe Haven Restoration Ministries (S.H.R.M) was founded on the principle that everyone deserves a place 
            of healing, restoration, and spiritual growth. Our mission is to provide comprehensive counseling services 
            that address the whole person—mind, body, and spirit—in a safe and supportive environment.
          </p>
          <p className="text-white text-lg">
            We believe in the power of faith-based counseling combined with professional therapeutic approaches to 
            help individuals and families overcome life&apos;s challenges and build stronger, healthier relationships.
          </p>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <Image src={familybg} alt="Family Support" className="rounded-lg shadow-lg w-full h-auto" />
        </div>
      </div>

      {/* Our Vision & Mission */}
      <div className="bg-[#23272f] rounded-xl shadow-lg p-8 mb-16">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <h2 className="text-3xl font-semibold text-yellow-400 mb-6">Our Vision</h2>
            <p className="text-white mb-4">
              To be a beacon of hope and healing in our community, creating a world where individuals and families 
              experience restoration, peace, and spiritual fulfillment.
            </p>
            <h2 className="text-3xl font-semibold text-yellow-400 mt-8 mb-6">Our Mission</h2>
            <p className="text-white">
              Restoring Hope. Empowering Families. Transforming Lives. We are committed to providing exceptional 
              counseling services that integrate faith-based principles with professional therapeutic practices to 
              facilitate healing and growth.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <Image src={familySunrise} alt="Hope and Healing" className="rounded-lg shadow-lg w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Our Values */}
      <h2 className="text-3xl font-semibold text-yellow-400 mb-8 text-center">Our Core Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-[#23272f] rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-white mb-4">Compassion</h3>
          <p className="text-gray-300">
            We approach every individual with empathy, understanding, and genuine care, creating a safe space for 
            healing and vulnerability.
          </p>
        </div>
        <div className="bg-[#23272f] rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-white mb-4">Faith-Centered</h3>
          <p className="text-gray-300">
            Our services are rooted in Christian principles while respecting and honoring the beliefs and 
            backgrounds of all who seek our help.
          </p>
        </div>
        <div className="bg-[#23272f] rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-white mb-4">Excellence</h3>
          <p className="text-gray-300">
            We are committed to providing the highest quality counseling services through ongoing professional 
            development and evidence-based practices.
          </p>
        </div>
        <div className="bg-[#23272f] rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-white mb-4">Integrity</h3>
          <p className="text-gray-300">
            We maintain the highest ethical standards in all our interactions, ensuring confidentiality, respect, 
            and honesty in our services.
          </p>
        </div>
        <div className="bg-[#23272f] rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-white mb-4">Restoration</h3>
          <p className="text-gray-300">
            We believe in the possibility of renewal and transformation for every individual, family, and relationship 
            that comes through our doors.
          </p>
        </div>
        <div className="bg-[#23272f] rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-white mb-4">Community</h3>
          <p className="text-gray-300">
            We foster a sense of belonging and support, recognizing that healing often happens within the context 
            of meaningful connections.
          </p>
        </div>
      </div>

      {/* Our Approach */}
      <div className="flex flex-wrap items-center mb-16">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image src={road} alt="Life's Journey" className="rounded-lg shadow-lg w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 px-8">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-6">Our Approach</h2>
          <p className="text-white mb-4">
            At S.H.R.M, we take a holistic approach to counseling, recognizing that true healing encompasses the mind, 
            body, and spirit. Our team of dedicated professionals combines evidence-based therapeutic techniques with 
            faith-based principles to provide comprehensive care.
          </p>
          <p className="text-white mb-4">
            We create individualized treatment plans for each client, understanding that every person&apos;s journey is unique. 
            Whether you&apos;re seeking help for yourself, your marriage, or your family, we provide a supportive environment 
            where healing can take place.
          </p>
          <p className="text-white">
            Our counselors are not only professionally trained but also deeply committed to their own spiritual growth, 
            allowing them to guide others with authenticity and compassion.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#23272f] rounded-xl shadow-lg p-8 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src={landscape} alt="Background" fill style={{objectFit: 'cover'}} />
        </div>
        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-6">Begin Your Journey Today</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Taking the first step toward healing can be challenging, but you don&apos;t have to walk this path alone. 
            Our team at Safe Haven Restoration Ministries is here to support you every step of the way.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center">
              Contact Us Today
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;