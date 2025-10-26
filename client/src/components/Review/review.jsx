import React, { useState } from "react";

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, rating, review };

    try {
      const response = await fetch("http://localhost:5000/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Review Submitted:", data);

      // Clear form
      setName("");
      setReview("");
      setRating(0);
      setHover(0);
      alert("✅ Review submitted successfully!");
    } catch (err) {
      console.error("Error submitting review:", err);
      alert("❌ Failed to submit review. Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          Leave a Review
        </h2>

        {/* Star Rating */}
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={`text-3xl ${
                  index <= (hover || rating) ? "text-yellow-400" : "text-gray-300"
                }`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
              >
                ★
              </button>
            );
          })}
        </div>

        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Review Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Review</label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            rows="4"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Write your review..."
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
}
