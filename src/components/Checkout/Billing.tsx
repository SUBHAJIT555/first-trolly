import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { QuoteFormData } from "@/lib/schemas";

interface BillingProps {
  register: UseFormRegister<QuoteFormData>;
  errors: FieldErrors<QuoteFormData>;
}

const inputClass = (hasError: boolean) =>
  `w-full rounded-brutal border-2 bg-white px-4 py-3 text-sm font-medium text-ink outline-none placeholder:text-dark-5 focus:translate-x-0.5 focus:translate-y-0.5 ${
    hasError ? "border-red-dark" : "border-ink"
  }`;

const labelClass = "mb-2 block text-sm font-bold text-ink";

const Billing = ({ register, errors }: BillingProps) => {
  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-brutal-lg border-2 border-ink bg-white shadow-brutal-sm">
        <div className="border-b-2 border-ink bg-sunny-yellow px-5 py-4 sm:px-6">
          <p className="text-2xs font-bold uppercase tracking-widest text-ink">
            Contact &amp; delivery
          </p>
          <h3 className="mt-1 text-lg font-extrabold text-ink">Billing details</h3>
          <p className="mt-1 text-sm font-medium text-dark-3">
            Fields marked with <span className="text-red-dark">*</span> are required
          </p>
        </div>

        <div className="space-y-5 p-5 sm:p-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className={labelClass}>
                First Name <span className="text-red-dark">*</span>
              </label>
              <input
                type="text"
                {...register("firstName")}
                id="firstName"
                placeholder="First name"
                className={inputClass(!!errors.firstName)}
              />
              {errors.firstName && (
                <p className="mt-1.5 text-sm font-medium text-red-dark">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="lastName" className={labelClass}>
                Last Name <span className="text-red-dark">*</span>
              </label>
              <input
                type="text"
                {...register("lastName")}
                id="lastName"
                placeholder="Last name"
                className={inputClass(!!errors.lastName)}
              />
              {errors.lastName && (
                <p className="mt-1.5 text-sm font-medium text-red-dark">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="address" className={labelClass}>
              Street Address <span className="text-red-dark">*</span>
            </label>
            <input
              type="text"
              {...register("address")}
              id="address"
              placeholder="Street address"
              className={inputClass(!!errors.address)}
            />
            {errors.address && (
              <p className="mt-1.5 text-sm font-medium text-red-dark">
                {errors.address.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="town" className={labelClass}>
                Town / City <span className="text-red-dark">*</span>
              </label>
              <input
                type="text"
                {...register("town")}
                id="town"
                placeholder="Town / City"
                className={inputClass(!!errors.town)}
              />
              {errors.town && (
                <p className="mt-1.5 text-sm font-medium text-red-dark">
                  {errors.town.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="state" className={labelClass}>
                State / Country
              </label>
              <input
                type="text"
                {...register("state")}
                id="state"
                placeholder="State / Country"
                className={inputClass(false)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="postcode" className={labelClass}>
              Postcode / ZIP
            </label>
            <input
              type="text"
              {...register("postcode")}
              id="postcode"
              placeholder="Postcode / ZIP"
              className={inputClass(false)}
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="email" className={labelClass}>
                Email <span className="text-red-dark">*</span>
              </label>
              <input
                type="email"
                {...register("email")}
                id="email"
                placeholder="Email"
                className={inputClass(!!errors.email)}
              />
              {errors.email && (
                <p className="mt-1.5 text-sm font-medium text-red-dark">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone <span className="text-red-dark">*</span>
              </label>
              <input
                type="text"
                {...register("phone")}
                id="phone"
                placeholder="Phone"
                className={inputClass(!!errors.phone)}
              />
              {errors.phone && (
                <p className="mt-1.5 text-sm font-medium text-red-dark">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
