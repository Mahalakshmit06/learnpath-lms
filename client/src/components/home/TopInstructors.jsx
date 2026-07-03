import { FaLinkedin, FaGithub, FaStar } from "react-icons/fa";
import instructors from "../../data/instructors";

const TopInstructors = () => {
  return (
    <section className="bg-slate-950 py-24">
      <div className="container-custom">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-sky-400">
            Our Mentors
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Meet Our Top Instructors
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Learn from experienced mentors who have trained thousands of
            students across various technologies.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-xl hover:shadow-sky-500/20"
            >
              <img
                src={instructor.image}
                alt={instructor.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {instructor.name}
                </h3>

                <p className="mt-2 text-sky-400">
                  {instructor.role}
                </p>

                <div className="mt-5 flex items-center justify-between text-sm text-slate-400">
                  <span>{instructor.students}</span>

                  <span className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    {instructor.rating}
                  </span>
                </div>

                <div className="mt-6 flex gap-4 text-xl text-slate-400">
                  <FaLinkedin className="cursor-pointer transition hover:text-sky-400" />
                  <FaGithub className="cursor-pointer transition hover:text-sky-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;