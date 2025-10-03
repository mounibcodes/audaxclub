"use client";
import React from "react";
import Image from "next/image";

export default function JoinUs() {
  return (
    <section className="relative w-full min-h-[70vh] bg-white py-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Join Us</h2>
        <p className="text-lg text-gray-600">
          Become a part of our community and join our future events, workshops,
          and activities. Fill out the form below to get started.
        </p>
      </div>

      {/* Centered F mark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1000]">
        {/* Desktop */}
        <Image
          src="/f-mark.png"
          alt="Registration not open"
          width={700}
          height={400}
          className="hidden md:block opacity-40 rotate-[-20deg] select-none"
          priority
        />
        {/* Mobile */}
        <Image
          src="/f-mark.png"
          alt="Registration not open"
          width={400}
          height={250}
          className="block md:hidden  rotate-[-20deg] select-none"
          priority
        />
      </div>

      {/* Warning text centered below stamp */}
      <div className="absolute inset-0 flex items-center justify-center z-[1100] pointer-events-none">
        <p className="text-red-700 font-bold text-2xl md:text-3xl bg-white/70 px-4 py-1 rounded-xl shadow">
          Registration not open yet
        </p>
      </div>

      {/* Form */}
      <div className="relative max-w-2xl mx-auto">
        <div className="bg-gray-50 border-4 rounded-2xl shadow-lg p-8 relative z-0">
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-left text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-red-300 focus:outline-none"
                required
              />
            </div>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-left text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-red-300 focus:outline-none"
                required
              />
            </div>
            {/* Why Join */}
            <div>
              <label
                htmlFor="reason"
                className="block text-left text-sm font-medium text-gray-700 mb-2"
              >
                Why do you want to join?
              </label>
              <textarea
                id="reason"
                rows={4}
                placeholder="Tell us why you'd like to join..."
                className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-red-300 focus:outline-none"
                required
              ></textarea>
            </div>
            {/* Submit */}
            <button
              type="submit"
              disabled
              className="w-full py-3 bg-red-300 text-white font-semibold rounded-xl shadow-md opacity-70 cursor-not-allowed"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
