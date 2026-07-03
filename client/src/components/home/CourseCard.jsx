import { FaStar, FaClock, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-2xl hover:shadow-sky-500/20">
      <div className="overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs text-sky-400">
          {course.category}
        </span>

        <h3 className="mt-4 text-xl font-semibold text-white">
          {course.title}
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          {course.instructor}
        </p>

        <div className="mt-5 flex items-center justify-between text-sm text-slate-400">
          <span className="flex items-center gap-2">
            <FaStar className="text-yellow-400" />
            {course.rating}
          </span>

          <span className="flex items-center gap-2">
            <FaClock />
            {course.duration}
          </span>

          <span className="flex items-center gap-2">
            <FaUsers />
            {course.students}
          </span>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-sky-400">
            ₹{course.price}
          </h2>
        </div>

        <div className="mt-6 flex gap-3">
          <Link
            to={`/courses/${course.id}`}
            className="secondary-btn flex-1 text-center"
          >
            Details
          </Link>

          <button className="primary-btn flex-1">
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;