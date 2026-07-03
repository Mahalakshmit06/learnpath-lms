import { useMemo, useState } from "react";

import courses from "../../data/courses";

import CourseHero from "../../components/courses/CourseHero";
import SearchBar from "../../components/courses/SearchBar";
import CourseFilters from "../../components/courses/CourseFilters";
import CourseCard from "../../components/courses/CourseCard";
const Courses = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory =
        category === "All" || course.category === category;

      const matchesSearch = course.title
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <>
      <CourseHero />

      <section className="bg-slate-950 py-16">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-2">
            <SearchBar
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <CourseFilters
              category={category}
              setCategory={setCategory}
            />
          </div>
          <div className="mt-8">
  <p className="mb-8 text-slate-400">
    {filteredCourses.length} Courses Found
  </p>

  <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
    {filteredCourses.map((course) => (
      <CourseCard
        key={course.id}
        course={course}
      />
    ))}
  </div>
</div>
          
        </div>
      </section>
    </>
  );
};

export default Courses;