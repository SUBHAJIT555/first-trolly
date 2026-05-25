"use client";

import React, { useMemo } from "react";
import { motion, useReducedMotion } from "motion/react";
import testimonialsData from "./testimonialsData";
import {
  TestimonialsColumn,
  type ScrollingTestimonial,
} from "./TestimonialsColumn";

const toScrollingTestimonials = (): ScrollingTestimonial[] =>
  testimonialsData.map((item, index) => ({
    text: item.review,
    image: item.authorImg,
    name: item.authorName,
    role: item.authorRole,
    rating: item.rating,
    themeIndex: index,
  }));

const Testimonials = () => {
  const prefersReducedMotion = useReducedMotion();
  const testimonials = useMemo(() => toScrollingTestimonials(), []);

  const firstColumn = testimonials.slice(0, 2);
  const secondColumn = testimonials.slice(2, 4);
  const thirdColumn = testimonials.slice(4, 6);

  return (
    <section className="relative overflow-hidden border-t-2 border-ink/10 bg-cream py-12 sm:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-[540px] flex-col items-center justify-center text-center"
        >
          <span className="mb-3 inline-flex rounded-brutal border-2 border-ink bg-mint-pop px-3 py-1 text-2xs font-bold uppercase tracking-widest text-ink shadow-brutal-sm">
            Testimonials
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-[1.75rem] lg:text-3xl">
            What our customers say
          </h2>
          <p className="mt-3 text-sm font-medium text-dark-4 sm:text-base">
            Real feedback from shoppers who trust us for quality, value, and
            fast delivery.
          </p>
        </motion.div>

        <div className="mx-auto mt-10 flex max-h-[740px] justify-center gap-5 overflow-hidden sm:mt-12 sm:gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
