import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // icon library

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-indigo-700 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-lg md:text-xl font-bold">Fee Management System</h1>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu Items */}
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:gap-6 text-sm md:text-base mt-4 md:mt-0`}
        >
          <Link to="/" className="block md:inline hover:underline mb-2 md:mb-0">
            All Students
          </Link>

          {user ? (
            <>
              <Link to="/profile" className="block md:inline hover:underline mb-2 md:mb-0">
                Profile
              </Link>
              <button onClick={handleLogout} className="block md:inline hover:underline">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="block md:inline hover:underline mb-2 md:mb-0">
                Login
              </Link>
              <Link to="/register" className="block md:inline hover:underline">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
