import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaSquareXTwitter} from 'react-icons/fa6';

// Reusable component for partially underlined links on hover
const FooterLink = ({ href = "#", children, className = '' }) => (
  <a
    href={href}
    className={`relative text-white hover:text-orange-500 transition duration-300 group/link inline-flex items-center ${className}`}
  >
    {children}
    {/* Underline on hover: reduced to half width */}
    <span
      className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover/link:w-1/2"
    ></span>
  </a>
);

// Reusable component for pages links (with the '>' arrow)
const PageLink = ({ href = "#", children }) => (
  <li>
    <a
      href={href}
      className="flex items-center text-white hover:text-orange-500 transition duration-300 group/page relative w-max"
    >
      <span className="mr-2 text-orange-500">&gt;</span>
      {children}
      {/* Underline on hover: reduced to half width */}
      <span
        className="absolute bottom-0 left-[18px] w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover/page:w-1/2"
      ></span>
    </a>
  </li>
);

// Reusable component for Social Media Icons
// FIX: Now accepts the 'href' property
const SocialIcon = ({ IconComponent, label, href }) => (
    <a
        // FIX: Added the href to link the social icon
        href={href}
        aria-label={label}
        target="_blank" // Recommended for external links
        rel="noopener noreferrer" // Security measure for target="_blank"
        className="text-white hover:text-orange-500 transform hover:scale-110 transition duration-300"
    >
        <IconComponent />
    </a>
);


const Footer = () => {
  const darkGreenBg = 'bg-[#2b5937]';
  const darkTextColor = 'text-white';
  const bodyTextColor = 'text-gray-200';

  // Component for Footer Titles (Mobile underline fixed)
  const FooterTitle = ({ children }) => (
    <h4
        // Static partial underline width set to w-1/2
        className={`text-xl font-semibold mb-6 ${darkTextColor} relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-1/6 after:h-0.5 after:bg-orange-500`}
    >
        {children}
    </h4>
  );

  // FIX: Updated IconComponent names and added a 'href' for each social media platform
  const socialIcons = [
    { IconComponent: FaFacebook, label: 'Facebook', href: 'https://facebook.com/yourpage' },
    { IconComponent: FaSquareXTwitter, label: 'Twitter', href: 'https://twitter.com/yourhandle' },
    { IconComponent: FaInstagram, label: 'Instagram', href: 'https://instagram.com/yourprofile' },
    { IconComponent: FaLinkedinIn, label: 'LinkedIn', href: 'https://linkedin.com/company/yourcompany' },
  ];

  return (
    <footer className={`${darkGreenBg} ${darkTextColor} pt-16 pb-8`}>
        <div className="px-4 sm:px-6 lg:px-8">

            {/* --- Main Footer Sections --- */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-gray-600 pb-12">

                {/* 1. About Us */}
                <div>
                    <FooterTitle>About us</FooterTitle>
                    <p className={`text-sm ${bodyTextColor} leading-relaxed pr-8`}>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                {/* 2. Get in Touch */}
                <div>
                    <FooterTitle>Get in Touch</FooterTitle>
                    <ul className="text-sm space-y-3">
                        <li className={bodyTextColor}>34/8, East Hukupara, Gifirtok, Sudan.</li>
                        <li><FooterLink href="mailto:support@fruitkha.com">support@fruitkha.com</FooterLink></li>
                        <li className={bodyTextColor}>+00 111 222 3333</li>
                    </ul>
                </div>

                {/* 3. Pages */}
                <div>
                    <FooterTitle>Pages</FooterTitle>
                    <ul className="text-sm space-y-3">
                        <PageLink>Home</PageLink>
                        <PageLink>About</PageLink>
                        <PageLink>Shop</PageLink>
                        <PageLink>Contact</PageLink>
                    </ul>
                </div>

                {/* 4. Subscribe */}
                <div>
                    <FooterTitle>Subscribe</FooterTitle>
                    <p className={`text-sm ${bodyTextColor} mb-4`}>
                        Subscribe to our mailing list to get the latest updates.
                    </p>
                    {/* Email Form */}
                    <form className="flex shadow-md rounded-md overflow-hidden">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 text-gray-800 placeholder-gray-400 focus:outline-none bg-white"
                        />
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-600 transition duration-300 p-3 text-white"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform rotate-45" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.5V9a1 1 0 012 0v6.5l5 1.429a1 1 0 001.169-1.409l-7-14z" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>

            {/* --- Copyright and Social Media --- */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-sm">
                {/* Copyright Info */}
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <p className={bodyTextColor}>
                        &copy; {new Date().getFullYear()} Delivery Mat. All Rights Reserved.
                        <br />
                    </p>
                </div>

                {/* Social Media Icons with Hover Effect */}
                <div className="flex space-x-6 text-xl">
                    {socialIcons.map((social) => (
                        <SocialIcon
                            key={social.label}
                            IconComponent={social.IconComponent}
                            label={social.label}
                            href={social.href} // Passing the link
                        />
                    ))}
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;