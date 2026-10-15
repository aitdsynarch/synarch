
import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxfEFPObX56cqgiylK_lRhvL-HW51H2PVhNxU3l6pHrRAN-9oVz5u4kD-BEZqXHIYw2pg/exec";

const teams = [
  "Tech Team",
  "Career & Placement",
  "Event & Operations",
  "Social Media & Communication",
  "Innovation & Outreach",
];

const initialForm = {
  name: "",
  rollNo: "",
  branch: "",
  year: "",
  team: "",
  linkedin: "",
  github: "",
  leetcode: "",
  reason: "",
};

export default function JoinForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const inputClass =
    "w-full border border-[#d8d4c9] bg-transparent px-4 py-3 text-sm text-[#242424] outline-none transition placeholder:text-[#898579] focus:border-[#f04413]";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (status === "submitting") return;

    setStatus("submitting");
    setError("");

    try {
      const hiddenForm = document.createElement("form");

      hiddenForm.method = "POST";
      hiddenForm.action = SCRIPT_URL;
      hiddenForm.target = "synarch-submit-frame";
      hiddenForm.acceptCharset = "UTF-8";
      hiddenForm.style.display = "none";

      const payload = document.createElement("input");

      payload.type = "hidden";
      payload.name = "payload";
      payload.value = JSON.stringify(form);

      hiddenForm.appendChild(payload);
      document.body.appendChild(hiddenForm);
      hiddenForm.submit();
      hiddenForm.remove();

      // The iframe cannot reliably confirm Apps Script success.
      // Keep the UI honest instead of showing a false success.
      setStatus("idle");
      setError(
        "Request sent. Please verify the submission in Google Forms Responses before submitting again."
      );
    } catch (err) {
      console.error("SYNARCH submission error:", err);

      setStatus("idle");
      setError(
        "Unable to send your application. Please try again."
      );
    }
  };

  const resetForm = () => {
    setForm(initialForm);
    setStatus("idle");
    setError("");
  };

  return (
    <section className="min-h-screen bg-[#f0eee3] px-6 py-16 text-[#242424] sm:px-12">
      <iframe
        name="synarch-submit-frame"
        title="SYNARCH application submission"
        className="hidden"
        tabIndex={-1}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#77746b]">
          <span className="mr-3 inline-block h-2 w-2 bg-[#f04413]" />
          SYNARCH / MEMBERSHIP
        </p>

        <h1 className="text-5xl font-bold tracking-[-0.06em] sm:text-7xl">
          Join the{" "}
          <span className="text-[#f04413]">community.</span>
        </h1>

        <p className="mt-5 max-w-lg text-sm leading-7 text-[#77746b]">
          Join a community of curious minds, builders, and problem
          solvers shaping a better tomorrow through technology.
        </p>

        <div className="my-10 border-y border-[#d1cec3] py-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#77746b]">
            <span className="mr-3 inline-block h-2 w-2 bg-[#f04413]" />
            Membership Application
          </p>
        </div>

        {status === "sent" ? (
          <div
            role="status"
            className="border border-[#d1cec3] bg-white/40 p-8 sm:p-12"
          >
            <CheckCircle2
              size={42}
              className="mb-5 text-green-700"
            />

            <h2 className="text-3xl font-bold tracking-tight">
              Application submitted.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#77746b]">
              Check the Google Forms Responses tab to confirm
              that your application has been saved.
            </p>

            <button
              type="button"
              onClick={resetForm}
              className="mt-8 bg-[#f04413] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#d9360b]"
            >
              Submit another application
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            acceptCharset="UTF-8"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-semibold"
                >
                  Full Name *
                </label>

                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={inputClass}
                  autoComplete="name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="rollNo"
                  className="mb-2 block text-xs font-semibold"
                >
                  College Roll Number *
                </label>

                <input
                  id="rollNo"
                  name="rollNo"
                  value={form.rollNo}
                  onChange={handleChange}
                  placeholder="Enter your roll number"
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="branch"
                  className="mb-2 block text-xs font-semibold"
                >
                  Branch *
                </label>

                <input
                  id="branch"
                  name="branch"
                  value={form.branch}
                  onChange={handleChange}
                  placeholder="e.g. Information Technology"
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="year"
                  className="mb-2 block text-xs font-semibold"
                >
                  Academic Year *
                </label>

                <select
                  id="year"
                  name="year"
                  value={form.year}
                  onChange={handleChange}
                  className={inputClass}
                  required
                >
                  <option value="">Select year</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="team"
                  className="mb-2 block text-xs font-semibold"
                >
                  Preferred Team *
                </label>

                <select
                  id="team"
                  name="team"
                  value={form.team}
                  onChange={handleChange}
                  className={inputClass}
                  required
                >
                  <option value="">Select your team</option>

                  {teams.map((team) => (
                    <option key={team} value={team}>
                      {team}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="linkedin"
                  className="mb-2 block text-xs font-semibold"
                >
                  LinkedIn Profile
                </label>

                <input
                  id="linkedin"
                  type="url"
                  name="linkedin"
                  value={form.linkedin}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/..."
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="github"
                  className="mb-2 block text-xs font-semibold"
                >
                  GitHub Profile
                </label>

                <input
                  id="github"
                  type="url"
                  name="github"
                  value={form.github}
                  onChange={handleChange}
                  placeholder="https://github.com/..."
                  className={inputClass}
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="leetcode"
                  className="mb-2 block text-xs font-semibold"
                >
                  LeetCode Profile
                </label>

                <input
                  id="leetcode"
                  type="url"
                  name="leetcode"
                  value={form.leetcode}
                  onChange={handleChange}
                  placeholder="https://leetcode.com/u/..."
                  className={inputClass}
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="reason"
                  className="mb-2 block text-xs font-semibold"
                >
                  Why do you want to join SYNARCH? *
                </label>

                <textarea
                  id="reason"
                  name="reason"
                  value={form.reason}
                  onChange={handleChange}
                  placeholder="Tell us about your interests and what you want to contribute..."
                  rows={5}
                  className={`${inputClass} resize-y`}
                  required
                />
              </div>
            </div>

            {error && (
              <p role="alert" className="text-sm text-red-600">
                <AlertCircle className="mr-2 inline" size={16} />
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="flex w-full items-center justify-between bg-[#f04413] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#d9360b] disabled:cursor-wait disabled:opacity-60"
            >
              {status === "submitting"
                ? "Submitting..."
                : "Submit Application"}

              <ArrowUpRight size={20} />
            </button>
          </form>
        )}

        <footer className="mt-14 flex flex-col gap-3 border-t border-[#d1cec3] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-bold tracking-tight">
            synarch<span className="text-[#f04413]">.</span>
          </p>

          <p className="text-[10px] uppercase tracking-[0.2em] text-[#77746b]">
            Think · Learn · Build · Connect
          </p>
        </footer>
      </div>
    </section>
  );
}
