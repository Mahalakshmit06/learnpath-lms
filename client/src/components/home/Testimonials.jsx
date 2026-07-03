import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import testimonials from "../../data/testimonials";

const Testimonials = () => {
  return (
    <section className="bg-slate-950 py-24">
      <div className="container-custom">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-sky-400">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            What Our Students Say
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Thousands of learners have transformed their careers with
            LEARNPATH. Here's what they have to say.
          </p>
        </div>

        <div className="mt-16">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="h-full rounded-3xl border border-slate-700 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-sky-500 hover:shadow-xl hover:shadow-sky-500/20">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-16 w-16 rounded-full object-cover"
                    />

                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {item.name}
                      </h3>

                      <p className="text-sm text-sky-400">
                        {item.course}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex text-yellow-400">
                    {[...Array(item.rating)].map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>

                  <p className="mt-6 leading-7 text-slate-300">
                    "{item.review}"
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;