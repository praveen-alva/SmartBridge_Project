import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <i className="fa-solid fa-shield-halved text-blue-400 text-xl"></i>
            <h1 className="text-xl font-bold">ResolveNow</h1>
          </div>
          <p className="text-gray-400">
            Streamlining complaint management with transparency and efficiency.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="font-semibold text-white mb-2">Product</h2>
          <ul className="text-gray-400 space-y-1">
            <li>Features</li>
            <li>Pricing</li>
            <li>Security</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-white mb-2">Support</h2>
          <ul className="text-gray-400 space-y-1">
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Status</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-white mb-2">Company</h2>
          <ul className="text-gray-400 space-y-1">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © 2025 ResolveNow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
