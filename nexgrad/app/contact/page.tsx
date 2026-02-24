"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent successfully!");
  };

  return (
    <section className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-semibold mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? Our admissions team is here to help you find the
            perfect program for your career goals.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT – Form */}
          <div className="bg-white rounded-2xl shadow-md p-10 border border-gray-100">
            <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="+971 50 123 4567"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="How can we help you?"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition shadow-md"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* RIGHT – Contact Info */}
          <div className="bg-white rounded-2xl shadow-md p-10 border border-gray-100">
            <h2 className="text-xl font-semibold mb-8">
              Contact Information
            </h2>

            <div className="space-y-6 text-gray-600">

              <div>
                <h3 className="font-medium text-gray-800 mb-1">
                  Main Office
                </h3>
                <p>123 Business Bay</p>
                <p>Dubai, UAE</p>
              </div>

              <div>
                <h3 className="font-medium text-gray-800 mb-1">
                  Phone
                </h3>
                <p>+971 50 123 4567</p>
              </div>

              <div>
                <h3 className="font-medium text-gray-800 mb-1">
                  Email
                </h3>
                <p>info@nexgrad.com</p>
              </div>

              <div>
                <h3 className="font-medium text-gray-800 mb-1">
                  Business Hours
                </h3>
                <p>Mon - Fri: 9:00 AM - 6:00 PM GST</p>
                <p>Sat: 10:00 AM - 2:00 PM GST</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}