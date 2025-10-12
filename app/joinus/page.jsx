"use client";
import React from "react";

export default function JoinUs() {
  return (
    <section className="relative w-full min-h-[70vh] bg-white py-16 px-6 md:px-12 flex justify-center items-start">
      <div className="max-w-2xl w-full bg-gray-50 border-4 rounded-2xl shadow-lg p-8">
        <h2 className="text-4xl font-bold mb-4 text-center">Join Our Team</h2>
        <p className="text-gray-600 mb-8 text-center">
          Fill out this form to apply — share your motivation, skills, and preferred department.
        </p>

        <form
          action="https://script.google.com/macros/s/AKfycbzuc1nnAGfUFHGW1IAum0GG4rwccr8TKLX9GlNA-gHYTOtP3rvh2IfG818aqXJnRBFTww/exec"
          method="POST"
          target="_blank"
          className="space-y-6"
        >
          <input type="text" name="name" placeholder="Full Name" required className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-300" />
          <input type="email" name="email" placeholder="Email" required className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-300" />
          <textarea name="reason" placeholder="Why do you want to join?" rows={3} required className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-300" />
          <textarea name="skills" placeholder="What can you bring to the team?" rows={3} required className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-300" />
          <select name="department" required className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-300">
            <option value="">Select Department</option>
            <option value="marketing">Marketing & Communication</option>
            <option value="design">Design & Media</option>
            <option value="tech">Tech & Development</option>
            <option value="events">Events & Organization</option>
            <option value="photography">Photography & Videography</option>
          </select>
          <textarea name="motivation" placeholder="Motivation Letter" rows={6} required className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-red-300" />

          <button type="submit" className="w-full py-3 bg-red-600 text-white rounded-xl hover:bg-red-700">
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
}
