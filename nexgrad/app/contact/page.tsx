"use client";

import { useState } from "react";
import { FiMapPin } from "react-icons/fi";

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

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    console.log(form);

    alert("Message sent successfully!");
  };

  return (

    <section className="bg-gray-50">

      {/* TOP ADDRESS CARDS */}

      

      {/* CONTACT FORM SECTION */}

      <div className="max-w-6xl mx-auto px-6 py-24">

        {/* Heading */}

        <div className="text-center mb-16">

          <h1 className="text-5xl font-bold mb-5">
            Contact Us
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-8">
            Have questions? Our admissions team is here to help
            you find the perfect program for your career goals.
          </p>

        </div>

        <div className="max-w-7xl mx-auto px-6 pt-24 mb-5">

        <div className="grid md:grid-cols-3 gap-10">

          {/* CARD 1 */}

          <div
            className="
              relative
              bg-[#F5F5FA]
              rounded-3xl
              p-12
              text-center
              shadow-sm
              hover:shadow-xl
              transition
            "
          >

            {/* ICON */}

            <div
              className="
                absolute
                -top-10
                left-1/2
                -translate-x-1/2
                w-24
                h-24
                rounded-full
                bg-white
                shadow-md
                flex
                items-center
                justify-center
              "
            >

              <FiMapPin
                className="text-red-600"
                size={40}
              />

            </div>

            <h3
              className="
                text-4xl
                font-bold
                text-red-600
                mt-10
                mb-8
              "
            >
              Registered office
            </h3>

            <div
              className="
                text-gray-600
                text-xl
                leading-10
              "
            >

              <p>
                Sharjah Publishing City Free
              </p>

              <p>
                Zone, Al Zahya, Sharjah,
              </p>

              <p>
                United Arab Emirates
              </p>

              <div className="mt-6">
                <p>
                  <strong>Call Us:</strong>{" "}
                  +971-564636141
                </p>

                <p className="mt-2">
                  <strong>Email:</strong>{" "}
                  info@nexgrad.com
                </p>
              </div>

            </div>

          </div>

          {/* CARD 2 */}

          <div
            className="
              relative
              bg-[#F5F5FA]
              rounded-3xl
              p-12
              text-center
              shadow-sm
              hover:shadow-xl
              transition
            "
          >

            <div
              className="
                absolute
                -top-10
                left-1/2
                -translate-x-1/2
                w-24
                h-24
                rounded-full
                bg-white
                shadow-md
                flex
                items-center
                justify-center
              "
            >

              <FiMapPin
                className="text-red-600"
                size={40}
              />

            </div>

            <h3
              className="
                text-4xl
                font-bold
                text-red-600
                mt-10
                mb-8
              "
            >
              Information office
            </h3>

            <div
              className="
                text-gray-600
                text-xl
                leading-10
              "
            >

              <p>
                69, Umm Hureir Road,
              </p>

              <p>
                Oud Metha Dubai,
              </p>

              <p>
                United Arab Emirates
              </p>

              <div className="mt-6">

                <p>
                  <strong>Call Us:</strong>{" "}
                  +971-521280599
                </p>

                <p className="mt-2">
                  <strong>Email:</strong>{" "}
                  info@nexgrad.com
                </p>

              </div>

            </div>

          </div>

          {/* CARD 3 */}

          <div
            className="
              relative
              bg-[#F5F5FA]
              rounded-3xl
              p-12
              text-center
              shadow-sm
              hover:shadow-xl
              transition
            "
          >

            <div
              className="
                absolute
                -top-10
                left-1/2
                -translate-x-1/2
                w-24
                h-24
                rounded-full
                bg-white
                shadow-md
                flex
                items-center
                justify-center
              "
            >

              <FiMapPin
                className="text-red-600"
                size={40}
              />

            </div>

            <h3
              className="
                text-4xl
                font-bold
                text-red-600
                mt-10
                mb-8
              "
            >
              Branch Office
            </h3>

            <div
              className="
                text-gray-600
                text-xl
                leading-10
              "
            >

              <p>
                Tarachand Complex,
              </p>

              <p>
                East Of Kailash,
              </p>

              <p>
                New Delhi, India
              </p>

              <div className="mt-6">

                <p>
                  <strong>Call Us:</strong>{" "}
                  +91-9625836141
                </p>

                <p className="mt-2">
                  <strong>Email:</strong>{" "}
                  info@nexgrad.com
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

        {/* GRID */}

        <div className="grid lg:grid-cols-2 gap-12">

          {/* FORM */}

          <div
            className="
              bg-white
              rounded-3xl
              p-10
              shadow-lg
            "
          >

            <h2 className="text-3xl font-bold mb-8">
              Get in Touch
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="
                  w-full
                  border
                  rounded-xl
                  px-5
                  py-4
                  focus:outline-none
                  focus:ring-2
                  focus:ring-red-500
                "
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="
                  w-full
                  border
                  rounded-xl
                  px-5
                  py-4
                  focus:outline-none
                  focus:ring-2
                  focus:ring-red-500
                "
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="
                  w-full
                  border
                  rounded-xl
                  px-5
                  py-4
                  focus:outline-none
                  focus:ring-2
                  focus:ring-red-500
                "
              />

              <textarea
                name="message"
                rows={6}
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                className="
                  w-full
                  border
                  rounded-xl
                  px-5
                  py-4
                  focus:outline-none
                  focus:ring-2
                  focus:ring-red-500
                "
              />

              <button
                type="submit"
                className="
                  w-full
                  bg-red-600
                  hover:bg-red-700
                  text-white
                  py-4
                  rounded-xl
                  font-semibold
                  text-lg
                  transition
                  shadow-lg
                "
              >
                Send Message
              </button>

            </form>

          </div>

          {/* RIGHT SIDE */}

          <div
            className="
              bg-white
              rounded-3xl
              p-10
              shadow-lg
            "
          >

            <h2 className="text-3xl font-bold mb-8">
              Contact Information
            </h2>

            <div className="space-y-8 text-gray-600 text-lg">

              <div>
                <h3 className="font-semibold text-black mb-2">
                  Working Hours
                </h3>

                <p>
                  Monday - Friday:
                </p>

                <p>
                  9:00 AM - 6:00 PM
                </p>

              </div>

              <div>
                <h3 className="font-semibold text-black mb-2">
                  Admissions Support
                </h3>

                <p>
                  admissions@nexgrad.com
                </p>

              </div>

              <div>
                <h3 className="font-semibold text-black mb-2">
                  Student Support
                </h3>

                <p>
                  support@nexgrad.com
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}