import React from 'react';
// Assuming the image for Francisca Tahiru is saved locally
import aboutImage from '../images/1.jpg'; // NOTE: Update this path to your actual image file

const About = () => {
  // Hardcoded Content (taken directly from your input)
  const content = {
    // NOTE: Replace the string with the imported variable
    image: aboutImage,

    // Hardcoded descriptive text
    description: "Tahiru Francisca is my name, I stay at Bechem, in the Ahafo region. I studied Midwifery at the Tamale Nursing and Midwifery Training College. I am currently a midwife. I produce cost-effective and environmentally friendly delivery mats using fibers from plantain stems to enable economically disadvantaged mothers to afford a safe and hygienic delivery, thereby mitigating childbirth poverty. Delivery mats are used in the hospitals when a woman is in labour to absorb blood while creating a safe and comfortable environment."
  };

  // Hardcoded Section Titles and Details
  const title = "About Us";
  const subtitle = "MEET OUR FOUNDER";
  const keyHighlight = "Mitigating Childbirth Poverty";
  const years = "2 YEARS EXPERIENCE";

  return (
    // Clean, white background, similar to the inspiration image
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8 flex flex-col md:flex-row md:gap-10 lg:gap-16 items-center">

        {/* Left Side: Image with highlight banner */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 relative order-2 md:order-1">
          <img
            src={content.image}
            alt="Francisca Tahiru - Midwife"
            // Ensures the image is the correct size and has some subtle shadow
            className="w-full h-auto object-cover max-h-[500px] shadow-2xl"
          />

          {/* Highlight Banner (Styled like the green banner in the inspiration image) */}
          <div className="absolute bottom-0 left-0 bg-[#38761D] text-white p-2 md:p-3 text-center text-sm md:text-lg font-bold w-1/2">
            {keyHighlight}
            <span className="block text-xs font-normal opacity-90">{years}</span>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left order-1 md:order-2">

          {/* Subtitle/Merchant Company text */}
          <p className="uppercase text-sm tracking-widest text-gray-500 mb-2">
            {subtitle}
          </p>

          {/* Main Title */}
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6 border-b border-orange-500 pb-3 inline-block">
            {title}
          </h2>

          {/* Descriptive Paragraphs */}
          <p className="text-gray-600 leading-relaxed mb-6">
            Tahiru Francisca is a dedicated Midwife who studied at the Tamale Nursing and Midwifery Training College. She currently resides in Bechem, Ahafo region in Ghana.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Her mission is to produce cost-effective and environmentally friendly delivery mats using fibers from plantain stems. This innovation enables economically disadvantaged mothers to afford a safe and hygienic delivery, thereby mitigating childbirth poverty. The mats are used in hospitals during labor to absorb blood while creating a safe and comfortable environment.
          </p>

          {/* Learn More Button */}
          <a
            href="#features" // Replace with a link to a detailed page
            className="inline-block bg-black text-white px-8 py-3 text-sm uppercase font-semibold tracking-wider hover:bg-orange-500 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;