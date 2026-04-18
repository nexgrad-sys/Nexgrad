"use client";

import { useState } from "react";

export default function FeePaymentPage() {
  const [category, setCategory] = useState("");
  const [method, setMethod] = useState("");
  const [amount, setAmount] = useState(0);

  const feeCategories = [
    { name: "Tuition Fees", desc: "Full or partial tuition payment" },
    { name: "Registration Fee", desc: "One-time enrollment fee" },
    { name: "Examination Fee", desc: "Assessment and certification" },
    { name: "Library & Resources", desc: "Digital library access" },
    { name: "Graduation Fee", desc: "Degree conferment and ceremony" },
  ];

  const paymentMethods = [
    "Credit / Debit Card",
    "Bank Transfer",
    "Digital Wallet",
  ];

  const processingFee = amount > 0 ? amount * 0.02 : 0;
  const total = amount + processingFee;

  return (
    <section className="py-20 bg-[#f6f8fb]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block border border-red-500 text-red-600 px-4 py-1 rounded-full text-sm mb-4">
            🔒 Secure Payment Gateway
          </div>

          <h1 className="text-4xl font-semibold text-gray-900">
            Quick <span className="text-red-600">Fee Payment</span>
          </h1>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Make secure payments for tuition, registration, and other academic
            fees using our encrypted payment system
          </p>
        </div>

        {/* Security Info */}
        <div className="bg-white border rounded-xl p-6 mb-10 flex gap-4">
          <span className="text-red-600 text-xl">🔒</span>
          <div>
            <h3 className="font-semibold text-gray-800">
              Your Security is Our Priority
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              All transactions are secured with 256-bit SSL encryption. We comply
              with PCI DSS standards and never store your complete card details.
            </p>
          </div>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT FORM */}
          <div className="lg:col-span-2 bg-white rounded-xl p-8 border">

            <h2 className="text-xl font-semibold mb-6">
              Payment Details
            </h2>

            {/* Fee Categories */}
            <p className="text-sm font-medium mb-3">
              Select Fee Category *
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {feeCategories.map((item, i) => (
                <div
                  key={i}
                  onClick={() => setCategory(item.name)}
                  className={`border rounded-lg p-4 cursor-pointer transition ${
                    category === item.name
                      ? "border-red-500 bg-red-50"
                      : "hover:border-gray-400"
                  }`}
                >
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Inputs */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <input
                placeholder="Student ID"
                className="border p-3 rounded-md"
              />
              <input
                placeholder="Full Name"
                className="border p-3 rounded-md"
              />
              <input
                placeholder="Email"
                className="border p-3 rounded-md"
              />
              <input
                placeholder="Phone"
                className="border p-3 rounded-md"
              />
            </div>

            {/* Amount */}
            <input
              type="number"
              placeholder="Amount (AED)"
              className="border p-3 rounded-md w-full mb-6"
              onChange={(e) => setAmount(Number(e.target.value))}
            />

            {/* Payment Method */}
            <p className="text-sm font-medium mb-3">
              Payment Method *
            </p>

            <div className="space-y-3 mb-6">
              {paymentMethods.map((item, i) => (
                <div
                  key={i}
                  onClick={() => setMethod(item)}
                  className={`border rounded-lg p-4 cursor-pointer ${
                    method === item
                      ? "border-red-500 bg-red-50"
                      : ""
                  }`}
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2 mb-6">
              <input type="checkbox" />
              <p className="text-sm text-gray-600">
                I agree to the payment terms and confirm details are accurate.
              </p>
            </div>

            {/* Button */}
            <button className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition">
              🔒 Process Secure Payment
            </button>
          </div>

          {/* RIGHT SUMMARY */}
          <div className="bg-gradient-to-b from-red-600 to-red-700 text-white rounded-xl p-6 h-fit sticky top-10">

            <h3 className="text-lg font-semibold mb-6">
              Transaction Summary
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Fee Category:</span>
                <span>{category || "Not selected"}</span>
              </div>

              <div className="flex justify-between">
                <span>Payment Method:</span>
                <span>{method || "Not selected"}</span>
              </div>

              <hr className="border-white/30 my-3" />

              <div className="flex justify-between">
                <span>Amount:</span>
                <span>AED {amount.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Processing Fee:</span>
                <span>AED {processingFee.toFixed(2)}</span>
              </div>

              <hr className="border-white/30 my-3" />

              <div className="flex justify-between font-semibold text-lg">
                <span>Total:</span>
                <span>AED {total.toFixed(2)}</span>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-white/10 p-4 rounded-lg mt-6 text-sm">
              You will receive a confirmation email after payment.
            </div>

            {/* Security List */}
            <ul className="mt-6 space-y-2 text-sm">
              <li>✔ 256-bit SSL Encryption</li>
              <li>✔ PCI DSS Compliant</li>
              <li>✔ Secure Payment Gateway</li>
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-white border rounded-xl p-8 mt-16 text-center">
          <h3 className="text-xl font-semibold mb-2">
            Need Help with Payment?
          </h3>
          <p className="text-gray-600 mb-6">
            Our finance team is available to assist you
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg">
              Email Finance Team
            </button>
            <button className="border border-red-600 text-red-600 px-6 py-3 rounded-lg">
              Call Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}