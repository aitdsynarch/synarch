
import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = `
Name: ${form.name}
Email: ${form.email}
Subject: ${form.subject}

Message:
${form.message}
    `;

    window.location.href = `mailto:synarch.club@gmail.com?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="border border-white/15 bg-[#151616] p-7 md:p-10">

      {/* FORM HEADER */}
      <div className="mb-10 flex items-center justify-between">
        <div>
          <span className="text-[9px] font-bold tracking-[3px] text-[#F0440A]">
            02 / SEND A MESSAGE
          </span>

          <h3 className="mt-4 text-2xl font-bold">
            We'd love to hear from you.
          </h3>
        </div>

        <span className="hidden text-3xl text-[#F0440A] sm:block">
          ↗
        </span>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-7">

        {/* NAME */}
        <div>
          <label className="mb-3 block text-[9px] font-bold tracking-[2px] text-gray-400">
            YOUR NAME *
          </label>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
            className="w-full border-b border-white/20 bg-transparent py-4 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-[#F0440A]"
          />
        </div>

        {/* EMAIL */}
        <div>
          <label className="mb-3 block text-[9px] font-bold tracking-[2px] text-gray-400">
            EMAIL ADDRESS *
          </label>

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className="w-full border-b border-white/20 bg-transparent py-4 text-sm text-white outline-none placeholder:text-gray-600 transition focus:border-[#F0440A]"
          />
        </div>

        {/* SUBJECT */}
        <div>
          <label className="mb-3 block text-[9px] font-bold tracking-[2px] text-gray-400">
            SUBJECT *
          </label>

          <select
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full border-b border-white/20 bg-[#151616] py-4 text-sm text-gray-300 outline-none focus:border-[#F0440A]"
          >
            <option>General Inquiry</option>
            <option>Join SYNARCH</option>
            <option>Sponsorship</option>
            <option>Collaboration</option>
            <option>Event Partnership</option>
            <option>Other</option>
          </select>
        </div>

        {/* MESSAGE */}
        <div>
          <label className="mb-3 block text-[9px] font-bold tracking-[2px] text-gray-400">
            YOUR MESSAGE *
          </label>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Tell us what's on your mind..."
            className="w-full resize-none border-b border-white/20 bg-transparent py-4 text-sm text-white outline-none placeholder:text-gray-600 focus:border-[#F0440A]"
          />
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="group flex w-full items-center justify-between bg-[#F1EFE5] px-6 py-5 text-[#101111] transition hover:bg-[#F0440A] hover:text-white"
        >
          <span className="text-[10px] font-extrabold tracking-[2px]">
            SEND MESSAGE
          </span>

          <span className="text-xl transition group-hover:translate-x-1">
            ↗
          </span>
        </button>

      </form>
    </div>
  );
}
