"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

const PROVINCES = [
  { code: "AB", name: "Alberta" },
  { code: "BC", name: "British Columbia" },
  { code: "MB", name: "Manitoba" },
  { code: "NB", name: "New Brunswick" },
  { code: "NL", name: "Newfoundland and Labrador" },
  { code: "NS", name: "Nova Scotia" },
  { code: "NT", name: "Northwest Territories" },
  { code: "NU", name: "Nunavut" },
  { code: "ON", name: "Ontario" },
  { code: "PE", name: "Prince Edward Island" },
  { code: "QC", name: "Quebec" },
  { code: "SK", name: "Saskatchewan" },
  { code: "YT", name: "Yukon" },
];

type Status = "idle" | "submitting" | "success" | "error";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [province, setProvince] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    if (!name.trim() || !email.trim() || !province) {
      setStatus("error");
      setErrorMsg("Please fill out every field.");
      return;
    }

    try {
      const { error } = await supabase.from("signups").insert({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        province,
        source: "landing",
        referrer: typeof document !== "undefined" ? document.referrer || null : null,
      });

      if (error) {
        if (error.code === "23505") {
          setStatus("success"); // already signed up — treat as success
          return;
        }
        throw error;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setProvince("");
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMsg(err?.message || "Something went wrong. Try again, or email hello@maplecub.ca.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl bg-maple-50 border border-maple-200 p-5 text-center">
        <div className="w-10 h-10 rounded-full bg-maple-600 text-white mx-auto flex items-center justify-center mb-2">
          <i className="ti ti-check text-lg" aria-hidden="true" />
        </div>
        <p className="font-medium text-maple-700">You&apos;re on the list.</p>
        <p className="text-sm text-cream-700 mt-1">
          We&apos;ll email you the moment MapleCub launches in your province.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5">
      <div>
        <label htmlFor="name" className="label">YOUR NAME</label>
        <input
          id="name" type="text" required autoComplete="name"
          value={name} onChange={(e) => setName(e.target.value)}
          placeholder="Alex Tremblay" className="input"
        />
      </div>

      <div>
        <label htmlFor="email" className="label">EMAIL</label>
        <input
          id="email" type="email" required autoComplete="email"
          value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com" className="input"
        />
      </div>

      <div>
        <label htmlFor="province" className="label">PROVINCE / TERRITORY</label>
        <div className="relative">
          <select
            id="province" required value={province}
            onChange={(e) => setProvince(e.target.value)}
            className="input appearance-none pr-10"
          >
            <option value="" disabled>Select your province…</option>
            {PROVINCES.map((p) => (
              <option key={p.code} value={p.code}>{p.name}</option>
            ))}
          </select>
          <i
            className="ti ti-chevron-down absolute right-3.5 top-1/2 -translate-y-1/2 text-cream-400 pointer-events-none text-base"
            aria-hidden="true"
          />
        </div>
      </div>

      {status === "error" && (
        <p className="text-xs text-maple-700 bg-maple-50 border border-maple-200 rounded-lg px-3 py-2">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-maple-600 hover:bg-maple-700 disabled:bg-maple-300 text-white font-medium py-3 text-sm transition-colors"
      >
        {status === "submitting" ? "Reserving your spot…" : "Reserve my spot"}
        {status !== "submitting" && <i className="ti ti-arrow-right text-base" aria-hidden="true" />}
      </button>
    </form>
  );
}
