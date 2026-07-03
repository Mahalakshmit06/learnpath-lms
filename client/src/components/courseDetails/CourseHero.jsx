const CourseHero = () => {
  return (
    <section className="bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 py-24">
      <div className="container-custom">

        <span className="rounded-full bg-sky-500/20 px-4 py-2 text-sm text-sky-400">
          Development
        </span>

        <h1 className="mt-6 max-w-4xl text-4xl font-bold text-white md:text-6xl">
          Complete MERN Stack Development Bootcamp
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-slate-300">
          Master MongoDB, Express.js, React, and Node.js by building
          industry-ready full stack applications.
        </p>

      </div>
    </section>
  );
};

export default CourseHero;