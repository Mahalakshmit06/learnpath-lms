import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
  HiOutlineSearch,
} from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-slate-950/80 border-b border-slate-800">
      <div className="container-custom h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-sky-400 tracking-wide"
        >
          LEARNPATH
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `transition duration-300 ${
                  isActive
                    ? "text-sky-400"
                    : "text-slate-300 hover:text-sky-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden lg:flex items-center gap-4">

          

          <Link
            to="/login"
            className="secondary-btn"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="primary-btn"
          >
            Register
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800">
          <div className="flex flex-col p-6 gap-5">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-sky-400 font-medium"
                    : "text-slate-300"
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="secondary-btn text-center"
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="primary-btn text-center"
            >
              Register
            </Link>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;