import React from 'react';
import { Link } from 'react-scroll';
// FIX: Importing the local image directly
import heroBg from '../images/Hero3.png'; // Ensure this path is correct for your project structure

const HeroSection = () => {
  const backgroundImage = heroBg; // Now using the imported local image

  const defaultContent = {
    subheading: 'Supporting safe, clean, and comfortable childbirth experiences',
    title: 'Welcome to UNIMAT!',
    button1: 'Learn More',
    button2: 'Contact Us'
  };

  const content = defaultContent;

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* Parallax Background Div */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        // FIX: Using the local backgroundImage variable
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay to darken background and increase text readability */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content Layer (Foreground) */}
      <div className="relative text-center text-white px-6 z-10">

        {/* Subheading (Small, Orange/Yellow) */}
        <p className="text-base text-orange-400 tracking-widest mb-4 uppercase font-semibold">
          {content.subheading}
        </p>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold max-w-4xl mx-auto mb-10 leading-tight">
          {content.title}
        </h1>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <Link
            to="features"
            smooth={true}
            duration={500}
            className="bg-orange-500 px-8 py-3 text-lg rounded-full font-bold hover:bg-orange-600 transition duration-300 cursor-pointer shadow-lg"
          >
            {content.button1}
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            // Styled as a transparent button with an orange border
            className="border-2 border-orange-500 text-white px-8 py-3 text-lg rounded-full font-bold hover:bg-orange-500 transition duration-300 cursor-pointer"
          >
            {content.button2}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;