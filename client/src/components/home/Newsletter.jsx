import { useState } from "react";
import toast from "react-hot-toast";
import { HiOutlineMail } from "react-icons/hi";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }

    toast.success("Successfully subscribed to LEARNPATH!");

    setEmail("");
  };

  return (
    <section className="bg-[#020617] py-24">
      <div className="container-custom">
        <div className="overflow-hidden rounded-3xl border border-slate-700 bg-gradient-to-r from-blue-900 via-slate-900 to-sky-900 p-8 md:p-16">

          <div className="mx-auto max-w-3xl text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-500/20">
              <HiOutlineMail className="text-4xl text-sky-400" />
            </div>

            <h2 className="mt-8 text-3xl font-bold text-white md:text-5xl">
              Stay Updated with LEARNPATH
            </h2>

            <p className="mt-6 text-lg text-slate-300">
              Subscribe to receive the latest courses, learning resources,
              career tips, and exclusive offers.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mt-10 flex flex-col gap-4 md:flex-row"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 rounded-xl border border-slate-600 bg-slate-800 px-5 py-4 text-white outline-none focus:border-sky-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button
                type="submit"
                className="primary-btn"
              >
                Subscribe
              </button>
            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;