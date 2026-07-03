import {
  FaHeart,
  FaStar,
  FaUserGraduate,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-2xl hover:shadow-sky-500/20">
      
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Category Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-sky-500 px-4 py-1 text-xs font-semibold text-white">
          {course.category}
        </span>

        {/* Wishlist */}
        <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-red-500">
          <FaHeart />
        </button>
      </div>

      {/* Content */}
      <div className="p-6">

        <h3 className="line-clamp-2 text-xl font-bold text-white">
          {course.title}
        </h3>

        <p className="mt-3 text-sm text-slate-400">
          Instructor:{" "}
          <span className="font-medium text-slate-200">
            {course.instructor}
          </span>
        </p>

        {/* Rating */}
        <div className="mt-5 flex items-center justify-between">

          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-400" />
            <span className="font-semibold text-white">
              {course.rating}
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <FaUserGraduate />
            <span>{course.students.toLocaleString()}</span>
          </div>

        </div>

        {/* Duration */}
        <div className="mt-4 flex items-center gap-2 text-slate-400">
          <FaClock />
          <span>{course.duration}</span>
        </div>

        {/* Price */}
        <div className="mt-6 flex items-center justify-between">

          <div>
            <p className="text-3xl font-bold text-sky-400">
              ₹{course.price}
            </p>
          </div>

          <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
            Bestseller
          </span>

        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-3">

          <Link
            to={`/courses/${course.id}`}
            className="flex-1 rounded-xl border border-sky-500 py-3 text-center font-semibold text-sky-400 transition hover:bg-sky-500 hover:text-white"
          >
            View Details
          </Link>

          <button className="flex-1 rounded-xl bg-sky-500 py-3 font-semibold text-white transition hover:bg-sky-600">
            Enroll Now
          </button>

        </div>

      </div>
    </div>
  );
};

export default CourseCard;