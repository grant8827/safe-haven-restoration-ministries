import React from 'react'
import Link from 'next/link'

function Review() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h3 className="text-yellow-400 text-4xl mb-8 font-bold text-center">What People Say</h3>
        <div className="flex flex-wrap justify-center gap-8 w-full">
          <div className="bg-gray-800 rounded-xl p-8 w-[320px] text-white shadow-xl hover:scale-105 transition-transform duration-300">
            <p className="italic text-gray-200 mb-4">&quot;S.H.R.M helped me find hope and healing. The counselors truly care.&quot;</p>
            <span className="block font-semibold text-yellow-400">- Jane D.</span>
          </div>
          <div className="bg-gray-800 rounded-xl p-8 w-[320px] text-white shadow-xl hover:scale-105 transition-transform duration-300">
            <p className="italic text-gray-200 mb-4">&quot;A wonderful community and support system for my family.&quot;</p>
            <span className="block font-semibold text-yellow-400">- Mark T.</span>
          </div>
          <div className="bg-gray-800 rounded-xl p-8 w-[320px] text-white shadow-xl hover:scale-105 transition-transform duration-300">
            <p className="italic text-gray-200 mb-4">&quot;Their marriage counseling changed our lives for the better.&quot;</p>
            <span className="block font-semibold text-yellow-400">- Lisa &amp; John</span>
          </div>
        </div>
        <div className="flex flex-col items-center w-full mt-14 text-white">
          <h4 className="text-2xl font-semibold mb-2">Share Your Experience</h4>
          <p className="text-gray-300 text-center mb-6 max-w-md">Help others find hope by sharing your story with S.H.R.M.</p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link href="/reviews/leave">
              <button className="bg-yellow-400 text-black py-3 px-8 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300 shadow-md">
                Leave a Review
              </button>
            </Link>
            <Link href="/reviews">
              <button className="underline text-yellow-400 hover:text-yellow-300 py-3 px-8 rounded-lg font-semibold transition-colors duration-300">
                See All Reviews
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Review