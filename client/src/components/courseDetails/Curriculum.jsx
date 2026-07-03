const modules = [
  "Module 1 - HTML & CSS",
  "Module 2 - JavaScript",
  "Module 3 - React.js",
  "Module 4 - Node.js",
  "Module 5 - Express.js",
  "Module 6 - MongoDB",
  "Module 7 - Authentication",
  "Module 8 - Deployment",
];

const Curriculum = () => {
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">
      <h2 className="text-3xl font-bold text-white">
        Course Curriculum
      </h2>

      <div className="mt-8 space-y-4">
        {modules.map((module, index) => (
          <details
            key={index}
            className="rounded-xl bg-slate-800 p-5"
          >
            <summary className="cursor-pointer font-semibold text-white">
              {module}
            </summary>

            <p className="mt-4 text-slate-400">
              Practical lessons, quizzes, coding exercises,
              and mini projects are included.
            </p>
          </details>
        ))}
      </div>
    </div>
  );
};

export default Curriculum;