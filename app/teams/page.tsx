"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

// ─── PHOTO GUIDE ───────────────────────────────────────────────────────────────
// Drop all photos into: /public/team/
// Name format: firstname-lastname.png  (lowercase, hyphenated)
// ──────────────────────────────────────────────────────────────────────────────

const coreTeam = [
  { name: "Taher Stovewala",  position: "Chairperson",           image: "/team/taher-stovewala.png",  featured: true },
  { name: "Roshan Rawat",     position: "Vice Chairperson",      image: "/team/roshan-rawat.png",     featured: true },
  { name: "Krishna Jogi",     position: "Secretary",             image: "/team/krishna-jogi.png" },
  { name: "Navya Prabhu",     position: "Treasurer",             image: "/team/navya-prabhu.png" },
  { name: "Shriya Koul",      position: "PRO",                   image: "/team/shriya-koul.png" },
  { name: "Harshad Jagtap",   position: "CMO",                   image: "/team/harshad-jagtap.png" },
  { name: "Aditya Singh",     position: "CEO",                   image: "/team/aditya-singh.png" },
  { name: "Qasim Kharodia",   position: "CTO",                   image: "/team/qasim-kharodia.png" },
  { name: "Viren Patel",      position: "COO",                   image: "/team/viren-patel.png" },
  { name: "Saksham Sapru",    position: "Digital Media Manager", image: "/team/saksham-sapru.png" },
]

const subCoreTeam = [
  { name: "Aayush Gujarathi",  position: "Jt. Secretary",  image: "/team/aayush-gujarathi.png" },
  { name: "Anshita Vasani",    position: "Jt. Treasurer",  image: "/team/anshita-vasani.png" },
  { name: "Udhay Bhardwaj",    position: "Jt. PRO",        image: "/team/udhay-bhardwaj.png" },
  { name: "Kesa Sayyed",       position: "Jt. CTO",        image: "/team/kesa-sayyed.png" },
  { name: "Aliasghar Masood",  position: "Jt. CEO",        image: "/team/aliasghar-masood.png" },
  { name: "Rahul Jha",         position: "Jt. DMM",         image: "/team/rahul-jha.png" },
  { name: "Jayesh Jain",       position: "Jt. COO",        image: "/team/jayesh-jain.png" },
]

const adminDepts = [
  {
    key: "marketing", label: "Marketing",
    members: [
      { name: "Manthan Bhanushali", role: "Admin" },
      { name: "Jay Dayma",          role: "Jt. Admin" },
      { name: "Naitri Shah",        role: "Jt. Admin" },
    ],
  },
  {
    key: "organising", label: "Organising",
    members: [
      { name: "Virendra Jain",   role: "Admin" },
      { name: "Pragati Shinde",  role: "Admin" },
      { name: "Piyush Kolhe",    role: "Jt. Admin" },
      { name: "Vinay Bendale",   role: "Jt. Admin" },
    ],
  },
  {
    key: "pr", label: "Public Relations",
    members: [
      { name: "Sudhanshu Bhilare",  role: "Admin" },
      { name: "Ashutosh S Ramani",  role: "Jt. Admin" },
    ],
  },
  {
    key: "dcc", label: "DCC",
    members: [
      { name: "Suraj Jagtap",          role: "Admin" },
      { name: "Shashank Kiran Rathod", role: "Admin" },
      { name: "Yuval Shah",            role: "Jt. Admin" },
      { name: "Dipesh Bhanudas Dalvi", role: "Jt. Admin" },
    ],
  },
  {
    key: "tech", label: "Technical",
    members: [
      { name: "Niharika Maurya",  role: "Admin" },
      { name: "Vyom Vyas",        role: "Admin" },
      { name: "Aditya Kesarkar",  role: "Jt. Admin" },
      { name: "Vedant Sawant",    role: "Jt. Admin" },
    ],
  },
]

const memberDepts = [
  {
    label: "Technical",
    members: ["Anup Mehta","Shlok Khade","Arnav Ghag","Shrishti Tewary","Sanskruti Jadhav","Ayush Sahu","Bhakti Kote","Neha Sonawane","Alshifa Inamdar","Shivam Shukla"],
  },
  {
    label: "Organising",
    members: ["Karan Vora","Bhavy Doshi","Atharv Bagwe","Tanish Bhagat","Poojan Mehta","Riddhi Patil","Sarwar Agahria","Lakshmi Menon","Saad Shaikh","Varad Kadam","Riya Gaud","Sonia Patil","Arushi Narkar","Ahmedali Fateh","Himanshu Makwana"],
  },
  {
    label: "DCC",
    members: ["Geerija Koli","Ayushi Kosambi","Niraj Khate","Palak Barapatre"],
  },
  {
    label: "Public Relations",
    members: ["Nireeksh Bhandary","Meet","Manav Shah","Riddhi Patel","Vinisha Patel","Uday Gavhankar"],
  },
  {
    label: "Marketing",
    members: ["Prafull Ahire","Suraj Chhajed","Arnav Dumane"],
  },
]

// ─── SECTION EYEBROW ─────────────────────────────────────────────────────────
function SectionEyebrow({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#00629B]" />
      <span className="text-[#00629B] text-[10px] font-black uppercase tracking-[0.35em]">{text}</span>
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#00629B]" />
    </div>
  )
}

// ─── HOVER BEAM ───────────────────────────────────────────────────────────────
function HoverBeam({
  hovered,
  colorFrom = "#FFD700",
  colorTo   = "#00629B",
  duration  = 5,
  borderWidth = 2,
}: {
  hovered: boolean
  colorFrom?: string
  colorTo?: string
  duration?: number
  borderWidth?: number
}) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html:
        `@keyframes beam-rotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`
      }} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          padding: borderWidth,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.5s ease",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          pointerEvents: "none",
          zIndex: 10,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "-120%",
            background: `conic-gradient(
              from 0deg,
              transparent    200deg,
              ${colorFrom}   245deg,
              ${colorTo}     285deg,
              transparent    330deg
            )`,
            animation: `beam-rotate ${duration}s linear infinite`,
          }}
        />
      </div>
    </>
  )
}

// ─── FEATURED CORE CARD (Chairperson / Vice Chair) ────────────────────────────
function FeaturedCard({ member }: { member: any }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group relative bg-[#080e1c] rounded-2xl overflow-hidden p-8 flex flex-col items-center text-center h-full border transition-[border-color,box-shadow] duration-500"
      style={{
        borderColor: hovered ? "rgba(255,215,0,0.22)" : "rgba(255,255,255,0.05)",
        boxShadow: hovered
          ? "0 0 48px rgba(255,215,0,0.07), 0 0 90px rgba(0,98,155,0.07)"
          : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Photo */}
      <div className="w-44 h-44 mb-6 drop-shadow-2xl flex-shrink-0">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-contain"
          onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg" }}
        />
      </div>

      {/* Thin gold divider */}
      <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#FFD700]/60 to-transparent mb-4" />

      <p className="text-[#FFD700] text-[10px] font-black uppercase tracking-[0.35em] mb-2">
        {member.position}
      </p>
      <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
        {member.name}
      </h3>

      <HoverBeam hovered={hovered} colorFrom="#FFD700" colorTo="#00629B" duration={5} borderWidth={2.5} />
    </div>
  )
}

// ─── STANDARD CORE CARD ───────────────────────────────────────────────────────
function CoreCard({ member }: { member: any }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="group relative bg-[#0d1424] rounded-2xl overflow-hidden p-6 flex flex-col items-center text-center h-full border transition-[border-color,box-shadow] duration-500"
      style={{
        borderColor: hovered ? "rgba(0,98,155,0.35)" : "rgba(255,255,255,0.05)",
        boxShadow: hovered ? "0 0 32px rgba(0,98,155,0.09)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Photo — bigger than before */}
      <div className="w-36 h-36 mb-5 drop-shadow-lg flex-shrink-0">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-contain"
          onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg" }}
        />
      </div>

      {/* Thin blue divider */}
      <div className="w-6 h-px bg-gradient-to-r from-transparent via-[#00629B]/50 to-transparent mb-3" />

      <p className="text-[#00629B] text-[9px] font-black uppercase tracking-[0.3em] mb-1.5 group-hover:text-[#5bb8f5] transition-colors duration-300">
        {member.position}
      </p>
      <h3 className="text-base md:text-lg font-black text-white group-hover:text-[#d0e8ff] transition-colors duration-300 leading-tight">
        {member.name}
      </h3>

      <HoverBeam hovered={hovered} colorFrom="#00629B" colorTo="#FFD700" duration={4} borderWidth={1.5} />
    </div>
  )
}

// ─── POLAROID SUB CORE CARD ───────────────────────────────────────────────────
const TILTS = [-2.5, 1.8, -1.2, 2.2, -1.8]

function PolaroidCard({ member, index }: { member: any; index: number }) {
  const tilt = TILTS[index % TILTS.length]
  return (
    <div
      className="group relative cursor-pointer"
      style={{ transform: `rotate(${tilt}deg)`, transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1)" }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = "rotate(0deg) scale(1.06)" }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = `rotate(${tilt}deg) scale(1)` }}
    >
      <div className="absolute inset-0 translate-x-2 translate-y-3 bg-black/50 -z-10 group-hover:translate-y-5 group-hover:blur-sm transition-all duration-300" />
      <div className="bg-white p-2.5 pb-10 shadow-2xl" style={{ borderRadius: "2px" }}>
        <div className="bg-[#0d1120] aspect-square flex items-center justify-center overflow-hidden w-36 md:w-44">
          <img
            src={member.image}
            alt={member.name}
            className="w-[90%] h-[90%] object-contain"
            onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg" }}
          />
        </div>
        <div className="pt-3 text-center px-1">
          <p className="font-black text-gray-900 text-sm leading-snug tracking-tight">{member.name}</p>
          <p className="text-[#00629B] text-[11px] font-bold mt-0.5">{member.position}</p>
        </div>
      </div>
    </div>
  )
}

// ─── ADMINS SECTION ──────────────────────────────────────────────────────────
function AdminsSection() {
  const [active, setActive] = useState("marketing")
  const dept = adminDepts.find((d) => d.key === active)!

  return (
    <div>
      {/* Clean text tabs — no emojis, no color fills */}
      <div className="flex flex-wrap justify-center gap-1 mb-12">
        {adminDepts.map((d) => (
          <button
            key={d.key}
            onClick={() => setActive(d.key)}
            className="relative px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300"
            style={{
              color: active === d.key ? "#fff" : "rgba(255,255,255,0.3)",
            }}
          >
            {d.label}
            {/* Underline indicator */}
            <span
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-[#00629B] transition-all duration-300"
              style={{ width: active === d.key ? "100%" : "0%" }}
            />
          </button>
        ))}
      </div>

      {/* Members — clean rows */}
      <div className="max-w-xl mx-auto">
        {dept.members.map((m, i) => (
          <div
            key={i}
            className="flex items-baseline justify-between py-4 border-b border-white/6 last:border-0"
          >
            <span className="text-white font-semibold text-sm tracking-wide">{m.name}</span>
            <span className="text-white/30 text-[11px] font-medium ml-4 flex-shrink-0">{m.role}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── MEMBERS SECTION ─────────────────────────────────────────────────────────
function MembersSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {memberDepts.map((dept, i) => (
        <div key={i}>
          {/* Department label */}
          <div className="flex items-center gap-4 mb-5">
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white/40">
              {dept.label}
            </h3>
            <span className="flex-1 h-px bg-white/8" />
            <span className="text-[10px] text-white/20 font-semibold">{dept.members.length}</span>
          </div>

          {/* Names — clean two-column list */}
          <div className="grid grid-cols-2 gap-x-6">
            {dept.members.map((name, ni) => (
              <p
                key={ni}
                className="text-white/65 text-sm font-medium py-2 border-b border-white/5 last:border-0 leading-snug"
              >
                {name}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function TeamsPage() {
  const featured = coreTeam.filter((m) => m.featured)
  const rest     = coreTeam.filter((m) => !m.featured)

  return (
    <main className="min-h-screen bg-[#060b18]">
      <Navigation />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#00629B]/15 rounded-full blur-[130px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-[#FFD700]/8 rounded-full blur-[110px] animate-pulse" style={{ animationDelay: "1.2s" }} />
          <div className="absolute top-3/4 left-1/4 w-72 h-72 bg-[#004e92]/10 rounded-full blur-[90px] animate-pulse" style={{ animationDelay: "2.5s" }} />
        </div>

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div id="particles-js-teams" className="absolute inset-0 z-10" />

        <div className="relative z-20 text-center text-white max-w-5xl mx-auto px-4">
          <div className="inline-flex items-center gap-2.5 bg-white/5 backdrop-blur-sm px-5 py-2 rounded-full text-[#FFD700] font-black text-[10px] tracking-[0.3em] mb-10 border border-[#FFD700]/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] animate-pulse" />
            IEEE KJSIT · 2025–26
          </div>

          <h1 className="font-black leading-none mb-6">
            <span className="block text-5xl md:text-7xl lg:text-[96px] text-white">MEET THE</span>
            <span
              className="block text-6xl md:text-8xl lg:text-[120px]"
              style={{ background: "linear-gradient(90deg,#FFD700,#FFA500,#FFD700)", backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent" }}
            >
              TEAM
            </span>
          </h1>

          <p className="text-base md:text-lg text-white/40 max-w-xl mx-auto mb-14 px-4">
            The people behind every event, every initiative, every spark of innovation at IEEE KJSIT.
          </p>

          <div className="flex flex-col items-center gap-2">
            <span className="text-white/25 text-[10px] tracking-[0.4em] uppercase">Scroll to meet them</span>
            <span className="w-px h-14 bg-gradient-to-b from-white/25 to-transparent animate-pulse" />
          </div>
        </div>
      </section>

      {/* ── CORE TEAM ────────────────────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-[#060b18] via-[#07101f] to-[#060b18]" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00629B]/6 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <SectionEyebrow text="Leadership & Core" />
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white text-center mb-3 tracking-tight">
            CORE TEAM
          </h2>
          <p className="text-white/35 text-center mb-12 md:mb-16 max-w-md mx-auto text-sm">
            Driving the vision. Running the show.
          </p>

          {/* Featured: Chairperson + Vice */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto mb-8">
            {featured.map((m, i) => <FeaturedCard key={i} member={m} />)}
          </div>

          {/* Rest of core — 3 cols on md, bigger cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5">
            {rest.map((m, i) => <CoreCard key={i} member={m} />)}
          </div>
        </div>
      </section>

      {/* ── DIAGONAL DIVIDER ─────────────────────────────────────────────────── */}
      <div className="h-16 md:h-20 bg-[#060b18] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#111827]" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }} />
      </div>

      {/* ── SUB CORE ─────────────────────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 px-4 bg-[#111827] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#00629B]/6 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <SectionEyebrow text="Supporting Leadership" />
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white text-center mb-3 tracking-tight">
            SUB CORE
          </h2>
          <p className="text-white/35 text-center mb-16 md:mb-20 max-w-md mx-auto text-sm">
            Joint officers making things happen behind the scenes.
          </p>

          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {subCoreTeam.map((m, i) => <PolaroidCard key={i} member={m} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── DIAGONAL DIVIDER ─────────────────────────────────────────────────── */}
      <div className="h-16 md:h-20 bg-[#111827] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#060b18]" style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }} />
      </div>

      {/* ── ADMINS ───────────────────────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 px-4 bg-[#060b18]">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FFD700]/4 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto">
          <SectionEyebrow text="Department Heads" />
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white text-center mb-3 tracking-tight">
            ADMINS
          </h2>
          <p className="text-white/35 text-center mb-12 md:mb-16 max-w-md mx-auto text-sm">
            Heading each department with dedication and expertise.
          </p>
          <AdminsSection />
        </div>
      </section>

      {/* ── TEAM MEMBERS ─────────────────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 px-4 bg-[#080e1c]">
        <div className="absolute right-0 bottom-0 w-[600px] h-[400px] bg-[#00629B]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          <SectionEyebrow text="The Full Squad" />
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white text-center mb-3 tracking-tight">
            MEMBERS
          </h2>
          <p className="text-white/35 text-center mb-12 md:mb-16 max-w-md mx-auto text-sm">
            Every name behind the events and experiences you love.
          </p>
          <MembersSection />
        </div>
      </section>

      <Footer />

      <script
        dangerouslySetInnerHTML={{
          __html: `
            if (typeof particlesJS !== 'undefined') {
              particlesJS("particles-js-teams", {
                "particles": {
                  "number": { "value": 55, "density": { "enable": true, "value_area": 900 } },
                  "color": { "value": "#ffffff" },
                  "shape": { "type": "circle" },
                  "opacity": { "value": 0.25, "random": true },
                  "size": { "value": 2, "random": true },
                  "line_linked": { "enable": true, "distance": 130, "color": "#00629B", "opacity": 0.15, "width": 1 },
                  "move": { "enable": true, "speed": 1.2, "direction": "none", "out_mode": "out" }
                },
                "interactivity": {
                  "detect_on": "canvas",
                  "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
                  "modes": { "grab": { "distance": 150, "line_linked": { "opacity": 0.6 } }, "push": { "particles_nb": 3 } }
                },
                "retina_detect": true
              });
            }
          `,
        }}
      />
    </main>
  )
}
