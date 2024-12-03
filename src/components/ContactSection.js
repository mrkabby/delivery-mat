import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; 
import useGoogleSheetData from '../components/UseHooks';

const Contact = () => {
  const tabName = 'Contact';
  const range = 'A2:B6';
  const [data, error] = useGoogleSheetData(tabName, range);

  const defaultContactInfo = {
    phone: 'Not available',
    email: 'Not available',
    facebook: '#',
    instagram: '#',
    twitter: '#',
  };

  const contactInfo =
    data && data.length > 0
      ? data.reduce((acc, [key, value]) => {
          acc[key.toLowerCase()] = value;
          return acc;
        }, {})
      : defaultContactInfo;

  if (error) {
    console.error('Error fetching contact info:', error);
  }

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:flex md:justify-center items-center">
        {/* Contact Info */}
        <div className="md:w-1/2 lg:w-1/3 text-center mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-6 text-black">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            We’d love to hear from you! Reach out to us using the details below.
          </p>
          <div className="space-y-4">
            <p>
              <strong className="text-gray-800">Phone:</strong> {contactInfo.phone}
            </p>
            <p>
              <strong className="text-gray-800">Email:</strong>{' '}
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-black hover:underline"
              >
                {contactInfo.email}
              </a>
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href={contactInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-green-500 text-2xl"
              >
                <FaFacebook />
              </a>
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-green-500 text-2xl"
              >
                <FaInstagram />
              </a>
              <a
                href={contactInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-green-500 text-2xl"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="md:w-1/2 lg:w-1/3">
          <iframe
            title="Delivery Mat Location"
            src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.6488188955227!2d-2.031328894584855!3d7.0900008068726486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdae27ff644210b%3A0xbb23869e9e399044!2sBechem!5e1!3m2!1sen!2sgh!4v1733180275949!5m2!1sen!2sgh"
            className="w-full h-64 rounded-lg shadow-md"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
