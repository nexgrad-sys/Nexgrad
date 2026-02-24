"use client";

import { useState } from "react";
import Stepper from "./Stepper";

import PersonalInfo from "./steps/PersonalInfo";
import Academic from "./steps/Academic";
import Professional from "./steps/Professional";
import Program from "./steps/Program";
import Documents from "./steps/Documents";
import Review from "./steps/Review";

export default function ApplyWizard() {
  const [step, setStep] = useState(0);

  const steps = [
    <PersonalInfo />,
    <Academic />,
    <Professional />,
    <Program />,
    <Documents />,
    <Review />,
  ];

  return (
    <div className="max-w-6xl mx-auto px-6">

      {/* TOP TITLE */}
      <div className="text-center mb-12">
        <span className="bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm">
          Guided Application Process
        </span>

        <h1 className="text-3xl font-semibold mt-4">
          Apply to NexGrad
        </h1>

        <p className="text-gray-500 mt-2">
          Start your journey to global higher education.
        </p>
      </div>

      <Stepper step={step} />

      {/* ACTIVE STEP */}
      <div className="mt-10">
        {steps[step]}
      </div>

      {/* NAVIGATION */}
      <div className="flex justify-between mt-8">
        <button
          disabled={step === 0}
          onClick={() => setStep(step - 1)}
          className="btn-outline"
        >
          Back
        </button>

        <button
          onClick={() => setStep(step + 1)}
          className="btn-primary"
        >
          {step === steps.length - 1 ? "Submit Application" : "Continue"}
        </button>
      </div>
    </div>
  );
}
