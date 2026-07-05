"use client";

import SignupForm from "@/components/SignupForm";
import MapleLeaf from "@/components/MapleLeaf";
import { useState } from "react";
import Image from "next/image";
import { copy, type Lang } from "./copy";

const WEEKEND_EVENTS = [
  {
    id: 1,
    title: "Storytimes & Reading Circle",
    location: "Toronto Public Library",
    category: "Free",
    badge: "Education",
    image: "https://images.unsplash.com/photo-1507842872343-583f20270319?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Youth Learn to Swim Lessons",
    location: "Mill Park Aquatics",
    category: "Camps",
    badge: "Ages 3+",
    image: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Tennis — Wills Park Swim & Tennis",
    location: "Wills Park",
    category: "Classes",
    badge: "Free",
    image: "https://images.unsplash.com/photo-1554224311-beee415c15b7?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "Broadway at Candlelight Theatre Show",
    location: "Broadway Arts Centre",
    category: "Entertainment",
    badge: "Family",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
  },
];

export default function HomePage() {
  const [lang, setLang] = useState<Lang>("en");
  const [searchValue, setSearchValue] = useState("");
  const [selectedAge, setSelectedAge] = useState<string | null>(null);
  const t = copy[lang];

  return (
    <main className="min-h-screen bg-cream-900 text-cream-900">
      {/* ───────── Header ───────── */}
      <header className="sticky top-0 z-40 bg-cream-900/95 backdrop-blur border-b border-cream-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5">
            <MapleLeaf className="w-6 h-6 text-maple-600" />
            <span className="font-medium text-[17px] tracking-tight text-cream-100">MapleCub</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-cream-300">
            <a href="#daycare" className="hover:text-maple-500 transition">{t.nav.daycares}</a>
            <a href="#events" className="hover:text-maple-500 transition">{t.nav.events}</a>
            <a href="#guides" className="hover:text-maple-500 transition">{t.nav.guides}</a>
            <a href="#saved" className="hover:text-maple-500 transition">{t.nav.saved}</a>
          </nav>
          <div className="flex items-center gap-3">
            <select
              aria-label="Language"
              value={lang}
              onChange={(e) => setLang(e.target.value as Lang)}
              className="bg-cream-800 text-cream-300 text-xs px-2 py-1 rounded border border-cream-700 hover:border-cream-600 cursor-pointer"
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
            </select>
          </div>
        </div>
      </header>

      {/* ───────── Dark Hero ───────── */}
      <section className="bg-gradient-to-br from-cream-900 via-cream-800 to-cream-900 py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-600/20 border border-sage-600/40 text-sage-400 text-xs font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-sage-500"></span>
            {t.hero.badge}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-cream-100 mb-4">
            {t.hero.titleA}<br />
            <span className="text-maple-500">{t.hero.titleB}</span>
          </h1>

          <p className="text-cream-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            {t.hero.subhead}
          </p>

          <div className="flex flex-col md:flex-row gap-3 max-w-2xl mx-auto mb-10">
            <input
              type="text"
              placeholder={t.hero.searchPlaceholder}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="flex-1 px-5 py-4 rounded-full bg-white/90 text-cream-900 placeholder-cream-400 focus:outline-none focus:ring-2 focus:ring-maple-600"
            />
            <button className="px-8 py-4 rounded-full bg-maple-600 hover:bg-maple-700 text-white font-medium transition flex items-center justify-center gap-2 whitespace-nowrap">
              {t.hero.searchCta}
              <span>→</span>
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {t.ageGroups.map((label) => (
              <button
                key={label}
                onClick={() => setSelectedAge(label)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition ${
                  selectedAge === label
                    ? "bg-maple-600 text-white"
                    : "bg-cream-700 text-cream-300 hover:bg-cream-600"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Trust Strip ───────── */}
      <section className="bg-cream-100 px-6 py-6 border-b border-cream-300">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <TrustStat icon="✓" label={t.trust.licensed.label} value={t.trust.licensed.value} />
          <TrustStat icon="⭐" label={t.trust.ratings.label} value={t.trust.ratings.value} />
          <TrustStat icon="📍" label={t.trust.coverage.label} value={t.trust.coverage.value} />
          <TrustStat icon="💰" label={t.trust.subsidy.label} value={t.trust.subsidy.value} />
        </div>
      </section>

      {/* ───────── Feature Cards ───────── */}
      <section className="bg-cream-100 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-gradient-to-br from-cream-900 to-cream-800 p-8 text-cream-100 hover:shadow-lg transition cursor-pointer">
              <div className="text-xs font-medium tracking-widest text-sage-400 mb-3">{t.cards.childcareTag}</div>
              <h3 className="text-2xl font-serif font-bold mb-2">{t.cards.childcareTitle}</h3>
              <p className="text-cream-300 text-sm mb-6">{t.cards.childcareDesc}</p>
              <div className="w-10 h-10 rounded-full bg-maple-600 flex items-center justify-center text-white font-bold">→</div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-sage-600 to-sage-700 p-8 text-white hover:shadow-lg transition cursor-pointer">
              <div className="text-xs font-medium tracking-widest text-sage-200 mb-3">{t.cards.eventsTag}</div>
              <h3 className="text-2xl font-serif font-bold mb-2">{t.cards.eventsTitle}</h3>
              <p className="text-sage-100 text-sm mb-6">{t.cards.eventsDesc}</p>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">→</div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── CTA Banner ───────── */}
      <section className="bg-gradient-to-r from-maple-600 to-maple-700 px-6 py-12">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-2">{t.matchCta.title}</h3>
            <p className="text-maple-100">{t.matchCta.desc}</p>
          </div>
          <button className="px-8 py-3 rounded-full bg-white text-maple-600 font-bold hover:bg-cream-100 transition whitespace-nowrap">
            {t.matchCta.button}
          </button>
        </div>
      </section>

      {/* ───────── What are you looking for ───────── */}
      <section className="bg-cream-100 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-cream-900 mb-12 text-center">{t.categories.heading}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <CategoryCard icon="🏡" label={t.categories.daycares} />
            <CategoryCard icon="📅" label={t.categories.thingsToDo} />
            <CategoryCard icon="🏕️" label={t.categories.camps} />
            <CategoryCard icon="📚" label={t.categories.guides} />
          </div>
        </div>
      </section>

      {/* ───────── This Weekend ───────── */}
      <section className="bg-white px-6 py-20 border-t border-cream-300">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-serif font-bold text-cream-900">{t.weekend.heading}</h2>
              <p className="text-cream-500 text-sm mt-1">{t.weekend.sub}</p>
            </div>
            <a href="#" className="text-maple-600 hover:text-maple-700 font-medium text-sm">{t.weekend.seeAll}</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {WEEKEND_EVENTS.map((event) => (
              <div key={event.id} className="rounded-xl overflow-hidden bg-cream-50 hover:shadow-md transition cursor-pointer">
                <div className="relative h-40 bg-cream-300">
                  <Image src={event.image} alt={event.title} fill className="object-cover" />
                  <div className="absolute top-3 left-3 inline-flex gap-1">
                    <span className="px-2 py-1 rounded-full bg-sage-600 text-white text-[10px] font-bold">{event.category}</span>
                    {event.badge && <span className="px-2 py-1 rounded-full bg-maple-600 text-white text-[10px] font-bold">{event.badge}</span>}
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs font-bold text-maple-600 mb-2">SAT 15</p>
                  <h4 className="font-bold text-cream-900 text-sm mb-2 line-clamp-2">{event.title}</h4>
                  <p className="text-xs text-cream-600">{event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Testimonial ───────── */}
      <section className="bg-cream-50 px-6 py-20 border-t border-cream-300">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center -space-x-3 mb-8">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-maple-600 to-amber-400"
              />
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-white bg-cream-300 flex items-center justify-center text-xs font-bold text-cream-700">
              +412
            </div>
          </div>
          <p className="text-cream-600 text-sm mb-6">{t.testimonial.joining}</p>
          <div className="bg-white rounded-xl p-8 border border-cream-300">
            <p className="text-cream-700 italic mb-4">&ldquo;{t.testimonial.quote}&rdquo;</p>
            <p className="font-bold text-cream-900">{t.testimonial.attribution}</p>
          </div>
        </div>
      </section>

      {/* ───────── Signup Section ───────── */}
      <section id="signup" className="bg-gradient-to-br from-cream-900 via-cream-800 to-cream-900 px-6 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <MapleLeaf className="absolute top-10 right-10 w-96 h-96 text-maple-600" />
        </div>

        <div className="relative max-w-2xl mx-auto text-center">
          <p className="text-xs font-bold tracking-widest text-maple-500 mb-3">{t.signup.tag}</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream-100 mb-4">{t.signup.title}</h2>
          <p className="text-cream-300 mb-10">{t.signup.desc}</p>

          <div className="bg-white rounded-2xl p-8 md:p-10 max-w-md mx-auto">
            <SignupForm lang={lang} />
          </div>
        </div>
      </section>

      {/* ───────── Footer ───────── */}
      <footer className="bg-cream-900 border-t border-cream-700 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <MapleLeaf className="w-5 h-5 text-maple-600" />
                <span className="font-bold text-cream-100">MapleCub</span>
              </div>
              <p className="text-cream-400 text-xs leading-relaxed">{t.footer.tagline}</p>
            </div>
            <div>
              <p className="font-bold text-cream-100 text-xs mb-4 tracking-widest uppercase">{t.footer.product}</p>
              <ul className="space-y-2 text-xs text-cream-400">
                {t.footer.productLinks.map((l) => (
                  <li key={l}><a href="#" className="hover:text-maple-500 transition">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-cream-100 text-xs mb-4 tracking-widest uppercase">{t.footer.company}</p>
              <ul className="space-y-2 text-xs text-cream-400">
                {t.footer.companyLinks.map((l) => (
                  <li key={l}><a href="#" className="hover:text-maple-500 transition">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-cream-100 text-xs mb-4 tracking-widest uppercase">{t.footer.legal}</p>
              <ul className="space-y-2 text-xs text-cream-400">
                {t.footer.legalLinks.map((l) => (
                  <li key={l}><a href="#" className="hover:text-maple-500 transition">{l}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-cream-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream-500">
            <span>{t.footer.madeIn}</span>
            <span>hello@maplecub.ca · maplecub.ca</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ───────── Components ───────── */
function TrustStat({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="text-2xl mb-2">{icon}</div>
      <p className="text-xs font-bold text-cream-900 mb-0.5">{label}</p>
      <p className="text-xs text-cream-600">{value}</p>
    </div>
  );
}

function CategoryCard({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="rounded-2xl bg-white border border-cream-300 p-6 text-center hover:border-maple-600 hover:shadow-md transition cursor-pointer">
      <div className="text-4xl mb-4">{icon}</div>
      <p className="font-bold text-cream-900">{label}</p>
    </div>
  );
}
