import React from 'react';
import useGoogleSheetData from '../components/UseHooks';

const Contact = () => {
  const tabName = 'Contact';
  const range = 'A2:B5';
  const [data, error] = useGoogleSheetData(tabName, range);

  const defaultContactInfo = { phone: 'Not available', email: 'Not available' };
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
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p className="text-gray-700 mb-6">We’d love to hear from you!</p>
        <p><strong>Phone:</strong> {contactInfo.phone}</p>
        <p><strong>Email:</strong> {contactInfo.email}</p>
      </div>
    </section>
  );
};

export default Contact;
