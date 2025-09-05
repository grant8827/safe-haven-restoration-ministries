"use client";
import React, { useEffect, useState } from 'react';

const defaultReviews = [
  {
    text: '"S.H.R.M helped me find hope and healing. The counselors truly care."',
    author: '- Jane D.'
  },
  {
    text: '"A wonderful community and support system for my family."',
    author: '- Mark T.'
  },
  {
    text: '"Their marriage counseling changed our lives for the better."',
    author: '- Lisa & John'
  },
  {
    text: '"I found a safe space to share my struggles and grow in my faith journey."',
    author: '- Sarah K.'
  }
];

export default function ReviewsPage() {
  const [reviews, setReviews] = useState(defaultReviews);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = JSON.parse(localStorage.getItem("shrm_reviews") || "[]");
      if (stored.length > 0) {
        setReviews([...stored, ...defaultReviews]);
      }
    }
  }, []);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="text-yellow-400 text-4xl mb-8 font-bold text-center">All Reviews</h1>
        <div className="flex flex-wrap justify-center gap-8 w-full">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-8 w-[320px] text-white shadow-xl hover:scale-105 transition-transform duration-300">
              <p className="italic text-gray-200 mb-4">{review.text}</p>
              <span className="block font-semibold text-yellow-400">{review.author}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}