import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Monitor, FlaskConical, Cpu, Bot, BookOpen, Theater, Waves, Trophy, Music, Baby, Bus, BedDouble, MapPin, ArrowRight, Quote,
} from "lucide-react";
import {
  BRANCHES, CAMPUS_IMGS, FRANCHISE_MODELS, GALLERY, INFRA, INFRA_KEYS, TERRITORIES, fmt,
} from "@/lib/idps-data";
import { IndiaMap } from "@/components/IndiaMap";
const heroVideo = "/assets/children-classroom.mp4";
const logo = "/assets/idps-logo.jpeg";
const president = "/assets/president.jpeg";

const ICONS: Record<string, typeof Monitor> = {
  SC: Monitor, SL: FlaskConical, CL: Cpu, RB: Bot, LB: BookOpen, AU: Theater, SP: Waves, SX: Trophy, MU: Music, PA: Baby, TR: Bus, HS: BedDouble,
};

const HERO = "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=75";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "International Delhi Public School — 35 Campuses Across India" },
      { name: "description", content: "IDPS: CBSE-affiliated school network with 35 campuses, 15 states, 45,920+ students. Admissions open 2027–28 and franchise opportunities." },
      { property: "og:title", content: "International Delhi Public School (IDPS)" },
      { property: "og:description", content: "One standard of excellence, every campus. Admissions open 2027–28." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: HERO },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: Index,
});

const NAV = [
  ["About", "#about"], ["Our Network", "#network"], ["Infrastructure", "#infra"],
  ["Campus Life", "#life"], ["Franchise", "#franchise"], ["Contact", "#contact"],
];

function Index() {
  return (
    <div className="font-sans">
      <TopBar />
      <Hero />
      <Pillars />
      <About />
      <President />
      <Network />
      <InfraTable />
      <Life />
      <Franchise />
      <Contact />
      <footer className="border-t border-primary-foreground/10 bg-primary py-10 text-sm text-primary-foreground/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 md:flex-row md:justify-between">
          <Logo />
          <span>© {new Date().getFullYear()} International Delhi Public School · Head Office</span>
        </div>
      </footer>
    </div>
  );
}

function TopBar() {
  return (
    <div className="bg-primary text-xs text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-4 gap-y-1 px-4 py-2 md:justify-between">
        <span>Head Office · <b className="text-accent">Admissions Open 2027–28</b></span>
        <span>+91 00000 00000 · info@idps.edu.in</span>
      </div>
    </div>
  );
}

function Logo({ light = true }: { light?: boolean }) {
  return (
    <a href="#" className="group flex items-center gap-3 leading-none">
      <span className="grid h-16 w-16 place-items-center rounded-full bg-card p-1 shadow-card transition group-hover:scale-105">
        <img src={logo} alt="IDPS crest" className="h-full w-full object-contain" />
      </span>
      <span className={light ? "text-primary-foreground" : "text-primary"}>
        <span className="block text-[10px] font-semibold tracking-[.3em]">INTERNATIONAL</span>
        <span className="text-xl font-extrabold">DELHI PUBLIC</span>
        <span className="block text-sm font-semibold tracking-[.25em] text-accent">SCHOOL</span>
      </span>
    </a>
  );
}

function Hero() {
  return (
    <header className="hero-curve relative overflow-hidden pb-32">
      <video className="absolute inset-0 h-full w-full object-cover" src={heroVideo} poster={president} autoPlay muted loop playsInline />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto max-w-7xl px-6">
        <nav className="flex items-center justify-between py-6">
          <Logo />
          <div className="hidden gap-6 text-xs font-medium uppercase tracking-wider text-primary-foreground lg:flex">
            {NAV.map(([l, h]) => <a key={h} href={h} className="relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all hover:text-accent hover:after:w-full">{l}</a>)}
          </div>
          <a href="#franchise" className="rounded-md bg-cta px-4 py-3 text-sm font-bold text-accent-foreground transition hover:-translate-y-0.5 hover:shadow-card">Open an IDPS School</a>
        </nav>
        <div className="max-w-3xl pt-24">
          <p className="eyebrow">— Welcome to IDPS</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight text-primary-foreground md:text-7xl">
            One Standard.<br />Every Campus.<br /><span className="text-accent">I Am IDPS.</span>
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/85">
            International Delhi Public School is a growing network of CBSE-affiliated schools that blends academic rigour, technology and values — with 18+ years of academic leadership.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-2 gap-6 text-primary-foreground sm:grid-cols-5">
          {[["35", "Campuses"], ["15", "States"], ["45,920+", "Students"], ["2,370+", "Faculty"], ["11", "Open Territories"]].map(([n, l]) => (
            <div key={l}><div className="text-4xl font-bold text-accent">{n}</div><div className="text-sm">{l}</div></div>
          ))}
        </div>
      </div>
    </header>
  );
}

function Pillars() {
  const items = [
    ["Standard Curriculum", "Common academic framework and assessments."],
    ["Faculty Academy", "Central training and annual certification."],
    ["Quality Audits", "Quarterly infrastructure and safety audits."],
    ["Digital Campus", "Smart classrooms, ERP and parent app."],
  ];
  return (
    <section className="relative z-10 mx-auto -mt-16 grid max-w-7xl gap-6 px-6 md:grid-cols-4">
      {items.map(([t, d], i) => (
        <div key={t} className={`${i % 2 ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"} ${i === 0 ? "rounded-tl-[4rem]" : ""} p-8 text-center shadow-card transition duration-300 hover:-translate-y-2 hover:shadow-[0_30px_50px_-20px_var(--primary)]`}>
          <h4 className="text-lg font-bold">{t}</h4>
          <p className="mt-2 text-sm opacity-85">{d}</p>
        </div>
      ))}
    </section>
  );
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
      <div className="relative">
        <img src={HERO} alt="Students in classroom" className="rounded-tl-[6rem] rounded-br-[6rem] object-cover shadow-card" />
        <div className="absolute -bottom-6 -right-2 rounded-lg bg-accent p-6 text-accent-foreground shadow-card">
          <div className="text-4xl font-bold">18+</div><div className="text-sm">Years of academic leadership</div>
        </div>
      </div>
      <div>
        <p className="eyebrow">About the Group</p>
        <h2 className="mt-3 text-4xl font-bold text-primary md:text-5xl">One standard of excellence, every campus</h2>
        <p className="mt-6 text-muted-foreground">
          International Delhi Public School is a growing network of CBSE-affiliated schools that blends academic rigour, technology and values. The Head Office sets academic standards, trains faculty, audits infrastructure and supports every branch and franchise partner.
        </p>
      </div>
    </section>
  );
}

const STATES = [...new Set(BRANCHES.map((b) => b.state))].sort();
const TYPES = ["All", "Head Branch", "Senior Sec.", "Secondary", "Franchise", "New Campus"];

function Pill({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className={`rounded-full border px-4 py-1.5 text-sm transition ${active ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground hover:border-accent"}`}>
      {children}
    </button>
  );
}

function Network() {
  const [state, setState] = useState("All");
  const [type, setType] = useState("All");
  const [q, setQ] = useState("");
  const [shown, setShown] = useState(9);
  const stateRows = useMemo(() => {
    const rows = STATES.map((s) => {
      const l = BRANCHES.filter((b) => b.state === s);
      return { s, n: l.length, st: l.reduce((a, b) => a + b.students, 0), f: l.reduce((a, b) => a + b.teachers, 0) };
    }).sort((a, b) => b.n - a.n || a.s.localeCompare(b.s));
    return [{ s: "All", n: 35, st: 45920, f: 2370 }, ...rows];
  }, []);
  const list = BRANCHES
    .filter((b) => (state === "All" || b.state === state) && (type === "All" || b.type === type))
    .filter((b) => !q || (b.name + b.city).toLowerCase().includes(q.toLowerCase()))
    .sort((a, b) => b.students - a.students);

  return (
    <section id="network" className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead eyebrow="Our Network" title="Branches across India" sub="Select a state to see its campuses, their student strength and infrastructure." />
        <div className="mb-14 grid gap-6 lg:grid-cols-[1fr_380px]">
          <IndiaMap selected={state} onSelect={(s) => { setState(s); setShown(9); }} />
          <aside className="flex max-h-[640px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card">
            <div className="flex items-center justify-between bg-primary px-5 py-4 text-primary-foreground">
              <b>State-wise Branches</b><span className="font-bold text-accent">15 states</span>
            </div>
            <ul className="flex-1 overflow-y-auto">
              {stateRows.map((r) => (
                <li key={r.s}>
                  <button onClick={() => { setState(r.s); setShown(9); }} className={`group flex w-full items-center justify-between border-b border-l-4 border-b-border px-5 py-4 text-left transition ${state === r.s ? "border-l-accent bg-secondary" : "border-l-transparent hover:border-l-accent/60 hover:bg-muted"}`}>
                    <span><b className="block text-primary">{r.s === "All" ? "All India" : r.s}</b><span className="text-xs text-muted-foreground">{fmt(r.st)} students · {r.f} faculty</span></span>
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary font-bold text-accent transition group-hover:scale-110">{r.n}</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>
        </div>
        <div>
          <div>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-primary">{state === "All" ? "All Branches" : `Branches in ${state}`}</h3>
                <p className="text-sm text-muted-foreground">{list.length} campus{list.length !== 1 ? "es" : ""} · {fmt(list.reduce((a, b) => a + b.students, 0))} students</p>
              </div>
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search branch or city" className="rounded-md border border-input bg-card px-3 py-2 text-sm" />
            </div>
            <div className="mb-6 flex flex-wrap gap-2">
              {TYPES.map((t) => <Pill key={t} active={type === t} onClick={() => setType(t)}>{t}</Pill>)}
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {list.slice(0, shown).map((b) => {
                const pct = Math.round((b.students / b.capacity) * 100);
                return (
                  <article key={b.id} className="overflow-hidden rounded-xl bg-card shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_50px_-20px_var(--primary)]">
                    <div className="relative h-36 bg-cover bg-center" style={{ backgroundImage: `url(${CAMPUS_IMGS[b.id % 4]})` }}>
                      <div className="absolute inset-0 bg-hero-overlay" />
                      <div className="absolute bottom-3 left-4 text-primary-foreground">
                        <span className="rounded bg-accent px-2 py-0.5 text-[11px] font-semibold">{b.type}</span>
                        <h3 className="mt-1 text-lg font-bold">{b.name}</h3>
                        <small className="opacity-85">{b.city}, {b.state} · Est. {b.est}</small>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="grid grid-cols-3 text-center">
                        {[[fmt(b.students), "Students"], [b.teachers, "Faculty"], [`1:${Math.round(b.students / b.teachers)}`, "Ratio"]].map(([v, l]) => (
                          <div key={l as string}><b className="text-lg text-primary">{v}</b><div className="text-xs text-muted-foreground">{l}</div></div>
                        ))}
                      </div>
                      <div className="mt-4 flex justify-between text-xs text-muted-foreground"><span>Capacity utilisation</span><span>{fmt(b.students)} / {fmt(b.capacity)} · {pct}%</span></div>
                      <div className="mt-1 h-1.5 rounded bg-muted"><div className="h-full rounded bg-cta" style={{ width: `${pct}%` }} /></div>
                      <p className="mt-4 text-xs font-semibold uppercase text-muted-foreground">Infrastructure</p>
                      <div className="mt-2 flex flex-wrap gap-1">
                        {b.codes.map((c) => <span key={c} className="rounded bg-secondary px-2 py-0.5 text-[11px] text-secondary-foreground">{INFRA[c]}</span>)}
                      </div>
                      <div className="mt-4 flex justify-between border-t pt-3 text-xs text-muted-foreground">
                        <span>Classes <b className="text-foreground">{b.classes}</b></span><span>Campus <b className="text-foreground">{b.area}</b></span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
            {list.length > shown && (
              <div className="mt-8 text-center">
                <button onClick={() => setShown(list.length)} className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">Show More Branches ({list.length - shown} more)</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfraTable() {
  const [fac, setFac] = useState("SC");
  const [a, setA] = useState(0);
  const [b, setB] = useState(1);
  const has = BRANCHES.filter((x) => x.codes.includes(fac));
  const byState = has.reduce<Record<string, typeof has>>((m, x) => ((m[x.state] ??= []).push(x), m), {});
  const FacIcon = ICONS[fac]!;
  const A = BRANCHES[a]!, B = BRANCHES[b]!;
  const sel = "w-full rounded-md border border-input bg-card px-3 py-2.5 text-sm font-semibold text-primary";
  return (
    <section id="infra" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHead eyebrow="World-Class Facilities" title="Infrastructure across our campuses" sub="Explore each facility to see which of our 35 campuses offer it — or compare any two campuses side by side." />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {INFRA_KEYS.map((k) => {
          const Icon = ICONS[k]!;
          const n = BRANCHES.filter((x) => x.codes.includes(k)).length;
          const on = fac === k;
          return (
            <button key={k} onClick={() => setFac(k)} className={`group rounded-2xl border p-5 text-left transition duration-300 hover:-translate-y-1 hover:shadow-card ${on ? "border-primary bg-primary text-primary-foreground shadow-card" : "border-border bg-card"}`}>
              <span className={`grid h-12 w-12 place-items-center rounded-xl transition group-hover:rotate-6 ${on ? "bg-accent text-accent-foreground" : "bg-secondary text-accent"}`}><Icon className="h-6 w-6" /></span>
              <b className={`mt-4 block text-sm ${on ? "" : "text-primary"}`}>{INFRA[k]}</b>
              <span className={`text-xs ${on ? "opacity-80" : "text-muted-foreground"}`}>{n} of 35 campuses</span>
              <div className={`mt-2 h-1 rounded ${on ? "bg-primary-foreground/20" : "bg-muted"}`}><div className="h-full rounded bg-accent" style={{ width: `${(n / 35) * 100}%` }} /></div>
            </button>
          );
        })}
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl bg-card shadow-card">
        <div className="flex flex-wrap items-center gap-4 bg-cta p-6 text-accent-foreground">
          <FacIcon className="h-10 w-10" />
          <div><h3 className="text-2xl font-bold">{INFRA[fac]}</h3><p className="text-sm opacity-90">Available at {has.length} campuses in {Object.keys(byState).length} states</p></div>
        </div>
        <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-4">
          {Object.entries(byState).sort((x, y) => y[1].length - x[1].length).map(([s, l]) => (
            <div key={s}>
              <p className="eyebrow">{s}</p>
              <ul className="mt-2 space-y-1">{l.map((x) => <li key={x.id} className="text-sm text-primary transition hover:translate-x-1 hover:text-accent">• {x.name}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 rounded-2xl bg-muted p-6 md:p-10">
        <h3 className="text-center text-3xl font-bold text-primary">Compare two campuses</h3>
        <div className="mx-auto mt-8 grid max-w-4xl gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <select value={a} onChange={(e) => setA(+e.target.value)} className={sel}>{BRANCHES.map((x) => <option key={x.id} value={x.id}>{x.name}</option>)}</select>
          <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-accent font-bold text-accent-foreground">VS</span>
          <select value={b} onChange={(e) => setB(+e.target.value)} className={sel}>{BRANCHES.map((x) => <option key={x.id} value={x.id}>{x.name}</option>)}</select>
        </div>
        <div className="mx-auto mt-6 max-w-4xl overflow-hidden rounded-xl bg-card">
          {[["Campus area", A.area, B.area], ["Students", fmt(A.students), fmt(B.students)], ["Faculty", A.teachers, B.teachers], ["Classes", A.classes, B.classes]].map(([l, x, y]) => (
            <div key={l as string} className="grid grid-cols-3 border-b border-border px-6 py-3 text-center text-sm">
              <b className="text-primary">{x}</b><span className="text-muted-foreground">{l}</span><b className="text-primary">{y}</b>
            </div>
          ))}
          {INFRA_KEYS.map((k) => {
            const Icon = ICONS[k]!;
            const dot = (on: boolean) => <span className={`mx-auto grid h-7 w-7 place-items-center rounded-full text-xs font-bold ${on ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}>{on ? "✓" : "—"}</span>;
            return (
              <div key={k} className="grid grid-cols-3 items-center border-b border-border px-6 py-2.5 text-center text-sm transition hover:bg-secondary">
                {dot(A.codes.includes(k))}<span className="flex items-center justify-center gap-2 text-muted-foreground"><Icon className="h-4 w-4 text-accent" />{INFRA[k]}</span>{dot(B.codes.includes(k))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function President() {
  return (
    <section className="bg-primary py-24 text-primary-foreground">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-[380px_1fr]">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 rounded-tl-[6rem] rounded-br-[6rem] bg-cta" />
          <img src={president} alt="President, International Delhi Public School" className="relative rounded-tl-[6rem] rounded-br-[6rem] object-cover transition duration-500 hover:scale-[1.02]" loading="lazy" />
        </div>
        <div>
          <p className="eyebrow">President's Message</p>
          <Quote className="mt-4 h-12 w-12 text-accent" />
          <p className="mt-4 text-2xl font-medium leading-relaxed md:text-3xl">
            Every IDPS campus carries one promise — the same standard of excellence, values and care for every child, wherever they learn in India.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <img src={logo} alt="" className="h-14 w-14 rounded-full bg-card object-contain p-1" />
            <div><b className="block text-lg">President</b><span className="text-sm opacity-75">International Delhi Public School Group</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Life() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="life" className="bg-muted py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead eyebrow="Campus Life" title="Learning beyond the classroom" sub="Sports, science, arts and celebrations — moments from across IDPS campuses." />
        <div className="grid auto-rows-[220px] gap-4 md:grid-cols-3">
          {GALLERY.map((g) => (
            <button key={g.title} onClick={() => setOpen(g.src)} className={`group relative overflow-hidden rounded-xl ${g.cls}`}>
              <img src={g.src} alt={g.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-hero-overlay opacity-70" />
              <div className="absolute bottom-4 left-4 text-left text-primary-foreground">
                <span className="eyebrow">{g.tag}</span><b className="block text-lg">{g.title}</b>
              </div>
            </button>
          ))}
        </div>
      </div>
      {open && (
        <div onClick={() => setOpen(null)} className="fixed inset-0 z-50 grid place-items-center bg-foreground/80 p-6">
          <button className="absolute right-6 top-4 text-4xl text-background">×</button>
          <img src={open} alt="" className="max-h-[85vh] rounded-lg" />
        </div>
      )}
    </section>
  );
}

function Franchise() {
  const [st, setSt] = useState("All");
  const tStates = [...new Set(TERRITORIES.map((t) => t.state))].sort();
  const perks = [
    ["360°", "Setup support — design, approvals, hiring and launch"],
    ["CBSE", "Affiliation guidance and documentation handled centrally"],
    ["ERP", "School management, fees and parent app included"],
    ["Brand", "Marketing kits and admission campaigns every year"],
  ];
  return (
    <section id="franchise" className="mx-auto max-w-7xl px-6 py-24">
      <SectionHead eyebrow="Grow With IDPS" title="Franchise opportunities" sub="Partner with an established brand backed by a proven academic model, central support and a strong reputation with parents." />
      <div className="grid gap-6 md:grid-cols-4">
        {perks.map(([n, t]) => (
          <div key={n} className="rounded-xl border-l-4 border-accent bg-card p-6 shadow-card">
            <div className="text-3xl font-bold text-primary">{n}</div><p className="mt-2 text-sm text-muted-foreground">{t}</p>
          </div>
        ))}
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {FRANCHISE_MODELS.map((m) => (
          <div key={m.name} className={`relative rounded-xl p-8 shadow-card transition duration-300 hover:-translate-y-2 ${m.featured ? "bg-primary text-primary-foreground" : "bg-card"}`}>
            {m.featured && <span className="absolute -top-3 left-8 rounded bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">MOST POPULAR</span>}
            <h3 className="text-2xl font-bold">{m.name}</h3>
            <p className="mt-3"><b className="text-2xl text-accent">{m.inv}</b></p>
            <p className="text-sm opacity-75">Investment · Land: {m.land}</p>
            <ul className="mt-6 space-y-2 text-sm">{m.points.map((p) => <li key={p}>✓ {p}</li>)}</ul>
            <a href="#contact" className="mt-8 inline-block rounded-md bg-cta px-5 py-3 text-sm font-bold text-accent-foreground">Enquire Now</a>
          </div>
        ))}
      </div>
      <div className="mt-20 overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground md:p-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Franchise Openings</p>
            <h3 className="mt-2 text-4xl font-bold">Available Territories</h3>
            <p className="mt-2 text-sm opacity-75">Also marked on the network map with a green dashed pin.</p>
          </div>
          <div className="flex gap-6 text-center">
            <div><b className="block text-4xl text-accent">{TERRITORIES.filter((t) => t.status === "open").length}</b><span className="text-xs opacity-75">Open now</span></div>
            <div><b className="block text-4xl text-accent">{TERRITORIES.filter((t) => t.status !== "open").length}</b><span className="text-xs opacity-75">In talks</span></div>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {["All", ...tStates].map((s) => (
            <button key={s} onClick={() => setSt(s)} className={`rounded-full border px-4 py-1.5 text-sm transition ${st === s ? "border-accent bg-accent text-accent-foreground" : "border-primary-foreground/25 hover:border-accent hover:text-accent"}`}>
              {s === "All" ? `All States (${TERRITORIES.length})` : s}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TERRITORIES.filter((t) => st === "All" || t.state === st).map((t) => {
            const open = t.status === "open";
            return (
              <a key={t.city} href="#contact" className="group relative overflow-hidden rounded-2xl bg-card p-5 text-card-foreground transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_25px_40px_-15px_var(--accent)]">
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-cta transition duration-300 group-hover:scale-x-100" />
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-accent transition group-hover:bg-accent group-hover:text-accent-foreground"><MapPin className="h-5 w-5" /></span>
                  <span className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold ${open ? "bg-territory/15 text-territory" : "bg-accent/15 text-accent"}`}>
                    <span className="relative flex h-2 w-2"><span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${open ? "bg-territory" : "bg-accent"}`} /><span className={`relative h-2 w-2 rounded-full ${open ? "bg-territory" : "bg-accent"}`} /></span>
                    {open ? "Open" : "In talks"}
                  </span>
                </div>
                <b className="mt-4 block text-xl text-primary">{t.city}</b>
                <span className="text-sm text-muted-foreground">{t.state}</span>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-sm">
                  <span className="rounded bg-secondary px-2 py-0.5 text-xs font-semibold text-secondary-foreground">{t.model}</span>
                  <span className="flex items-center gap-1 font-semibold text-accent opacity-0 transition group-hover:opacity-100">Enquire <ArrowRight className="h-4 w-4" /></span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const field = "w-full rounded-md border border-input bg-card px-3 py-2.5 text-sm";
  return (
    <section id="contact" className="bg-primary py-24 text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="eyebrow">Get in Touch</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">Franchise &amp; admission enquiries</h2>
          <p className="mt-4 opacity-80">Our partnerships team responds within two working days.</p>
          <div className="mt-10 space-y-6">
            {[["⌂", "Head Office", "Address line, City, State – PIN"], ["☎", "Phone", "+91 00000 00000"], ["✉", "Email", "franchise@idps.edu.in"]].map(([i, t, v]) => (
              <div key={t} className="flex gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-xl text-accent-foreground">{i}</span>
                <div><b>{t}</b><div className="opacity-80">{v}</div></div>
              </div>
            ))}
          </div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-4 rounded-xl bg-card p-8 text-card-foreground shadow-card sm:grid-cols-2">
          <label className="text-sm">Full Name<input required className={field} /></label>
          <label className="text-sm">Phone<input required type="tel" className={field} /></label>
          <label className="text-sm sm:col-span-2">Email<input required type="email" className={field} /></label>
          <label className="text-sm">Enquiry Type
            <select className={field}><option>Franchise</option><option>Admission</option><option>General</option></select>
          </label>
          <label className="text-sm">Preferred Territory / Branch
            <select className={field}>
              <optgroup label="Franchise territories">{TERRITORIES.map((t) => <option key={t.city}>{t.city}, {t.state} — {t.model}</option>)}</optgroup>
              <optgroup label="Branches">{BRANCHES.map((b) => <option key={b.id}>{b.name}</option>)}</optgroup>
            </select>
          </label>
          <label className="text-sm sm:col-span-2">Message<textarea rows={4} className={field} /></label>
          <button className="rounded-md bg-cta px-6 py-3 font-bold text-accent-foreground sm:col-span-2">Submit Enquiry</button>
          {sent && <p className="text-sm font-semibold text-accent sm:col-span-2">Thank you — our team will contact you shortly.</p>}
        </form>
      </div>
    </section>
  );
}
