'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faClock, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import familySunrise from '../components/images/familySunrise.webp';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="py-8 px-4">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center mb-12 text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">Contact Us</h1>
        <p className="text-white text-lg max-w-3xl">
          We&apos;re here to help you take the first step toward healing and growth. 
          Reach out to us today to schedule a consultation or learn more about our services.
        </p>
      </div>
      
      <hr className="w-[90%] mx-auto text-white mb-12" />
      
      {/* Contact Information and Form Section */}
      <div className="flex flex-wrap mb-16">
        {/* Contact Information */}
        <div className="w-full md:w-5/12 mb-8 md:mb-0 px-4">
          <div className="bg-[#23272f] rounded-xl shadow-lg p-8 h-full">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-6">Get In Touch</h2>
            
            <div className="mb-6 flex items-start">
              <div className="mr-4 mt-1">
                <FontAwesomeIcon icon={faEnvelope} className="text-yellow-400 text-xl" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Email Us</h3>
                <p className="text-gray-300">
                  <a href="mailto:info@safehavenrm.org" className="hover:text-yellow-400 transition-colors duration-300">
                    info@safehavenrm.org
                  </a>
                </p>
              </div>
            </div>
            
            <div className="mb-6 flex items-start">
              <div className="mr-4 mt-1">
                <FontAwesomeIcon icon={faPhone} className="text-yellow-400 text-xl" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Call Us</h3>
                <p className="text-gray-300">
                  <a href="tel:+1234567890" className="hover:text-yellow-400 transition-colors duration-300">
                    (123) 456-7890
                  </a>
                </p>
              </div>
            </div>
            
            <div className="mb-6 flex items-start">
              <div className="mr-4 mt-1">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-yellow-400 text-xl" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Location</h3>
                <p className="text-gray-300">
                  1234 Healing Way<br />
                  Suite 100<br />
                  Hope City, CA 90210
                </p>
              </div>
            </div>
            
            <div className="mb-6 flex items-start">
              <div className="mr-4 mt-1">
                <FontAwesomeIcon icon={faClock} className="text-yellow-400 text-xl" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Hours of Operation</h3>
                <p className="text-gray-300">
                  Monday - Friday: 9:00 AM - 7:00 PM<br />
                  Saturday: 10:00 AM - 3:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
            
            <div className="mt-8">
              <Image 
                src={familySunrise} 
                alt="Safe Haven Restoration Ministries" 
                className="rounded-lg shadow-md w-full"
              />
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="w-full md:w-7/12 px-4">
          <div className="bg-[#23272f] rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-6">Send Us a Message</h2>
            
            {isSubmitted ? (
              <div className="bg-green-900 bg-opacity-20 border border-green-500 rounded-lg p-4 flex items-start">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 mr-3 text-xl" />
                <div>
                  <h3 className="text-green-500 font-semibold mb-1">Message Sent Successfully!</h3>
                  <p className="text-white">Thank you for reaching out to Safe Haven Restoration Ministries. We&apos;ll get back to you as soon as possible.</p>
                </div>
              </div>
            ) : (
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-[#2a2f3a] text-white border border-gray-700 focus:border-yellow-400 focus:outline-none"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-[#2a2f3a] text-white border border-gray-700 focus:border-yellow-400 focus:outline-none"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-white mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-[#2a2f3a] text-white border border-gray-700 focus:border-yellow-400 focus:outline-none"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-[#2a2f3a] text-white border border-gray-700 focus:border-yellow-400 focus:outline-none"
                      placeholder="Counseling Inquiry"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full p-3 rounded-lg bg-[#2a2f3a] text-white border border-gray-700 focus:border-yellow-400 focus:outline-none resize-none"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="mr-3"
                    required
                  />
                  <label htmlFor="privacy" className="text-gray-300 text-sm">
                    I agree to the <span className="text-yellow-400">Privacy Policy</span> and consent to be contacted regarding my request.
                  </label>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-6 text-center">Find Us</h2>
        <div className="bg-[#23272f] rounded-xl shadow-lg p-4 h-[400px]">
          {/* Embed a map here (Google Maps, etc.) */}
          <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
            <p className="text-gray-300">Interactive map would be embedded here</p>
            {/* 
              In a real application, you would add a map embed code here.
              Example: 
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!..." 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            */}
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-6 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#23272f] rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">How do I schedule an appointment?</h3>
            <p className="text-gray-300">
              You can schedule an appointment by filling out our contact form, calling our office, 
              or sending us an email. Our staff will respond promptly to set up a time that works for you.
            </p>
          </div>
          
          <div className="bg-[#23272f] rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">Do you accept insurance?</h3>
            <p className="text-gray-300">
              We work with several insurance providers and offer sliding scale fees based on income. 
              Please contact our office for specific information about your insurance coverage.
            </p>
          </div>
          
          <div className="bg-[#23272f] rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">How long are counseling sessions?</h3>
            <p className="text-gray-300">
              Individual counseling sessions typically last 50 minutes, while family or couple sessions 
              may be scheduled for 80-90 minutes depending on your specific needs.
            </p>
          </div>
          
          <div className="bg-[#23272f] rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">Is everything I share confidential?</h3>
            <p className="text-gray-300">
              Yes, confidentiality is a cornerstone of our practice. All information shared during sessions 
              is kept private, with legal exceptions only for situations involving harm to self or others.
            </p>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-[#23272f] rounded-xl shadow-lg p-8 text-center">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Ready to Begin Your Healing Journey?</h2>
        <p className="text-white text-lg mb-6 max-w-3xl mx-auto">
          Take the first step toward restoration, healing, and growth. Our compassionate team is ready to support you.
        </p>
        <Link href="#" onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
          e.preventDefault();
          document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
        }} className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg transition-colors duration-300 inline-block">
          Schedule a Consultation
        </Link>
      </div>
    </div>
  );
};

export default ContactPage;