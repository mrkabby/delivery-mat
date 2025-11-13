import React from 'react';

const Contact = () => {

  // Hardcoded Email Address
  const contactEmail = 'info@feepfibertech.com';

  // NOTE: You must replace this placeholder URL with your actual Google Maps embed URL
  const googleMapsEmbedUrl = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11548.053321642556!2d-2.028008!3d7.087392!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdae27ff644210b%3A0xbb23869e9e399044!2sBechem!5e1!3m2!1sen!2sgh!4v1762399621792!5m2!1sen!2sgh";


  return (
    <section id="contact" className="pt-20 bg-white">
       
        {/* --- Header Section (Centered and contained) --- */}
        <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-gray-800 uppercase tracking-wide mb-3">
                    CONTACT US
                </h2>
                {/* Email as Subtext */}
                <p className="text-lg text-gray-600">
                    Email us directly: <a href={`mailto:${contactEmail}`} className="text-orange-500 hover:text-orange-600 font-medium">{contactEmail}</a>
                </p>
            </div>
        </div>

        {/* --- Map Section (Full Width, No Container) --- */}
        {/* Removed 'container mx-auto' structure and classes like 'shadow-xl rounded-lg' to let it stretch */}
        <div className="w-full h-[500px]"> {/* Set a fixed height for the full-width map */}
          <iframe
            title="UNIMAT Headquarters Location"
            src={googleMapsEmbedUrl}
            // Key change: w-full and h-full ensures the iframe fills the parent div
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

    </section>
  );
};

export default Contact;