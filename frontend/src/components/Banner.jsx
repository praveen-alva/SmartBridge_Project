import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="text-center px-4 py-10">
      <h1 className="text-[3.5rem] font-bold text-black leading-tight cursor-pointer hover:text-blue-600 transition-colors duration-300">
        Resolve Complaints <br />
        <span className="text-blue-600">Faster Than Ever</span>
      </h1>
      <p className="text-gray-600 max-w-xl mx-auto mt-4">
        Streamline your complaint management process with our intelligent platform.
        Track, manage, and resolve customer issues with transparency and efficiency.
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <Link to="/register">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 cursor-pointer hover:bg-blue-700 transition">
            Register Now <i className="fa-solid fa-arrow-right"></i>
          </button>
        </Link>

        <Link to="/login">
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md font-semibold cursor-pointer hover:bg-blue-600 hover:text-white transition">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
