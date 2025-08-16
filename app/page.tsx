"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";
import { PROFILE } from "@/lib/profile";
import Card from "@/components/Card";

export default function Home() {
  const avatar = "/avatar.jpeg";

  return (
    <main>
      {/* Header / Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 bordered">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight">
            {PROFILE.name}
          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#projects" className="hover:opacity-70">Projects</a>
            <a href="#skills" className="hover:opacity-70">Skills</a>
            <a href="#experience" className="hover:opacity-70">Experience</a>
            <a href="#education" className="hover:opacity-70">Education</a>
            <a href="#certifications" className="hover:opacity-70">Certifications</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
          <div className="flex items-center gap-3 text-sm">
            <a href={PROFILE.github} className="underline underline-offset-4 decoration-dotted">GitHub</a>
            <a href={PROFILE.linkedin} className="underline underline-offset-4 decoration-dotted">LinkedIn</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="max-w-6xl mx-auto px-6 md:px-10 py-14">
        <div className="grid md:grid-cols-[1.2fr,0.8fr] gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400"
            >
              {PROFILE.name}
            </motion.h1>
            <h2 className="text-lg md:text-xl font-medium text-zinc-500 dark:text-zinc-300 mt-2">
              {PROFILE.title}
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-300 max-w-2xl leading-relaxed">
              {PROFILE.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-xl px-5 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-xl px-5 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="justify-self-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              src="/avatar.jpeg"
              alt={`${PROFILE.name} avatar`}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </section>

{/* About */}
<Section id="about" title="About">
  <Card>
    <div className="leading-relaxed">
      <p className="text-lg">
        I'm <span className="font-semibold text-blue-400">{PROFILE.name}</span>, a{" "}
        <span className="font-medium">{PROFILE.title}</span> passionate about building
        robust REST APIs, clean architectures, and efficient data access layers with
        Spring Boot and MySQL.
      </p>
      <p className="mt-4">
        I focus on creating scalable backend systems, integrating modern frameworks,
        and delivering solutions that balance performance and maintainability.
      </p>
    </div>
  </Card>
</Section>

      {/* Projects */}
     <Section id="projects" title="Projects">
  <div className="grid md:grid-cols-2 gap-6">
    {PROFILE.projects.map((p) => (
      <Card key={p.name} title={p.name}>
        <span className="text-xs opacity-70">{p.year}</span>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{p.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span key={t} className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-4 text-sm">
          {p.live !== "#" && <a href={p.live} className="underline underline-offset-4">Live</a>}
          {p.repo !== "#" && <a href={p.repo} className="underline underline-offset-4">Code</a>}
        </div>
      </Card>
    ))}
  </div>
</Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
  <div className="grid md:grid-cols-3 gap-6">
    <Card title="Languages & Frameworks">
      <div className="flex flex-wrap gap-2">
        {[...PROFILE.skills.languages, ...PROFILE.skills.frameworks].map((s) => (
          <span key={s} className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200">
            {s}
          </span>
        ))}
      </div>
    </Card>

    <Card title="Databases & Web">
      <div className="flex flex-wrap gap-2">
        {[...PROFILE.skills.databases, ...PROFILE.skills.web].map((s) => (
          <span key={s} className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200">
            {s}
          </span>
        ))}
      </div>
    </Card>

    <Card title="Tools & Practices">
      <div className="flex flex-wrap gap-2">
        {[...PROFILE.skills.tools, ...PROFILE.skills.testing, ...PROFILE.skills.architecture, ...PROFILE.skills.cloud].map((s) => (
          <span key={s} className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200">
            {s}
          </span>
        ))}
      </div>
    </Card>
  </div>
</Section>

      {/* Education */}
<Section id="education" title="Education">
  <div className="grid gap-4">
    {PROFILE.education.map((ed) => (
      <Card key={ed.degree} title={ed.degree}>
        <div className="text-sm opacity-80">{ed.school}</div>
        <div className="text-xs opacity-70">{ed.details}</div>
      </Card>
    ))}
  </div>
</Section>
<Section id="experience" title="Experience">
  <div className="grid gap-4">
    {PROFILE.experience.map((e) => (
      <Card key={e.company} title={`${e.title} — ${e.company}`}>
        <div className="text-xs opacity-70">{e.location} • {e.start} – {e.end}</div>
        <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
          {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </Card>
    ))}
  </div>
</Section>


      {/* Certifications */}
    <Section id="certifications" title="Certifications">
  <Card title="Certifications">
    <ul className="list-disc pl-5 space-y-1 text-sm">
      {PROFILE.certifications.map((c, i) => <li key={i}>{c}</li>)}
    </ul>
  </Card>
</Section>

{/* Contact */}
<Section id="contact" title="Contact">
  <Card>
    <div className="grid md:grid-cols-[1fr,1fr] gap-8 items-start">
      
      {/* Contact Info */}
      <div className="space-y-2">
        <p className="text-lg">Want to collaborate or have a role that fits? Reach out:</p>
        <ul className="mt-4 space-y-2 text-base">
          <li>
            <span className="font-medium">Email: </span>
            <a className="text-blue-400 hover:underline" href={`mailto:${PROFILE.email}`}>
              {PROFILE.email}
            </a>
          </li>
          <li>
            <span className="font-medium">Phone: </span>
            <a className="text-blue-400 hover:underline" href={`tel:${PROFILE.phone}`}>
              {PROFILE.phone}
            </a>
          </li>
          <li>
            <span className="font-medium">LinkedIn: </span>
            <a className="text-blue-400 hover:underline" href={PROFILE.linkedin} target="_blank">
              View Profile
            </a>
          </li>
          <li>
            <span className="font-medium">GitHub: </span>
            <a className="text-blue-400 hover:underline" href={PROFILE.github} target="_blank">
              {PROFILE.github.replace("https://", "")}
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Form */}
      <form
  className="space-y-4"
  onSubmit={async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("✅ Message sent successfully!");
      form.reset();
    } else {
      alert("❌ Failed to send message.");
    }
  }}
>
  <label className="text-sm font-medium">
    Name
    <input
      name="name"
      className="mt-1 w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2
                 focus:border-teal-500 focus:ring-2 focus:ring-teal-400 transition"
      required
    />
  </label>
  <label className="text-sm font-medium">
    Email
    <input
      type="email"
      name="email"
      className="mt-1 w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2
                 focus:border-teal-500 focus:ring-2 focus:ring-teal-400 transition"
      required
    />
  </label>
  <label className="text-sm font-medium">
    Message
    <textarea
      name="message"
      rows={4}
      className="mt-1 w-full rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2
                 focus:border-teal-500 focus:ring-2 focus:ring-teal-400 transition"
      required
    />
  </label>
  <button
    type="submit"
    className="bg-teal-600 text-white rounded-lg px-5 py-2 font-medium hover:bg-teal-700 transition"
  >
    Send
  </button>
</form>
    </div>
  </Card>
</Section>
      {/* Footer */}
      <footer className="py-10 text-center text-xs opacity-70">
        © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js & TailwindCSS.
      </footer>
    </main>
  );
}
