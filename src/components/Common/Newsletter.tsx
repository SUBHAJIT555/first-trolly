"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema, type NewsletterFormData } from "@/lib/schemas";

const Newsletter = () => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const formData = new FormData();
      formData.append("formType", "newsletter");
      formData.append("email", data.email);

      const res = await fetch("/api/submit.php", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to subscribe");
      }

      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="border-t-2 border-ink/10 bg-cream py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-brutal-lg border-2 border-ink bg-sunny-yellow px-5 py-10 shadow-brutal sm:px-8 sm:py-12 lg:px-12 lg:py-14">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <span className="inline-flex rounded-brutal border-2 border-ink bg-white px-4 py-1.5 text-2xs font-extrabold uppercase tracking-widest text-ink shadow-brutal-sm">
              Newsletter
            </span>

            <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-ink sm:mt-6 sm:text-[1.75rem] lg:text-3xl">
              Don&apos;t Miss Out Latest Trends &amp; Offers
            </h2>

            <p className="mt-3 max-w-lg text-sm font-medium text-dark-3 sm:text-base">
              Register to receive news about the latest offers &amp; discount
              codes
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 w-full max-w-xl sm:mt-10"
            >
              <label
                htmlFor="newsletter-email"
                className="mb-2 block text-left text-sm font-bold text-ink sm:text-base"
              >
                Enter your email
              </label>

              <input
                id="newsletter-email"
                type="email"
                {...register("email")}
                placeholder="you@example.com"
                className={`w-full rounded-brutal border-2 bg-white px-4 py-3.5 text-sm font-medium text-ink outline-none shadow-brutal-sm transition-all duration-150 placeholder:text-dark-5 focus:translate-x-0.5 focus:translate-y-0.5 focus:shadow-none sm:px-5 sm:text-base ${
                  errors.email
                    ? "border-red"
                    : "border-ink focus:border-ink"
                }`}
              />
              {errors.email && (
                <p className="mt-2 text-left text-sm font-bold text-red">
                  {errors.email.message}
                </p>
              )}

              <div className="mt-6 flex flex-col items-center gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex min-w-[200px] items-center justify-center rounded-brutal border-2 border-ink bg-green-600 px-10 py-3.5 text-sm font-extrabold uppercase tracking-wide text-white shadow-brutal transition-all duration-150 hover:translate-x-0.5 hover:translate-y-0.5 hover:bg-green-700 hover:shadow-none active:shadow-none disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-x-0 disabled:hover:translate-y-0 sm:min-w-[220px] sm:px-12 sm:text-base"
                >
                  {submitting
                    ? "Subscribing..."
                    : success
                      ? "Subscribed!"
                      : "Subscribe"}
                </button>

                {error && (
                  <p className="rounded-brutal border-2 border-ink bg-red-light-4 px-4 py-2 text-sm font-bold text-red-dark">
                    {error}
                  </p>
                )}
                {success && (
                  <p className="rounded-brutal border-2 border-ink bg-mint-pop px-4 py-2 text-sm font-extrabold text-ink">
                    Thank you for subscribing!
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
