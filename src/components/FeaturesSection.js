import React from 'react';
import useGoogleSheetData from '../components/UseHooks';
import { FaCar, FaLeaf, FaDollarSign, FaShieldAlt, FaWater, FaUserMd } from 'react-icons/fa';

const Features = () => {
  const tabName = 'Features';
  const range = 'A2:B10';
  const [data, error] = useGoogleSheetData(tabName, range);

 
  const featureIcons = [
    FaWater, 
    FaUserMd, 
    FaLeaf, 
    FaCar, 
    FaDollarSign, 
    FaShieldAlt,
  ];

  if (error) {
    console.error('Error fetching Features data:', error);
    return <div className="text-center text-red-600">Failed to load features.</div>;
  }

  if (!data.length) {
    return <div className="text-center">Loading features...</div>;
  }

  return (
    <section id="features" className="py-16 bg-blue-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-center text-green-700">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((feature, index) => {
            const Icon = featureIcons[index]; 
            return (
              <div
                key={index}
                className="relative bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:-translate-y-3 hover:shadow-lg group"
              >
                {/* Icon in Circular Element */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-green-700 text-white flex items-center justify-center rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                  {Icon && <Icon className="text-2xl" />} 
                </div>
                <h3 className="text-xl font-bold text-green-700 text-center mt-16">{feature[0]}</h3>
                <p className="text-gray-600 mt-4 text-center">{feature[1]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
