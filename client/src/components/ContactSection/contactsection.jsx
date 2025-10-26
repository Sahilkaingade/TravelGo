'use client';
import React from 'react';

export default function ContactSection() {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Contact Submitted:", data);

      alert("✅ Message sent successfully!");
      e.target.reset(); // clear form
    } catch (err) {
      console.error("Error sending message:", err);
      alert("❌ Failed to send message. Try again.");
    }
  };

  return (
    <section className="w-full px-4 md:px-20 py-10 bg-white flex flex-col md:flex-row items-start gap-10 mt-10 mb-10">
      
      {/* Map Section */}
      <div className="w-full md:w-1/2 h-[400px]">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.299991893442!2d-118.803539!3d34.1605605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e81ce9d93e7e15%3A0x31cd089f44d2f409!2sCostco%20Wholesale!5e0!3m2!1sen!2sin!4v1657600000000"
          width="100%"
          height="100%"
          className="rounded-lg border-none"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Ready to Get Started?</h2>
        <p className="text-gray-600">
          Let’s Build Something Great Together. Share your details and our team will reach out to help you get started right away.
        </p>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Write Message . ."
            rows={5}
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700 transition flex items-center gap-2"
          >
            Send Message
            <span>→</span>
          </button>
        </form>
      </div>
    </section>
  );
}
