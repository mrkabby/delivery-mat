import React from 'react';
import useGoogleSheetData from '../components/UseHooks';

const Features = () => {
  const tabName = 'Features';
  const range = 'A2:B10';
  const [data, error] = useGoogleSheetData(tabName, range);

  if (error) {
    console.error('Error fetching Features data:', error);
    return <div className="text-center text-red-600">Failed to load features.</div>;
  }

  if (!data.length) {
    return <div className="text-center">Loading features...</div>;
  }

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((feature, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-green-700">{feature[0]}</h3>
              <p className="text-gray-600 mt-2">{feature[1]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
