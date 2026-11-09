import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, ShieldCheck, Terminal, Download, Menu, Network, Bug, Search, LockKeyhole } from "lucide-react";
import "./styles.css";

const projects = [
  { n:"01", tag:"NETWORK SECURITY", title:"Network Traffic Analysis", desc:"Captured and inspected network packets with Wireshark to understand protocols, traffic patterns and communication behaviour.", tools:["Wireshark","TCP/IP","Packet Analysis"], icon:Network },
  { n:"02", tag:"VULNERABILITY ASSESSMENT", title:"Vulnerability Assessment", desc:"Performed a lab-based vulnerability assessment using Nessus and documented identified security findings.", tools:["Nessus","Risk Review","Reporting"], icon:Search },
  { n:"03", tag:"WEB APPLICATION SECURITY", title:"Web Application Penetration Testing", desc:"Practised web security testing in a controlled lab, exploring common application weaknesses and documenting observations.", tools:["OWASP ZAP","Burp Suite","OWASP"], icon:Bug },
  { n:"04", tag:"DENIAL-OF-SERVICE STUDY", title:"DDoS Attack Simulation", desc:"Studied GoldenEye, Hulk and LOIC behaviour in an isolated, authorized lab environment, focusing on traffic patterns and defensive awareness.", tools:["Kali Linux","Wireshark","Lab Analysis"], icon:Terminal },
  { n:"05", tag:"LINUX SECURITY LAB", title:"Metasploitable 2 Assessment", desc:"Conducted service discovery and a VNC security assessment against a deliberately vulnerable lab target using Kali Linux.", tools:["Nmap","Metasploit","Kali Linux"], icon:LockKeyhole },
  { n:"06", tag:"WINDOWS SECURITY", title:"Windows Security Assessment", desc:"Assessed a Windows lab machine, reviewing exposed services and network-level security behaviour with standard assessment tools.", tools:["Nmap","Enum4linux","Nessus"], icon:ShieldCheck }
];

const certificates = [
  { title:"35 Days Network Course", issuer:"TGM Infotech Pvt. Ltd.", date:"8 Feb – 11 Mar 2026 · Grade A+", image:"/certificates/tgm-35-days-network-course.jpg" },
  { title:"Cybersecurity — Online Skilling Course", issuer:"Tech Mahindra Foundation · Skill India Digital Hub", date:"Completed: 9 Jul 2026 · 10 hours", image:"/certificates/skill-india-cybersecurity.jpg" },
  { title:"Certified Cybersecurity Foundations (CORE)", issuer:"Hackviser", date:"Issued: 21 Jul 2026", image:"/certificates/hackviser-core.jpg" },
  { title:"Qualys Certified Specialist", issuer:"Qualys", date:"Completed: 24 Aug 2026 · Expires: 23 Aug 2028", image:"/certificates/qualys-certified-specialist.jpg" },
  { title:"Cyber Security Professional Program", issuer:"SkillLogic", date:"20 Jul – 8 Oct 2026 · 40 hours classroom training", image:"/certificates/skilllogic-cyber-security-professional-program.jpg" },
  { title:"Certified Cyber Security Analyst (C3SA)", issuer:"CyberWarFare Labs", date:"Issued: 12 Oct 2026", image:"/certificates/cwl-c3sa.jpg" },
  { title:"Cybersecurity Fundamentals Associate (OCFA)", issuer:"OPSWAT Academy", date:"Issued: 21 Oct 2026 · Expires: 21 Oct 2027", image:"/certificates/opswat-ocfa.jpg" }
];

const skills = ["Penetration Testing","Vulnerability Assessment","Network Security","Web Application Security","Reconnaissance & Scanning","Enumeration","Packet Analysis","Security Reporting","Linux Fundamentals","Python (Basic)"];

function App() {
  return <div className="app">
    <div className="grid-bg" />
    <header className="nav wrap">
      <a className="brand" href="#home"><span className="brand-mark">M<span>_</span></span><span>MAHESH<span className="muted">.SEC</span></span></a>
      <nav><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#certifications">Certifications</a><a href="#contact">Contact</a></nav>
      <a className="nav-cta" href="mailto:made42435@gmail.com">Let's connect <ArrowUpRight size={15}/></a>
    </header>

    <main>
      <section id="home" className="hero wrap">
        <motion.div className="hero-copy" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
          <div className="eyebrow"><span className="pulse"/> CYBERSECURITY PORTFOLIO <span className="line"/></div>
          <h1>Securing systems.<br/><span>Thinking like</span><br/>an attacker.</h1>
          <p className="hero-sub">I'm <strong>Mahesh Ade</strong>, a Computer Science Engineering student passionate about ethical hacking, penetration testing and understanding how systems can be made more secure.</p>
          <div className="hero-actions"><a className="btn primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a><a className="btn secondary" href="mailto:made42435@gmail.com"><Mail size={16}/> Contact me</a><a className="btn secondary" href="/Mahesh_Ade_Resume.pdf" target="_blank" rel="noreferrer"><Download size={16}/> Download Resume</a></div>
          <div className="hero-social"><a href="https://github.com/mahesh262005" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a><a href="https://www.linkedin.com/in/mahesh-ade" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a></div>
        </motion.div>
        <motion.div className="terminal-card" initial={{opacity:0,x:25}} animate={{opacity:1,x:0}} transition={{duration:.8,delay:.15}}>
          <div className="terminal-top"><div className="dots"><i/><i/><i/></div><span>mahesh@security-lab: ~</span><Terminal size={15}/></div>
          <div className="terminal-body">
            <div className="term-muted"># profile_snapshot.sh</div>
            <p><b>user</b> <span>=</span> "Mahesh Ade"</p>
            <p><b>status</b> <span>=</span> "Currently seeking entry-level opportunities"</p>
            <p><b>roles</b> <span>=</span> ["Cybersecurity Analyst", "VAPT Analyst", "Penetration Tester"]</p>
            <p><b>credentials</b> <span>=</span> ["Certified Cyber Security Analyst", "Cyber Security Professional"]</p>
            <div className="term-divider"/>
            <div className="status"><span className="pulse"/> OPEN TO ENTRY-LEVEL ROLES</div>
            <div className="cursor-line"><span>root@mahesh:~$</span> <i className="cursor"/></div>
          </div>
          <div className="terminal-foot"><span>● SYSTEM READY</span><span>INDIA / IST</span></div>
        </motion.div>
        <div className="hero-bottom"><span>01 / INTRODUCTION</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section id="about" className="section wrap">
        <div className="section-label">01 — ABOUT ME</div>
        <div className="about-grid"><h2>Curiosity is my<br/><em>first line of defence.</em></h2><div className="about-text"><p>I'm a B.E. Computer Science Engineering student building practical cybersecurity skills through hands-on labs, security assessments and continuous learning.</p><p>My current focus is penetration testing: reconnaissance, scanning, enumeration, vulnerability assessment and clear technical reporting. I value responsible testing, documented evidence and security-first thinking.</p><div className="about-meta"><div><span>EDUCATION</span><b>B.E. — Computer Science Engineering</b></div><div><span>PRIMARY INTEREST</span><b>Ethical Hacking & Penetration Testing</b></div></div></div></div>
      </section>

      <section id="skills" className="section wrap">
        <div className="section-label">02 — TECHNICAL TOOLKIT</div><div className="section-heading"><h2>Tools of the trade<span>.</span></h2><p>Technologies and concepts I've been learning and practising.</p></div>
        <div className="skills-grid">{skills.map((s,i)=><div className="skill" key={s}><span className="skill-index">{String(i+1).padStart(2,"0")}</span><span>{s}</span><ArrowUpRight size={15}/></div>)}</div>
      </section>

      <section id="projects" className="section wrap">
        <div className="section-label">03 — SELECTED WORK</div><div className="section-heading"><h2>Labs & projects<span>.</span></h2><p>Hands-on practice in controlled environments, with an emphasis on learning and reporting.</p></div>
        <div className="projects-grid">{projects.map((p)=><article className="project" key={p.n}><div className="project-top"><span>{p.n} / {p.tag}</span><p.icon size={21}/></div><h3>{p.title}</h3><p className="project-desc">{p.desc}</p><div className="tags">{p.tools.map(t=><span key={t}>{t}</span>)}</div></article>)}</div>
        <p className="disclaimer">All security testing described here was performed for learning in authorized, controlled lab environments.</p>
      </section>


      <section id="certifications" className="section wrap">
        <div className="section-label">04 — CERTIFICATIONS</div>
        <div className="section-heading"><h2>Credentials & learning<span>.</span></h2><p>Certificates and training records shared for this portfolio. Select any card to view the original image.</p></div>
        <div className="cert-grid">{certificates.map((c,i)=><a className="cert-card" href={c.image} target="_blank" rel="noreferrer" key={c.title}>
          <div className="cert-image"><img src={c.image} alt={`${c.title} certificate`} loading="lazy"/><span>VIEW CERTIFICATE ↗</span></div>
          <div className="cert-info"><div className="cert-number">{String(i+1).padStart(2,"0")} / {c.issuer}</div><h3>{c.title}</h3><p>{c.date}</p></div>
        </a>)}</div>
      </section>

      <section id="learning" className="section wrap learning">
        <div className="section-label">05 — LEARNING & DEVELOPMENT</div><div className="learning-card"><ShieldCheck size={28}/><div><h3>Continuous learning in cybersecurity</h3><p>Cybersecurity training and practical coursework through SkillLogic, alongside independent lab practice. Verified certificate details can be added here as certificate records are finalized.</p></div></div>
      </section>

      <section id="contact" className="contact wrap">
        <div className="section-label">06 — GET IN TOUCH</div><h2>Let's build a<br/><em>more secure</em> digital world.</h2><p>Have an opportunity, project discussion or a cybersecurity learning collaboration in mind? Feel free to reach out.</p>
        <a className="email-link" href="mailto:made42435@gmail.com"><Mail size={19}/> made42435@gmail.com <ArrowUpRight size={18}/></a>
        <div className="contact-links"><a href="/Mahesh_Ade_Resume.pdf" target="_blank" rel="noreferrer"><Download size={17}/> Resume <ArrowUpRight size={14}/></a><a href="https://www.linkedin.com/in/mahesh-ade" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={14}/></a><a href="https://github.com/mahesh262005" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={14}/></a></div>
      </section>
    </main>
    <footer className="footer wrap"><a className="brand" href="#home"><span className="brand-mark">M<span>_</span></span><span>MAHESH<span className="muted">.SEC</span></span></a><span>© {new Date().getFullYear()} Mahesh Ade. Built with curiosity & care.</span><a href="#home">BACK TO TOP ↑</a></footer>
  </div>
}

createRoot(document.getElementById("root")).render(<App />);
