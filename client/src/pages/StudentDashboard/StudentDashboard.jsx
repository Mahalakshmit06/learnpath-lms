import useAuth from "../../hooks/useAuth";

const StudentDashboard = () => {
  const { user } = useAuth();

  return (
    <section className="min-h-screen bg-slate-950 py-20">
      <div className="container-custom">
        <div className="rounded-3xl border border-slate-700 bg-slate-900 p-10">
          <h1 className="text-4xl font-bold text-white">
            Welcome,
          </h1>

          <p className="mt-4 text-xl text-sky-400">
            {user?.name}
          </p>

          <p className="mt-8 text-slate-400">
            Student Dashboard UI will be built in the upcoming steps.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudentDashboard;