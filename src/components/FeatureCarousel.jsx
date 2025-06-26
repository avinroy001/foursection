// src/components/FeatureCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import imgDefault from "../assets/Property 1=Default.png";
import imgVariant2 from "../assets/Property 1=Variant2.png";
import imgVariant3 from "../assets/Property 1=Variant3.png";
import imgVariant4 from "../assets/Property 1=Variant4.png";

const features = [
  {
    title: "Analytics Dashboard",
    description: "Give sellers a real-time snapshot of their performance.",
    points: [
      "Total orders, revenue, returns",
      "Conversion rate, page views",
      "Best-selling products",
      "Customer location heatmap",
      "Weekly & monthly growth trends",
    ],
    image: imgDefault,
  },
  {
    title: "Inventory Management",
    description: "Track, manage, and update product inventories efficiently.",
    points: ["Low stock alerts", "Bulk product updates", "SKU-level tracking"],
    image: imgVariant2,
  },
  {
    title: "Customer Insights",
    description: "Understand your audience and improve engagement.",
    points: [
      "Behavioral analysis",
      "Demographic breakdown",
      "Retention tracking",
    ],
    image: imgVariant3,
  },
  {
    title: "Sales Reports",
    description: "Get detailed reports on sales trends and KPIs.",
    points: [
      "Daily/Weekly/Monthly reports",
      "Export as PDF/Excel",
      "Customizable filters",
    ],
    image: imgVariant4,
  },
];

export default function FeatureCarousel() {
  return (
    <div className="py-10 px-5 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#003366] mb-2">
        See What’s Waiting for You Inside
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Everything you need to grow your business with advanced analytics,
        automation, and optimization tools
      </p>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        className="w-full"
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <div className="bg-blue-50 p-6 rounded-xl flex flex-col md:flex-row items-center gap-6 shadow-md">
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  {feature.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 flex justify-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full max-w-md border rounded-md"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
