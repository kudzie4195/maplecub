export const dynamic = 'force-dynamic';

"use client";

import SignupForm from "@/components/SignupForm";
import MapleLeaf from "@/components/MapleLeaf";
import { useState } from "react";
import Image from "next/image";

const AGE_GROUPS = [
  { label: "Infants (0–12 mo)" },
  { label: "Toddlers (1–2)" },
  { label: "Preschool (2–3)" },
  { label: "Pre-K (4–5)" },
  { label: "School-age" },
];

const PROVINCES = [
  "Alberta", "BC", "Manitoba", "New Brunswick", "Newfoundland",
  "Nova Scotia", "NWT", "Nunavut", "Ontario", "PEI", "Quebec", "Saskatchewan", "Yukon",
];

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
  const [searchValue, setSearchValue] = useState("");
  const [selectedAge, setSelectedAge] = useState<string | null>(null);

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
            <a href="#daycare" className="hover:text-maple-500 transition">Daycares</a>
            <a href="#events" className="hover:text-maple-500 transition">Events</a>
            <a href="#guides" className="hover:text-maple-500 transition">Guides</a>
            <a href="#saved" className="hover:text-maple-500 transition">Saved</a>
          </nav>
          <div className="flex items-center gap-3">
            <select className="bg-cream-800 text-cream-300 text-xs px-2 py-1 rounded border border-cream-700 hover:border-cream-600 cursor-pointer">
              <option>EN</option>
              <option>FR</option>
            </select>
          </div>
        </div>
      </header>

      {/* ───────── Dark Hero ───────── */}
      <section className="bg-gradient-to-br from-cream-900 via-cream-800 to-cream-900 py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-600/20 border border-sage-600/40 text-sage-400 text-xs font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-sage-500"></span>
            LICENSED LISTINGS ONLY
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-cream-100 mb-4">
            Not every daycare<br />
            <span className="text-maple-500">across Canada is verified.</span>
          </h1>

          {/* Subheading */}
          <p className="text-cream-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Every licensed centre, dayhome, and Montessori on MapleCub is cross-checked<br />
            against your province's official childcare registry.
          </p>

          {/* Search + CTA */}
          <div className="flex flex-col md:flex-row gap-3 max-w-2xl mx-auto mb-10">
            <input
              type="text"
              placeholder="Postal code or neighbourhood…"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="flex-1 px-5 py-4 rounded-full bg-white/90 text-cream-900 placeholder-cream-400 focus:outline-none focus:ring-2 focus:ring-maple-600"
            />
            <button className="px-8 py-4 rounded-full bg-maple-600 hover:bg-maple-700 text-white font-medium transition flex items-center justify-center gap-2 whitespace-nowrap">
              Show licensed daycares
              <span>→</span>
            </button>
          </div>

          {/* Age filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {AGE_GROUPS.map((group) => (
              <button
                key={group.label}
                onClick={() => setSelectedAge(group.label)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition ${
                  selectedAge === group.label
                    ? "bg-maple-600 text-white"
                    : "bg-cream-700 text-cream-300 hover:bg-cream-600"
                }`}
              >
                {group.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Trust Strip ───────── */}
      <section className="bg-cream-100 px-6 py-6 border-b border-cream-300">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          <TrustStat icon="✓" label="Licensed listings only" value="Every centre is verified" />
          <TrustStat icon="⭐" label="Parent ratings included" value="Verified Google reviews" />
          <TrustStat icon="📍" label="13 provinces & territories" value="Updated daily" />
          <TrustStat icon="💰" label="$10/day subsidy tracker" value="Find participating centres" />
        </div>
      </section>

      {/* ───────── Feature Cards ───────── */}
      <section className="bg-cream-100 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Daycare Card */}
            <div className="rounded-2xl bg-gradient-to-br from-cream-900 to-cream-800 p-8 text-cream-100 hover:shadow-lg transition cursor-pointer">
              <div className="text-xs font-medium tracking-widest text-sage-400 mb-3">CHILDCARE</div>
              <h3 className="text-2xl font-serif font-bold mb-2">Find licensed daycares</h3>
              <p className="text-cream-300 text-sm mb-6">5,000+ verified centres across all provinces</p>
              <div className="w-10 h-10 rounded-full bg-maple-600 flex items-center justify-center text-white font-bold">→</div>
            </div>

            {/* Events Card */}
            <div className="rounded-2xl bg-gradient-to-br from-sage-600 to-sage-700 p-8 text-white hover:shadow-lg transition cursor-pointer">
              <div className="text-xs font-medium tracking-widest text-sage-200 mb-3">FAMILY ACTIVITIES</div>
              <h3 className="text-2xl font-serif font-bold mb-2">Events & activities</h3>
              <p className="text-sage-100 text-sm mb-6">Storytimes, classes, camps & weekend fun</p>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">→</div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── CTA Banner ───────── */}
      <section className="bg-gradient-to-r from-maple-600 to-maple-700 px-6 py-12">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-2">✨ Not sure where to start?</h3>
            <p className="text-maple-100">Answer 4 questions to get a personalized shortlist of the best daycares for your area.</p>
          </div>
          <button className="px-8 py-3 rounded-full bg-white text-maple-600 font-bold hover:bg-cream-100 transition whitespace-nowrap">
            Find My Match →
          </button>
        </div>
      </section>

      {/* ───────── What are you looking for ───────── */}
      <section className="bg-cream-100 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-cream-900 mb-12 text-center">What are you looking for?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <CategoryCard icon="🏡" label="Daycares" />
            <CategoryCard icon="📅" label="Things To Do" />
            <CategoryCard icon="🏕️" label="Camps" />
            <CategoryCard icon="📚" label="Guides" />
          </div>
        </div>
      </section>

      {/* ───────── This Weekend ───────── */}
      <section className="bg-white px-6 py-20 border-t border-cream-300">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-serif font-bold text-cream-900">This Weekend Near You</h2>
              <p className="text-cream-500 text-sm mt-1">Updated this week</p>
            </div>
            <a href="#" className="text-maple-600 hover:text-maple-700 font-medium text-sm">See all →</a>
          </div>

          {/* Event Cards Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {WEEKEND_EVENTS.map((event) => (
              <div key={event.id} className="rounded-xl overflow-hidden bg-cream-50 hover:shadow-md transition cursor-pointer">
                <div className="relative h-40 bg-cream-300">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
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
          <p className="text-cream-600 text-sm mb-6">Joining families across Canada</p>
          <div className="bg-white rounded-xl p-8 border border-cream-300">
            <p className="text-cream-700 italic mb-4">
              "We applied to fourteen daycares and managed a separate group chat just for weekend events. MapleCub pulls it all together — no more spreadsheets or chaos."
            </p>
            <p className="font-bold text-cream-900">Priya M. · Toronto · Mum of two</p>
          </div>
        </div>
      </section>

      {/* ───────── Signup Section ───────── */}
      <section id="signup" className="bg-gradient-to-br from-cream-900 via-cream-800 to-cream-900 px-6 py-20 relative overflow-hidden">
        {/* Watermark */}
        <div className="absolute inset-0 opacity-5">
          <MapleLeaf className="absolute top-10 right-10 w-96 h-96 text-maple-600" />
        </div>

        <div className="relative max-w-2xl mx-auto text-center">
          <p className="text-xs font-bold tracking-widest text-maple-500 mb-3">SAVE YOUR SPOT</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream-100 mb-4">Be the first family in.</h2>
          <p className="text-cream-300 mb-10">Get the launch invite the day MapleCub goes live in your province.</p>

          <div className="bg-white rounded-2xl p-8 md:p-10 max-w-md mx-auto">
            <SignupForm />
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
              <p className="text-cream-400 text-xs leading-relaxed">
                Licensed daycares, events, and family life for Canadian parents.
              </p>
            </div>
            <div>
              <p className="font-bold text-cream-100 text-xs mb-4 tracking-widest uppercase">Product</p>
              <ul className="space-y-2 text-xs text-cream-400">
                <li><a href="#" className="hover:text-maple-500 transition">Search daycares</a></li>
                <li><a href="#" className="hover:text-maple-500 transition">Find events</a></li>
                <li><a href="#" className="hover:text-maple-500 transition">Guides</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-cream-100 text-xs mb-4 tracking-widest uppercase">Company</p>
              <ul className="space-y-2 text-xs text-cream-400">
                <li><a href="#" className="hover:text-maple-500 transition">About</a></li>
                <li><a href="#" className="hover:text-maple-500 transition">Blog</a></li>
                <li><a href="#" className="hover:text-maple-500 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-cream-100 text-xs mb-4 tracking-widest uppercase">Legal</p>
              <ul className="space-y-2 text-xs text-cream-400">
                <li><a href="#" className="hover:text-maple-500 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-maple-500 transition">Terms</a></li>
                <li><a href="#" className="hover:text-maple-500 transition">PIPEDA</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-cream-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream-500">
            <span>© 2026 MapleCub. Made in Canada 🇨🇦</span>
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
