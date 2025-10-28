import React from "react";
import { motion } from "framer-motion";
import { Mail, Globe, Users, Rocket } from "lucide-react";

// Single-file React component for The OMNIVERSAL Empire
// Tailwind CSS classes assumed to be available in the host project
// Uses framer-motion for animations and lucide-react for icons

export default function OmniversalWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-gray-900 text-white antialiased">
      {/* Top navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/6">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-4">
            <svg width="56" height="56" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl">
              <defs>
                <linearGradient id="metalA" x1="0" x2="1">
                  <stop offset="0%" stopColor="#d6d6d9" />
                  <stop offset="50%" stopColor="#8a8b8f" />
                  <stop offset="100%" stopColor="#0f1113" />
                </linearGradient>
                <linearGradient id="glow" x1="0" x2="1">
                  <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
                </linearGradient>
                <filter id="bevel" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2" result="b" />
                  <feSpecularLighting in="b" surfaceScale="4" specularConstant="0.6" specularExponent="20" lighting-color="#fff">
                    <fePointLight x="-5000" y="-10000" z="20000" />
                  </feSpecularLighting>
                </filter>
              </defs>

              <g filter="url(#bevel)">
                <circle cx="100" cy="100" r="86" fill="url(#metalA)" />
                <path d="M40 110 C70 40, 130 40, 160 110 C130 140, 70 140, 40 110 Z" fill="url(#glow)" opacity="0.22" />
                <text x="100" y="115" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="30" fill="#ffffff">OMN</text>
              </g>
            </svg>
            <div className="leading-tight">
              <div className="text-xl font-extrabold tracking-tight">THE OMNIVERSAL EMPIRE</div>
              <div className="text-xs text-white/50 -mt-1">Imperium • Dominance • Infinity</div>
            </div>
          </a>

          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#about" className="hover:text-white/90 text-white/70">About</a>
            <a href="#domains" className="hover:text-white/90 text-white/70">Domains</a>
            <a href="#team" className="hover:text-white/90 text-white/70">Legates</a>
            <a href="#media" className="hover:text-white/90 text-white/70">Media</a>
            <a href="#contact" className="hover:text-white/90 text-white/70">Contact</a>
            <a href="#" className="ml-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-2xl shadow-lg font-semibold">Enlist</a>
          </nav>

          <div className="md:hidden">
            <button aria-label="open menu" className="p-2 rounded-md bg-white/6">≡</button>
          </div>
        </div>
      </header>

      <main id="home">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
                WE ARE OMNIVERSAL —<br />EMPIRE OF THE NEXT AGE
              </motion.h1>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-6 max-w-2xl text-lg text-white/80">
                Mastery of enterprise, media, technology and sovereignty. We architect dominance across domains — commerce, intelligence, culture and frontier tech.
              </motion.p>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="mt-8 flex gap-4">
                <a href="#domains" className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-white/12 to-white/6 border border-white/8 backdrop-blur-sm font-semibold">Explore Domains</a>
                <a href="#contact" className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white text-black font-semibold">Convene with OMNI</a>
              </motion.div>

              <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
                <div className="p-4 bg-white/3 rounded-lg">
                  <div className="text-sm text-white/60">Territories</div>
                  <div className="text-2xl font-bold">37+</div>
                </div>
                <div className="p-4 bg-white/3 rounded-lg">
                  <div className="text-sm text-white/60">Subsidiaries</div>
                  <div className="text-2xl font-bold">142</div>
                </div>
                <div className="p-4 bg-white/3 rounded-lg">
                  <div className="text-sm text-white/60">Assets (Est.)</div>
                  <div className="text-2xl font-bold">$500B+</div>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full max-w-lg">
              <div className="relative rounded-3xl p-6 bg-gradient-to-br from-white/3 to-white/6 border border-white/6 shadow-2xl">
                <div className="absolute -right-12 -top-24 opacity-30 blur-xl transform rotate-12"> 
                  <svg width="320" height="320" viewBox="0 0 320 320"><defs><linearGradient id="g1" x1="0" x2="1"><stop offset="0%" stopColor="#7c3aed" stopOpacity="0.4"/><stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4"/></linearGradient></defs><circle cx="160" cy="160" r="120" fill="url(#g1)"/></svg>
                </div>

                <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }} className="relative z-10">
                  <div className="text-sm text-white/60">Featured Initiative</div>
                  <div className="mt-3 text-2xl font-bold">Project NEXUS — Sovereign Infrastructure</div>
                  <div className="mt-4 text-sm text-white/70">A sovereign compute and logistics backbone for OMNIVERSAL ventures — secure, redundant, unstoppable.</div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="p-3 bg-white/4 rounded-lg text-center">
                      <div className="text-xs text-white/60">Nodes</div>
                      <div className="font-semibold text-lg">18,000+</div>
                    </div>
                    <div className="p-3 bg-white/4 rounded-lg text-center">
                      <div className="text-xs text-white/60">Latency</div>
                      <div className="font-semibold text-lg"><1ms</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* decorative stars */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <svg className="w-full h-full opacity-20" preserveAspectRatio="none" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="1">
                <circle cx="120" cy="80" r="1" />
                <circle cx="400" cy="40" r="1" />
                <circle cx="600" cy="220" r="1" />
                <circle cx="740" cy="120" r="1" />
                <circle cx="200" cy="360" r="1" />
                <circle cx="520" cy="420" r="1" />
              </g>
            </svg>
          </div>
        </section>

        {/* About */}
        <section id="about" className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold">About OMNIVERSAL</h2>
              <p className="mt-4 text-white/80 max-w-xl">OMNIVERSAL is an integrated empire of enterprises, culture and sovereign infrastructure. We craft systems that scale — from capital formation to cultural influence and frontier research.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-gradient-to-b from-white/3 to-white/4">
                  <div className="text-sm text-white/60">Strategy</div>
                  <div className="text-lg font-semibold">Cross-domain orchestration</div>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-b from-white/3 to-white/4">
                  <div className="text-sm text-white/60">Capital</div>
                  <div className="text-lg font-semibold">Private & Sovereign</div>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-b from-white/3 to-white/4">
                  <div className="text-sm text-white/60">R&D</div>
                  <div className="text-lg font-semibold">Frontier Tech Labs</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl p-6 bg-white/4 border border-white/6">
                <h3 className="font-semibold">OMNIVERSAL Principles</h3>
                <ul className="mt-3 text-white/80 list-disc pl-5 space-y-2">
                  <li>Design for resilience, scale and autonomy.</li>
                  <li>Own and secure critical infrastructure.</li>
                  <li>Expand influence through cultural production.</li>
                </ul>
              </div>

              <div className="rounded-2xl p-6 bg-white/4 border border-white/6">
                <h3 className="font-semibold">Flagship Programs</h3>
                <ol className="mt-3 text-white/80 list-decimal pl-5 space-y-2">
                  <li>Project NEXUS — Sovereign Compute & Logistics</li>
                  <li>Imperial Media — Culture & Narrative Control</li>
                  <li>OmniCapital — Strategic Acquisition & Investments</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Domains / Services */}
        <section id="domains" className="bg-gradient-to-b from-black/0 to-white/2 border-t border-white/6">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-extrabold">Domains of OMNIVERSAL Dominance</h2>
            <p className="mt-3 text-white/70 max-w-2xl">We operate where systemic leverage exists. Each domain is engineered to multiply influence across the whole.
            </p>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <Card title="Sovereign Infrastructure" icon={<Rocket size={20} />}>
                Secure compute, logistics, and satellite assets enabling resilient operations.
              </Card>
              <Card title="Media & Narrative" icon={<Globe size={20} />}>
                Content engines and culture labs that shape opinion and cultural capital.
              </Card>
              <Card title="Capital & Acquisitions" icon={<Users size={20} />}>
                Strategic capital formation and targeted acquisitions across sectors.
              </Card>
            </div>
          </div>
        </section>

        {/* Team / Legates */}
        <section id="team" className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-extrabold">Legates of the Empire</h2>
          <p className="mt-3 text-white/70 max-w-2xl">Selected leaders and operating officers across OMNIVERSAL's verticals.</p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <PersonCard name="Aurelia Voss" role="Supreme Strategist" blurb="Architect of cross-domain strategy and Director of Imperial Expansion." />
            <PersonCard name="Dmitri Kael" role="Head of NEXUS" blurb="Leads sovereign infrastructure, secure compute and logistics." />
            <PersonCard name="M. Reyes" role="Media Czar" blurb="Oversees content studios and narrative initiatives globally." />
          </div>
        </section>

        {/* Media */}
        <section id="media" className="bg-white/3 border-t border-white/6">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-extrabold text-white">Media & Archive</h2>
            <p className="mt-3 text-white/70 max-w-2xl">Curated releases, manifestos and audiovisual productions.
            </p>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <MediaCard title="Imperial Address — Q3" excerpt="A vision for the next phase of expansion." />
              <MediaCard title="NEXUS — Technical Brief" excerpt="Redacted public summary of infrastructure plans." />
              <MediaCard title="Omni Studios — Short Film" excerpt="A cinematic statement of identity and influence." />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-extrabold">Convene with OMNIVERSAL</h2>
              <p className="mt-3 text-white/70">To propose partnerships or request audience, submit a formal communiqué. High-priority communications receive bespoke handling.
              </p>

              <div className="mt-6 space-y-4">
                <ContactMethod icon={<Mail size={20} />} label="Summons & Correspondence" detail="imperial@omniversal.imperium" />
                <ContactMethod icon={<Globe size={20} />} label="Press & Media" detail="media@omniversal.imperium" />
              </div>
            </div>

            <div>
              <form className="rounded-2xl p-6 bg-white/4 border border-white/6 space-y-4">
                <label className="block">
                  <span className="text-sm text-white/70">Name</span>
                  <input className="mt-1 block w-full rounded-md bg-transparent border border-white/6 px-3 py-2 outline-none" placeholder="Full name or title" />
                </label>
                <label className="block">
                  <span className="text-sm text-white/70">Organization</span>
                  <input className="mt-1 block w-full rounded-md bg-transparent border border-white/6 px-3 py-2 outline-none" placeholder="Organization" />
                </label>
                <label className="block">
                  <span className="text-sm text-white/70">Message</span>
                  <textarea className="mt-1 block w-full rounded-md bg-transparent border border-white/6 px-3 py-2 outline-none" rows={4} placeholder="State purpose and urgency"></textarea>
                </label>
                <div className="flex items-center justify-between">
                  <button type="submit" className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg font-semibold">Send Communiqué</button>
                  <a className="text-sm text-white/60">Protocol: Encrypted delivery available upon request.</a>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/6 mt-12">
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-white/60">© {new Date().getFullYear()} The OMNIVERSAL Empire — All rights reserved.</div>
            <div className="flex gap-4 items-center text-white/60">
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}


/* --- Reusable subcomponents below --- */

function Card({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl p-6 bg-white/4 border border-white/6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-white/6 rounded-md">{icon}</div>
        <div>
          <div className="text-sm text-white/60">{title}</div>
        </div>
      </div>
      <div className="mt-4 text-white/70">{children}</div>
    </div>
  );
}

function PersonCard({ name, role, blurb }: { name: string; role: string; blurb: string }) {
  return (
    <div className="rounded-2xl p-6 bg-white/4 border border-white/6">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-white/6 to-white/4 flex items-center justify-center font-bold">{name.split(" ")[0].slice(0,1)}</div>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-white/60">{role}</div>
        </div>
      </div>
      <div className="mt-4 text-white/80">{blurb}</div>
      <div className="mt-4 flex gap-2 text-white/60 text-sm">
        <a className="hover:underline">Profile</a>
        <a className="hover:underline">Transcript</a>
      </div>
    </div>
  );
}

function MediaCard({ title, excerpt }: { title: string; excerpt: string }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-white/6 to-white/4 border border-white/6">
      <div className="p-6">
        <div className="font-semibold">{title}</div>
        <div className="mt-2 text-white/70">{excerpt}</div>
      </div>
      <div className="p-4 border-t border-white/6 text-sm text-white/60">Release • Classified</div>
    </div>
  );
}

function ContactMethod({ icon, label, detail }: { icon: React.ReactNode; label: string; detail: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 bg-white/6 rounded-md">{icon}</div>
      <div>
        <div className="text-sm text-white/70">{label}</div>
        <div className="text-white/90 font-mono text-sm mt-1">{detail}</div>
      </div>
    </div>
  );
}
