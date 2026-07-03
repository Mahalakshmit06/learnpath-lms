import CourseCard from "./CourseCard";

const courses = [
  {
    id: 1,
    title: "Complete MERN Stack Bootcamp",
    category: "Development",
    instructor: "John Anderson",
    rating: "4.9",
    duration: "16 Weeks",
    students: "4.8K",
    price: "2999",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
  },
  {
    id: 2,
    title: "UI UX Design Masterclass",
    category: "Design",
    instructor: "Emily Watson",
    rating: "4.8",
    duration: "10 Weeks",
    students: "3.2K",
    price: "2499",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
  },
  {
    id: 3,
    title: "Python Programming",
    category: "Programming",
    instructor: "David Lee",
    rating: "4.9",
    duration: "12 Weeks",
    students: "5K",
    price: "2799",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800",
  },
  {
    id: 4,
    title: "Data Science Essentials",
    category: "Data Science",
    instructor: "Sarah Miller",
    rating: "4.7",
    duration: "14 Weeks",
    students: "2.6K",
    price: "3499",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  },
  {
    id: 5,
    title: "Digital Marketing",
    category: "Marketing",
    instructor: "James Wilson",
    rating: "4.8",
    duration: "8 Weeks",
    students: "2.9K",
    price: "1999",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
  },
  {
    id: 6,
    title: "AI & Machine Learning",
    category: "Artificial Intelligence",
    instructor: "Sophia Brown",
    rating: "5.0",
    duration: "18 Weeks",
    students: "6K",
    price: "3999",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
  },
];

const FeaturedCourses = () => {
  return (
    <section className="py-24 bg-[#020617]">
      <div className="container-custom">
        <div className="text-center">
          <p className="text-sky-400 font-semibold uppercase tracking-widest">
            Featured Courses
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Learn from Industry Experts
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-slate-400">
            Choose from our most popular professional courses designed to help
            you master in-demand skills and accelerate your career.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;