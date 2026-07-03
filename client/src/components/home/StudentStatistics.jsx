import { motion } from "framer-motion";
import statistics from "../../data/statistics";

const StudentStatistics = () => {
  return (
    <section className="bg-[#020617] py-24">
      <div className="container-custom">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-sky-400">
            Our Impact
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Trusted by Thousands of Learners
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Join a growing community of students learning with LEARNPATH every
            day.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {statistics.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="rounded-3xl border border-slate-700 bg-slate-900 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-xl hover:shadow-sky-500/20"
            >
              <div className="text-5xl">{item.icon}</div>

              <h3 className="mt-6 text-4xl font-bold text-sky-400">
                {item.number}
              </h3>

              <p className="mt-3 text-slate-300">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentStatistics;