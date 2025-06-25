import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const raw = localStorage.getItem('user');
      if (!raw || raw === 'undefined') return;

      const user = JSON.parse(raw);
      if (user?.name) {
        setIsLoggedIn(true);
        setUserName(user.name);
      } else {
        setIsLoggedIn(false);
      }
    } catch (err) {
      console.error('❌ Failed to parse user from localStorage:', err);
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <header className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-blue-600 text-xl font-bold cursor-pointer hover:opacity-80 transition">
          <i className="fa-solid fa-shield-halved"></i>
          <h1>ResolveNow</h1>
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-blue-600 text-2xl focus:outline-none">
            <i className={menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
          </button>
        </div>

        {/* Navigation Items */}
        <nav className={`lg:flex gap-4 items-center ${menuOpen ? 'flex flex-col absolute top-16 left-0 w-full bg-white shadow-md p-6 z-10' : 'hidden'} lg:static lg:p-0`}>
          {isLoggedIn ? (
            <>
              <span className="text-black font-medium flex items-center gap-2 hover:text-blue-600 transition">
                <i className="fa-regular fa-user"></i> {userName}
              </span>
              <button
                onClick={handleLogout}
                className="text-black px-4 py-2 rounded-md hover:bg-red-600 hover:text-white transition flex items-center gap-2"
              >
                <i className="fa-solid fa-right-from-bracket"></i> Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="border border-blue-600 text-blue-600 px-6 py-2 rounded-md font-semibold cursor-pointer hover:bg-blue-600 hover:text-white transition"
              >
                Sign In
              </Link>
              <Link to="/register">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold cursor-pointer hover:bg-blue-700 transition">
                  Register
                </button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
