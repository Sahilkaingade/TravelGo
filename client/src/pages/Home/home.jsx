// pages/Home/home.jsx
import React from 'react';
import Hero from '../../components/Hero/hero.jsx';
import Popular from '../../components/Popular/popular.jsx';
import About from '../../components/About/about.jsx';
import Features from '../../components/Features/features.jsx';
import Testimonial from '../../components/Testinomials/testinomials.jsx';
import ReviewForm from '../../components/Review/review.jsx';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Popular />
      <About />
      <Features />
      <Testimonial />
      <ReviewForm />
    </>
  );
}
