import React from 'react';
// Using Lucide React for consistent icons
import { Star, Heart, ShoppingCart } from 'lucide-react';

// Placeholder product image (replace with your actual product image path)
import unimatProductImage from '../images/Hero2.png';
// NOTE: Make sure you have an image at `src/assets/unimat-bed-pads.jpg`
// Or replace the import and usage with your image source.

const ShopSection = () => {
  // Hardcoded content for the single product
  const product = {
    image: unimatProductImage,
    name: "UNIMAT Disposable Bed Pads",
    rating: 5.0,
    reviews: 30,
    description: "Experience comfort and hygiene with UNIMAT Disposable Bed Pads. Designed for reliability and eco-friendliness, perfect for various needs.",
    price: "$29.99", // Added price for realistic shop feel
  };

  return (
    <section id="shop" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">

        {/* Section Title and Description */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-800 uppercase tracking-wide mb-4">
            Our Products
          </h2>
          <p className="text-lg text-gray-600">
            Discover UNIMAT's quality offerings designed for comfort, hygiene, and environmental responsibility.
          </p>
        </div>

        {/* Product Listing Grid (designed for a single product initially) */}
        <div className="flex justify-center"> {/* Center the single product card */}
          {/* Product Card with Hover Animation */}
          <div
            key={product.name}
            className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm w-full
                       transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Product Image */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>

            {/* Product Details */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {product.name}
              </h3>

              {/* Rating and Reviews */}
              <div className="flex items-center justify-center text-sm text-gray-600 mb-4">
                <Star className="w-4 h-4 text-orange-400 mr-1" fill="currentColor" />
                <span>{product.rating.toFixed(1)}</span>
                <span className="mx-2">|</span>
                <Heart className="w-4 h-4 text-red-400 mr-1" fill="currentColor" />
                <span>{product.reviews}</span>
              </div>

              {/* Short Description */}
              <p className="text-gray-600 text-sm mb-4">
                {product.description}
              </p>

              {/* Price (optional, but good for a shop) */}
              <p className="text-2xl font-bold text-gray-900 mb-6">
                {product.price}
              </p>

              {/* Action Buttons */}
              <div className="flex justify-center space-x-4">
                <button className="flex items-center bg-black text-white px-6 py-3 rounded-full uppercase text-sm font-semibold hover:bg-orange-500 transition duration-300">
                  <ShoppingCart className="w-4 h-4 mr-2" /> Cart
                </button>
                <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-full uppercase text-sm font-semibold hover:bg-gray-300 transition duration-300">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;