import { Link } from "react-router-dom";
import { FaPlayCircle, FaUsers, FaBookOpen, FaStar } from "react-icons/fa";
import FeaturedCourses from "../../components/home/FeaturedCourses";
import PopularCategories from "../../components/home/PopularCategories";
import WhyChoose from "../../components/home/WhyChoose";
import TopInstructors from "../../components/home/TopInstructors";
import StudentStatistics from "../../components/home/StudentStatistics";
import DashboardPreview from "../../components/home/DashboardPreview";
import PartnerCompanies from "../../components/home/PartnerCompanies";
import Testimonials from "../../components/home/Testimonials";
import Newsletter from "../../components/home/Newsletter";
import CallToAction from "../../components/home/CallToAction";

const Home = () => {
  return (
    <section className="relative overflow-hidden bg-[#020617]">
      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl"></div>

      <div className="container-custom grid min-h-[90vh] items-center gap-12 py-12 lg:grid-cols-2 lg:py-20">
        {/* Left Content */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-2 text-sm text-sky-300">
            🚀 Learn Smarter with LEARNPATH
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Upgrade Your Skills with{" "}
            <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
              Premium Online Courses
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Learn from industry experts, earn certificates, and build your
            career with a modern learning experience designed for everyone.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              to="/courses"
              className="primary-btn text-center"
            >
              Explore Courses
            </Link>

            
          </div>

          {/* Statistics */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="glass-card p-4 text-center">
              <FaUsers className="mx-auto text-2xl text-sky-400" />
              <h3 className="mt-2 text-2xl font-bold">15K+</h3>
              <p className="text-sm text-slate-400">Students</p>
            </div>

            <div className="glass-card p-4 text-center">
              <FaBookOpen className="mx-auto text-2xl text-sky-400" />
              <h3 className="mt-2 text-2xl font-bold">250+</h3>
              <p className="text-sm text-slate-400">Courses</p>
            </div>

            <div className="glass-card p-4 text-center">
              <FaStar className="mx-auto text-2xl text-yellow-400" />
              <h3 className="mt-2 text-2xl font-bold">4.9</h3>
              <p className="text-sm text-slate-400">Rating</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative order-1 flex justify-center lg:order-2">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80"
            alt="Students Learning"
            className="w-full max-w-md rounded-3xl border border-slate-700 shadow-2xl"
          />

          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-4 rounded-2xl border border-slate-700 bg-slate-900/90 p-4 shadow-xl backdrop-blur-md">
            <p className="text-sm text-slate-300">🔥 Trending Course</p>
            <h4 className="font-semibold text-white">
              MERN Stack Development
            </h4>
          </div>

          <div className="absolute -right-4 top-6 rounded-2xl border border-slate-700 bg-slate-900/90 p-4 shadow-xl backdrop-blur-md">
            <p className="text-sm text-slate-300">⭐ Student Rating</p>
            <h4 className="font-semibold text-yellow-400">4.9 / 5</h4>

          </div>
           

  
        </div>
         
      </div>
       <FeaturedCourses />

  <PopularCategories />
   <WhyChoose />
    <TopInstructors />
    <StudentStatistics />
    <DashboardPreview />
      <PartnerCompanies />
      <Testimonials />
      <Newsletter />
      <CallToAction />

    </section>
  );
};

export default Home;