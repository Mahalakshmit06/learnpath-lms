import CourseHero from "../../components/courseDetails/CourseHero";
import CourseOverview from "../../components/courseDetails/CourseOverview";
import InstructorCard from "../../components/courseDetails/InstructorCard";
import EnrollmentCard from "../../components/courseDetails/EnrollmentCard";
import WhatYouWillLearn from "../../components/courseDetails/WhatYouWillLearn";
import Curriculum from "../../components/courseDetails/Curriculum";
import Requirements from "../../components/courseDetails/Requirements";
import Reviews from "../../components/courseDetails/Reviews";
import RelatedCourses from "../../components/courseDetails/RelatedCourses";

const CourseDetails = () => {
  return (
    <>
      <CourseHero />

      <section className="bg-slate-950 py-16">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="space-y-10 lg:col-span-2">
              <CourseOverview />
              <WhatYouWillLearn />
              <Curriculum />
              <Requirements />
              <InstructorCard />
              <Reviews />
            </div>

            <div>
              <EnrollmentCard />
            </div>
          </div>

          <RelatedCourses />
        </div>
      </section>
    </>
  );
};

export default CourseDetails;