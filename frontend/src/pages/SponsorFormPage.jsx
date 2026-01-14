import React, { useState } from "react";
import Header from "../components/Header";

const SponsorFormPage = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    company: "",
    jobTitle: "",
    phone: "",
    interests: "",
    remarks: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const gradientBtn =
    "bg-[linear-gradient(228deg,rgba(232,139,88,1)_0%,rgba(227,88,119,1)_51%,rgba(225,57,62,1)_100%)] text-white";

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Invalid email";
    if (!form.company.trim()) e.company = "Company name is required";
    if (!form.jobTitle.trim()) e.jobTitle = "Job title is required";
    if (!form.phone.toString().trim()) e.phone = "Phone number is required";
    else if (!/^[0-9()+\-\s]{6,20}$/.test(form.phone))
      e.phone = "Invalid phone number";
    return e;
  };

  const handleChange = (key) => (e) => {
    setForm((s) => ({ ...s, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length === 0) {
      // For now just simulate submit
      console.log("Sponsor form submitted:", form);
      setSubmitted(true);
    }
  };

  return (
    <>
      <Header className="px-8" />
      <section className="flex flex-col items-center w-full min-h-[70vh] px-4 py-12 bg-[#f2f2f2]">
        <div className="w-full max-w-3xl">
          <h1 className="text-4xl md:text-5xl text-[#111111]">
            {String("Become a sponsor")
              .split(" ")
              .map((word, wi) => {
                const first = word.charAt(0) || "";
                const rest = word.slice(1) || "";
                return (
                  <span key={wi} className="inline-block mr-2">
                    <span className="font-samarkan">{first}</span>
                    <span className="ff-inria">{rest}</span>
                  </span>
                );
              })}
          </h1>
          <p className="ff-inter mt-3 text-neutral-700">
            Please fill out the form below and our team will get back to you
            with sponsorship options.
          </p>

          {submitted ? (
            <div className="mt-8 p-6 rounded-lg bg-[#f9f9f9] shadow">
              <h2 className="font-semibold text-lg">Thank you</h2>
              <p className="mt-2 text-neutral-700">
                We received your interest. We'll be in touch shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 bg-[#f9f9f9] p-6 rounded-lg shadow"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="flex flex-col">
                  <span className="text-sm ff-inter mb-1">Full name *</span>
                  <input
                    className={`p-3 border rounded ${
                      errors.fullName ? "border-red-400" : "border-neutral-200"
                    }`}
                    value={form.fullName}
                    onChange={handleChange("fullName")}
                    type="text"
                    placeholder="Your full name"
                  />
                  {errors.fullName && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.fullName}
                    </span>
                  )}
                </label>

                <label className="flex flex-col">
                  <span className="text-sm ff-inter mb-1">Email address *</span>
                  <input
                    className={`p-3 border rounded ${
                      errors.email ? "border-red-400" : "border-neutral-200"
                    }`}
                    value={form.email}
                    onChange={handleChange("email")}
                    type="email"
                    placeholder="you@company.com"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.email}
                    </span>
                  )}
                </label>

                <label className="flex flex-col">
                  <span className="text-sm ff-inter mb-1">Company name *</span>
                  <input
                    className={`p-3 border rounded ${
                      errors.company ? "border-red-400" : "border-neutral-200"
                    }`}
                    value={form.company}
                    onChange={handleChange("company")}
                    type="text"
                    placeholder="Company"
                  />
                  {errors.company && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.company}
                    </span>
                  )}
                </label>

                <label className="flex flex-col">
                  <span className="text-sm ff-inter mb-1">Job Title *</span>
                  <input
                    className={`p-3 border rounded ${
                      errors.jobTitle ? "border-red-400" : "border-neutral-200"
                    }`}
                    value={form.jobTitle}
                    onChange={handleChange("jobTitle")}
                    type="text"
                    placeholder="Your job title"
                  />
                  {errors.jobTitle && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.jobTitle}
                    </span>
                  )}
                </label>

                <label className="flex flex-col md:col-span-2">
                  <span className="text-sm ff-inter mb-1">Phone number *</span>
                  <input
                    className={`p-3 border rounded ${
                      errors.phone ? "border-red-400" : "border-neutral-200"
                    }`}
                    value={form.phone}
                    onChange={handleChange("phone")}
                    type="tel"
                    placeholder="+91 99999 99999"
                    inputMode="tel"
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.phone}
                    </span>
                  )}
                </label>

                <label className="flex flex-col md:col-span-2">
                  <span className="text-sm ff-inter mb-1">
                    Areas of Interest for sponsorship
                  </span>
                  <textarea
                    className="p-3 border rounded border-neutral-200 min-h-[120px]"
                    value={form.interests}
                    onChange={handleChange("interests")}
                    placeholder="E.g., workshop sponsorship, stage branding, exhibition, etc."
                  />
                </label>

                <label className="flex flex-col md:col-span-2">
                  <span className="text-sm ff-inter mb-1">
                    Additional Remarks
                  </span>
                  <textarea
                    className="p-3 border rounded border-neutral-200 min-h-[120px]"
                    value={form.remarks}
                    onChange={handleChange("remarks")}
                    placeholder="Anything else you'd like us to know"
                  />
                </label>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <button
                  type="submit"
                  className={`px-6 py-3 rounded-[120px] ff-inter font-medium ${gradientBtn}`}
                >
                  Submit
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setForm({
                      fullName: "",
                      email: "",
                      company: "",
                      jobTitle: "",
                      phone: "",
                      interests: "",
                      remarks: "",
                    })
                  }
                  className="px-6 py-3 rounded-[120px] bg-[#f9f9f9] border border-neutral-200"
                >
                  Reset
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default SponsorFormPage;
