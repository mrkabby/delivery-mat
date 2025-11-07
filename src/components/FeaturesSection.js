import React from 'react';
import { Droplets, ShieldCheck, Leaf, Car, DollarSign, Hospital, ArrowRight } from 'lucide-react';

const Features = () => {

  // Placeholder data that will now be used directly
  const defaultFeatures = [
    { title: "Hygienic and Comfortable", description: "Designed with comfort and safety in mind for mothers and newborns.", icon: Droplets },
    { title: "Waterproof and Durable", description: "Provides a reliable barrier against fluids during delivery.", icon: ShieldCheck },
    { title: "Eco-Friendly Materials", description: "Made from biodegradable, sustainable materials.", icon: Leaf },
    { title: "Easy to Transport", description: "Lightweight and compact for easy carrying and storage.", icon: Car },
    { title: "Affordable Pricing", description: "Quality delivery mats at an accessible price point.", icon: DollarSign },
    { title: "Trusted by Hospitals", description: "Used by professionals in maternity clinics and hospitals worldwide.", icon: Hospital },
  ];

  // REMOVED all conditional logic and error handling
  // The component will now *only* display the 'defaultFeatures'
  const featuresToDisplay = defaultFeatures;

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Product Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresToDisplay.map((feature, index) => {
            const Icon = feature.icon; // Get the Lucide React icon component
            return (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-orange-200">
                  {Icon && <Icon className="text-orange-500 text-3xl group-hover:scale-110 transition-transform duration-300" />}
                </div>

                {/* Feature Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>

                {/* Feature Description */}
                <p className="text-gray-600 text-base mb-4">
                  {feature.description}
                </p>

                {/* Learn More Link */}
                <a
                  href="/#" // Replace with actual link
                  className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors duration-200"
                >
                  Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
