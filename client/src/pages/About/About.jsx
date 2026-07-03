import {
  FaBullseye,
  FaEye,
  FaGraduationCap,
  FaUsers,
  FaBookOpen,
  FaAward,
} from "react-icons/fa";

const stats = [
  { title: "25K+", subtitle: "Students" },
  { title: "350+", subtitle: "Courses" },
  { title: "120+", subtitle: "Expert Instructors" },
  { title: "98%", subtitle: "Success Rate" },
];

const About = () => {
  return (
    <div className="bg-slate-950 text-white">

      {/* Hero */}

      <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 py-24">
        <div className="container-custom text-center">

          <h1 className="text-4xl font-bold md:text-6xl">
            About LEARNPATH
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
            Empowering learners with industry-ready skills through modern,
            interactive and affordable online education.
          </p>

        </div>
      </section>

      {/* Mission & Vision */}

      <section className="py-20">
        <div className="container-custom grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">
            <FaBullseye className="text-5xl text-sky-400" />

            <h2 className="mt-6 text-3xl font-bold">
              Our Mission
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              To make quality education accessible to everyone by providing
              practical, project-based learning experiences.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">
            <FaEye className="text-5xl text-sky-400" />

            <h2 className="mt-6 text-3xl font-bold">
              Our Vision
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              To become one of the world's most trusted online learning
              platforms where students build successful careers.
            </p>
          </div>

        </div>
      </section>

      {/* Journey */}

      <section className="py-20 bg-slate-900">
        <div className="container-custom text-center">

          <h2 className="text-4xl font-bold">
            Our Journey
          </h2>

          <p className="mx-auto mt-6 max-w-4xl leading-8 text-slate-300">
            LEARNPATH started with a simple goal: create a platform that bridges
            the gap between theoretical knowledge and real-world industry
            skills. Today thousands of learners use LEARNPATH to upskill,
            switch careers and achieve their goals.
          </p>

        </div>
      </section>

      {/* Stats */}

      <section className="py-20">
        <div className="container-custom grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-700 bg-slate-900 p-8 text-center"
            >
              <h3 className="text-5xl font-bold text-sky-400">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-300">
                {item.subtitle}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Why Choose */}

      <section className="bg-slate-900 py-20">
        <div className="container-custom">

          <h2 className="text-center text-4xl font-bold">
            Why Choose LEARNPATH?
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl bg-slate-800 p-8 text-center">
              <FaGraduationCap className="mx-auto text-5xl text-sky-400" />

              <h3 className="mt-6 text-2xl font-semibold">
                Expert Courses
              </h3>

              <p className="mt-4 text-slate-300">
                Industry-focused curriculum designed by professionals.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-800 p-8 text-center">
              <FaUsers className="mx-auto text-5xl text-sky-400" />

              <h3 className="mt-6 text-2xl font-semibold">
                Community
              </h3>

              <p className="mt-4 text-slate-300">
                Learn together with thousands of passionate learners.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-800 p-8 text-center">
              <FaAward className="mx-auto text-5xl text-sky-400" />

              <h3 className="mt-6 text-2xl font-semibold">
                Certification
              </h3>

              <p className="mt-4 text-slate-300">
                Earn certificates to showcase your achievements.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="py-20">
        <div className="container-custom rounded-3xl bg-gradient-to-r from-sky-600 to-blue-700 p-12 text-center">

          <FaBookOpen className="mx-auto text-6xl" />

          <h2 className="mt-6 text-4xl font-bold">
            Start Learning Today
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg">
            Discover courses that help you grow professionally and personally.
          </p>

          <button className="mt-8 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105">
            Explore Courses
          </button>

        </div>
      </section>

    </div>
  );
};

export default About;