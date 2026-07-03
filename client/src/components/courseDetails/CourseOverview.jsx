const CourseOverview = () => {
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">

      <h2 className="text-3xl font-bold text-white">
        Course Overview
      </h2>

      <p className="mt-6 leading-8 text-slate-400">
        This comprehensive MERN Stack course takes you from beginner
        to professional Full Stack Developer.

        You'll build multiple real-world projects,
        learn REST APIs, authentication, MongoDB,
        deployment, and modern React development.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">

        <div className="rounded-2xl bg-slate-800 p-6">
          <h3 className="font-semibold text-white">
            Duration
          </h3>

          <p className="mt-2 text-slate-400">
            12 Weeks
          </p>
        </div>

        <div className="rounded-2xl bg-slate-800 p-6">
          <h3 className="font-semibold text-white">
            Skill Level
          </h3>

          <p className="mt-2 text-slate-400">
            Beginner to Advanced
          </p>
        </div>

      </div>

    </div>
  );
};

export default CourseOverview;