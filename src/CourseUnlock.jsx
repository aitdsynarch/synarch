import { useState } from "react";
import { LockKeyhole, Unlock } from "lucide-react";

export default function CourseUnlock({ children }) {
  const [coupon, setCoupon] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");

  const handleUnlock = () => {
    if (coupon.trim() === import.meta.env.VITE_COURSE_COUPON) {
      setUnlocked(true);
      setError("");
    } else {
      setError("Invalid coupon code!");
    }
  };

  if (unlocked) return children;

  return (
    <div className="flex min-h-[70vh] items-center justify-center p-5">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-lg">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
          <LockKeyhole size={28} />
        </div>

        <h2 className="text-2xl font-bold text-slate-900">
          Course Locked
        </h2>

        <p className="mt-2 text-slate-500">
          Enter your coupon code to access this course.
        </p>

        <input
          type="text"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleUnlock()}
          placeholder="Enter coupon code"
          className="mt-6 w-full rounded-lg border px-4 py-3 outline-none focus:border-orange-500"
        />

        {error && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}

        <button
          onClick={handleUnlock}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-orange-600 px-4 py-3 font-semibold text-white hover:bg-orange-700"
        >
          <Unlock size={18} />
          Unlock Course
        </button>
      </div>
    </div>
  );
}