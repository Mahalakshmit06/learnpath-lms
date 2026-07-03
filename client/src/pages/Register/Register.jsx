import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaUserGraduate } from "react-icons/fa";
import toast from "react-hot-toast";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    toast.success("Validation successful. ");
  };

  return (
    <section className="min-h-screen bg-slate-950">
      <div className="container-custom grid min-h-screen lg:grid-cols-2">

        {/* Left */}

        <div className="hidden flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-sky-900 p-10 lg:flex">

          <FaUserGraduate className="text-8xl text-sky-400" />

          <h2 className="mt-8 text-center text-5xl font-bold text-white">
            Welcome to LEARNPATH
          </h2>

          <p className="mt-6 max-w-md text-center text-slate-300">
            Join thousands of learners and build your future with
            industry-ready courses.
          </p>

        </div>

        {/* Right */}

        <div className="flex items-center justify-center py-16">

          <div className="w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900 p-8">

            <h1 className="text-center text-4xl font-bold text-white">
              Create Account
            </h1>

            <p className="mt-3 text-center text-slate-400">
              Start your learning journey today.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none focus:border-sky-500"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-white outline-none focus:border-sky-500"
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 pr-12 text-white outline-none focus:border-sky-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-5 text-slate-400"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 pr-12 text-white outline-none focus:border-sky-500"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-4 top-5 text-slate-400"
                >
                  {showConfirm ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-sky-500 py-4 font-semibold text-white transition hover:bg-sky-600"
              >
                Create Account
              </button>
            </form>

            <p className="mt-8 text-center text-slate-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-sky-400 hover:text-sky-300"
              >
                Login
              </Link>
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Register;