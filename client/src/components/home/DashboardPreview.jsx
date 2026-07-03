import {
  FaBookOpen,
  FaCertificate,
  FaChartLine,
  FaPlayCircle,
  FaCalendarAlt,
} from "react-icons/fa";

const DashboardPreview = () => {
  return (
    <section className="bg-slate-950 py-24">
      <div className="container-custom">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-sky-400 font-semibold">
            Student Dashboard
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Learn Smarter with Your Personal Dashboard
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-400">
            Monitor your progress, continue your courses, download certificates,
            and stay motivated with an intuitive learning dashboard.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Left */}

          <div className="space-y-6">

            <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-slate-400">
                    Continue Learning
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    MERN Stack Development
                  </h3>

                </div>

                <FaPlayCircle
                  size={40}
                  className="text-sky-400"
                />

              </div>

              <div className="mt-6">

                <div className="h-3 rounded-full bg-slate-800">

                  <div className="h-3 w-[72%] rounded-full bg-sky-500"></div>

                </div>

                <p className="mt-3 text-sm text-slate-400">
                  72% Completed
                </p>

              </div>

            </div>

            <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6">

              <div className="flex items-center gap-4">

                <FaCertificate
                  size={34}
                  className="text-yellow-400"
                />

                <div>

                  <h3 className="font-semibold">
                    Certificates Earned
                  </h3>

                  <p className="text-slate-400">
                    12 Certificates
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Center */}

          <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">

            <div className="flex items-center justify-between">

              <h3 className="text-xl font-semibold">
                Weekly Learning Progress
              </h3>

              <FaChartLine
                className="text-sky-400"
                size={28}
              />

            </div>

            <div className="mt-10 space-y-5">

              {[85, 70, 90, 60, 80].map((item, index) => (
                <div key={index}>

                  <div className="mb-2 flex justify-between text-sm">

                    <span className="text-slate-400">
                      Week {index + 1}
                    </span>

                    <span>{item}%</span>

                  </div>

                  <div className="h-3 rounded-full bg-slate-800">

                    <div
                      style={{ width: `${item}%` }}
                      className="h-3 rounded-full bg-sky-500"
                    />

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* Right */}

          <div className="space-y-6">

            <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6">

              <div className="flex items-center gap-4">

                <FaCalendarAlt
                  size={30}
                  className="text-green-400"
                />

                <div>

                  <h3 className="font-semibold">
                    Upcoming Class
                  </h3>

                  <p className="text-slate-400">
                    React Advanced
                  </p>

                  <p className="text-sm text-slate-500">
                    Tomorrow • 7:00 PM
                  </p>

                </div>

              </div>

            </div>

            <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6">

              <div className="flex items-center gap-4">

                <FaBookOpen
                  size={30}
                  className="text-sky-400"
                />

                <div>

                  <h3 className="font-semibold">
                    Active Courses
                  </h3>

                  <p className="text-slate-400">
                    8 Courses
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default DashboardPreview;