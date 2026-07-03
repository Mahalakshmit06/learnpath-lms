import { FaHeart } from "react-icons/fa";

const EnrollmentCard = () => {
  return (
    <div className="sticky top-28 rounded-3xl border border-slate-700 bg-slate-900 p-8">

      <img
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
        alt="Course"
        className="rounded-2xl"
      />

      <h2 className="mt-6 text-4xl font-bold text-sky-400">
        ₹2,499
      </h2>

      <button className="mt-8 w-full rounded-xl bg-sky-500 py-4 font-semibold text-white transition hover:bg-sky-600">
        Enroll Now
      </button>

      <button className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl border border-slate-700 py-4 text-white transition hover:border-red-500">
        <FaHeart />
        Add to Wishlist
      </button>

      <div className="mt-8 space-y-3 text-slate-400">

        <p>✔ Lifetime Access</p>

        <p>✔ Certificate of Completion</p>

        <p>✔ Downloadable Resources</p>

        <p>✔ Mobile & Desktop Access</p>

      </div>

    </div>
  );
};

export default EnrollmentCard;