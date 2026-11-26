import React, { useState } from "react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdpuiw3vj5xhN5Ax-mdqz3FzK8R22QJuOdRRKIUEB75bWSNkg/formResponse";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("loading");

    const formData = new FormData();

    formData.append("entry.1586529885", form.name);
    formData.append("entry.1043178558", form.email);
    formData.append("entry.80672962", form.subject);
    formData.append("entry.369906501", form.message);

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setStatus("success");

      setForm({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="border border-white/15 bg-[#151616] p-7 md:p-10">

      {/* FORM HEADER */}
      <div className="mb-10 flex items-center justify-between">
        <div>
          <span className="text-[9px] font-bold tracking-[3px] text-[#F0440A]">
            02 / SEND A MESSAGE
          </span>

          <h3 className="mt-4 text-2xl font-bold text-white">
            We'd love to hear from you.
          </h3>
        </div>

        <span className="hidden text-3xl text-[#F0440A] sm:block">
          ↗
        </span>
      </div>

      {/* SUCCESS MESSAGE */}
      {status === "success" && (
        <div className="mb-6 border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-400">
          Thank you! Your message has been submitted successfully.
        </div>
      )}

      {/* ERROR MESSAGE */}
      {status === "error" && (
        <div className="mb-6 border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
          Something went wrong. Please try again.
        </div>
      )}

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
            required
            className="w-full border-b border-white/20 bg-[#151616] py-4 text-sm text-gray-300 outline-none focus:border-[#F0440A]"
          >
            <option>General Inquiry</option>
            <option>Join INVIANTS</option>
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
          disabled={status === "loading"}
          className="group flex w-full items-center justify-between bg-[#F1EFE5] px-6 py-5 text-[#101111] transition hover:bg-[#F0440A] hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          <span className="text-[10px] font-extrabold tracking-[2px]">
            {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
          </span>

          <span className="text-xl transition group-hover:translate-x-1">
            {status === "loading" ? "..." : "↗"}
          </span>
        </button>

      </form>
    </div>
  );
}