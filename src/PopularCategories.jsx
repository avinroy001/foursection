// src/components/PopularCategories.jsx
import React from "react";
import {
  LeafIcon,
  PackageIcon,
  CandyIcon,
  FlameIcon,
  AppleIcon,
  DropletIcon,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    title: "Rice",
    icon: <LeafIcon className="w-5 h-5 text-white" />,
    description:
      "Consumed daily across households, rice has steady demand, long shelf life, and potential for bulk sales.",
    label: "Steady Profit Margin",
  },
  {
    title: "Salt",
    icon: <PackageIcon className="w-5 h-5 text-white" />,
    description:
      "A necessity in every home, salt sells quickly with minimal storage needs and consistent repeat purchases.",
    label: "Low-Cost, High Volume",
  },
  {
    title: "Sugar",
    icon: <CandyIcon className="w-5 h-5 text-white" />,
    description:
      "Used in tea, desserts, and recipes, sugar has constant demand and supports combo product bundling.",
    label: "Fast-Moving Consumer Good",
  },
  {
    title: "Spices",
    icon: <FlameIcon className="w-5 h-5 text-white" />,
    description:
      "Spices like turmeric, cumin, and chili have rich cultural demand, strong pricing, and export potential.",
    label: "Very High Profit Margin",
  },
  {
    title: "Dry Fruit",
    icon: <AppleIcon className="w-5 h-5 text-white" />,
    description:
      "Almonds, cashews, and raisins appeal to health-conscious buyers and festive shoppers alike.",
    label: "Luxury Margin Potential",
  },
  {
    title: "Cooking Oil",
    icon: <DropletIcon className="w-5 h-5 text-white" />,
    description:
      "Essential for all kitchens, cooking oils are a recurring purchase with scope for brand preference.",
    label: "High Volume Sales",
  },
];

export default function PopularCategories() {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-[#003366] mb-2">
        Popular Categories To Sell Online
      </h2>
      <p className="text-center text-gray-600 mb-10">
        These categories consistently show high demand and profitability across global markets
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 flex flex-col justify-between"
          >
            <div className="mb-4">
              <div className="w-10 h-10 bg-green-600 flex items-center justify-center rounded-full mb-4">
                {cat.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{cat.title}</h3>
              <p className="text-sm text-gray-600">{cat.description}</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-sm font-semibold text-[#003366]">{cat.label}</p>
              <ArrowRight className="w-4 h-4 text-[#003366]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
