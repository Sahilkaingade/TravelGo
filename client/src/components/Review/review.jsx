import React, { useState } from "react";

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (rating === 0) {
      alert("Please select rating");
      return;
    }

    const formData = { name, rating, review };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/feedback`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      alert("✅ Review submitted successfully!");

      setName("");
      setReview("");
      setRating(0);
      setHover(0);
    } catch (err) {
      console.error("Error submitting review:", err);
      alert("❌ Failed to submit review");
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

        <div className="flex justify-center mb-4">
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={`text-3xl ${
                  index <= (hover || rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
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

        <div className="mb-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            rows="4"
            placeholder="Write your review..."
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
}
