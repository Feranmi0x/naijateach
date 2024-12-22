"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "John Doe",
    feedback: "This service is amazing! It exceeded all my expectations.",
    position: "NaijaTeach User",
  },
  {
    name: "Jane Smith",
    feedback: "Fantastic experience! The team was very supportive throughout.",
    position: "NaijaTeach PRO user",
  },
  {
    name: "Michael Brown",
    feedback: "I highly recommend this. Truly a game changer!",
    position: "NaijaTeach User",
  },
];

const TestimonialSlider = () => {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 10000, disableOnInteraction: false }} // Swipes every 10 seconds
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            
            <div className="testimonial-card border-2 p-4 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-center mb-6">Feedback</h2>
              <p className="text-lg italic text-gray-700 mb-4">{testimonial.feedback}</p>
              <p className="text-sm font-bold text-gray-800">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.position}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;