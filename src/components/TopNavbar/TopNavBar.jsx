import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TopNavBar = ({ logo, links, backgroundColor, textColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className="w-full shadow-md"
      style={{ backgroundColor, color: textColor }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <p>Logo</p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-base hover:underline"
                style={{ color: textColor }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              className="text-2xl focus:outline-none"
              onClick={toggleMenu}
              style={{ color: textColor }}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block text-base px-2 py-1 hover:underline"
                style={{ color: textColor }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

TopNavBar.propTypes = {
  logo: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};

TopNavBar.defaultProps = {
  logo: '',
  backgroundColor: '#1f2937', // Tailwind gray-800
  textColor: '#ffffff',
};

export default TopNavBar;
