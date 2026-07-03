import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaCertificate,
  FaUserFriends,
} from "react-icons/fa";

const features = [
  {
    icon: <FaGraduationCap />,
    title: "Expert Instructors",
    description:
      "Learn from experienced professionals with real-world industry expertise.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Hands-on Projects",
    description:
      "Practice with real projects that strengthen your portfolio and confidence.",
  },
  {
    icon: <FaCertificate />,
    title: "Verified Certificates",
    description:
      "Earn professional certificates to showcase your achievements.",
  },
  {
    icon: <FaUserFriends />,
    title: "Learning Community",
    description:
      "Join thousands of learners and collaborate with peers worldwide.",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-[#020617] py-24">
      <div className="container-custom">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-sky-400">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Why Students Love LEARNPATH
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Everything you need to learn modern skills, build confidence,
            and achieve your career goals in one place.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="rounded-3xl border border-slate-700 bg-slate-900 p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-xl hover:shadow-sky-500/20"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500/10 text-3xl text-sky-400">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;