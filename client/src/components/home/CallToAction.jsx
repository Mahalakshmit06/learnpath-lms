import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="bg-slate-950 py-24">
      <div className="container-custom">
        <div className="overflow-hidden rounded-3xl border border-slate-700 bg-gradient-to-r from-sky-700 via-blue-800 to-indigo-900 px-8 py-16 text-center shadow-2xl">

          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Ready to Start Your Learning Journey?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200">
            Join thousands of learners and gain in-demand skills through
            industry-ready courses on LEARNPATH.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/courses"
              className="rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Explore Courses
            </Link>

            <Link
              to="/register"
              className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-slate-900"
            >
              Register Now
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;