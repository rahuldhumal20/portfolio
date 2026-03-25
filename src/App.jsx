import { useState, useEffect, useRef } from "react";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  YOUR DATA
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const ME = {
  name:         "Rahul Dhumal",
  role:         "Full Stack Developer",
  tagline:      "& Agentic AI Intern",
  bio1:         "Full Stack Developer with hands-on experience building scalable web applications using React.js, Node.js, Express.js, and MongoDB. Strong in developing secure REST APIs with JWT authentication, role-based access control, and efficient database design.",
  bio2:         "Currently working as an Agentic AI Intern at Innomatics Research Labs, building backend systems with FastAPI and Python. Passionate about performance, responsiveness, and solving real-world problems through clean code.",
  location:     "Pune, India",
  focus:        "Full Stack Web Development",
  availability: "Open to roles & freelance",
  email:        "rahuldhumal2003@gmail.com",
  phone:        "+91 9175859660",
  github:       "https://github.com/rahuldhumal20",
  linkedin:     "https://linkedin.com/in/rahul-dhumal-803421365",
  resumeUrl:    "/resume.pdf",
};

const STATS = [
  { id: 1, num: "5+",  label: "Projects Built"   },
  { id: 2, num: "15+", label: "APIs Developed"    },
  { id: 3, num: "2+",  label: "Years Coding"      },
];

const SKILLS = [
  {
    id: 1, category: "Frontend", color: "cyan", name: "UI Engineering",
    tags: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Vite", "Responsive Design"],
  },
  {
    id: 2, category: "Backend", color: "purple", name: "Server Architecture",
    tags: ["Node.js", "Express.js", "FastAPI", "RESTful APIs", "JWT Auth", "RBAC"],
  },
  {
    id: 3, category: "Database", color: "pink", name: "Data Layer",
    tags: ["MongoDB", "MongoDB Atlas", "MySQL"],
  },
  {
    id: 4, category: "Languages", color: "amber", name: "Programming",
    tags: ["JavaScript", "Python", "Java", "C++", "C"],
  },
  {
    id: 5, category: "DevOps & Tools", color: "cyan", name: "Infrastructure & Practices",
    tags: ["Git", "GitHub", "Netlify", "Render", "Linux", "MVC", "Agile", "DSA"],
  },
];

const EXPERIENCE = [
  {
    id: 1,
    role:    "Agentic AI Intern",
    company: "Innomatics Research Labs",
    period:  "Feb 2026 – Present",
    type:    "Remote",
    points: [
      "Developing backend systems using FastAPI and Python, implementing RESTful APIs and routing.",
      "Built 2+ backend applications including Cart System API and Grocery Delivery Backend using CRUD operations.",
      "Worked on data handling, backend logic development, and version control using Git/GitHub.",
    ],
  },
];

const PROJECTS = [
  {
    id: 1,
    type:  "Full Stack · Freelance",
    title: "Event Buzz",
    sub:   "Ticket Booking Platform",
    period:"Dec 2025 – Mar 2026",
    desc:  "Full-stack MERN ticket booking platform with JWT authentication and RBAC. Features an admin panel managing 10+ events, online & offline ticket bookings, and QR-based ticket verification tested across 100+ cases.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "JWT", "Netlify", "Render"],
    github: "https://github.com/rahuldhumal20",
    demo:   "",
  },
  {
    id: 2,
    type:  "Full Stack",
    title: "Vehica",
    sub:   "Smart Vehicle Recommendation System",
    period:"Feb 2025 – Mar 2025",
    desc:  "Scalable MERN vehicle recommendation platform managing 100+ records. Implemented category navigation, full-text search, and price filtering improving search accuracy by ~40%. 15+ RESTful APIs with secure admin dashboard.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript"],
    github: "https://github.com/rahuldhumal20",
    demo:   "",
  },
];

const EDUCATION = [
  {
    id: 1,
    degree: "M.Sc. Computer Application",
    school: "MES Abasaheb Garware College (Autonomous)",
    period: "2024 – 2026 (Expected)",
    detail: "Pune, India",
  },
  {
    id: 2,
    degree: "B.Sc. Statistics",
    school: "MES Abasaheb Garware College (Autonomous)",
    period: "2021 – 2024",
    detail: "First Class with Distinction · 8.08 CGPA",
  },
];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  COLOR MAP
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const COL = {
  cyan:   { dot:"#00c8ff", bg:"rgba(0,200,255,0.07)",  border:"rgba(0,200,255,0.2)",  text:"rgba(0,200,255,0.85)",  glow:"rgba(0,200,255,0.4)"  },
  purple: { dot:"#bf00ff", bg:"rgba(191,0,255,0.07)",  border:"rgba(191,0,255,0.2)",  text:"rgba(191,0,255,0.85)",  glow:"rgba(191,0,255,0.35)" },
  pink:   { dot:"#ff007a", bg:"rgba(255,0,122,0.07)",  border:"rgba(255,0,122,0.2)",  text:"rgba(255,0,122,0.85)",  glow:"rgba(255,0,122,0.35)" },
  amber:  { dot:"#ffaa00", bg:"rgba(255,170,0,0.07)",  border:"rgba(255,170,0,0.2)",  text:"rgba(255,170,0,0.85)",  glow:"rgba(255,170,0,0.35)" },
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  ICONS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const GithubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);
const LinkIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  DIVIDER
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function Divider() {
  return (
    <div style={{ position:"relative", zIndex:1, height:1, margin:"0 4rem",
      background:"linear-gradient(90deg,transparent,rgba(0,200,255,0.1) 20%,rgba(0,200,255,0.1) 80%,transparent)" }}>
      <span style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)",
        fontSize:7, color:"#00c8ff", background:"#020408", padding:"0 14px" }}>◆</span>
    </div>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  SECTION HEADER
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function SectionHeader({ label, title }) {
  return (
    <div style={{ marginBottom:"3.5rem" }}>
      <div style={ST.sectionLabel}><span style={{ color:"#bf00ff" }}>//</span> {label}</div>
      <h2 style={ST.sectionTitle}>{title}</h2>
    </div>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  COUNT-UP
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function CountUp({ target }) {
  const num    = parseInt(target);
  const suffix = target.replace(String(num), "");
  const [val, setVal] = useState(0);
  const elRef  = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      let startTs = null;
      const dur = 1400;
      const step = ts => {
        if (!startTs) startTs = ts;
        const prog = Math.min((ts - startTs) / dur, 1);
        const ease = 1 - Math.pow(1 - prog, 3);
        setVal(Math.floor(ease * num));
        if (prog < 1) requestAnimationFrame(step); else setVal(num);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.6 });
    if (elRef.current) obs.observe(elRef.current);
    return () => obs.disconnect();
  }, [num]);
  return <span ref={elRef} style={ST.statNum}>{val}{suffix}</span>;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  MAIN APP
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default function App() {
  const [activeNav, setActiveNav] = useState("hero");
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [cursorPos, setCursorPos] = useState({ x:-200, y:-200 });
  const [ringPos,   setRingPos]   = useState({ x:-200, y:-200 });
  const [hovering,  setHovering]  = useState(false);
  const mouseRef = useRef({ x:-200, y:-200 });
  const ringRef  = useRef({ x:-200, y:-200 });
  const rafRef   = useRef(null);

  useEffect(() => {
    const onMove = e => { mouseRef.current = { x:e.clientX, y:e.clientY }; setCursorPos({ x:e.clientX, y:e.clientY }); };
    window.addEventListener("mousemove", onMove);
    const tick = () => {
      ringRef.current.x += (mouseRef.current.x - ringRef.current.x) * 0.12;
      ringRef.current.y += (mouseRef.current.y - ringRef.current.y) * 0.12;
      setRingPos({ ...ringRef.current });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(rafRef.current); };
  }, []);

  useEffect(() => {
    const ids = ["hero","skills","experience","projects","education","about","contact"];
    const handler = () => {
      const y = window.scrollY + 130;
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && y >= el.offsetTop) { setActiveNav(ids[i]); break; }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = id => { document.getElementById(id)?.scrollIntoView({ behavior:"smooth" }); setMenuOpen(false); };
  const h = on => () => setHovering(on);
  const NAV_IDS = ["hero","skills","experience","projects","education","about","contact"];

  return (
    <div style={ST.root}>

      {/* CURSOR */}
      <div style={{ ...ST.cursorDot, left:cursorPos.x, top:cursorPos.y,
        width:hovering?14:9, height:hovering?14:9, background:hovering?"#00ffe7":"#1bd6da" }} />
      <div style={{ ...ST.cursorRing, left:ringPos.x, top:ringPos.y,
        width:hovering?54:32, height:hovering?54:32 }} />

      {/* NAV */}
      <nav style={ST.nav}>
        <button style={ST.logo} onClick={() => scrollTo("hero")} onMouseEnter={h(true)} onMouseLeave={h(false)}>
          RD.DEV
        </button>
        <ul style={ST.navList}>
          {NAV_IDS.map(id => (
            <li key={id}>
              <button style={{ ...ST.navLink, ...(activeNav===id ? ST.navLinkOn : {}) }}
                onClick={() => scrollTo(id)} onMouseEnter={h(true)} onMouseLeave={h(false)}>
                {id[0].toUpperCase()+id.slice(1)}
              </button>
            </li>
          ))}
        </ul>
        <button style={ST.burger} onClick={() => setMenuOpen(v => !v)} onMouseEnter={h(true)} onMouseLeave={h(false)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {menuOpen && (
        <div style={ST.drawer}>
          {NAV_IDS.map(id => (
            <button key={id} style={ST.drawerLink} onClick={() => scrollTo(id)}>
              {id[0].toUpperCase()+id.slice(1)}
            </button>
          ))}
        </div>
      )}

      {/* ━━━━━━ HERO ━━━━━━ */}
      <section id="hero" style={ST.heroWrap}>
        <div style={ST.orb1}/><div style={ST.orb2}/><div style={ST.orb3}/>
        <div style={ST.heroContent}>
          <div style={ST.heroTag}>
            <span style={ST.heroTagBar}/>
            Agentic AI Intern @ Innomatics Research Labs
          </div>
          <h1 style={ST.heroName}>Rahul<br/>Dhumal</h1>
          <p style={ST.heroRole}>
            {ME.role} <span style={{color:"#00ffe7"}}>{ME.tagline}</span>
          </p>
          <p style={ST.heroDesc}>{ME.bio1}</p>
          <div style={ST.heroBtns}>
            <button style={ST.btnPrimary} onClick={() => scrollTo("projects")}
              onMouseEnter={e=>{e.currentTarget.style.background="#00c8ff";e.currentTarget.style.color="#000";setHovering(true);}}
              onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.color="#00c8ff";setHovering(false);}}>
              View Projects
            </button>
            <button style={ST.btnSecondary} onClick={() => scrollTo("contact")}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(0,200,255,0.45)";e.currentTarget.style.color="#e0f4ff";setHovering(true);}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(0,200,255,0.15)";e.currentTarget.style.color="#5a8fa8";setHovering(false);}}>
              Get In Touch
            </button>
          </div>
          <div style={ST.heroStats}>
            {STATS.map(s => (
              <div key={s.id}>
                <CountUp target={s.num}/>
                <span style={ST.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider/>

      {/* ━━━━━━ SKILLS ━━━━━━ */}
      <section id="skills" style={ST.section}>
        <SectionHeader label="Tech Arsenal" title={<>Skills &amp; <span style={{color:"#00c8ff"}}>Stack</span></>}/>
        <div style={ST.skillsGrid}>
          {SKILLS.map(sk => {
            const c = COL[sk.color] || COL.cyan;
            return (
              <div key={sk.id} style={ST.card}
                onMouseEnter={e=>{e.currentTarget.style.borderColor=c.dot;e.currentTarget.style.transform="translateY(-5px)";e.currentTarget.style.boxShadow=`0 0 28px ${c.glow}`;setHovering(true);}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(0,200,255,0.15)";e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="none";setHovering(false);}}>
                <div style={{...ST.skillCat, color:c.dot}}>
                  <span style={{...ST.dot, background:c.dot, boxShadow:`0 0 8px ${c.dot}`}}/>
                  {sk.category}
                </div>
                <div style={ST.skillName}>{sk.name}</div>
                <div style={ST.tagRow}>
                  {sk.tags.map(t => (
                    <span key={t} style={{...ST.tag, background:c.bg, borderColor:c.border, color:c.text}}>{t}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Divider/>

      {/* ━━━━━━ EXPERIENCE ━━━━━━ */}
      <section id="experience" style={ST.section}>
        <SectionHeader label="Work History" title={<>Work <span style={{color:"#00c8ff"}}>Experience</span></>}/>
        <div style={ST.expList}>
          {EXPERIENCE.map(ex => (
            <div key={ex.id} style={ST.expCard}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="#00c8ff";e.currentTarget.style.boxShadow="0 0 28px rgba(0,200,255,0.15)";setHovering(true);}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(0,200,255,0.15)";e.currentTarget.style.boxShadow="none";setHovering(false);}}>
              <div style={ST.expHeader}>
                <div>
                  <div style={ST.expRole}>{ex.role}</div>
                  <div style={ST.expCompany}>{ex.company}</div>
                </div>
                <div style={{textAlign:"right"}}>
                  <div style={ST.expPeriod}>{ex.period}</div>
                  <div style={ST.expType}>{ex.type}</div>
                </div>
              </div>
              <ul style={ST.expPoints}>
                {ex.points.map((pt,i) => (
                  <li key={i} style={ST.expPoint}>
                    <span style={ST.expBullet}>▹</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Divider/>

      {/* ━━━━━━ PROJECTS ━━━━━━ */}
      <section id="projects" style={ST.section}>
        <SectionHeader label="Selected Work" title={<>Featured <span style={{color:"#00c8ff"}}>Projects</span></>}/>
        <div style={ST.projectsGrid}>
          {PROJECTS.map((p,idx) => (
            <div key={p.id} style={ST.projectCard}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="#bf00ff";e.currentTarget.style.transform="translateY(-6px)";e.currentTarget.style.boxShadow="0 0 32px rgba(191,0,255,0.22)";setHovering(true);}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(0,200,255,0.15)";e.currentTarget.style.transform="";e.currentTarget.style.boxShadow="none";setHovering(false);}}>
              <div style={ST.projectNum}>0{idx+1}</div>
              <div style={ST.projectType}>{p.type}</div>
              <h3 style={ST.projectTitle}>{p.title}</h3>
              <div style={ST.projectSub}>{p.sub} · {p.period}</div>
              <p style={ST.projectDesc}>{p.desc}</p>
              <div style={ST.tagRow}>
                {p.stack.map(t => <span key={t} style={ST.stackPill}>{t}</span>)}
              </div>
              <div style={ST.projectLinks}>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" style={ST.projectLink}
                    onMouseEnter={e=>{e.currentTarget.style.color="#00c8ff";setHovering(true);}}
                    onMouseLeave={e=>{e.currentTarget.style.color="#5a8fa8";setHovering(false);}}>
                    <GithubIcon/> GitHub
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" style={ST.projectLink}
                    onMouseEnter={e=>{e.currentTarget.style.color="#00c8ff";setHovering(true);}}
                    onMouseLeave={e=>{e.currentTarget.style.color="#5a8fa8";setHovering(false);}}>
                    <LinkIcon/> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider/>

      {/* ━━━━━━ EDUCATION ━━━━━━ */}
      <section id="education" style={ST.section}>
        <SectionHeader label="Academic Background" title={<>My <span style={{color:"#00c8ff"}}>Education</span></>}/>
        <div style={ST.eduGrid}>
          {EDUCATION.map(ed => (
            <div key={ed.id} style={ST.eduCard}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="#00ffe7";e.currentTarget.style.boxShadow="0 0 24px rgba(0,255,231,0.12)";setHovering(true);}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(0,200,255,0.15)";e.currentTarget.style.boxShadow="none";setHovering(false);}}>
              <div style={ST.eduPeriod}>{ed.period}</div>
              <div style={ST.eduDegree}>{ed.degree}</div>
              <div style={ST.eduSchool}>{ed.school}</div>
              <div style={ST.eduDetail}>{ed.detail}</div>
            </div>
          ))}
        </div>
      </section>

      <Divider/>

      {/* ━━━━━━ ABOUT ━━━━━━ */}
      <section id="about" style={ST.aboutGrid}>
        <div style={ST.aboutVisual}>
          <div style={ST.frame}>
            <div style={ST.frameGlow}/>
            <div style={ST.frameScan}/>
            <span style={ST.frameInitials}>RD</span>
            <span style={{...ST.corner, top:-1, left:-1, borderTop:"2px solid #00c8ff", borderLeft:"2px solid #00c8ff"}}/>
            <span style={{...ST.corner, bottom:-1, right:-1, borderBottom:"2px solid #00c8ff", borderRight:"2px solid #00c8ff"}}/>
          </div>
        </div>
        <div>
          <SectionHeader label="Identity" title={<>About <span style={{color:"#00c8ff"}}>Me</span></>}/>
          <p style={ST.bio}>{ME.bio1}</p>
          <p style={{...ST.bio, marginTop:12}}>{ME.bio2}</p>
          <div style={ST.detailList}>
            {[
              ["Location",  ME.location],
              ["Education", "M.Sc. Computer Application (2026)"],
              ["Focus",     ME.focus],
              ["Available", ME.availability],
            ].map(([label,val]) => (
              <div key={label} style={ST.detailRow}>
                <span style={ST.detailLabel}>{label}</span>
                <span style={{...ST.detailVal, ...(label==="Available"?{color:"#00ffe7"}:{})}}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider/>

      {/* ━━━━━━ CONTACT ━━━━━━ */}
      <section id="contact" style={{...ST.section, textAlign:"center"}}>
        <div style={{maxWidth:700, margin:"0 auto"}}>
          <h2 style={ST.contactTitle}>Let's Build Something</h2>
          <p style={ST.contactSub}>
            Looking for a Full Stack Developer or want to collaborate on something exciting?
            Reach out — I'm actively open to opportunities.
          </p>
          <div style={ST.contactGrid}>
            <a href={`mailto:${ME.email}`} style={ST.contactCard}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="#00c8ff";e.currentTarget.style.background="rgba(0,200,255,0.06)";setHovering(true);}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(0,200,255,0.15)";e.currentTarget.style.background="rgba(0,200,255,0.02)";setHovering(false);}}>
              <span style={ST.contactIcon}>✉</span>
              <span style={ST.contactCardLabel}>Email</span>
              <span style={{...ST.contactCardVal, fontSize:"0.65rem"}}>{ME.email}</span>
            </a>
            <a href={`tel:${ME.phone}`} style={ST.contactCard}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="#00ffe7";e.currentTarget.style.background="rgba(0,255,231,0.04)";setHovering(true);}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(0,200,255,0.15)";e.currentTarget.style.background="rgba(0,200,255,0.02)";setHovering(false);}}>
              <span style={ST.contactIcon}>📱</span>
              <span style={ST.contactCardLabel}>Phone</span>
              <span style={ST.contactCardVal}>{ME.phone}</span>
            </a>
            <a href={ME.github} target="_blank" rel="noreferrer" style={ST.contactCard}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="#bf00ff";e.currentTarget.style.background="rgba(191,0,255,0.06)";setHovering(true);}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(0,200,255,0.15)";e.currentTarget.style.background="rgba(0,200,255,0.02)";setHovering(false);}}>
              <span style={ST.contactIcon}>⌥</span>
              <span style={ST.contactCardLabel}>GitHub</span>
              <span style={ST.contactCardVal}>rahuldhumal20</span>
            </a>
            <a href={ME.linkedin} target="_blank" rel="noreferrer" style={ST.contactCard}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="#00ffe7";e.currentTarget.style.background="rgba(0,255,231,0.04)";setHovering(true);}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(0,200,255,0.15)";e.currentTarget.style.background="rgba(0,200,255,0.02)";setHovering(false);}}>
              <span style={ST.contactIcon}>◈</span>
              <span style={ST.contactCardLabel}>LinkedIn</span>
              <span style={ST.contactCardVal}>rahul-dhumal</span>
            </a>
            <a href={ME.resumeUrl} target="_blank" rel="noreferrer" style={{...ST.contactCard, gridColumn:"span 2"}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="#ff007a";e.currentTarget.style.background="rgba(255,0,122,0.05)";setHovering(true);}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(0,200,255,0.15)";e.currentTarget.style.background="rgba(0,200,255,0.02)";setHovering(false);}}>
              <span style={ST.contactIcon}>↓</span>
              <span style={ST.contactCardLabel}>Resume</span>
              <span style={ST.contactCardVal}>Download PDF</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={ST.footer}>
        <span style={ST.footerTxt}>
          © {new Date().getFullYear()} <span style={{color:"#00c8ff"}}>Rahul Dhumal</span> — All systems operational.
        </span>
        <span style={ST.footerTxt}>
          Built with <span style={{color:"#00c8ff"}}>React + Vite</span> — Deployed on Netlify / Render
        </span>
      </footer>
    </div>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  STYLES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const MONO  = "'Share Tech Mono', monospace";
const ORBIT = "'Orbitron', monospace";

const ST = {
  root:        { background:"#020408", color:"#e0f4ff", fontFamily:"'Inter',sans-serif", fontWeight:300, overflowX:"hidden", cursor:"none", minHeight:"100vh" },
  cursorDot:   { position:"fixed", borderRadius:"50%", pointerEvents:"none", zIndex:9999, transform:"translate(-50%,-50%)", transition:"width .15s,height .15s,background .2s", boxShadow:"0 0 14px rgba(0,200,255,0.6)", mixBlendMode:"screen" },
  cursorRing:  { position:"fixed", border:"1px solid rgba(0,200,255,0.45)", borderRadius:"50%", pointerEvents:"none", zIndex:9998, transform:"translate(-50%,-50%)", transition:"width .2s,height .2s" },
  nav:         { position:"fixed", top:0, left:0, right:0, zIndex:100, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"1rem 3rem", background:"rgba(2,4,8,0.92)", backdropFilter:"blur(20px)", borderBottom:"1px solid rgba(0,200,255,0.08)" },
  logo:        { fontFamily:ORBIT, fontWeight:900, fontSize:"0.95rem", color:"#00c8ff", textShadow:"0 0 18px rgba(0,200,255,0.5)", letterSpacing:"0.18em", background:"none", border:"none", cursor:"none" },
  navList:     { display:"flex", gap:"1.6rem", listStyle:"none", margin:0, padding:0 },
  navLink:     { fontFamily:MONO, fontSize:"0.68rem", letterSpacing:"0.12em", color:"#5a8fa8", background:"none", border:"none", cursor:"none", textTransform:"uppercase", transition:"color .2s" },
  navLinkOn:   { color:"#00c8ff", textShadow:"0 0 10px rgba(0,200,255,0.5)" },
  burger:      { display:"none", background:"none", border:"none", color:"#5a8fa8", fontSize:"1.1rem", cursor:"none" },
  drawer:      { position:"fixed", top:58, left:0, right:0, zIndex:99, background:"rgba(4,12,20,0.97)", borderBottom:"1px solid rgba(0,200,255,0.1)", display:"flex", flexDirection:"column", padding:"1rem 2rem", gap:"0.75rem" },
  drawerLink:  { fontFamily:MONO, fontSize:"0.78rem", letterSpacing:"0.14em", color:"#5a8fa8", background:"none", border:"none", cursor:"none", textAlign:"left", textTransform:"uppercase", padding:"0.45rem 0" },
  heroWrap:    { position:"relative", minHeight:"100vh", display:"flex", alignItems:"center", padding:"8rem 4rem 4rem", overflow:"hidden", zIndex:1 },
  orb1:        { position:"absolute", width:520, height:520, borderRadius:"50%", background:"rgba(0,200,255,0.055)", filter:"blur(90px)", top:"3%", right:"-12%", animation:"orbFloat 8s ease-in-out infinite", pointerEvents:"none" },
  orb2:        { position:"absolute", width:420, height:420, borderRadius:"50%", background:"rgba(191,0,255,0.045)", filter:"blur(90px)", bottom:"8%", left:"-6%", animation:"orbFloat 10s ease-in-out -3s infinite", pointerEvents:"none" },
  orb3:        { position:"absolute", width:300, height:300, borderRadius:"50%", background:"rgba(255,0,122,0.035)", filter:"blur(80px)", top:"45%", left:"38%", animation:"orbFloat 7s ease-in-out -5s infinite", pointerEvents:"none" },
  heroContent: { maxWidth:880, position:"relative", zIndex:1 },
  heroTag:     { fontFamily:MONO, fontSize:"0.7rem", letterSpacing:"0.28em", color:"#00c8ff", textTransform:"uppercase", marginBottom:"1.6rem", display:"flex", alignItems:"center", gap:"1rem" },
  heroTagBar:  { display:"block", width:40, height:1, background:"#00c8ff", boxShadow:"0 0 8px rgba(0,200,255,0.6)", flexShrink:0 },
  heroName:    { fontFamily:ORBIT, fontSize:"clamp(3rem,8vw,6.5rem)", fontWeight:900, lineHeight:1.0, letterSpacing:"-0.02em", background:"linear-gradient(135deg,#fff 0%,#00c8ff 55%,#00ffe7 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", marginBottom:"0.5rem" },
  heroRole:    { fontFamily:MONO, fontSize:"clamp(0.85rem,2vw,1.2rem)", color:"#5a8fa8", letterSpacing:"0.1em", marginBottom:"2rem" },
  heroDesc:    { fontSize:"1rem", color:"rgba(224,244,255,0.58)", maxWidth:560, lineHeight:1.88, marginBottom:"3rem" },
  heroBtns:    { display:"flex", gap:"1.2rem", flexWrap:"wrap" },
  btnPrimary:  { fontFamily:MONO, fontSize:"0.78rem", letterSpacing:"0.2em", textTransform:"uppercase", padding:"0.85rem 2rem", background:"transparent", border:"1px solid #00c8ff", color:"#00c8ff", cursor:"none", transition:"background .3s,color .3s", clipPath:"polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))" },
  btnSecondary:{ fontFamily:MONO, fontSize:"0.78rem", letterSpacing:"0.2em", textTransform:"uppercase", padding:"0.85rem 2rem", background:"rgba(0,200,255,0.04)", border:"1px solid rgba(0,200,255,0.15)", color:"#5a8fa8", cursor:"none", transition:"all .3s", clipPath:"polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px))" },
  heroStats:   { display:"flex", gap:"3rem", marginTop:"4rem", paddingTop:"2rem", borderTop:"1px solid rgba(0,200,255,0.1)" },
  statNum:     { fontFamily:ORBIT, fontSize:"2rem", fontWeight:700, color:"#00c8ff", display:"block", textShadow:"0 0 20px rgba(0,200,255,0.4)" },
  statLabel:   { fontSize:"0.7rem", letterSpacing:"0.12em", color:"#5a8fa8", textTransform:"uppercase" },
  section:     { position:"relative", zIndex:1, padding:"7rem 4rem" },
  sectionLabel:{ fontFamily:MONO, fontSize:"0.7rem", letterSpacing:"0.42em", color:"#00c8ff", textTransform:"uppercase", marginBottom:"0.6rem", display:"flex", alignItems:"center", gap:"0.6rem" },
  sectionTitle:{ fontFamily:ORBIT, fontSize:"clamp(1.8rem,4vw,2.6rem)", fontWeight:700, color:"#e0f4ff", letterSpacing:"-0.02em" },
  // Skills
  skillsGrid:  { display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(255px,1fr))", gap:"1.4rem" },
  card:        { background:"#061220", border:"1px solid rgba(0,200,255,0.15)", padding:"2rem", position:"relative", clipPath:"polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,14px 100%,0 calc(100% - 14px))", transition:"border-color .3s,transform .3s,box-shadow .3s" },
  skillCat:    { fontFamily:MONO, fontSize:"0.67rem", letterSpacing:"0.25em", textTransform:"uppercase", marginBottom:"1rem", display:"flex", alignItems:"center", gap:"0.5rem" },
  dot:         { width:6, height:6, borderRadius:"50%", flexShrink:0 },
  skillName:   { fontSize:"1.05rem", color:"#e0f4ff", marginBottom:"1.2rem" },
  tagRow:      { display:"flex", flexWrap:"wrap", gap:"0.4rem" },
  tag:         { fontFamily:MONO, fontSize:"0.68rem", letterSpacing:"0.05em", padding:"0.23rem 0.72rem", border:"1px solid", transition:"all .2s" },
  // Experience
  expList:     { display:"flex", flexDirection:"column", gap:"1.5rem" },
  expCard:     { background:"#061220", border:"1px solid rgba(0,200,255,0.15)", padding:"2.2rem 2.5rem", clipPath:"polygon(0 0,calc(100% - 18px) 0,100% 18px,100% 100%,18px 100%,0 calc(100% - 18px))", transition:"border-color .3s,box-shadow .3s" },
  expHeader:   { display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:"1.5rem", flexWrap:"wrap", gap:"1rem" },
  expRole:     { fontFamily:ORBIT, fontSize:"1.1rem", fontWeight:700, color:"#e0f4ff", marginBottom:"0.3rem" },
  expCompany:  { fontFamily:MONO, fontSize:"0.78rem", letterSpacing:"0.1em", color:"#00c8ff", textShadow:"0 0 10px rgba(0,200,255,0.3)" },
  expPeriod:   { fontFamily:MONO, fontSize:"0.72rem", letterSpacing:"0.08em", color:"#5a8fa8", marginBottom:"0.25rem" },
  expType:     { fontFamily:MONO, fontSize:"0.68rem", letterSpacing:"0.12em", color:"rgba(0,200,255,0.5)", textTransform:"uppercase" },
  expPoints:   { listStyle:"none", padding:0, margin:0, display:"flex", flexDirection:"column", gap:"0.7rem" },
  expPoint:    { display:"flex", gap:"0.75rem", fontSize:"0.9rem", lineHeight:1.75, color:"rgba(224,244,255,0.62)" },
  expBullet:   { color:"#00c8ff", flexShrink:0, marginTop:"2px", fontSize:"0.75rem" },
  // Projects
  projectsGrid:{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(340px,1fr))", gap:"1.8rem" },
  projectCard: { background:"#061220", border:"1px solid rgba(0,200,255,0.15)", padding:"2.5rem", position:"relative", overflow:"hidden", clipPath:"polygon(0 0,calc(100% - 18px) 0,100% 18px,100% 100%,18px 100%,0 calc(100% - 18px))", transition:"all .3s" },
  projectNum:  { fontFamily:ORBIT, fontSize:"2.8rem", fontWeight:900, color:"rgba(0,200,255,0.05)", position:"absolute", top:"1rem", right:"1.5rem", lineHeight:1 },
  projectType: { fontFamily:MONO, fontSize:"0.67rem", letterSpacing:"0.25em", color:"#bf00ff", textTransform:"uppercase", marginBottom:"0.6rem", textShadow:"0 0 10px rgba(191,0,255,0.35)" },
  projectTitle:{ fontFamily:ORBIT, fontSize:"1.2rem", fontWeight:700, color:"#e0f4ff", marginBottom:"0.3rem" },
  projectSub:  { fontFamily:MONO, fontSize:"0.7rem", color:"#5a8fa8", letterSpacing:"0.06em", marginBottom:"1rem" },
  projectDesc: { fontSize:"0.87rem", lineHeight:1.78, color:"rgba(224,244,255,0.5)", marginBottom:"1.3rem" },
  stackPill:   { fontFamily:MONO, fontSize:"0.66rem", letterSpacing:"0.08em", padding:"0.22rem 0.65rem", background:"rgba(191,0,255,0.07)", border:"1px solid rgba(191,0,255,0.2)", color:"rgba(191,0,255,0.8)" },
  projectLinks:{ display:"flex", gap:"1.2rem", marginTop:"1.5rem" },
  projectLink: { fontFamily:MONO, fontSize:"0.7rem", letterSpacing:"0.15em", color:"#5a8fa8", textDecoration:"none", textTransform:"uppercase", display:"inline-flex", alignItems:"center", gap:5, transition:"color .2s" },
  // Education
  eduGrid:     { display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))", gap:"1.5rem" },
  eduCard:     { background:"#061220", border:"1px solid rgba(0,200,255,0.15)", padding:"2.2rem", clipPath:"polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,14px 100%,0 calc(100% - 14px))", transition:"border-color .3s,box-shadow .3s" },
  eduPeriod:   { fontFamily:MONO, fontSize:"0.68rem", letterSpacing:"0.2em", color:"#5a8fa8", textTransform:"uppercase", marginBottom:"0.8rem" },
  eduDegree:   { fontFamily:ORBIT, fontSize:"1.05rem", fontWeight:700, color:"#e0f4ff", marginBottom:"0.4rem" },
  eduSchool:   { fontSize:"0.88rem", color:"rgba(224,244,255,0.65)", marginBottom:"0.5rem", lineHeight:1.5 },
  eduDetail:   { fontFamily:MONO, fontSize:"0.72rem", color:"#00c8ff", letterSpacing:"0.06em" },
  // About
  aboutGrid:   { position:"relative", zIndex:1, padding:"7rem 4rem", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"5rem", alignItems:"center" },
  aboutVisual: { display:"flex", justifyContent:"center" },
  frame:       { width:300, height:360, border:"1px solid rgba(0,200,255,0.15)", position:"relative", overflow:"hidden", clipPath:"polygon(0 0,calc(100% - 28px) 0,100% 28px,100% 100%,28px 100%,0 calc(100% - 28px))", background:"#061220", display:"flex", alignItems:"center", justifyContent:"center" },
  frameGlow:   { position:"absolute", inset:0, background:"radial-gradient(ellipse at 50% 50%,rgba(0,200,255,0.07) 0%,transparent 70%)", animation:"glowPulse 3s ease-in-out infinite" },
  frameScan:   { position:"absolute", inset:0, backgroundImage:"repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,200,255,0.025) 3px,rgba(0,200,255,0.025) 4px)", animation:"scanMove 4s linear infinite" },
  frameInitials:{ fontFamily:ORBIT, fontSize:"5rem", fontWeight:900, color:"#00c8ff", opacity:0.12, letterSpacing:"-0.05em", position:"relative", zIndex:1 },
  corner:      { position:"absolute", width:18, height:18, boxShadow:"0 0 12px rgba(0,200,255,0.4)" },
  bio:         { fontSize:"0.95rem", lineHeight:1.88, color:"rgba(224,244,255,0.6)" },
  detailList:  { display:"flex", flexDirection:"column", gap:"0.75rem", marginTop:"1.6rem" },
  detailRow:   { display:"flex", alignItems:"center", gap:"1rem", fontFamily:MONO, fontSize:"0.78rem" },
  detailLabel: { color:"#5a8fa8", letterSpacing:"0.1em", minWidth:90 },
  detailVal:   { color:"#e0f4ff" },
  // Contact
  contactTitle:{ fontFamily:ORBIT, fontSize:"clamp(2rem,5vw,3.2rem)", fontWeight:900, lineHeight:1.1, marginBottom:"1rem", background:"linear-gradient(135deg,#e0f4ff 0%,#ff007a 100%)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" },
  contactSub:  { color:"rgba(224,244,255,0.42)", fontSize:"0.95rem", lineHeight:1.8, marginBottom:"3rem" },
  contactGrid: { display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"1.2rem" },
  contactCard: { display:"flex", flexDirection:"column", alignItems:"center", gap:"0.5rem", padding:"2rem 1rem", background:"rgba(0,200,255,0.02)", border:"1px solid rgba(0,200,255,0.15)", textDecoration:"none", clipPath:"polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))", transition:"border-color .3s,background .3s" },
  contactIcon: { fontSize:"1.3rem", color:"#00c8ff", marginBottom:"0.2rem" },
  contactCardLabel:{ fontFamily:MONO, fontSize:"0.68rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"#5a8fa8" },
  contactCardVal:  { fontFamily:MONO, fontSize:"0.7rem", color:"#e0f4ff", letterSpacing:"0.04em", textAlign:"center" },
  // Footer
  footer:      { position:"relative", zIndex:1, padding:"2rem 4rem", borderTop:"1px solid rgba(0,200,255,0.08)", display:"flex", alignItems:"center", justifyContent:"space-between", background:"rgba(2,4,8,0.7)", flexWrap:"wrap", gap:"0.5rem" },
  footerTxt:   { fontFamily:MONO, fontSize:"0.68rem", letterSpacing:"0.1em", color:"#5a8fa8" },
};