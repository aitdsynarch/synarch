
import { useState } from "react";
import { ArrowUpRight, Upload, FileText, X } from "lucide-react";

const teams = [
  "Tech Team",
  "Career & Placement",
  "Event & Operations",
  "Social Media & Communication",
  "Innovation & Outreach",
];

export default function JoinForm() {
  const [form, setForm] = useState({
    name: "",
    rollNo: "",
    branch: "",
    year: "",
    team: "",
    linkedin: "",
    github: "",
    leetcode: "",
    reason: "",
  });

  const [resume, setResume] = useState(null);
  const [error, setError] = useState("");

  const inputClass =
    "w-full border border-[#d8d4c9] bg-transparent px-4 py-3 text-sm text-[#242424] outline-none transition placeholder:text-[#898579] focus:border-[#f04413]";

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleResumeChange = (e) => {
    const file = e.target.files?.[0];

    setError("");

    if (!file) {
      setResume(null);
      return;
    }

    if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
      setError("Please upload your resume in PDF format.");
      e.target.value = "";
      setResume(null);
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Resume size must be less than 5 MB.");
      e.target.value = "";
      setResume(null);
      return;
    }

    setResume(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!resume) {
      setError("Please upload your resume in PDF format.");
      return;
    }

    const applicationData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      applicationData.append(key, value);
    });

    applicationData.append("resume", resume);

    // Connect your backend API here to save the application.
    console.log("Application details:", form);
    console.log("Selected resume:", resume);

    alert("Form validated successfully! Connect the backend to submit your application.");

    // Do not reset the form until the backend confirms success.
  };

  return (
    <section className="min-h-screen bg-[#f0eee3] px-6 py-16 text-[#242424] sm:px-12">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#77746b]">
          <span className="mr-3 inline-block h-2 w-2 bg-[#f04413]" />
          SYNARCH / MEMBERSHIP
        </p>

        <h1 className="text-5xl font-bold tracking-[-0.06em] sm:text-7xl">
          Join the <span className="text-[#f04413]">community.</span>
        </h1>

        <p className="mt-5 max-w-lg text-sm leading-7 text-[#77746b]">
          Join a community of curious minds, builders, and problem
          solvers shaping a better tomorrow through technology.
        </p>

        {/* Section Divider */}
        <div className="my-10 border-y border-[#d1cec3] py-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#77746b]">
            <span className="mr-3 inline-block h-2 w-2 bg-[#f04413]" />
            Membership Application
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Name */}
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

            {/* Roll Number */}
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

            {/* Branch */}
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

            {/* Year */}
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
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
              </select>
            </div>

            {/* Team */}
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

            {/* LinkedIn */}
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

            {/* GitHub */}
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

            {/* LeetCode */}
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

            {/* Resume Upload */}
            <div className="sm:col-span-2">
              <label
                htmlFor="resume"
                className="mb-2 block text-xs font-semibold"
              >
                Upload Resume (PDF) *
              </label>

              <label
                htmlFor="resume"
                className="flex cursor-pointer items-center justify-between gap-4 border border-dashed border-[#d8d4c9] px-4 py-5 transition hover:border-[#f04413]"
              >
                <div className="flex min-w-0 items-center gap-3">
                  {resume ? (
                    <FileText
                      size={22}
                      className="shrink-0 text-[#f04413]"
                    />
                  ) : (
                    <Upload
                      size={22}
                      className="shrink-0 text-[#f04413]"
                    />
                  )}

                  <div className="min-w-0">
                    <p className="break-all text-sm font-semibold">
                      {resume ? resume.name : "Choose your resume"}
                    </p>
                    <p className="mt-1 text-xs text-[#898579]">
                      PDF format · Maximum 5 MB
                    </p>
                  </div>
                </div>

                <span className="shrink-0 bg-[#f04413] px-4 py-2 text-xs font-bold text-white">
                  Browse
                </span>

                <input
                  id="resume"
                  type="file"
                  accept=".pdf,application/pdf"
                  required
                  onChange={handleResumeChange}
                  className="hidden"
                />
              </label>

              {resume && (
                <button
                  type="button"
                  onClick={() => {
                    setResume(null);
                    setError("");
                    const fileInput = document.getElementById("resume");
                    if (fileInput) fileInput.value = "";
                  }}
                  className="mt-2 flex items-center gap-1 text-xs text-[#77746b] hover:text-[#f04413]"
                >
                  <X size={14} />
                  Remove resume
                </button>
              )}

              {error && (
                <p role="alert" className="mt-2 text-xs text-red-600">
                  {error}
                </p>
              )}
            </div>

            {/* Why Join */}
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

          {/* Submit */}
          <button
            type="submit"
            className="flex w-full items-center justify-between bg-[#f04413] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#d9360b]"
          >
            Submit Application
            <ArrowUpRight size={20} />
          </button>
        </form>

        {/* Footer */}
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
