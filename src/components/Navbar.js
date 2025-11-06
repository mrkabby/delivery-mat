import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
// Assuming the UNIMAT logo is saved locally at this path
import UnimatLogo from '../images/Logo3.png'; // NOTE: Update this path if necessary

// Custom NavLink component with underline hover effect
const NavLink = ({ to, children, setIsMenuOpen }) => (
    <Link
        to={to}
        smooth={true}
        duration={500}
        onClick={() => setIsMenuOpen(false)}
        // Hover color changed to match the orange-500 accent from the footer
        className="relative block text-white md:text-gray-200 hover:text-orange-500 transition duration-300 cursor-pointer px-4 py-2 md:py-0 text-lg font-medium group/link w-max mx-auto md:mx-0"
    >
        {children}
        <span
            className="absolute bottom-0 left-[18px] w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover/page:w-1/2"
        ></span>
    </Link>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to track if the user has scrolled down
  const [scrolled, setScrolled] = useState(false);

  // Theme colors from your existing footer
  const navColor = 'bg-[#2b5937]'; // Dark green background
  const borderColor = 'border-b border-gray-600'; // Subtle border

  // Effect to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled to true if the vertical scroll position is more than 50px
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    // Dynamic classes based on the 'scrolled' state
    <header className={`fixed w-full z-50 transition-all duration-300 ${navColor}
        ${scrolled ? `${borderColor} shadow-xl` : 'shadow-none'}`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-8">

        {/* Logo/Brand (using the uploaded image) */}
        <div className="flex items-center">
            {/* The image component will use the imported logo */}
            <img src={UnimatLogo} alt="UNIMAT Logo" className="h-8 md:h-10 w-auto" />
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="home" setIsMenuOpen={setIsMenuOpen}>Home</NavLink>
            <NavLink to="about" setIsMenuOpen={setIsMenuOpen}>About</NavLink>
            <NavLink to="features" setIsMenuOpen={setIsMenuOpen}>Features</NavLink>
            <NavLink to="contact" setIsMenuOpen={setIsMenuOpen}>Contact</NavLink>
            <NavLink to="shop" setIsMenuOpen={setIsMenuOpen}>Shop</NavLink>
        </nav>

        {/* Utility Icons (Desktop) */}
        <div className="hidden md:flex items-center space-x-4 text-xl text-white">
            <Search className="hover:text-orange-500 transition cursor-pointer" />
            <ShoppingCart className="hover:text-orange-500 transition cursor-pointer" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden absolute top-full left-0 w-full ${navColor} shadow-lg pb-4`}
      >
        <div className="flex flex-col space-y-2 pt-2">
            <NavLink to="home" setIsMenuOpen={setIsMenuOpen}>Home</NavLink>
            <NavLink to="about" setIsMenuOpen={setIsMenuOpen}>About</NavLink>
            <NavLink to="pages" setIsMenuOpen={setIsMenuOpen}>Features</NavLink>
            <NavLink to="contact" setIsMenuOpen={setIsMenuOpen}>Contact</NavLink>

            {/* Mobile Utility Icons */}
            <div className="flex justify-center space-x-8 pt-4 text-xl text-white">
                <Search className="hover:text-orange-500 transition cursor-pointer" />
                <ShoppingCart className="hover:text-orange-500 transition cursor-pointer" />
            </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;