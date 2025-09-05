import React from 'react'

function LeaveReviews() {
  return (
    <div className="flex flex-col items-center w-full my-10">
      <h3 className="text-white text-[30px] mb-6 font-bold">Leave a Review</h3>
      <form className="flex flex-col gap-4 w-full max-w-md">
        <textarea
          className="p-4 rounded-lg bg-gray-800 text-white outline-none"
          rows={4}
          placeholder="Write your review here..."
        ></textarea>
        <input
          type="text"
          className="p-2 rounded-lg bg-gray-800 text-white outline-none"
          placeholder="Your Name"
        />
        <button
          type="submit"
          className="bg-yellow-400 text-black py-2 px-4 rounded-lg font-semibold hover:bg-yellow-500"
        >
          Submit Review
        </button>
      </form>
    </div>
  )
}

export default LeaveReviews