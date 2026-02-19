import React, { useState } from "react";

export default function ReviewForm() {

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState(""); // ✅ changed

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (rating === 0) {
      alert("Please select rating");
      return;
    }

    const formData = {
      name,
      rating,
      comment, // ✅ must match backend
    };

    try {

      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/feedback`,
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
      setComment("");
      setRating(0);
      setHover(0);

    } catch (err) {

      console.error(err);
      alert("❌ Failed to submit review");

    }
  };

  return (

    <div className="flex justify-center items-center min-h-screen bg-green-50 p-4">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md"
      >

        <h2 className="text-2xl font-bold mb-4 text-center">
          Leave a Review
        </h2>


        {/* Stars */}

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


        {/* Name */}

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full p-2 border rounded-lg mb-4"
          required
        />


        {/* Comment */}

        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your review..."
          className="w-full p-2 border rounded-lg mb-4"
          required
        />


        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg"
        >
          Submit Review
        </button>

      </form>

    </div>
  );
}
