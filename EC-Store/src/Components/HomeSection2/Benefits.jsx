import React from "react";
import {
  Truck,
  PackageCheck,
  BadgeCheck,
  LockKeyhole,
} from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "FAST DELIVERY",
    description: "Quick & safe delivery",
  },
  {
    icon: PackageCheck,
    title: "EASY RETURNS",
    description: "Within 15 days",
  },
  {
    icon: BadgeCheck,
    title: "QUALITY ASSURED",
    description: "Best fashion, best quality",
  },
  {
    icon: LockKeyhole,
    title: "SECURE PAYMENT",
    description: "100% secure checkout",
  },
];

const Benefits = () => {
  return (
    <section className="w-full bg-[#E8E7E3] border-t border-gray-300 border-b">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 md:py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 md:gap-8">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-3 sm:gap-5"
              >
                <Icon
                  size={36}
                  className="sm:w-12 sm:h-12 shrink-0"
                  strokeWidth={1.4}
                />

                <div>
                  <h3 className="text-xs sm:text-sm font-semibold tracking-wide">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;