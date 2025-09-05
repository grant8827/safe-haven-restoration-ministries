"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LeaveReviewPage() {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() || !author.trim()) {
      setError("Please enter your review and name.");
      return;
    }
    const newReview = { text, author: `- ${author}` };
    const existing = JSON.parse(localStorage.getItem("shrm_reviews") || "[]");
    localStorage.setItem("shrm_reviews", JSON.stringify([newReview, ...existing]));
    setText("");
    setAuthor("");
    setError("");
    router.push("/reviews");
  };

  return (
    <div className="flex flex-col items-center w-full my-10">
      <h3 className="text-white text-[30px] mb-6 font-bold">Leave a Review</h3>
      <form className="flex flex-col gap-4 w-full max-w-md" onSubmit={handleSubmit}>
        <textarea
          className="p-4 rounded-lg bg-gray-800 text-white outline-none"
          rows={4}
          placeholder="Write your review here..."
          value={text}
          onChange={e => setText(e.target.value)}
        ></textarea>
        <input
          type="text"
          className="p-2 rounded-lg bg-gray-800 text-white outline-none"
          placeholder="Your Name"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button
          type="submit"
          className="bg-yellow-400 text-black py-2 px-4 rounded-lg font-semibold hover:bg-yellow-500"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
}
