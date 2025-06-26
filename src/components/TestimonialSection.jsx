import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Star } from "lucide-react";
import img from "../assets/img.png";

const testimonials = [
  {
    name: "Saurabh Kumar",
    role: "Home Decor Seller",
    location: "Mumbai, Maharashtra",
    growth: "500% Growth",
    message:
      "Within 6 months, my home decor business grew from ₹50,000 to ₹5 lakhs monthly revenue. The platform’s tools and support made all the difference.",
  },
  {
    name: "Anjali Verma",
    role: "Organic Foods Seller",
    location: "Delhi, India",
    growth: "350% Growth",
    message:
      "I was able to reach a wider audience and boost my brand awareness. My revenue more than tripled within 4 months.",
  },
  {
    name: "Rohit Sharma",
    role: "Fashion Retailer",
    location: "Bangalore, Karnataka",
    growth: "420% Growth",
    message:
      "The onboarding process was seamless and the analytics helped me make informed decisions. Amazing experience!",
  },
  {
    name: "Meena Patil",
    role: "Handicrafts Entrepreneur",
    location: "Pune, Maharashtra",
    growth: "600% Growth",
    message:
      "I saw a massive jump in both visibility and profits. Great platform for small businesses.",
  },
  {
    name: "Arjun Das",
    role: "Electronics Seller",
    location: "Hyderabad, Telangana",
    growth: "480% Growth",
    message:
      "Customer support is top-notch. It felt like they were genuinely invested in my success.",
  },
  {
    name: "Nisha Gupta",
    role: "Beauty Products",
    location: "Lucknow, Uttar Pradesh",
    growth: "300% Growth",
    message:
      "I never imagined online selling could be this easy. Very user-friendly and profitable!",
  },
];

const stats = [
  { title: "50K+", subtitle: "Active Sellers" },
  { title: "₹500Cr+", subtitle: "Revenue Generated" },
  { title: "4.9/5", subtitle: "Average Rating" },
  { title: "95%", subtitle: "Success Rate" },
];

export default function TestimonialSection() {
  return (
    <div className="px-4 py-10 md:py-20 font-sans max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#003366] mb-4">
        Real Sellers, Real Stories
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Discover how thousands of sellers have transformed their businesses and achieved remarkable growth with our platform
      </p>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1536: { slidesPerView: 5 },
        }}
        className="mb-10"
      >
        {testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-[#e6f4ff] rounded-xl p-4 shadow-md h-full flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-yellow-400 mb-3">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
              </div>
              <p className="text-sm text-gray-700 mb-4">"{item.message}"</p>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>{item.location}</span>
                <span className="bg-[#003366] text-white px-2 py-1 rounded text-xs">
                  {item.growth}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <h4 className="text-2xl md:text-3xl font-bold text-[#003366]">{stat.title}</h4>
            <p className="text-sm text-gray-600">{stat.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
