import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialData } from "../../data/data";
import { Pagination } from "swiper/modules";
import "./testimonials.css";

function TestimonialCards({ name, info, icon, testimonial }) {
  return (
    <div className="testimonialContainer p-10 border-b-2 rounded-xl w-full flex flex-col justify-center items-center shadow-lg bg-gray-400 bg-clip-padding bg-opacity-10  backdrop-filter backdrop-blur-sm">
      <img
        src={icon}
        alt=""
        className="w-40 rounded-full border-4 border-secondary mb-2"
      />
      <h1 className="text-xl font-bold">{name}</h1>
      <h3 className="font-bold text-secondary mb-2">{info}</h3>
      <p className="text-justify">{testimonial}</p>
    </div>
  );
}

export default function Testimonial() {
  return (
    <div className="my-24">
      <h1 className="heading text-center my-8">Valuable Testimonials</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={40}
        centeredSlides={true}
        grabCursor={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="w-[80%]"
      >
        {testimonialData.map((item) => {
          const { name, detail, picture, testimonial } = item;
          return (
            <SwiperSlide className="flex justify-center items-center">
              <TestimonialCards
                name={name}
                info={detail}
                icon={picture}
                testimonial={testimonial}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
