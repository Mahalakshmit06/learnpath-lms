import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaUserGraduate } from "react-icons/fa";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Temporary login until backend is connected
    login({
      name: "Demo Student",
      email: formData.email,
      avatar: "",
    });

    toast.success("Login Successful!");

    navigate("/student-dashboard");
  };

  return (
    <section className="min-h-screen bg-slate-950">
      <div className="container-custom grid min-h-screen lg:grid-cols-2">

        {/* Left Side */}

        <div className="hidden lg:flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-sky-900 p-10">

          <FaUserGraduate className="text-8xl text-sky-400" />

          <h2 className="mt-8 text-5xl font-bold text-white text-center">
            Welcome Back
          </h2>

          <p className="mt-6 max-w-md text-center text-slate-300">
            Continue learning from where you left off.
          </p>

        </div>

        {/* Right Side */}

        <div className="flex items-center justify-center py-16">

          <div className="w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900 p-8">

            <h1 className="text-center text-4xl font-bold text-white">
              Login
            </h1>

            <p className="mt-3 text-center text-slate-400">
              Access your LEARNPATH account.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 space-y-6"
            >

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

              <div className="flex items-center justify-between text-sm">

                <label className="flex items-center gap-2 text-slate-400">

                  <input
                    type="checkbox"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleChange}
                  />

                  Remember Me

                </label>

                <Link
                  to="/forgot-password"
                  className="text-sky-400 hover:text-sky-300"
                >
                  Forgot Password?
                </Link>

              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-sky-500 py-4 font-semibold text-white transition hover:bg-sky-600"
              >
                Login
              </button>

            </form>

            <p className="mt-8 text-center text-slate-400">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-semibold text-sky-400 hover:text-sky-300"
              >
                Register
              </Link>
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Login;