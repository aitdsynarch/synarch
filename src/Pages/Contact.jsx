import ContactForm from "../components/ContactForm";
import React, { useState } from "react";
import Footer from "../components/Footer";

const contactDetails = [
  {
    label: "EMAIL",
    value: "inviants@gmail.com",
    href: "mailto:inviants@gmail.com",
  },
  {
    label: "LOCATION",
    value: "Kanpur, Uttar Pradesh, India",
    href: "https://maps.google.com/?q=Kanpur",
  },
  {
    label: "WORKING HOURS",
    value: "Monday – Saturday",
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
    <main className="min-h-screen overflow-hidden bg-[#101111] text-[#F1EFE5]">

    

      {/* HERO */}
      <section className="relative mx-auto flex min-h-[430px] max-w-[1400px] items-center justify-center overflow-hidden border-x border-white/10 px-6 py-24 text-center">

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

        <div className="absolute left-0 top-1/3 h-10 w-10 bg-[#F0440A]" />
        <div className="absolute right-0 bottom-1/4 h-8 w-8 bg-[#F0440A]" />

        <div className="relative z-10">
          <div className="mb-8 flex items-center justify-center gap-3 text-[10px] font-bold tracking-[4px] text-gray-400">
            <span className="h-2 w-2 bg-[#F0440A]" />
            GET IN TOUCH
          </div>

          <h1 className="text-5xl font-bold tracking-[0.02em] sm:text-6xl md:text-8xl">
            Contact<span className="text-[#F0440A]">.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-gray-400">
            Have an idea, a question or something exciting to discuss?
            We'd love to hear from you. Let's create something meaningful together.
          </p>
        </div>

        <div className="absolute bottom-6 right-8 text-[8px] tracking-[3px] text-gray-500">
          CONNECT / COLLABORATE / CREATE
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="border-t border-white/10 px-6 py-24 md:px-16 lg:px-24">

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <div>
            <div className="flex items-center gap-4 text-[10px] font-bold tracking-[3px] text-gray-400">
              <span className="text-[#F0440A]">01</span>
              CONTACT INFORMATION
            </div>

            <h2 className="mt-12 text-4xl font-bold leading-tight tracking-[-2px] md:text-6xl">
              Let's start a
              <br />
              <span className="text-[#F0440A]">conversation.</span>
            </h2>

            <p className="mt-8 max-w-md text-sm leading-8 text-gray-400">
              Whether you're interested in joining our community,
              collaborating with us, sponsoring an event or simply
              want to say hello, our team is here to connect.
            </p>

            <div className="mt-14 border-t border-white/15">
              {contactDetails.map((item, index) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-3 border-b border-white/15 py-7 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="text-[9px] font-bold tracking-[2px] text-gray-500">
                    {item.label}
                  </span>

                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-[#F1EFE5] transition hover:text-[#F0440A]"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm">{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            
          </div>

          {/* RIGHT SIDE FORM */}
          <div>
  <ContactForm />
</div>
        </div>
      </section>

      

      {/* FOOTER */}
      <Footer/>

    </main>
  );
}
