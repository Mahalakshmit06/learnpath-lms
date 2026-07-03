const CourseFilters = ({ category, setCategory }) => {
  const categories = [
    "All",
    "Development",
    "Design",
    "Programming",
    "AI",
  ];

  return (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="w-full rounded-xl border border-slate-700 bg-slate-900 p-3 text-white outline-none"
    >
      {categories.map((item) => (
        <option key={item}>{item}</option>
      ))}
    </select>
  );
};

export default CourseFilters;