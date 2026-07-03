import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import toast from "react-hot-toast";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
  };

  return (
    <div className="bg-slate-950 text-white">

      {/* Hero */}

      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 py-24">
        <div className="container-custom text-center">

          <h1 className="text-4xl font-bold md:text-6xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-slate-300">
            We'd love to hear from you. Send us your questions or feedback.
          </p>

        </div>
      </section>

      <section className="py-20">
        <div className="container-custom grid gap-10 lg:grid-cols-2">

          {/* Contact Form */}

          <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">

            <h2 className="mb-8 text-3xl font-bold">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none focus:border-sky-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none focus:border-sky-500"
              />

              <textarea
                rows="6"
                placeholder="Message"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none focus:border-sky-500"
              ></textarea>

              <button
                className="w-full rounded-xl bg-sky-500 py-4 font-semibold transition hover:bg-sky-600"
              >
                Send Message
              </button>

            </form>

          </div>

          {/* Contact Info */}

          <div className="space-y-8">

            <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">
              <FaEnvelope className="text-4xl text-sky-400" />

              <h3 className="mt-5 text-2xl font-semibold">
                Email
              </h3>

              <p className="mt-2 text-slate-300">
                support@learnpath.com
              </p>
            </div>

            <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">
              <FaPhone className="text-4xl text-sky-400" />

              <h3 className="mt-5 text-2xl font-semibold">
                Phone
              </h3>

              <p className="mt-2 text-slate-300">
                +91 98765 43210
              </p>
            </div>

            <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">
              <FaMapMarkerAlt className="text-4xl text-sky-400" />

              <h3 className="mt-5 text-2xl font-semibold">
                Address
              </h3>

              <p className="mt-2 text-slate-300">
                Chennai, Tamil Nadu, India
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;