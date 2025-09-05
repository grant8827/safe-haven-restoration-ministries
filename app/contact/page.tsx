import React from 'react'

const ContactPage = () => {
  return (
    <div className='flex flex-wrap items-center justify-center w-[100%] p-6 gat-6'>
<div className="items-center justify-center m-[50px] w-[300px] max-w-2xl p-8 rounded-lg shadow-lg">
  <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
  <ul className="text-gray-600 mb-6">
    <li className="mb-2">Email: <a href="mailto:BxNtD@example.com" className="text-blue-500 hover:underline">BxNtD@example.com</a></li>
    <li className="mb-2">Phone: <a href="tel:+1234567890" className="text-blue-500 hover:underline">+1234567890</a></li>
  </ul>
  </div>
<form className="flex flex-col w-full gap-4 max-w-md  p-8 rounded-lg shadow-lg">
  <input
    type="text"
    className="p-2 rounded-lg bg-gray-200 outline-none"
    placeholder="Your Name"
    required
  />
  <input
    type="email"
    className="p-2 rounded-lg bg-gray-200 outline-none"
    placeholder="Your Email"
    required
  />
  <textarea
    className="p-4 rounded-lg bg-gray-200 outline-none"
    rows={4}
    placeholder="Your Message"
    required
  ></textarea>
  <button
    type="submit"
    className="bg-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-600"
  >
    Send Message
  </button>
</form>

    </div>
  )
}

export default ContactPage