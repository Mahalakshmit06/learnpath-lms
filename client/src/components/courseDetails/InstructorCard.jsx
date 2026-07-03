const InstructorCard = () => {
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">

      <h2 className="text-2xl font-bold text-white">
        Instructor
      </h2>

      <div className="mt-6 flex items-center gap-5">

        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
          alt="Instructor"
          className="h-24 w-24 rounded-full object-cover"
        />

        <div>

          <h3 className="text-xl font-semibold">
            John Anderson
          </h3>

          <p className="text-sky-400">
            Senior MERN Stack Developer
          </p>

          <p className="mt-3 text-slate-400">
            12+ years industry experience.
          </p>

        </div>

      </div>

    </div>
  );
};

export default InstructorCard;