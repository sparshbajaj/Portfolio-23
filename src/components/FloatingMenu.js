import React from 'react';
import logo from '../images/sparsh-logo.svg'; // Assuming you want to keep the logo
import { useLocation, Link } from 'react-router-dom'; // Use react-router Link and useLocation hook

const FloatingMenu = () => {
  // Use useLocation hook to determine the current path
  const location = useLocation();
  const currentPath = location.pathname;

  // Define menu items
  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    // Keep Contact as mailto link for simplicity, or create a contact page/section
    // { name: 'Contact', path: '/contact' }
  ];

  // Determine active item based on path prefix
  const getSelectedItem = (path) => {
    if (path === '/') return 'Home';
    if (path.startsWith('/about')) return 'About';
    // Add other conditions if needed
    return ''; // Default no selection
  };

  const selectedItem = getSelectedItem(currentPath);

  return (
    // Single fixed header container
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1f2937] shadow-md"> {/* Use a slightly lighter dark shade (gray-800) */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8"> {/* Consistent padding */}
        <div className="flex justify-between items-center h-16 md:h-20"> {/* Fixed height for padding calculation */}

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="block"> {/* Use Link component */}
              <img src={logo} alt="logo" className="h-8 md:h-10 w-auto" /> {/* Adjusted size */}
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6"> {/* Hide on small screens, use flexbox spacing */}
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out ${
                  selectedItem === item.name
                    ? 'text-[#8fdcc2]' // Accent color for active item
                    : 'text-gray-300 hover:text-white' // Standard text, white on hover
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* Contact Link */}
            <a
              href="mailto:sparshbajaj@reviewitnerd.com?subject=Lets%20Work%20Together"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white transition duration-300 ease-in-out"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button (Placeholder - requires state and logic for drawer/overlay) */}
          <div className="md:hidden">
            {/* Basic placeholder - ideally implement a hamburger button */}
            <button className="text-gray-300 hover:text-white p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default FloatingMenu;
