import {
  FaCode,
  FaPalette,
  FaChartLine,
  FaRobot,
  FaDatabase,
  FaBullhorn,
} from "react-icons/fa";

const categories = [
  {
    id: 1,
    title: "Web Development",
    icon: <FaCode size={36} />,
    courses: "120+ Courses",
  },
  {
    id: 2,
    title: "UI / UX Design",
    icon: <FaPalette size={36} />,
    courses: "60+ Courses",
  },
  {
    id: 3,
    title: "Digital Marketing",
    icon: <FaBullhorn size={36} />,
    courses: "45+ Courses",
  },
  {
    id: 4,
    title: "Data Science",
    icon: <FaDatabase size={36} />,
    courses: "75+ Courses",
  },
  {
    id: 5,
    title: "Artificial Intelligence",
    icon: <FaRobot size={36} />,
    courses: "50+ Courses",
  },
  {
    id: 6,
    title: "Business",
    icon: <FaChartLine size={36} />,
    courses: "35+ Courses",
  },
];

const PopularCategories = () => {
  return (
    <section className="bg-slate-950 py-24">
      <div className="container-custom">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-sky-400">
            Categories
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Explore Popular Categories
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Discover trending learning paths and choose the skills that match
            your career goals.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer rounded-3xl border border-slate-700 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-sky-500 hover:bg-slate-800"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-400 transition group-hover:bg-sky-500 group-hover:text-white">
                {category.icon}
              </div>

              <h3 className="text-xl font-semibold text-white">
                {category.title}
              </h3>

              <p className="mt-3 text-slate-400">
                {category.courses}
              </p>

              <button className="mt-6 text-sky-400 transition hover:text-sky-300">
                Explore →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;