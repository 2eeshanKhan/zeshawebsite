"use client";

import { useState } from "react";
import { site } from "./module/site";
import PhoneSlider from "./module/PhoneSlider";

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Features", "#features"],
  ["How it works", "#how-it-works"],
];

const features = [
  { icon: "♡", title: "Discover people", text: "Explore profiles and find people you would love to get to know." },
  { icon: "✦", title: "Make a connection", text: "Take the first step and connect with someone who catches your attention." },
  { icon: "☏", title: "Start a conversation", text: "Turn a new connection into a conversation and get to know each other." },
  { icon: "⌖", title: "Explore your way", text: "Make your ZESHA experience your own as you meet new people." },
];

const steps = [
  { number: "01", title: "Create your profile", text: "Introduce yourself and show the community who you are." },
  { number: "02", title: "Discover connections", text: "Explore profiles and find people you'd like to know." },
  { number: "03", title: "Say hello", text: "Start a conversation and see where it goes." },
];

function PlayIcon() {
  return <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true"><path fill="#34A853" d="M3 2.5 14 12 3 21.5Z"/><path fill="#4285F4" d="m3 2.5 13.5 7.3-3.5 2.2Z"/><path fill="#EA4335" d="m13 12 3.5 2.2L3 21.5Z"/><path fill="#FBBC04" d="m16.5 9.8 4.1 2.2-4.1 2.2L13 12Z"/></svg>;
}

function DownloadButton({ compact = false }: { compact?: boolean }) {
  return (
    <a href={site.playStoreUrl} target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 rounded-full bg-[#211b1a] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#3b2a26] ${compact ? "px-4 py-2.5" : "px-6 py-4"}`}>
      <PlayIcon />
      <span className="text-left leading-tight">
        <span className="block text-[10px] uppercase tracking-wider text-white/70">Get it on</span>
        <span className={`block font-semibold ${compact ? "text-sm" : "text-base"}`}>Google Play</span>
      </span>
    </a>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[390px]">
      <div className="absolute inset-10 rounded-full bg-[#f76b45]/25 blur-[70px]" />
      <div className="relative mx-auto w-[270px] rounded-[42px] border-[8px] border-[#292321] bg-[#fffaf7] p-3 shadow-[0_35px_80px_rgba(95,47,32,0.25)] sm:w-[290px]">
        <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-[#292321]" />
        <div className="flex items-center justify-between px-1 pb-3">
          <span className="text-xl font-extrabold tracking-[-0.08em] text-[#f76b45]">ZESHA</span>
          <span className="text-xs text-[#8d7770]">♡  ✧</span>
        </div>
        <div className="relative overflow-hidden rounded-[27px] bg-gradient-to-br from-[#ffd9c9] via-[#f9b59d] to-[#e96c50] p-3">
          <div className="flex h-[300px] flex-col justify-between rounded-[20px] border border-white/40 bg-[radial-gradient(circle_at_50%_30%,#ffe7d9_0%,#f3a58d_48%,#c85d4b_100%)] p-4">
            <div className="flex justify-between text-xs font-semibold text-[#6d3329]"><span>Discover</span><span>•••</span></div>
            <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full border-[7px] border-white/50 bg-gradient-to-br from-[#f8d0b8] to-[#b85c4a] shadow-xl">
              <span className="text-7xl">☺</span>
            </div>
            <div className="rounded-2xl bg-white/90 p-3 backdrop-blur">
              <p className="text-lg font-bold text-[#2b211e]">Your next hello</p>
              <p className="text-xs text-[#76645e]">A new connection could be one tap away.</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-around py-4 text-xl text-[#8e7770]"><span>⌂</span><span className="text-[#f76b45]">♡</span><span>✉</span><span>☺</span></div>
        <div className="mx-auto h-1 w-20 rounded-full bg-[#292321]" />
      </div>
      <div className="absolute -left-1 top-24 rounded-2xl border border-white bg-white/95 px-4 py-3 shadow-xl sm:-left-8">
        <p className="text-xs font-semibold text-[#f76b45]">A little hello</p><p className="text-sm font-bold">Could mean a lot ♡</p>
      </div>
      <div className="absolute -right-1 bottom-20 rounded-2xl border border-white bg-white/95 px-4 py-3 shadow-xl sm:-right-8">
        <p className="text-xs text-[#8a7770]">Your story</p><p className="text-sm font-bold">Starts with a chat ✦</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState("Discover people");

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffaf7] text-[#201b1a]">
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-[#fff0e8] via-[#fffaf6] to-[#ffd2c2]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_55%_35%,rgba(255,255,255,.9),transparent_65%)]" />
        <header className="relative z-30 px-4 pt-4 sm:px-6">
          <div className="mx-auto max-w-[1180px]">
            <div className="flex min-h-[68px] items-center justify-between rounded-2xl border border-white/80 bg-white/85 px-5 shadow-[0_8px_30px_rgba(87,48,35,.08)] backdrop-blur-xl sm:px-7">
              <a href="#home" className="text-[28px] font-extrabold tracking-[-0.09em] text-[#f76b45]" aria-label="Zesha home">ZESHA<span className="ml-1 text-[10px] font-semibold tracking-[.12em] text-[#8a7168]">DATE & CHAT</span></a>
              <nav className="hidden items-center gap-8 lg:flex">
                {navItems.map(([label, href]) => <a key={label} href={href} className="text-sm font-semibold text-[#655650] transition hover:text-[#f76b45]">{label}</a>)}
              </nav>
              <div className="hidden lg:block"><DownloadButton compact /></div>
              <button onClick={() => setMenuOpen(!menuOpen)} className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff0e8] text-2xl lg:hidden" aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? "×" : "☰"}</button>
            </div>
            {menuOpen && <div className="mt-2 rounded-2xl border border-[#f5dfd6] bg-white p-3 shadow-xl lg:hidden"><nav className="flex flex-col">{navItems.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-semibold text-[#655650] hover:bg-[#fff4ef]">{label}</a>)}<div className="p-2"><DownloadButton compact /></div></nav></div>}
          </div>
        </header>

        <section id="home" className="relative z-10 mx-auto grid max-w-[1320px] items-center gap-10 px-6 py-14 sm:px-10 sm:py-20 lg:min-h-[690px] lg:grid-cols-[1.08fr_.92fr] lg:px-20">
          <div className="relative z-10 max-w-[660px]">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white bg-white/75 px-4 py-2.5 shadow-sm backdrop-blur"><span className="h-2.5 w-2.5 rounded-full bg-[#f76b45]" /><span className="text-sm font-semibold text-[#6c5148]">A new connection starts here</span></div>
            <h1 className="text-[clamp(3.2rem,6.5vw,6.1rem)] font-bold leading-[.94] tracking-[-.075em] text-[#241c19]">Meet someone<br />who makes you<br /><span className="serif-italic font-normal tracking-[-.04em] text-[#f76b45]">smile.</span></h1>
            <p className="mt-7 max-w-[570px] text-base leading-8 text-[#766761] sm:text-lg">Good conversations can lead to something wonderful. Discover new people, make connections and start your next story with ZESHA.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4"><DownloadButton /><span className="text-xs font-medium text-[#8b7770]">Available on Android</span></div>
            <div className="mt-8 flex items-center gap-3 text-sm text-[#806d66]"><span className="flex -space-x-2"><span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#fff0e8] bg-[#f7c5b0]">☺</span><span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#fff0e8] bg-[#f4d8a9]">♡</span><span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#fff0e8] bg-[#e9b6a9]">✦</span></span><span>Make room for a new connection.</span></div>
          </div>
          <div className="relative py-6"><PhoneSlider /></div>
        </section>
      </div>

      <section className="border-y border-[#f2e5df] bg-[#fffaf7] px-6 py-5">
        <div className="mx-auto flex max-w-[1150px] flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-semibold uppercase tracking-[.16em] text-[#a18b82] sm:justify-between"><span>Meet</span><span className="text-[#f76b45]">Connect</span><span>Chat</span><span className="text-[#f76b45]">Discover</span><span>Begin again</span></div>
      </section>

      <section id="about" className="px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-[1150px] items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div><p className="text-xs font-bold uppercase tracking-[.22em] text-[#f76b45]">A little about ZESHA</p><h2 className="mt-5 text-4xl font-bold leading-[1.03] tracking-[-.06em] sm:text-5xl">Every great story<br />starts with a <span className="serif-italic font-normal text-[#f76b45]">hello.</span></h2><p className="mt-6 max-w-md text-base leading-8 text-[#766761]">ZESHA is a place to discover people and open the door to new conversations. Whether you're here to meet someone new or simply see where a chat takes you, your next connection can start with one small step.</p><a href="#how-it-works" className="mt-7 inline-flex items-center gap-2 font-bold text-[#f76b45] hover:gap-3">See how it works <span>→</span></a></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="min-h-[175px] rounded-[26px] bg-[#ffe0d4] p-6 sm:p-8"><p className="text-4xl text-[#f76b45]">♡</p><p className="mt-7 text-lg font-bold">Meet new people</p><p className="mt-2 text-sm leading-6 text-[#876d63]">Discover profiles beyond your everyday circle.</p></div>
            <div className="mt-8 min-h-[175px] rounded-[26px] bg-[#f7eee8] p-6 sm:p-8"><p className="text-4xl text-[#d78b70]">✦</p><p className="mt-7 text-lg font-bold">Find your spark</p><p className="mt-2 text-sm leading-6 text-[#876d63]">Make space for unexpected connections.</p></div>
            <div className="min-h-[175px] rounded-[26px] bg-[#29211e] p-6 text-white sm:p-8"><p className="text-4xl text-[#ff9b7c]">☏</p><p className="mt-7 text-lg font-bold">Start chatting</p><p className="mt-2 text-sm leading-6 text-white/65">Turn a hello into a real conversation.</p></div>
            <div className="mt-8 min-h-[175px] rounded-[26px] bg-[#ffd0bf] p-6 sm:p-8"><p className="text-4xl text-[#f76b45]">∞</p><p className="mt-7 text-lg font-bold">Your own story</p><p className="mt-2 text-sm leading-6 text-[#876d63]">Take things at your pace, one step at a time.</p></div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-[#fff3ed] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-[1150px]">
          <div className="max-w-xl"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#f76b45]">The ZESHA experience</p><h2 className="mt-5 text-4xl font-bold leading-[1.02] tracking-[-.06em] sm:text-5xl">A simple way to<br />make a <span className="serif-italic font-normal text-[#f76b45]">connection.</span></h2><p className="mt-5 text-base leading-7 text-[#806d66]">Everything begins with discovering someone new. Here's what you can look forward to.</p></div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="flex min-h-[290px] flex-col justify-between rounded-[28px] bg-gradient-to-br from-[#f76b45] to-[#e95643] p-8 text-white md:row-span-2"><span className="text-5xl">♡</span><div><p className="text-xs font-bold uppercase tracking-[.2em] text-white/70">Find your people</p><h3 className="mt-3 text-3xl font-bold tracking-[-.04em]">A world of new<br />possibilities.</h3><p className="mt-3 max-w-sm text-sm leading-6 text-white/80">Explore, be curious and discover who you'd like to know better.</p></div></div>
            <div className="grid gap-3 sm:grid-cols-2">
              {features.map((feature) => { const selected = activeFeature === feature.title; return <button key={feature.title} onClick={() => setActiveFeature(feature.title)} aria-pressed={selected} className={`rounded-[24px] border p-5 text-left transition ${selected ? "border-[#29211e] bg-[#29211e] text-white" : "border-white bg-white text-[#29211e] hover:border-[#f5b29e]"}`}><span className={`flex h-10 w-10 items-center justify-center rounded-xl text-2xl ${selected ? "bg-[#f76b45] text-white" : "bg-[#fff0e9] text-[#f76b45]"}`}>{feature.icon}</span><h3 className="mt-5 font-bold">{feature.title}</h3><p className={`mt-2 text-sm leading-6 ${selected ? "text-white/65" : "text-[#88766f]"}`}>{feature.text}</p></button>; })}
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-[1120px]">
          <div className="text-center"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#f76b45]">How it works</p><h2 className="mt-5 text-4xl font-bold tracking-[-.06em] sm:text-5xl">Three steps to a new <span className="serif-italic font-normal text-[#f76b45]">hello.</span></h2><p className="mx-auto mt-4 max-w-lg text-[#806d66]">Getting started is easy. Your next conversation could be just around the corner.</p></div>
          <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-5">{steps.map((step, index) => <div key={step.number} className="text-center"><div className="relative flex h-28 items-center justify-center"><span className="text-[100px] font-light leading-none tracking-[-.08em] text-transparent [-webkit-text-stroke:1.5px_#f76b45]">{step.number}</span>{index < 2 && <span className="absolute left-[70%] top-1/2 hidden h-px w-[60%] bg-[#f4b5a1] sm:block" />}</div><h3 className="mt-5 text-xl font-bold">{step.title}</h3><p className="mx-auto mt-3 max-w-[270px] text-sm leading-7 text-[#88766f]">{step.text}</p></div>)}</div>
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-6">
        <div className="relative mx-auto max-w-[1180px] overflow-hidden rounded-[30px] bg-gradient-to-br from-[#ffdfd2] via-[#ffc6b3] to-[#f76b45] px-7 py-12 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full border-[50px] border-white/15" />
          <div className="relative z-10 max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.22em] text-[#78483b]">Your next chapter</p><h2 className="mt-5 text-4xl font-bold leading-[1.02] tracking-[-.06em] sm:text-6xl">Don't just scroll.<br /><span className="serif-italic font-normal">Say hello.</span></h2><p className="mt-5 max-w-md text-base leading-7 text-[#704e44]">Take the first step towards a new connection. Download ZESHA and start discovering.</p><div className="mt-8"><DownloadButton /></div><p className="mt-4 text-xs font-medium text-[#704e44]">Currently available for Android.</p></div>
        </div>
      </section>

      <footer className="bg-[#29211e] px-6 py-12 text-white">
        <div className="mx-auto max-w-[1150px]">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_.7fr_.9fr]">
            <div><a href="#home" className="text-3xl font-extrabold tracking-[-.09em] text-[#ff8b6c]">ZESHA</a><p className="mt-2 text-xs font-semibold uppercase tracking-[.2em] text-white/45">Date & Chat</p><p className="mt-4 max-w-sm text-sm leading-7 text-white/60">Discover people, make connections and start conversations. Your next hello starts with ZESHA.</p><div className="mt-6"><DownloadButton compact /></div></div>
            <div><h3 className="text-xs font-bold uppercase tracking-[.2em] text-white/45">Explore</h3><div className="mt-5 flex flex-col gap-3 text-sm text-white/75"><a href="#about" className="hover:text-[#ff8b6c]">About ZESHA</a><a href="#features" className="hover:text-[#ff8b6c]">Features</a><a href="#how-it-works" className="hover:text-[#ff8b6c]">How it works</a></div></div>
            <div><h3 className="text-xs font-bold uppercase tracking-[.2em] text-white/45">Get in touch</h3><div className="mt-5 flex flex-col gap-3 text-sm text-white/75"><a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff8b6c]">Instagram ↗</a><a href={`mailto:${site.contactEmail}`} className="hover:text-[#ff8b6c]">{site.contactEmail}</a></div></div>
          </div>
          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:justify-between"><p>© 2026 ZESHA. All rights reserved.</p><p>Made for new beginnings.</p></div>
        </div>
      </footer>
    </main>
  );
}
