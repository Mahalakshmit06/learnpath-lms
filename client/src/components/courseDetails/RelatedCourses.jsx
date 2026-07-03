import CourseCard from "../courses/CourseCard";
import courses from "../../data/courses";

const RelatedCourses = () => {
  return (
    <section className="py-20">
      <h2 className="mb-10 text-3xl font-bold text-white">
        Related Courses
      </h2>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {courses.slice(0, 3).map((course) => (
          <CourseCard
            key={course.id}
            course={course}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedCourses;