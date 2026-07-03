import { motion } from "framer-motion";
import companies from "../../data/companies";

const PartnerCompanies = () => {
  return (
    <section className="bg-[#020617] py-24">
      <div className="container-custom">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-sky-400">
            Trusted By
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Our Learning Partners
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            LEARNPATH helps learners prepare for careers at some of the world's
            leading technology companies.
          </p>

        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">

          {companies.map((company, index) => (

            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              className="flex h-28 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/20"
            >
              <h3
                className={`text-xl font-bold ${company.color}`}
              >
                {company.name}
              </h3>
            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default PartnerCompanies;