import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaArrowUp,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#020617]">

      <div className="container-custom py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-bold text-sky-400">
              LEARNPATH
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Empowering learners with premium online education,
              industry-ready courses, and modern learning experiences.
            </p>

            <div className="mt-6 flex gap-4 text-2xl">

              <FaFacebook className="cursor-pointer text-slate-400 transition hover:text-sky-400" />

              <FaInstagram className="cursor-pointer text-slate-400 transition hover:text-sky-400" />

              <FaLinkedin className="cursor-pointer text-slate-400 transition hover:text-sky-400" />

              <FaGithub className="cursor-pointer text-slate-400 transition hover:text-sky-400" />

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Quick Links
            </h3>

            <div className="space-y-3">

              <Link to="/">Home</Link><br />

              <Link to="/courses">Courses</Link><br />

              <Link to="/about">About</Link><br />

              <Link to="/contact">Contact</Link>

            </div>

          </div>

          {/* Categories */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Categories
            </h3>

            <div className="space-y-3 text-slate-400">

              <p>Web Development</p>

              <p>UI / UX Design</p>

              <p>Artificial Intelligence</p>

              <p>Data Science</p>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Contact
            </h3>

            <div className="space-y-3 text-slate-400">

              <p>📧 support@learnpath.com</p>

              <p>📞 +91 9876543210</p>

              <p>📍 Chennai, India</p>

            </div>

          </div>

        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 md:flex-row">

          <p className="text-slate-500">
            © {new Date().getFullYear()} LEARNPATH. All Rights Reserved.
          </p>

          <button
            onClick={scrollTop}
            className="rounded-full bg-sky-500 p-3 transition hover:scale-110"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
};

export default Footer;