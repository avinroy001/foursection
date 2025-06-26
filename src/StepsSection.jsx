import { Mail, Lightbulb, Clock, Search, TrendingUp } from "lucide-react";

const steps = [
  {
    title: "SIGN UP",
    icon: <Mail className="text-white w-6 h-6" />,
    description: "Seller starts registration on the platform.",
    color: "bg-green-600",
    mt: "md:mt-0",
  },
  {
    title: "DETAILS",
    icon: <Lightbulb className="text-white w-6 h-6" />,
    description: "Submit business name, address, and contact.",
    color: "bg-blue-900",
    mt: "md:mt-6",
  },
  {
    title: "COMPLAINCE",
    icon: <Clock className="text-white w-6 h-6" />,
    description: "Provide bank and compliance-related document details.",
    color: "bg-green-600",
    mt: "md:mt-12",
  },
  {
    title: "ONBOARD",
    icon: <Search className="text-white w-6 h-6" />,
    description: "Add brand info and trademark proof documents.",
    color: "bg-blue-900",
    mt: "md:mt-18",
  },
  {
    title: "VERIFY",
    icon: <TrendingUp className="text-white w-6 h-6" />,
    description: "Upload and verify documents for seller activation.",
    color: "bg-green-600",
    mt: "md:mt-24",
  },
];

export default function StepsSection() {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-[#003366] mb-2">
        Get started with 5 most simplified steps
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Follow our streamlined process to launch your project quickly and efficiently. No complex setup required.
      </p>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 relative">
        {steps.map((step, index) => (
          <div key={index} className={`flex flex-col items-center w-full md:w-1/5 ${step.mt}`}>
            <div className={`w-14 h-14 rounded-full flex items-center justify-center ${step.color}`}>
              {step.icon}
            </div>
            <div className={`w-full text-center px-3 py-3 mt-3 rounded-md ${step.color} text-white font-bold`}>
              {step.title}
            </div>
            <p className="text-center text-sm text-gray-600 mt-2 px-2">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
