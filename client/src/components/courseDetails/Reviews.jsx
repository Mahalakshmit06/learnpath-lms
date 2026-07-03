import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Rahul",
    comment: "Excellent course. Everything is explained clearly.",
  },
  {
    name: "Priya",
    comment: "Projects helped me understand full stack development.",
  },
];

const Reviews = () => {
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">
      <h2 className="text-3xl font-bold text-white">
        Student Reviews
      </h2>

      <div className="mt-8 space-y-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="rounded-2xl bg-slate-800 p-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-white">
                {review.name}
              </h3>

              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>

            <p className="mt-4 text-slate-400">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;