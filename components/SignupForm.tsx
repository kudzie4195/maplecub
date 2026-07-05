"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { copy, type Lang } from "@/app/copy";

const PROVINCES = [
  { code: "AB", en: "Alberta", fr: "Alberta" },
  { code: "BC", en: "British Columbia", fr: "Colombie-Britannique" },
  { code: "MB", en: "Manitoba", fr: "Manitoba" },
  { code: "NB", en: "New Brunswick", fr: "Nouveau-Brunswick" },
  { code: "NL", en: "Newfoundland and Labrador", fr: "Terre-Neuve-et-Labrador" },
  { code: "NS", en: "Nova Scotia", fr: "Nouvelle-Écosse" },
  { code: "NT", en: "Northwest Territories", fr: "Territoires du Nord-Ouest" },
  { code: "NU", en: "Nunavut", fr: "Nunavut" },
  { code: "ON", en: "Ontario", fr: "Ontario" },
  { code: "PE", en: "Prince Edward Island", fr: "Île-du-Prince-Édouard" },
  { code: "QC", en: "Quebec", fr: "Québec" },
  { code: "SK", en: "Saskatchewan", fr: "Saskatchewan" },
  { code: "YT", en: "Yukon", fr: "Yukon" },
];

type Status = "idle" | "submitting" | "success" | "error";

export default function SignupForm({ lang = "en" }: { lang?: Lang }) {
  const t = copy[lang].form;
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
      setErrorMsg(t.errorFill);
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
      setErrorMsg(err?.message || t.errorGeneric);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl bg-maple-50 border border-maple-200 p-5 text-center">
        <div className="w-10 h-10 rounded-full bg-maple-600 text-white mx-auto flex items-center justify-center mb-2">
          <i className="ti ti-check text-lg" aria-hidden="true" />
        </div>
        <p className="font-medium text-maple-700">{t.successTitle}</p>
        <p className="text-sm text-cream-700 mt-1">{t.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3.5">
      <div>
        <label htmlFor="name" className="label">{t.name}</label>
        <input
          id="name" type="text" required autoComplete="name"
          value={name} onChange={(e) => setName(e.target.value)}
          placeholder={t.namePlaceholder} className="input"
        />
      </div>

      <div>
        <label htmlFor="email" className="label">{t.email}</label>
        <input
          id="email" type="email" required autoComplete="email"
          value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder={t.emailPlaceholder} className="input"
        />
      </div>

      <div>
        <label htmlFor="province" className="label">{t.province}</label>
        <div className="relative">
          <select
            id="province" required value={province}
            onChange={(e) => setProvince(e.target.value)}
            className="input appearance-none pr-10"
          >
            <option value="" disabled>{t.provincePlaceholder}</option>
            {PROVINCES.map((p) => (
              <option key={p.code} value={p.code}>{lang === "fr" ? p.fr : p.en}</option>
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
        {status === "submitting" ? t.submitting : t.submit}
        {status !== "submitting" && <i className="ti ti-arrow-right text-base" aria-hidden="true" />}
      </button>
    </form>
  );
}
