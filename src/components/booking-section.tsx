"use client";

import { CalendlyWidget } from "./calendly-widget";

export const BookingSection = () => {
  return (
    <section className="bg-[#f0f0f0] text-black py-24 sm:py-32" id="booking">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <CalendlyWidget />
        </div>
      </div>
    </section>
  );
};