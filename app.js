// ============================================================
// ICONS — hand-drawn-feel SVGs (16x16 viewport, 1.6 stroke)
// ============================================================
const _i=(p)=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
const ICONS={
  // Pages
  home:_i('<path d="M4 11 L12 4 L20 11 V20 H14 V14 H10 V20 H4 Z"/>'),
  career:_i('<path d="M12 2 L14 8 L20 9 L15 13 L17 20 L12 16 L7 20 L9 13 L4 9 L10 8 Z"/>'),
  tools:_i('<path d="M14 6 L18 2 L22 6 L18 10 Z"/><path d="M16 8 L8 16"/><path d="M2 22 L8 16 L4 12"/>'),
  course_free:_i('<path d="M3 6 L12 3 L21 6 L12 9 Z"/><path d="M7 8 V14 C7 14 9 16 12 16 C15 16 17 14 17 14 V8"/><path d="M21 6 V13"/>'),
  course_paid:_i('<circle cx="12" cy="12" r="9"/><path d="M12 6 V18"/><path d="M9 8 H14 C15.5 8 16 9 16 10 C16 11 15.5 12 14 12 H10 C8.5 12 8 13 8 14 C8 15 8.5 16 10 16 H15"/>'),
  youtube:_i('<rect x="2" y="6" width="20" height="13" rx="3"/><path d="M10 9 L16 12.5 L10 16 Z" fill="currentColor"/>'),
  ctf:_i('<path d="M5 4 V20"/><path d="M5 4 H17 L13 8 L17 12 H5"/>'),
  practice:_i('<path d="M14 6 L18 2 L22 6 L18 10 Z"/><path d="M16 8 L8 16"/><path d="M2 22 L8 16 L4 12"/>'),
  bug:_i('<circle cx="12" cy="12" r="5"/><path d="M12 7 V4"/><path d="M9 5 L8 3"/><path d="M15 5 L16 3"/><path d="M7 11 L4 11"/><path d="M17 11 L20 11"/><path d="M7 14 L4 16"/><path d="M17 14 L20 16"/><path d="M12 17 V20"/>'),
  repo:_i('<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10 H21"/><path d="M7 7 H7.01"/><path d="M11 7 H11.01"/>'),
  project:_i('<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9 H21"/><path d="M9 21 V9"/>'),
  tutorial:_i('<path d="M4 6 V20 C4 20 6 18 12 18 C18 18 20 20 20 20 V6 C20 6 18 4 12 4 C6 4 4 6 4 6 Z"/><path d="M12 4 V18"/>'),
  book:_i('<path d="M4 4 H10 C12 4 12 6 12 6 V20 C12 20 12 18 10 18 H4 Z"/><path d="M20 4 H14 C12 4 12 6 12 6 V20 C12 20 12 18 14 18 H20 Z"/>'),
  cloud:_i('<path d="M7 18 H17 C19.5 18 21 16 21 14 C21 11 18.5 10 17 10 C17 7 14.5 5 12 5 C9 5 7 7 6.5 9.5 C4 9.5 3 11.5 3 13.5 C3 16 5 18 7 18 Z"/>'),
  jobs:_i('<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7 V5 C9 4 10 4 10 4 H14 C14 4 15 4 15 5 V7"/><path d="M3 13 H21"/>'),
  scholarship:_i('<path d="M3 9 L12 5 L21 9 L12 13 Z"/><path d="M7 11 V15 C7 15 9 17 12 17 C15 17 17 15 17 15 V11"/>'),
  community:_i('<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 19 C3 16 5 14 9 14 C13 14 15 16 15 19"/><path d="M14 18 C14 16 16 14 19 14 C21 14 22 16 22 18"/>'),
  news:_i('<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M7 8 H17"/><path d="M7 12 H17"/><path d="M7 16 H13"/>'),
  standards:_i('<path d="M5 3 H17 L19 5 V21 H5 Z"/><path d="M9 8 H15"/><path d="M9 12 H15"/><path d="M9 16 H13"/>'),
  // Careers
  soc:_i('<path d="M12 2 L4 6 V12 C4 17 8 21 12 22 C16 21 20 17 20 12 V6 Z"/>'),
  pt:_i('<rect x="6" y="11" width="12" height="9" rx="2"/><path d="M9 11 V7 C9 5 10 4 12 4 C14 4 15 5 15 7 V11"/>'),
  cloud_c:_i('<path d="M7 18 H17 C19.5 18 21 16 21 14 C21 11 18.5 10 17 10 C17 7 14.5 5 12 5 C9 5 7 7 6.5 9.5 C4 9.5 3 11.5 3 13.5 C3 16 5 18 7 18 Z"/>'),
  grc:_i('<path d="M6 3 H16 L18 5 V21 H6 Z"/><path d="M9 9 H15"/><path d="M9 13 H15"/><path d="M9 17 H13"/>'),
  mal:_i('<circle cx="12" cy="12" r="6"/><path d="M12 4 V6"/><path d="M12 18 V20"/><path d="M4 12 H6"/><path d="M18 12 H20"/><circle cx="10" cy="11" r="1"/><circle cx="14" cy="11" r="1"/><path d="M9 15 Q12 13 15 15"/>'),
  dfir:_i('<circle cx="11" cy="11" r="6"/><path d="M21 21 L15.5 15.5"/><path d="M11 8 V14"/><path d="M8 11 H14"/>'),
  app:_i('<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M9 18 V21"/><path d="M15 18 V21"/><path d="M7 21 H17"/><path d="M8 9 L11 12 L8 15"/><path d="M14 15 H17"/>'),
  arch:_i('<path d="M3 21 H21"/><path d="M5 21 V10 L12 5 L19 10 V21"/><path d="M9 21 V14 H15 V21"/>'),
  bb:_i('<circle cx="12" cy="12" r="9"/><path d="M12 7 V17"/><path d="M9 9 H14 C15.5 9 16 10 16 11 C16 12 15.5 13 14 13 H10 C8.5 13 8 14 8 15 C8 16 8.5 17 10 17 H15"/>'),
  red:_i('<path d="M5 3 V21"/><path d="M5 4 H17 L13 9 L17 14 H5"/><circle cx="13" cy="8" r="1.5" fill="currentColor"/>'),
  blue:_i('<path d="M12 2 L4 6 V12 C4 17 8 21 12 22 C16 21 20 17 20 12 V6 Z"/><circle cx="12" cy="11" r="3"/>'),
  // Path step icons
  step_found:_i('<path d="M12 3 V8"/><path d="M9 5 L12 8 L15 5"/><path d="M5 21 H19"/><path d="M5 21 V12 H19 V21"/>'),
  step_core:_i('<path d="M4 6 V20 C4 20 6 18 12 18 C18 18 20 20 20 20 V6 C20 6 18 4 12 4 C6 4 4 6 4 6 Z"/><path d="M12 4 V18"/>'),
  step_hands:_i('<path d="M14 6 L18 2 L22 6 L18 10 Z"/><path d="M16 8 L8 16"/><path d="M2 22 L8 16 L4 12"/>'),
  step_cert:_i('<path d="M12 2 L14 8 L20 9 L15 13 L17 20 L12 16 L7 20 L9 13 L4 9 L10 8 Z"/>'),
  step_signal:_i('<path d="M5 18 L9 14 L13 16 L19 8"/><circle cx="19" cy="8" r="1.5" fill="currentColor"/>'),
  // UI
  sun:_i('<circle cx="12" cy="12" r="4"/><path d="M12 2 V5"/><path d="M12 19 V22"/><path d="M2 12 H5"/><path d="M19 12 H22"/><path d="M5 5 L7 7"/><path d="M17 17 L19 19"/><path d="M19 5 L17 7"/><path d="M7 17 L5 19"/>'),
  moon:_i('<path d="M21 13 A9 9 0 1 1 11 3 A7 7 0 0 0 21 13 Z"/>'),
};
const ICONS_chevron='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9 L12 15 L18 9"/></svg>';

// ============================================================
// CONFIG
// ============================================================
const PAGES=[
{id:"landing",name:"Home",icon:"home"},
{id:"career-guide",name:"Career Guide",icon:"career"},
{id:"learn-tools",name:"Tools to Learn",icon:"tools"},
{id:"free-courses",name:"Free Courses",icon:"course_free"},
{id:"paid-courses",name:"Paid Courses & Certs",icon:"course_paid"},
{id:"youtube",name:"YouTube Channels",icon:"youtube"},
{id:"ctf",name:"CTF & Wargames",icon:"ctf"},
{id:"practice",name:"Practice Labs",icon:"practice"},
{id:"bug-bounty",name:"Bug Bounty",icon:"bug"},
{id:"tools",name:"Tools & Repos",icon:"repo"},
{id:"projects",name:"Project Ideas",icon:"project"},
{id:"tutorials",name:"Tutorials & Guides",icon:"tutorial"},
{id:"books",name:"Books",icon:"book"},
{id:"cloud",name:"Cloud Security",icon:"cloud"},
{id:"careers",name:"Jobs & Careers",icon:"jobs"},
{id:"scholarships",name:"Scholarships",icon:"scholarship"},
{id:"community",name:"Communities",icon:"community"},
{id:"news",name:"News & Podcasts",icon:"news"},
{id:"standards",name:"Standards",icon:"standards"},
];
const CAREERS=[
{id:"soc",n:"SOC Analyst",i:"soc"},
{id:"pt",n:"Penetration Tester",i:"pt"},
{id:"cloud",n:"Cloud Security",i:"cloud_c"},
{id:"grc",n:"GRC / Compliance",i:"grc"},
{id:"mal",n:"Malware Analyst",i:"mal"},
{id:"dfir",n:"DFIR",i:"dfir"},
{id:"app",n:"AppSec Engineer",i:"app"},
{id:"arch",n:"Security Architect",i:"arch"},
{id:"bb",n:"Bug Bounty Hunter",i:"bb"},
{id:"red",n:"Red Team",i:"red"},
{id:"blue",n:"Blue Team",i:"blue"},
];
const CTF_CATS=["web","crypto","forensics","re","pwn","osint","misc"];
// ============================================================
// DATA: {t,u,d,p(pages),sub,c(cost),cl(costLabel),l(levels),cp(careerPaths),ctf}
// ============================================================
const R=[
// ====== FREE COURSES ======
{t:"Cybrary",u:"https://www.cybrary.it",d:"Free and paid cybersecurity training. Large catalog covering Security+ to SOC analysis with hands-on labs.",p:["free-courses"],sub:null,c:"freemium",cl:"Free Tier",l:["beg","int"],cp:["soc","blue"],ctf:[]},
{t:"SANS Cyber Aces",u:"https://www.cyberaces.org",d:"Free introductory courses from SANS covering OS, networking, and system administration fundamentals.",p:["free-courses"],sub:null,c:"free",cl:"Free",l:["beg"],cp:["soc","blue","pt"],ctf:[]},
{t:"Google Cybersecurity Certificate",u:"https://www.coursera.org/professional-certificates/google-cybersecurity",d:"Google's beginner-friendly professional certificate: security fundamentals, Linux, SQL, Python, SIEM, and incident response.",p:["free-courses"],sub:null,c:"free",cl:"Free to Audit",l:["beg"],cp:["soc","blue"],ctf:[]},
{t:"IBM Cybersecurity Analyst",u:"https://www.coursera.org/professional-certificates/ibm-cybersecurity-analyst",d:"IBM's professional certificate: network security, incident response, threat intelligence, and pentesting fundamentals.",p:["free-courses"],sub:null,c:"free",cl:"Free to Audit",l:["beg","int"],cp:["soc","blue"],ctf:[]},
{t:"MIT 6.858 Computer Systems Security",u:"https://ocw.mit.edu/courses/6-858-computer-systems-security-fall-2014/",d:"Full MIT course: buffer overflows, web security, network security, OS security. Lectures, labs, and readings.",p:["free-courses"],sub:null,c:"free",cl:"Free",l:["int","adv"],cp:["app","arch"],ctf:[]},
{t:"MIT 6.857 Network & Computer Security",u:"https://ocw.mit.edu/courses/6-857-network-and-computer-security-spring-2014/",d:"MIT's applied cryptography and network security course. Encryption, authentication protocols, security engineering.",p:["free-courses"],sub:null,c:"free",cl:"Free",l:["int","adv"],cp:["arch"],ctf:[]},
{t:"Stanford CS155",u:"https://cs155.stanford.edu",d:"Stanford's undergraduate security course: web attacks, network protocols, software security. Materials publicly available.",p:["free-courses"],sub:null,c:"free",cl:"Free",l:["int"],cp:["app","pt"],ctf:[]},
{t:"PortSwigger Web Security Academy",u:"https://portswigger.net/web-security",d:"Free, world-class web security training from the Burp Suite makers. 200+ interactive labs covering every major web vulnerability.",p:["free-courses","practice"],sub:null,c:"free",cl:"Free",l:["beg","int","adv"],cp:["app","bb","pt"],ctf:[]},
{t:"OpenSecurityTraining2",u:"https://opensecuritytraining.info/Training.html",d:"Free, university-grade courses: x86/x64 architecture, reverse engineering, malware analysis, exploitation.",p:["free-courses"],sub:null,c:"free",cl:"Free",l:["beg","int","adv"],cp:["mal","red"],ctf:[]},
{t:"CISA Cybersecurity Training",u:"https://www.cisa.gov/cybersecurity-training-exercises",d:"Free training from CISA (US Govt): ICS security, phishing, incident handling, and cybersecurity awareness.",p:["free-courses"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:["soc","blue","grc"],ctf:[]},
{t:"Fortinet NSE Training",u:"https://training.fortinet.com",d:"Free self-paced courses on network security, cloud security, and security operations. NSE 1-3 certifications are free.",p:["free-courses"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:["blue","soc"],ctf:[]},
{t:"Cisco Networking Academy",u:"https://www.netacad.com",d:"Free and paid networking fundamentals and cybersecurity courses, including Intro to Cybersecurity and CyberOps Associate.",p:["free-courses"],sub:null,c:"freemium",cl:"Free Tier",l:["beg","int"],cp:["soc","blue","arch"],ctf:[]},
{t:"Splunk Free Training",u:"https://education.splunk.com/free",d:"Free courses on Splunk SIEM, SPL queries, dashboards, and security use cases. Essential for aspiring SOC analysts.",p:["free-courses"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:["soc","blue","dfir"],ctf:[]},
{t:"Elastic Security Training",u:"https://www.elastic.co/training/free",d:"Free courses on Elastic SIEM, Elasticsearch, and Kibana for security monitoring and detection engineering.",p:["free-courses"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:["soc","blue"],ctf:[]},
{t:"Harvard CS50 Cybersecurity",u:"https://cs50.harvard.edu/cybersecurity/",d:"Harvard's free intro: securing accounts, data, systems, software, and preserving privacy. Part of the CS50 family.",p:["free-courses"],sub:null,c:"free",cl:"Free",l:["beg"],cp:[],ctf:[]},
{t:"freeCodeCamp Information Security",u:"https://www.freecodecamp.org/learn/information-security/",d:"Free certification: Python security projects, Nmap pentesting, and secure coding practices through hands-on projects.",p:["free-courses"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:["app","pt"],ctf:[]},
{t:"Codecademy \u2014 Intro to Cybersecurity",u:"https://www.codecademy.com/learn/introduction-to-cybersecurity",d:"Interactive browser-based course covering cybersecurity fundamentals, common threats, and defensive concepts.",p:["free-courses"],sub:null,c:"free",cl:"Free",l:["beg"],cp:[],ctf:[]},
{t:"edX Cybersecurity Courses",u:"https://www.edx.org/learn/cybersecurity",d:"MOOCs from MIT, RIT, UMD and more. Not security-specific but excellent foundational CS, networking, and Linux courses.",p:["free-courses"],sub:null,c:"free",cl:"Free to Audit",l:["beg","int"],cp:[],ctf:[]},
{t:"CodePath Cybersecurity",u:"https://www.codepath.org/courses/cybersecurity",d:"Free, comprehensive cybersecurity course for students with mentorship, project-based learning, and career support.",p:["free-courses"],sub:null,c:"free",cl:"Free (Students)",l:["beg"],cp:[],ctf:[]},
{t:"APIsec University",u:"https://www.apisecuniversity.com",d:"Free courses on API security testing, OWASP API Top 10, and securing REST/GraphQL APIs.",p:["free-courses"],sub:null,c:"free",cl:"Free",l:["int"],cp:["app","bb"],ctf:[]},
{t:"Stanford Cryptography I",u:"https://www.coursera.org/learn/crypto",d:"Dan Boneh's rigorous cryptography course: symmetric/asymmetric encryption, key exchange, cryptographic protocols.",p:["free-courses"],sub:null,c:"free",cl:"Free to Audit",l:["int"],cp:["arch"],ctf:[]},
{t:"pwn.college",u:"https://pwn.college",d:"Free ASU coursework on binary exploitation, systems security, reverse engineering with auto-graded challenges.",p:["free-courses","practice"],sub:null,c:"free",cl:"Free",l:["int","adv"],cp:["red","pt","mal"],ctf:[]},
{t:"AttackIQ Academy",u:"https://www.academy.attackiq.com",d:"Free courses on breach and attack simulation, MITRE ATT&CK framework, and purple teaming.",p:["free-courses"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:["blue","red","soc"],ctf:[]},
{t:"Microsoft Security Training",u:"https://learn.microsoft.com/en-us/security/",d:"Free Microsoft learning paths: Azure security, Defender, Sentinel, Entra ID, and Zero Trust architecture.",p:["free-courses"],sub:null,c:"free",cl:"Free",l:["int"],cp:["cloud","blue","soc"],ctf:[]},
{t:"CrowdStrike University",u:"https://www.crowdstrike.com/university/",d:"Free training on endpoint security, threat intelligence, and incident response from a leading security vendor.",p:["free-courses"],sub:null,c:"free",cl:"Free",l:["int"],cp:["soc","blue","dfir"],ctf:[]},
{t:"Palo Alto Networks Beacon",u:"https://beacon.paloaltonetworks.com",d:"Free digital learning: firewall administration, cloud security, SOC operations from Palo Alto Networks.",p:["free-courses"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:["soc","blue","cloud"],ctf:[]},
{t:"Juniper Open Learning",u:"https://learningportal.juniper.net",d:"Free self-paced security courses and certification prep for Juniper security products and networking fundamentals.",p:["free-courses"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:["blue"],ctf:[]},
{t:"FedVTE (Federal Virtual Training)",u:"https://fedvte.usalearning.gov",d:"Free cybersecurity training for US government employees and veterans. Ethical hacking to cloud security.",p:["free-courses"],sub:null,c:"free",cl:"Free (US Gov/Vets)",l:["beg","int","adv"],cp:["soc","blue"],ctf:[]},
{t:"SANS New to Cyber Field Manual",u:"https://www.sans.org/mlp/new-to-cyber/",d:"Curated free resources, webcasts, and posters for those entering cybersecurity. Great starting point from SANS.",p:["free-courses"],sub:null,c:"free",cl:"Free",l:["beg"],cp:[],ctf:[]},
{t:"MOSSE Institute Free Content",u:"https://www.mosse-institute.com",d:"Practical cybersecurity training with free intro content covering cloud security, DFIR, threat hunting, and pentesting.",p:["free-courses"],sub:null,c:"freemium",cl:"Free Tier",l:["beg","int"],cp:["dfir","cloud"],ctf:[]},
{t:"Kontra Application Security",u:"https://application.security",d:"Interactive application security training with real-world vulnerability scenarios in a browser-based environment.",p:["free-courses"],sub:null,c:"freemium",cl:"Free Tier",l:["int"],cp:["app"],ctf:[]},
{t:"Snyk Learn",u:"https://learn.snyk.io",d:"Free developer security education platform covering secure coding, vulnerability types, and supply chain security.",p:["free-courses"],sub:null,c:"free",cl:"Free",l:["int"],cp:["app"],ctf:[]},
// ====== PAID COURSES ======
{t:"SANS Institute",u:"https://www.sans.org",d:"Gold standard in cybersecurity training. SEC401, SEC504, SEC560, FOR508 lead to GIAC certifications. ~$7,000-9,000/course.",p:["paid-courses"],sub:"Training Providers",c:"paid",cl:"$$$",l:["int","adv"],cp:["soc","pt","dfir","blue"],ctf:[]},
{t:"Offensive Security (OffSec)",u:"https://www.offsec.com",d:"Creators of Kali Linux and OSCP. PEN-200, WEB-300, EXP-301, SOC-200. Industry gold standard for pentesting.",p:["paid-courses"],sub:"Training Providers",c:"paid",cl:"$$",l:["int","adv"],cp:["pt","red"],ctf:[]},
{t:"INE / eLearnSecurity",u:"https://ine.com",d:"eJPT (beginner), eCPPT (intermediate), eWPT (web), eCDFP (forensics). Affordable OffSec alternative. ~$749/yr.",p:["paid-courses"],sub:"Training Providers",c:"paid",cl:"$$",l:["beg","int","adv"],cp:["pt","app","dfir"],ctf:[]},
{t:"PentesterLab",u:"https://pentesterlab.com",d:"Hands-on web security from basic injection to advanced JWT, deserialization, and crypto attacks. ~$20/mo.",p:["paid-courses","practice"],sub:"Training Providers",c:"paid",cl:"$",l:["beg","int","adv"],cp:["app","bb","pt"],ctf:[]},
{t:"Hack The Box Academy",u:"https://academy.hackthebox.com",d:"Structured modules on pentesting, bug bounty, SOC analysis. University-grade content with hands-on exercises.",p:["paid-courses","practice"],sub:"Training Providers",c:"freemium",cl:"Free Tier",l:["beg","int","adv"],cp:["pt","soc","bb"],ctf:[]},
{t:"TryHackMe",u:"https://tryhackme.com",d:"Guided, browser-based training paths for offensive and defensive security. Best on-ramp for beginners. ~$14/mo.",p:["paid-courses","practice"],sub:"Training Providers",c:"freemium",cl:"Free Tier",l:["beg","int"],cp:["pt","soc","blue"],ctf:[]},
{t:"TCM Security Academy",u:"https://tcm-sec.com",d:"Affordable, practical courses by The Cyber Mentor: ethical hacking, OSINT, AD attacks. Offers PNPT certification.",p:["paid-courses"],sub:"Training Providers",c:"paid",cl:"$",l:["beg","int"],cp:["pt","red"],ctf:[]},
{t:"Zero Point Security (CRTO)",u:"https://training.zeropointsecurity.co.uk",d:"Red team operations training. CRTO covers Cobalt Strike C2, Active Directory attacks, and evasion techniques.",p:["paid-courses"],sub:"Training Providers",c:"paid",cl:"$$",l:["adv"],cp:["red"],ctf:[]},
{t:"Altered Security (CRTP/CRTE)",u:"https://www.alteredsecurity.com",d:"Active Directory attack & defense by Nikhil Mittal. CRTP is the go-to cert for AD pentesting skills.",p:["paid-courses"],sub:"Training Providers",c:"paid",cl:"$$",l:["adv"],cp:["red","pt"],ctf:[]},
{t:"Sektor7 Institute",u:"https://institute.sektor7.net",d:"Advanced malware dev and red team: shellcode, process injection, evasion, Windows internals.",p:["paid-courses"],sub:"Training Providers",c:"paid",cl:"$$",l:["adv"],cp:["red","mal"],ctf:[]},
{t:"Antisyphon Training",u:"https://www.antisyphontraining.com",d:"Affordable, community-focused by John Strand. Pay-what-you-can for blue team, OSINT, active defense.",p:["paid-courses"],sub:"Training Providers",c:"paid",cl:"$",l:["beg","int","adv"],cp:["blue","soc"],ctf:[]},
{t:"Just Hacking Training",u:"https://justhacking.com",d:"Training platform by John Hammond. High-quality, practical cybersecurity courses from one of the most respected educators.",p:["paid-courses"],sub:"Training Providers",c:"paid",cl:"$$",l:["beg","int","adv"],cp:["pt","red"],ctf:[]},
{t:"HackingHub",u:"https://hackinghub.io",d:"Hands-on labs applying cybersecurity skills in practice. Real-world web app security and network pentesting scenarios.",p:["paid-courses","practice"],sub:"Training Providers",c:"freemium",cl:"Free Tier",l:["beg","int"],cp:["pt","app"],ctf:[]},
{t:"Subverted",u:"https://subverted.io",d:"Interactive cybersecurity training platform with hands-on labs and challenges through realistic scenarios.",p:["paid-courses","practice"],sub:"Training Providers",c:"paid",cl:"Paid",l:["int"],cp:["pt"],ctf:[]},
{t:"SpecterOps Training",u:"https://specterops.io/training/",d:"Premium red team and adversary simulation training from the BloodHound creators. AD attacks, detection engineering. ~$3,000-4,000.",p:["paid-courses"],sub:"Training Providers",c:"paid",cl:"$$$$",l:["adv"],cp:["red"],ctf:[]},
// Certs
{t:"CompTIA Security+",u:"https://www.comptia.org/certifications/security",d:"The foundational cybersecurity cert. Vendor-neutral, DoD 8570 compliant, minimum for entry-level roles. ~$392.",p:["paid-courses"],sub:"Industry Certifications",c:"paid",cl:"$$",l:["beg"],cp:["soc","blue","grc"],ctf:[]},
{t:"CompTIA CySA+",u:"https://www.comptia.org/certifications/cybersecurity-analyst",d:"Intermediate blue team cert: threat detection, security analytics, incident response, vulnerability management.",p:["paid-courses"],sub:"Industry Certifications",c:"paid",cl:"$$",l:["int"],cp:["soc","blue"],ctf:[]},
{t:"CompTIA PenTest+",u:"https://www.comptia.org/certifications/pentest",d:"Intermediate pentesting cert: planning, scoping, recon, exploitation, and reporting.",p:["paid-courses"],sub:"Industry Certifications",c:"paid",cl:"$$",l:["int"],cp:["pt"],ctf:[]},
{t:"CompTIA CASP+",u:"https://www.comptia.org/certifications/comptia-advanced-security-practitioner",d:"Advanced-level: enterprise security, risk management, security architecture. DoD 8570 compliant.",p:["paid-courses"],sub:"Industry Certifications",c:"paid",cl:"$$",l:["adv"],cp:["arch","grc"],ctf:[]},
{t:"OSCP",u:"https://www.offsec.com/courses/pen-200/",d:"Most respected hands-on pentesting cert. 24-hour practical exam. Career game-changer. ~$1,649+.",p:["paid-courses"],sub:"Industry Certifications",c:"paid",cl:"$$$",l:["int","adv"],cp:["pt","red"],ctf:[]},
{t:"CISSP (ISC2)",u:"https://www.isc2.org/certifications/cissp",d:"Gold standard management-level security cert. 8 domains. Required for senior roles. ~$749.",p:["paid-courses"],sub:"Industry Certifications",c:"paid",cl:"$$$",l:["adv"],cp:["arch","grc"],ctf:[]},
{t:"ISC2 CC (Certified in Cybersecurity)",u:"https://www.isc2.org/certifications/cc",d:"Entry-level ISC2 cert. Free exam and training currently offered. No experience required.",p:["paid-courses"],sub:"Industry Certifications",c:"free",cl:"Free",l:["beg"],cp:["soc","blue"],ctf:[]},
{t:"CISM (ISACA)",u:"https://www.isaca.org/credentialing/cism",d:"Certified Information Security Manager. Management-focused: governance, risk, incident management.",p:["paid-courses"],sub:"Industry Certifications",c:"paid",cl:"$$$",l:["adv"],cp:["grc","arch"],ctf:[]},
{t:"CEH (EC-Council)",u:"https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",d:"Certified Ethical Hacker. Pentesting methodology and tools. Widely recognized in government/DoD.",p:["paid-courses"],sub:"Industry Certifications",c:"paid",cl:"$$$",l:["int"],cp:["pt"],ctf:[]},
{t:"BTL1 / BTL2",u:"https://securityblue.team",d:"Blue Team Level 1 & 2. Practical defensive certs: SIEM, incident response, threat hunting, forensics.",p:["paid-courses"],sub:"Industry Certifications",c:"paid",cl:"$$",l:["beg","int"],cp:["soc","blue","dfir"],ctf:[]},
{t:"PNPT (TCM Security)",u:"https://certifications.tcm-sec.com/pnpt/",d:"Practical Network Penetration Tester. 5-day practical exam: OSINT, external/internal pentesting, AD, reporting.",p:["paid-courses"],sub:"Industry Certifications",c:"paid",cl:"$",l:["int"],cp:["pt","red"],ctf:[]},
{t:"AWS Security Specialty",u:"https://aws.amazon.com/certification/certified-security-specialty/",d:"AWS certification for securing workloads: IAM, logging, data protection, incident response.",p:["paid-courses"],sub:"Industry Certifications",c:"paid",cl:"$$",l:["int","adv"],cp:["cloud"],ctf:[]},
{t:"Azure AZ-500",u:"https://learn.microsoft.com/en-us/credentials/certifications/azure-security-engineer/",d:"Microsoft Azure Security Engineer: identity, platform protection, security operations, data security.",p:["paid-courses"],sub:"Industry Certifications",c:"paid",cl:"$$",l:["int","adv"],cp:["cloud"],ctf:[]},
// ====== YOUTUBE ======
{t:"NetworkChuck",u:"https://www.youtube.com/c/NetworkChuck",d:"Energetic, beginner-friendly networking, ethical hacking, Linux, and career advice.",p:["youtube"],sub:null,c:"free",cl:"Free",l:["beg"],cp:[],ctf:[]},
{t:"John Hammond",u:"https://www.youtube.com/c/JohnHammond010",d:"CTF walkthroughs, malware analysis, tool tutorials, and career advice. Consistently excellent.",p:["youtube"],sub:null,c:"free",cl:"Free",l:["beg","int","adv"],cp:["pt","mal","red"],ctf:[]},
{t:"IppSec",u:"https://www.youtube.com/c/ippsec",d:"Detailed HTB walkthroughs. Widely considered the best educational content for pentesting methodology.",p:["youtube"],sub:null,c:"free",cl:"Free",l:["int","adv"],cp:["pt","red"],ctf:[]},
{t:"The Cyber Mentor",u:"https://www.youtube.com/c/TheCyberMentor",d:"Practical ethical hacking by Heath Adams (TCM Security). Full free courses on OSINT, web hacking, AD.",p:["youtube"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:["pt","red"],ctf:[]},
{t:"David Bombal",u:"https://www.youtube.com/c/DavidBombal",d:"Networking and cybersecurity tutorials, certification guidance, expert interviews, hands-on demos.",p:["youtube"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:[],ctf:[]},
{t:"LiveOverflow",u:"https://www.youtube.com/c/LiveOverflow",d:"Technical deep-dives on binary exploitation, CTF techniques, browser hacking, and security research.",p:["youtube"],sub:null,c:"free",cl:"Free",l:["int","adv"],cp:["red","pt"],ctf:[]},
{t:"Professor Messer",u:"https://www.professormesser.com",d:"The go-to free resource for CompTIA certification prep (Security+, Network+, A+). Complete structured courses.",p:["youtube"],sub:null,c:"free",cl:"Free",l:["beg"],cp:["soc","blue"],ctf:[]},
{t:"13Cubed",u:"https://www.youtube.com/c/13Cubed",d:"High-quality digital forensics and incident response. Windows artifacts, memory analysis, DFIR tooling.",p:["youtube"],sub:null,c:"free",cl:"Free",l:["int","adv"],cp:["dfir"],ctf:[]},
{t:"STOK",u:"https://www.youtube.com/c/STOKfredrik",d:"Bug bounty hunting: methodology, tools, live hacking sessions.",p:["youtube"],sub:null,c:"free",cl:"Free",l:["int"],cp:["bb"],ctf:[]},
{t:"Nahamsec",u:"https://www.youtube.com/c/Nahamsec",d:"Bug bounty tutorials, live recon, hunter interviews. Runs NahamCon and NahamSec CTF events.",p:["youtube"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:["bb","app"],ctf:[]},
{t:"HackerSploit",u:"https://www.youtube.com/c/HackerSploit",d:"Ethical hacking and pentesting tutorials: Metasploit, Nmap, Burp Suite, Linux security.",p:["youtube"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:["pt"],ctf:[]},
{t:"Computerphile",u:"https://www.youtube.com/user/Computerphile",d:"University of Nottingham: accessible CS and security concept explanations. Great fundamentals.",p:["youtube"],sub:null,c:"free",cl:"Free",l:["beg"],cp:[],ctf:[]},
{t:"Black Hills InfoSec",u:"https://www.youtube.com/c/BlackHillsInformationSecurity",d:"Webcasts from John Strand's team on active defense, pentesting, and security operations.",p:["youtube"],sub:null,c:"free",cl:"Free",l:["int"],cp:["blue","pt"],ctf:[]},
{t:"Simply Cyber",u:"https://www.youtube.com/c/SimplyCyber",d:"Career guidance, daily news, and GRC content. Great for career changers and non-technical roles.",p:["youtube"],sub:null,c:"free",cl:"Free",l:["beg"],cp:["grc"],ctf:[]},
{t:"Hak5",u:"https://www.youtube.com/c/Hak5",d:"Hacking tools, techniques, and gadgets. WiFi Pineapple, USB Rubber Ducky hardware hacking.",p:["youtube"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:[],ctf:[]},
{t:"Tib3rius",u:"https://www.youtube.com/c/Tib3rius",d:"OSCP-focused content. Known for privilege escalation courses and practical pentesting methodology.",p:["youtube"],sub:null,c:"free",cl:"Free",l:["int","adv"],cp:["pt","red"],ctf:[]},
{t:"cyb3rmaddy",u:"https://www.youtube.com/@cyb3rmaddy",d:"Learning resources, career advice, CTF walkthroughs, and the infosec journey.",p:["youtube"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:[],ctf:[]},
{t:"DC CyberSec",u:"https://www.youtube.com/c/Haborcs",d:"Career advice, certification reviews, and practical tips for breaking into cybersecurity.",p:["youtube"],sub:null,c:"free",cl:"Free",l:["beg"],cp:[],ctf:[]},
{t:"InsiderPhD",u:"https://www.youtube.com/c/InsiderPhD",d:"Bug bounty hunting from an academic perspective. Methodology, tools, and live hacking streams.",p:["youtube"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:["bb"],ctf:[]},
{t:"Day Cyberwox",u:"https://www.youtube.com/@DayCyberwox",d:"SOC analyst tutorials, Azure Sentinel labs, and cybersecurity career transition content.",p:["youtube"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:["soc","blue"],ctf:[]},
// ====== CTF & WARGAMES ======
{t:"PicoCTF",u:"https://picoctf.org",d:"Beginner-friendly CTF by Carnegie Mellon. Web, forensics, crypto, RE, binary exploitation.",p:["ctf"],sub:null,c:"free",cl:"Free",l:["beg"],cp:["pt"],ctf:["web","forensics","crypto","re","pwn"]},
{t:"CTFtime",u:"https://ctftime.org",d:"Central hub for CTF competitions worldwide. Calendar, team rankings, and writeups.",p:["ctf"],sub:null,c:"free",cl:"Free",l:["beg","int","adv"],cp:[],ctf:["web","crypto","forensics","re","pwn","osint","misc"]},
{t:"OverTheWire",u:"https://overthewire.org/wargames/",d:"SSH-based wargames: Linux, networking, security. Start with Bandit, then Natas, Leviathan.",p:["ctf"],sub:null,c:"free",cl:"Free",l:["beg","int","adv"],cp:["pt"],ctf:["web","crypto","pwn","misc"]},
{t:"UnderTheWire",u:"https://underthewire.tech",d:"PowerShell-focused wargames modeled after OverTheWire. Windows/PowerShell security skills.",p:["ctf"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:["blue","soc"],ctf:["misc"]},
{t:"Root-Me",u:"https://www.root-me.org",d:"400+ challenges: web, network, forensics, steganography, cryptanalysis. Large active community.",p:["ctf"],sub:null,c:"free",cl:"Free",l:["beg","int","adv"],cp:["pt"],ctf:["web","crypto","forensics","re","pwn","misc"]},
{t:"Ringzer0 CTF",u:"https://ringzer0ctf.com",d:"300+ permanent challenges: coding, cryptography, web exploitation, forensics, malware analysis.",p:["ctf"],sub:null,c:"free",cl:"Free",l:["int","adv"],cp:[],ctf:["web","crypto","forensics","re","misc"]},
{t:"Hack This Site",u:"https://www.hackthissite.org",d:"Oldest hacking challenge site (est. 2003). Web hacking, application cracking, steganography.",p:["ctf"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:[],ctf:["web","misc"]},
{t:"CryptoHack",u:"https://cryptohack.org",d:"Learn cryptography through interactive challenges: classical ciphers through RSA, ECC, AES attacks.",p:["ctf"],sub:null,c:"free",cl:"Free",l:["beg","int","adv"],cp:[],ctf:["crypto"]},
{t:"pwnable.kr",u:"https://pwnable.kr",d:"Binary exploitation: basic buffer overflows to advanced kernel exploitation.",p:["ctf"],sub:null,c:"free",cl:"Free",l:["int","adv"],cp:["red"],ctf:["pwn"]},
{t:"pwnable.tw",u:"https://pwnable.tw",d:"Advanced binary exploitation challenges, harder than pwnable.kr. Popular in competitive CTF.",p:["ctf"],sub:null,c:"free",cl:"Free",l:["adv"],cp:["red"],ctf:["pwn"]},
{t:"Exploit Education",u:"https://exploit.education",d:"VMs with progressive binary exploitation: stack overflows, heap, format strings, networking.",p:["ctf"],sub:null,c:"free",cl:"Free",l:["beg","int","adv"],cp:["red"],ctf:["pwn","re"]},
{t:"Microcorruption",u:"https://microcorruption.com",d:"Embedded security CTF: exploit a simulated lock's firmware in a browser-based debugger.",p:["ctf"],sub:null,c:"free",cl:"Free",l:["int","adv"],cp:[],ctf:["re","pwn"]},
{t:"W3Challs",u:"https://w3challs.com",d:"Multi-category: hacking, wargames, forensics, cryptography, steganography, programming.",p:["ctf"],sub:null,c:"free",cl:"Free",l:["beg","int","adv"],cp:[],ctf:["web","crypto","forensics","re","misc"]},
{t:"crackmes.one",u:"https://crackmes.one",d:"Community reverse engineering challenges (crackmes) across architectures and difficulties.",p:["ctf"],sub:null,c:"free",cl:"Free",l:["beg","int","adv"],cp:["mal"],ctf:["re"]},
{t:"Cryptopals",u:"https://cryptopals.com",d:"48 progressive challenges teaching real-world crypto attacks: padding oracles, ECB vulns, etc.",p:["ctf"],sub:null,c:"free",cl:"Free",l:["int","adv"],cp:[],ctf:["crypto"]},
{t:"SANS Holiday Hack Challenge",u:"https://www.holidayhackchallenge.com",d:"Annual free CTF by SANS with holiday theme. High-quality multi-domain challenges.",p:["ctf"],sub:null,c:"free",cl:"Free",l:["beg","int","adv"],cp:[],ctf:["web","crypto","forensics","misc"]},
{t:"Google CTF",u:"https://capturetheflag.withgoogle.com",d:"Annual CTF by Google. Past challenges available for practice. Great resume builder.",p:["ctf"],sub:null,c:"free",cl:"Free",l:["int","adv"],cp:[],ctf:["web","crypto","re","pwn"]},
{t:"Hacker101 CTF",u:"https://ctf.hacker101.com",d:"Web security CTF from HackerOne. Completing challenges earns bug bounty program invitations.",p:["ctf"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:["bb"],ctf:["web"]},
{t:"CMD Challenge",u:"https://cmdchallenge.com",d:"Web-based command-line skill challenges. Build shell proficiency for security work.",p:["ctf"],sub:null,c:"free",cl:"Free",l:["beg"],cp:[],ctf:["misc"]},
{t:"Damn Vulnerable DeFi",u:"https://www.damnvulnerabledefi.xyz",d:"Blockchain/smart contract security wargame: Solidity and DeFi exploit techniques.",p:["ctf"],sub:null,c:"free",cl:"Free",l:["int","adv"],cp:[],ctf:["crypto","misc"]},
{t:"National Cyber League (NCL)",u:"https://nationalcyberleague.org",d:"Semester-based CTF for US students. Gymnasium challenges great for beginners.",p:["ctf"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:[],ctf:["web","crypto","forensics","osint","misc"]},
{t:"MetaCTF",u:"https://metactf.com",d:"Regular challenges and flash CTFs. Great variety of difficulty and topics.",p:["ctf"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:[],ctf:["web","crypto","forensics","re","misc"]},
{t:"DEF CON CTF",u:"https://defcon.org",d:"Most prestigious CTF in the world. The 'World Cup' of CTFs. Extremely difficult.",p:["ctf"],sub:null,c:"free",cl:"Free",l:["adv"],cp:["red"],ctf:["web","crypto","re","pwn"]},
{t:"TraceLabs OSINT CTF",u:"https://www.tracelabs.org",d:"Nonprofit OSINT CTFs finding missing persons. Real-world practice with social impact.",p:["ctf"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:[],ctf:["osint"]},
{t:"Ethernaut",u:"https://ethernaut.openzeppelin.com",d:"Web3/Solidity security wargame by OpenZeppelin. Smart contract vulnerabilities through levels.",p:["ctf"],sub:null,c:"free",cl:"Free",l:["int","adv"],cp:[],ctf:["crypto","misc"]},
// ====== PRACTICE LABS ======
{t:"Hack The Box",u:"https://www.hackthebox.com",d:"Industry-leading platform: hundreds of machines and challenges. Pentesting, red team, blue team.",p:["practice"],sub:null,c:"freemium",cl:"Free Tier",l:["int","adv"],cp:["pt","red"],ctf:[]},
{t:"DVWA",u:"https://github.com/digininja/DVWA",d:"Damn Vulnerable Web App. PHP/MySQL for practicing SQLi, XSS, CSRF, command injection.",p:["practice"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:["app","pt"],ctf:[]},
{t:"OWASP Juice Shop",u:"https://owasp.org/www-project-juice-shop/",d:"Modern Node.js/Angular app with 100+ vulnerabilities. OWASP Top 10 and beyond. Built-in score board.",p:["practice"],sub:null,c:"free",cl:"Free",l:["beg","int","adv"],cp:["app","bb"],ctf:[]},
{t:"OWASP WebGoat",u:"https://owasp.org/www-project-webgoat/",d:"Deliberately insecure Java web app with guided lessons teaching web vulnerabilities.",p:["practice"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:["app"],ctf:[]},
{t:"OWASP crAPI",u:"https://github.com/OWASP/crAPI",d:"Completely Ridiculous API \u2014 intentionally vulnerable API application for learning API security testing.",p:["practice"],sub:null,c:"free",cl:"Free",l:["int"],cp:["app","bb"],ctf:[]},
{t:"Metasploitable 2/3",u:"https://github.com/rapid7/metasploitable3",d:"Intentionally vulnerable VM by Rapid7 for practicing Metasploit and general pentesting.",p:["practice"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:["pt"],ctf:[]},
{t:"VulnHub",u:"https://www.vulnhub.com",d:"Downloadable vulnerable VMs for local pentesting. Hundreds of community-contributed machines.",p:["practice"],sub:null,c:"free",cl:"Free",l:["beg","int","adv"],cp:["pt"],ctf:[]},
{t:"OffSec Proving Grounds",u:"https://www.offsec.com/labs/",d:"Practice labs from OSCP creators. Free (Play) and paid (Practice ~$19/mo) for cert prep.",p:["practice"],sub:null,c:"freemium",cl:"Free Tier",l:["int","adv"],cp:["pt","red"],ctf:[]},
{t:"CyberDefenders",u:"https://cyberdefenders.org",d:"Blue team challenges: digital forensics, threat hunting, malware analysis, SIEM log analysis.",p:["practice"],sub:null,c:"freemium",cl:"Free Tier",l:["int","adv"],cp:["dfir","blue","soc"],ctf:[]},
{t:"Blue Team Labs Online",u:"https://blueteamlabs.online",d:"Defensive challenges: incident response, digital forensics, reverse engineering, threat intel. ~$15/mo.",p:["practice"],sub:null,c:"freemium",cl:"Free Tier",l:["beg","int","adv"],cp:["dfir","blue","soc"],ctf:[]},
{t:"LetsDefend",u:"https://letsdefend.io",d:"SOC analyst simulation: realistic SIEM with alerts to triage, investigate, and close. ~$25/mo.",p:["practice"],sub:null,c:"freemium",cl:"Free Tier",l:["beg","int"],cp:["soc","blue"],ctf:[]},
{t:"Splunk BOTS",u:"https://bots.splunk.com",d:"Blue team CTF datasets simulating real attacks. Investigate with Splunk queries.",p:["practice"],sub:null,c:"free",cl:"Free",l:["int","adv"],cp:["soc","blue","dfir"],ctf:[]},
{t:"Nightmare \u2014 Binary Exploitation",u:"https://guyinatuxedo.github.io",d:"Structured RE and binary exploitation through CTF walkthroughs. Stack overflows, heap, ROP.",p:["practice"],sub:null,c:"free",cl:"Free",l:["int","adv"],cp:["red"],ctf:[]},
{t:"YesWeHack DOJO",u:"https://dojo-yeswehack.com",d:"Training environment by YesWeHack for building bug bounty and web security skills.",p:["practice"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:["bb"],ctf:[]},
{t:"DVGA (GraphQL)",u:"https://github.com/dolevf/Damn-Vulnerable-GraphQL-Application",d:"Vulnerable GraphQL implementation for learning GraphQL-specific security issues.",p:["practice"],sub:null,c:"free",cl:"Free",l:["int"],cp:["app"],ctf:[]},
{t:"DVIA (iOS)",u:"https://github.com/prateek147/DVIA-v2",d:"Damn Vulnerable iOS App for learning iOS security testing and mobile pentesting.",p:["practice"],sub:null,c:"free",cl:"Free",l:["int"],cp:["app"],ctf:[]},
{t:"Security Onion",u:"https://securityonionsolutions.com",d:"Full network security monitoring distribution. IDS, security analytics, log management. Great for home labs.",p:["practice"],sub:null,c:"free",cl:"Free",l:["int","adv"],cp:["soc","blue","dfir"],ctf:[]},
{t:"RangeForce",u:"https://www.rangeforce.com",d:"Browser-based interactive cyber training with realistic simulated environments for defensive security ops.",p:["practice"],sub:null,c:"paid",cl:"Enterprise",l:["int","adv"],cp:["blue","soc"],ctf:[]},
// ====== BUG BOUNTY ======
{t:"HackerOne",u:"https://www.hackerone.com",d:"Largest bug bounty platform: DoD, GitHub, Shopify, and more. Public and private programs.",p:["bug-bounty"],sub:null,c:"free",cl:"Free to Join",l:["int","adv"],cp:["bb"],ctf:[]},
{t:"Bugcrowd",u:"https://www.bugcrowd.com",d:"Major platform: Tesla, Mastercard, Atlassian. Skill-based ranking and Bugcrowd University.",p:["bug-bounty"],sub:null,c:"free",cl:"Free to Join",l:["int","adv"],cp:["bb"],ctf:[]},
{t:"Intigriti",u:"https://www.intigriti.com",d:"European platform with growing catalog. Regular challenges, events, strong community.",p:["bug-bounty"],sub:null,c:"free",cl:"Free to Join",l:["int","adv"],cp:["bb"],ctf:[]},
{t:"Synack Red Team",u:"https://www.synack.com",d:"Invite-only, vetted platform. Higher payouts due to exclusivity. Must pass assessments.",p:["bug-bounty"],sub:null,c:"paid",cl:"Invite Only",l:["adv"],cp:["bb","pt"],ctf:[]},
{t:"YesWeHack",u:"https://www.yeswehack.com",d:"European platform popular with government/enterprise. Includes DOJO training.",p:["bug-bounty"],sub:null,c:"free",cl:"Free to Join",l:["int","adv"],cp:["bb"],ctf:[]},
{t:"Open Bug Bounty",u:"https://www.openbugbounty.org",d:"Non-profit coordinated disclosure platform for web vulnerabilities. Good for beginners.",p:["bug-bounty"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:["bb"],ctf:[]},
// ====== TOOLS & REPOS ======
{t:"Awesome Hacking",u:"https://github.com/Hack-with-Github/Awesome-Hacking",d:"Mega-list of hacking resources, tools, cheat sheets, and references.",p:["tools"],sub:"Awesome Lists",c:"free",cl:"Free",l:["beg","int","adv"],cp:[],ctf:[]},
{t:"Awesome Security",u:"https://github.com/sbilly/awesome-security",d:"Curated security resources by domain: network, web, mobile, forensics.",p:["tools"],sub:"Awesome Lists",c:"free",cl:"Free",l:["beg","int","adv"],cp:[],ctf:[]},
{t:"Awesome Pentest",u:"https://github.com/enaqx/awesome-pentest",d:"Penetration testing resources: tools, books, conferences, methodology.",p:["tools"],sub:"Awesome Lists",c:"free",cl:"Free",l:["int","adv"],cp:["pt"],ctf:[]},
{t:"Awesome CTF",u:"https://github.com/apsdehal/awesome-ctf",d:"CTF frameworks, libraries, resources, tools, writeups.",p:["tools"],sub:"Awesome Lists",c:"free",cl:"Free",l:["beg","int"],cp:[],ctf:[]},
{t:"Awesome Malware Analysis",u:"https://github.com/rshipp/awesome-malware-analysis",d:"Malware analysis tools, resources, references.",p:["tools"],sub:"Awesome Lists",c:"free",cl:"Free",l:["int","adv"],cp:["mal"],ctf:[]},
{t:"Awesome Incident Response",u:"https://github.com/meirwah/awesome-incident-response",d:"Incident response tools, resources, reference materials.",p:["tools"],sub:"Awesome Lists",c:"free",cl:"Free",l:["int","adv"],cp:["dfir","soc"],ctf:[]},
{t:"Awesome OSINT",u:"https://github.com/jivoi/awesome-osint",d:"OSINT tools, resources, and techniques for open-source intelligence.",p:["tools"],sub:"Awesome Lists",c:"free",cl:"Free",l:["int"],cp:[],ctf:[]},
{t:"Awesome Cloud Security",u:"https://github.com/4ndersonLin/awesome-cloud-security",d:"Cloud security tools, auditing, best practices for AWS, Azure, GCP.",p:["tools"],sub:"Awesome Lists",c:"free",cl:"Free",l:["int","adv"],cp:["cloud"],ctf:[]},
{t:"Awesome Red Teaming",u:"https://github.com/yeyintminthuhtut/Awesome-Red-Teaming",d:"Red team and adversary simulation resources, tools, techniques.",p:["tools"],sub:"Awesome Lists",c:"free",cl:"Free",l:["int","adv"],cp:["red"],ctf:[]},
{t:"Awesome DevSecOps",u:"https://github.com/TaptuIT/awesome-devsecops",d:"Tools and resources for integrating security into the DevOps pipeline.",p:["tools"],sub:"Awesome Lists",c:"free",cl:"Free",l:["int","adv"],cp:["app"],ctf:[]},
{t:"Awesome Blue Team",u:"https://github.com/fabacab/awesome-cybersecurity-blueteam",d:"Tools, resources, and references for cybersecurity blue teams and defenders.",p:["tools"],sub:"Awesome Lists",c:"free",cl:"Free",l:["int","adv"],cp:["blue","soc"],ctf:[]},
// Learning repos
{t:"PayloadsAllTheThings",u:"https://github.com/swisskyrepo/PayloadsAllTheThings",d:"Massive payload and bypass reference for web security and pentesting. Essential.",p:["tools"],sub:"Learning Repos",c:"free",cl:"Free",l:["int","adv"],cp:["pt","app","bb"],ctf:[]},
{t:"SecLists",u:"https://github.com/danielmiessler/SecLists",d:"The security tester's companion: usernames, passwords, URLs, fuzzing payloads.",p:["tools"],sub:"Learning Repos",c:"free",cl:"Free",l:["int","adv"],cp:["pt","bb"],ctf:[]},
{t:"HackTricks",u:"https://book.hacktricks.xyz",d:"Extensive pentesting knowledge base: techniques, privilege escalation, pivoting, exploitation.",p:["tools"],sub:"Learning Repos",c:"free",cl:"Free",l:["int","adv"],cp:["pt","red"],ctf:[]},
{t:"HackTricks Cloud",u:"https://cloud.hacktricks.xyz",d:"Cloud-focused companion: AWS, Azure, GCP enumeration, priv esc, attack techniques.",p:["tools"],sub:"Learning Repos",c:"free",cl:"Free",l:["int","adv"],cp:["cloud","pt"],ctf:[]},
{t:"GTFOBins",u:"https://gtfobins.github.io",d:"Unix binaries for privilege escalation, file read/write, reverse shells.",p:["tools"],sub:"Learning Repos",c:"free",cl:"Free",l:["int"],cp:["pt","red"],ctf:[]},
{t:"LOLBAS",u:"https://lolbas-project.github.io",d:"Living Off The Land: Windows binaries for execution, persistence, defense evasion.",p:["tools"],sub:"Learning Repos",c:"free",cl:"Free",l:["int"],cp:["red"],ctf:[]},
{t:"LOLDrivers",u:"https://www.loldrivers.io",d:"Catalog of vulnerable and malicious Windows drivers. Living Off The Land Drivers.",p:["tools"],sub:"Learning Repos",c:"free",cl:"Free",l:["adv"],cp:["red"],ctf:[]},
{t:"WADComs",u:"https://wadcoms.github.io",d:"Interactive cheat sheet for Windows/AD offensive security commands and tools.",p:["tools"],sub:"Learning Repos",c:"free",cl:"Free",l:["int","adv"],cp:["red","pt"],ctf:[]},
{t:"Red Team Notes",u:"https://www.ired.team",d:"Reference: red teaming, offensive security, Windows internals, AD attacks, defense evasion.",p:["tools"],sub:"Learning Repos",c:"free",cl:"Free",l:["int","adv"],cp:["red"],ctf:[]},
{t:"The Hacker Recipes",u:"https://www.thehacker.recipes",d:"Structured knowledge base: AD exploitation, authentication attacks, post-exploitation.",p:["tools"],sub:"Learning Repos",c:"free",cl:"Free",l:["int","adv"],cp:["red","pt"],ctf:[]},
{t:"Hacking the Cloud",u:"https://hackingthe.cloud",d:"Community encyclopedia of cloud attack techniques, TTPs by cloud provider.",p:["tools"],sub:"Learning Repos",c:"free",cl:"Free",l:["int","adv"],cp:["cloud"],ctf:[]},
{t:"Hacking Articles",u:"https://www.hackingarticles.in",d:"Hundreds of walkthroughs: pentesting, CTF solutions, priv esc, tool usage.",p:["tools"],sub:"Learning Repos",c:"free",cl:"Free",l:["beg","int"],cp:["pt"],ctf:[]},
{t:"InternalAllTheThings",u:"https://github.com/swisskyrepo/InternalAllTheThings",d:"Internal pentesting methodology: Active Directory, pivoting, post-exploitation.",p:["tools"],sub:"Learning Repos",c:"free",cl:"Free",l:["int","adv"],cp:["pt","red"],ctf:[]},
{t:"PEASS-ng (linPEAS/winPEAS)",u:"https://github.com/carlospolop/PEASS-ng",d:"Privilege Escalation Awesome Scripts Suite. Automated priv esc enumeration for Linux and Windows.",p:["tools"],sub:"Learning Repos",c:"free",cl:"Free",l:["int","adv"],cp:["pt","red"],ctf:[]},
// Security Tools
{t:"Metasploit",u:"https://github.com/rapid7/metasploit-framework",d:"World's most used pentesting framework. Exploits, payloads, post-exploitation, scanning.",p:["tools"],sub:"Offensive Tools",c:"free",cl:"Free",l:["int","adv"],cp:["pt","red"],ctf:[]},
{t:"Nmap",u:"https://nmap.org",d:"Essential network discovery and auditing. Port scanning, service detection, OS fingerprinting, NSE.",p:["tools"],sub:"Offensive Tools",c:"free",cl:"Free",l:["beg","int","adv"],cp:["pt","soc"],ctf:[]},
{t:"Burp Suite",u:"https://portswigger.net/burp",d:"Industry-standard web app security testing. Community edition free, Pro ~$449/yr.",p:["tools"],sub:"Offensive Tools",c:"freemium",cl:"Free CE",l:["int","adv"],cp:["app","bb","pt"],ctf:[]},
{t:"SQLMap",u:"https://github.com/sqlmapproject/sqlmap",d:"Automatic SQL injection and database takeover. Supports most database engines.",p:["tools"],sub:"Offensive Tools",c:"free",cl:"Free",l:["int","adv"],cp:["pt","app"],ctf:[]},
{t:"Nuclei",u:"https://github.com/projectdiscovery/nuclei",d:"Fast, template-based vulnerability scanner. Community templates for CVEs, misconfigs.",p:["tools"],sub:"Offensive Tools",c:"free",cl:"Free",l:["int"],cp:["pt","bb"],ctf:[]},
{t:"ffuf",u:"https://github.com/ffuf/ffuf",d:"Fast web fuzzer written in Go. Directory/file discovery, vhost discovery, parameter fuzzing.",p:["tools"],sub:"Offensive Tools",c:"free",cl:"Free",l:["int","adv"],cp:["pt","bb"],ctf:[]},
{t:"Gobuster",u:"https://github.com/OJ/gobuster",d:"Directory/file, DNS, and virtual host busting tool written in Go.",p:["tools"],sub:"Offensive Tools",c:"free",cl:"Free",l:["int"],cp:["pt","bb"],ctf:[]},
{t:"OWASP ZAP",u:"https://github.com/zaproxy/zaproxy",d:"Free, open-source web app security scanner by OWASP. Finds vulnerabilities automatically.",p:["tools"],sub:"Offensive Tools",c:"free",cl:"Free",l:["beg","int","adv"],cp:["app","pt"],ctf:[]},
{t:"BloodHound",u:"https://github.com/BloodHoundAD/BloodHound",d:"AD attack path visualization. Maps trust relationships, permissions, priv esc paths.",p:["tools"],sub:"Offensive Tools",c:"free",cl:"Free",l:["int","adv"],cp:["red","pt"],ctf:[]},
{t:"Impacket",u:"https://github.com/fortra/impacket",d:"Python network protocol classes. Essential for AD pentesting: SMB, WMI, Kerberos.",p:["tools"],sub:"Offensive Tools",c:"free",cl:"Free",l:["int","adv"],cp:["red","pt"],ctf:[]},
{t:"Sliver C2",u:"https://github.com/BishopFox/sliver",d:"Open-source adversary emulation / red team C2 by Bishop Fox. Modern Cobalt Strike alternative.",p:["tools"],sub:"Offensive Tools",c:"free",cl:"Free",l:["adv"],cp:["red"],ctf:[]},
{t:"Hashcat",u:"https://hashcat.net/hashcat/",d:"World's fastest password recovery. GPU-accelerated, 300+ hash types.",p:["tools"],sub:"Offensive Tools",c:"free",cl:"Free",l:["int","adv"],cp:["pt","red"],ctf:[]},
{t:"CyberChef",u:"https://gchq.github.io/CyberChef/",d:"The Cyber Swiss Army Knife by GCHQ. Encoding, decoding, encryption, hashing, analysis. Indispensable.",p:["tools"],sub:"Offensive Tools",c:"free",cl:"Free",l:["beg","int"],cp:[],ctf:[]},
{t:"Masscan",u:"https://github.com/robertdavidgraham/masscan",d:"TCP port scanner that can scan the entire Internet in under 5 minutes. 10M packets/sec.",p:["tools"],sub:"Offensive Tools",c:"free",cl:"Free",l:["int","adv"],cp:["pt"],ctf:[]},
{t:"Responder",u:"https://github.com/lgandx/Responder",d:"LLMNR, NBT-NS, MDNS poisoner for capturing credentials on internal networks.",p:["tools"],sub:"Offensive Tools",c:"free",cl:"Free",l:["int","adv"],cp:["red","pt"],ctf:[]},
{t:"NetExec (CrackMapExec)",u:"https://github.com/Pennyw0rth/NetExec",d:"Swiss Army knife for AD pentesting: credential testing, enumeration, execution.",p:["tools"],sub:"Offensive Tools",c:"free",cl:"Free",l:["int","adv"],cp:["red","pt"],ctf:[]},
{t:"Empire",u:"https://github.com/BC-SECURITY/Empire",d:"Post-exploitation framework built on Python and PowerShell agents for adversary emulation.",p:["tools"],sub:"Offensive Tools",c:"free",cl:"Free",l:["adv"],cp:["red"],ctf:[]},
// RE & Forensics Tools
{t:"Ghidra (NSA)",u:"https://ghidra-sre.org",d:"NSA's free RE framework. Disassembly, decompilation, scripting, collaborative analysis.",p:["tools"],sub:"RE & Forensics",c:"free",cl:"Free",l:["int","adv"],cp:["mal","red"],ctf:[]},
{t:"Radare2 / Cutter",u:"https://github.com/radareorg/radare2",d:"Open-source RE framework. Cutter provides a GUI. Binary analysis and reverse engineering.",p:["tools"],sub:"RE & Forensics",c:"free",cl:"Free",l:["int","adv"],cp:["mal","red"],ctf:[]},
{t:"Volatility 3",u:"https://volatility3.readthedocs.io",d:"Premier memory forensics framework. Analyze RAM dumps for malware, rootkits, artifacts.",p:["tools"],sub:"RE & Forensics",c:"free",cl:"Free",l:["int","adv"],cp:["dfir","mal"],ctf:[]},
{t:"Wireshark",u:"https://www.wireshark.org",d:"Most widely used network protocol analyzer. Deep inspection of hundreds of protocols.",p:["tools"],sub:"RE & Forensics",c:"free",cl:"Free",l:["beg","int","adv"],cp:["soc","dfir","blue"],ctf:[]},
{t:"FLARE VM",u:"https://github.com/mandiant/flare-vm",d:"Windows malware analysis distribution by Mandiant. Dozens of analysis tools, automated install.",p:["tools"],sub:"RE & Forensics",c:"free",cl:"Free",l:["int","adv"],cp:["mal"],ctf:[]},
{t:"REMnux",u:"https://remnux.org",d:"Linux distribution for reverse engineering and analyzing malware. Pre-loaded with tools.",p:["tools"],sub:"RE & Forensics",c:"free",cl:"Free",l:["int","adv"],cp:["mal"],ctf:[]},
{t:"Eric Zimmerman's Tools",u:"https://ericzimmerman.github.io",d:"Free, high-performance Windows forensic tools: Registry Explorer, MFTECmd, Timeline Explorer.",p:["tools"],sub:"RE & Forensics",c:"free",cl:"Free",l:["int"],cp:["dfir"],ctf:[]},
{t:"Velociraptor",u:"https://github.com/Velocidex/velociraptor",d:"Advanced DFIR and endpoint monitoring. Forensic evidence collection at scale.",p:["tools"],sub:"RE & Forensics",c:"free",cl:"Free",l:["int","adv"],cp:["dfir"],ctf:[]},
{t:"YARA",u:"https://github.com/VirusTotal/yara",d:"Pattern matching tool for malware researchers. Identify and classify malware samples.",p:["tools"],sub:"RE & Forensics",c:"free",cl:"Free",l:["int","adv"],cp:["mal","dfir"],ctf:[]},
{t:"Frida",u:"https://github.com/frida/frida",d:"Dynamic instrumentation toolkit for hooking into running processes. Mobile and desktop RE.",p:["tools"],sub:"RE & Forensics",c:"free",cl:"Free",l:["int","adv"],cp:["mal","app"],ctf:[]},
{t:"x64dbg",u:"https://github.com/x64dbg/x64dbg",d:"Open-source x64/x32 debugger for Windows with plugin ecosystem.",p:["tools"],sub:"RE & Forensics",c:"free",cl:"Free",l:["int","adv"],cp:["mal","red"],ctf:[]},
{t:"pwntools",u:"https://github.com/Gallopsled/pwntools",d:"CTF framework and exploit development library. Rapid prototyping of exploits.",p:["tools"],sub:"RE & Forensics",c:"free",cl:"Free",l:["int","adv"],cp:["red"],ctf:[]},
// Blue Team & Detection
{t:"Wazuh",u:"https://wazuh.com",d:"Free, open-source SIEM and XDR. Intrusion detection, log analysis, vulnerability detection, compliance.",p:["tools"],sub:"Blue Team & Detection",c:"free",cl:"Free",l:["int","adv"],cp:["soc","blue"],ctf:[]},
{t:"TheHive",u:"https://thehive-project.org",d:"Open-source incident response platform. Case management, alert triage, SOC collaboration.",p:["tools"],sub:"Blue Team & Detection",c:"free",cl:"Free",l:["int","adv"],cp:["soc","dfir","blue"],ctf:[]},
{t:"MISP",u:"https://www.misp-project.org",d:"Open-source threat intelligence platform. Share, store, correlate IOCs.",p:["tools"],sub:"Blue Team & Detection",c:"free",cl:"Free",l:["int","adv"],cp:["soc","blue"],ctf:[]},
{t:"OpenCTI",u:"https://www.opencti.io",d:"Open-source cyber threat intelligence platform. Organize and visualize threat intel with STIX2.",p:["tools"],sub:"Blue Team & Detection",c:"free",cl:"Free",l:["int","adv"],cp:["soc","blue"],ctf:[]},
{t:"Chainsaw",u:"https://github.com/WithSecureLabs/chainsaw",d:"Fast Windows Event Log forensics using Sigma rules. Rapid triage during IR.",p:["tools"],sub:"Blue Team & Detection",c:"free",cl:"Free",l:["int"],cp:["dfir","blue"],ctf:[]},
{t:"Hayabusa",u:"https://github.com/Yamato-Security/hayabusa",d:"Windows Event Log timeline generator and threat hunting. Sigma-compatible detection rules.",p:["tools"],sub:"Blue Team & Detection",c:"free",cl:"Free",l:["int","adv"],cp:["dfir","blue"],ctf:[]},
{t:"MITRE Caldera",u:"https://github.com/MITRE/caldera",d:"Automated adversary emulation by MITRE. ATT&CK-mapped attack chains to test controls.",p:["tools"],sub:"Blue Team & Detection",c:"free",cl:"Free",l:["int"],cp:["blue","red"],ctf:[]},
{t:"Snort 3",u:"https://github.com/snort3/snort3",d:"Open-source intrusion prevention system (IPS). Real-time traffic analysis and packet logging.",p:["tools"],sub:"Blue Team & Detection",c:"free",cl:"Free",l:["int","adv"],cp:["soc","blue"],ctf:[]},
{t:"Suricata",u:"https://github.com/OISF/suricata",d:"High-performance network IDS, IPS, and security monitoring engine.",p:["tools"],sub:"Blue Team & Detection",c:"free",cl:"Free",l:["int","adv"],cp:["soc","blue"],ctf:[]},
{t:"Zeek",u:"https://github.com/zeek/zeek",d:"Powerful network analysis framework for security monitoring at scale.",p:["tools"],sub:"Blue Team & Detection",c:"free",cl:"Free",l:["int","adv"],cp:["soc","blue"],ctf:[]},
{t:"Trivy",u:"https://github.com/aquasecurity/trivy",d:"Comprehensive vulnerability scanner for containers, filesystems, git repos, and cloud infra.",p:["tools"],sub:"Blue Team & Detection",c:"free",cl:"Free",l:["int"],cp:["cloud","app"],ctf:[]},
{t:"Falco",u:"https://github.com/falcosecurity/falco",d:"Cloud-native runtime security for detecting threats in containers and Kubernetes.",p:["tools"],sub:"Blue Team & Detection",c:"free",cl:"Free",l:["int","adv"],cp:["cloud"],ctf:[]},
// OSINT Tools
{t:"SpiderFoot",u:"https://github.com/smicallef/spiderfoot",d:"OSINT automation: 200+ data sources to map attack surfaces and gather intelligence.",p:["tools"],sub:"OSINT Tools",c:"free",cl:"Free",l:["int"],cp:[],ctf:[]},
{t:"Sherlock",u:"https://github.com/sherlock-project/sherlock",d:"Hunt social media accounts by username across 400+ networks.",p:["tools"],sub:"OSINT Tools",c:"free",cl:"Free",l:["beg","int"],cp:[],ctf:[]},
{t:"theHarvester",u:"https://github.com/laramies/theHarvester",d:"Gather emails, subdomains, hosts, employee names from public sources.",p:["tools"],sub:"OSINT Tools",c:"free",cl:"Free",l:["int"],cp:["pt","bb"],ctf:[]},
{t:"OWASP Amass",u:"https://github.com/owasp-amass/amass",d:"Attack surface mapping. DNS enumeration, subdomain discovery, network mapping at scale.",p:["tools"],sub:"OSINT Tools",c:"free",cl:"Free",l:["int","adv"],cp:["pt","bb"],ctf:[]},
{t:"Recon-ng",u:"https://github.com/lanmaster53/recon-ng",d:"Full-featured web reconnaissance framework with modular architecture.",p:["tools"],sub:"OSINT Tools",c:"free",cl:"Free",l:["int"],cp:["pt","bb"],ctf:[]},
// ====== PROJECT IDEAS ======
// Beginner
{t:"Caesar Cipher Encoder/Decoder",u:null,d:"Build a CLI tool that encrypts/decrypts text using Caesar cipher with brute-force cracking. Learn basic crypto.",p:["projects"],sub:"Beginner Projects",c:"free",cl:"Project",l:["beg"],cp:[],ctf:[]},
{t:"Password Strength Checker",u:null,d:"Evaluate password strength against patterns, dictionary words, and known breached passwords. Display score and recommendations.",p:["projects"],sub:"Beginner Projects",c:"free",cl:"Project",l:["beg"],cp:[],ctf:[]},
{t:"File Integrity Monitor",u:null,d:"Hash files, store baselines, alert on modifications. Similar to OSSEC/Tripwire at a basic level.",p:["projects"],sub:"Beginner Projects",c:"free",cl:"Project",l:["beg"],cp:["blue"],ctf:[]},
{t:"Network Port Scanner",u:null,d:"TCP port scanner with banner grabbing and common service identification. Simplified Nmap.",p:["projects"],sub:"Beginner Projects",c:"free",cl:"Project",l:["beg"],cp:["pt"],ctf:[]},
{t:"Packet Sniffer",u:null,d:"Capture and display network packets in real time: source/dest IPs, protocols, payloads.",p:["projects"],sub:"Beginner Projects",c:"free",cl:"Project",l:["beg"],cp:["soc"],ctf:[]},
{t:"Keylogger Detector",u:null,d:"Scan processes, startup entries, keyboard hooks to detect potential keyloggers.",p:["projects"],sub:"Beginner Projects",c:"free",cl:"Project",l:["beg"],cp:["blue"],ctf:[]},
{t:"Secure Password Manager",u:null,d:"CLI password vault with AES-256 encryption, master password via PBKDF2, CRUD operations.",p:["projects"],sub:"Beginner Projects",c:"free",cl:"Project",l:["beg"],cp:["app"],ctf:[]},
{t:"Log Analyzer",u:null,d:"Parse Apache/auth.log to detect brute-force attempts, anomalies, suspicious IPs. Generate reports.",p:["projects"],sub:"Beginner Projects",c:"free",cl:"Project",l:["beg"],cp:["soc","blue"],ctf:[]},
{t:"Phishing Email Detector",u:null,d:"Analyze email headers and body for phishing: spoofed domains, suspicious URLs, SPF/DKIM failures.",p:["projects"],sub:"Beginner Projects",c:"free",cl:"Project",l:["beg"],cp:["blue"],ctf:[]},
{t:"MAC Address Changer",u:null,d:"CLI utility to change network interface MAC address. Validate format, restore original.",p:["projects"],sub:"Beginner Projects",c:"free",cl:"Project",l:["beg"],cp:[],ctf:[]},
{t:"ARP Spoof Detector",u:null,d:"Monitor ARP tables and detect multiple IPs mapping to same MAC (MITM indicator).",p:["projects"],sub:"Beginner Projects",c:"free",cl:"Project",l:["beg"],cp:["blue"],ctf:[]},
{t:"Hash Cracker",u:null,d:"Crack MD5/SHA hashes using dictionary attacks. Support salted hashes. Demonstrates weak hashing dangers.",p:["projects"],sub:"Beginner Projects",c:"free",cl:"Project",l:["beg"],cp:[],ctf:[]},
{t:"Security Header Analyzer",u:null,d:"Fetch HTTP headers from URLs and evaluate security headers (CSP, HSTS, X-Frame-Options). Score and suggest improvements.",p:["projects"],sub:"Beginner Projects",c:"free",cl:"Project",l:["beg"],cp:["app"],ctf:[]},
{t:"Encrypted Chat App",u:null,d:"Client-server chat with E2E encryption using AES. Diffie-Hellman key exchange at session start.",p:["projects"],sub:"Beginner Projects",c:"free",cl:"Project",l:["beg"],cp:[],ctf:[]},
{t:"Vulnerability Disclosure Report Generator",u:null,d:"Take vulnerability findings as input, generate professional reports with CVE format and CVSS scoring.",p:["projects"],sub:"Beginner Projects",c:"free",cl:"Project",l:["beg"],cp:["pt"],ctf:[]},
// Intermediate
{t:"Web Application Vulnerability Scanner",u:null,d:"Crawl target web apps, test for OWASP Top 10 vulns: SQLi, XSS, directory traversal, CSRF. Generate HTML report.",p:["projects"],sub:"Intermediate Projects",c:"free",cl:"Project",l:["int"],cp:["app","pt"],ctf:[]},
{t:"SIEM Dashboard",u:null,d:"Ingest logs from multiple sources, normalize, apply correlation rules, display real-time security alerts.",p:["projects"],sub:"Intermediate Projects",c:"free",cl:"Project",l:["int"],cp:["soc","blue"],ctf:[]},
{t:"Honeypot System",u:null,d:"Emulate vulnerable services (SSH, HTTP, FTP), log all attacker interactions, generate threat intel reports.",p:["projects"],sub:"Intermediate Projects",c:"free",cl:"Project",l:["int"],cp:["blue","soc"],ctf:[]},
{t:"Web Application Firewall",u:null,d:"Reverse proxy that blocks SQLi, XSS, path traversal, command injection using signature-based rules.",p:["projects"],sub:"Intermediate Projects",c:"free",cl:"Project",l:["int"],cp:["app","blue"],ctf:[]},
{t:"Network IDS",u:null,d:"Analyze packets against Snort-style rules to detect port scans, exploits, anomalous traffic. Alert dashboard.",p:["projects"],sub:"Intermediate Projects",c:"free",cl:"Project",l:["int"],cp:["soc","blue"],ctf:[]},
{t:"Automated Recon Tool",u:null,d:"Automate pentesting recon: subdomain enum, DNS lookups, WHOIS, port scanning, tech fingerprinting.",p:["projects"],sub:"Intermediate Projects",c:"free",cl:"Project",l:["int"],cp:["pt","bb"],ctf:[]},
{t:"Ransomware Simulator (Educational)",u:null,d:"Controlled ransomware simulator: encrypts files in sandbox, generates key, demonstrates lifecycle. Lab use only.",p:["projects"],sub:"Intermediate Projects",c:"free",cl:"Project",l:["int"],cp:["mal"],ctf:[]},
{t:"JWT/OAuth Security Tester",u:null,d:"Analyze JWTs for algorithm confusion, weak keys, expired tokens. Test OAuth for redirect URI manipulation.",p:["projects"],sub:"Intermediate Projects",c:"free",cl:"Project",l:["int"],cp:["app","bb"],ctf:[]},
{t:"Malware Sandbox",u:null,d:"Execute suspicious files in isolated VM, monitor syscalls, file changes, network connections. Behavioral report.",p:["projects"],sub:"Intermediate Projects",c:"free",cl:"Project",l:["int"],cp:["mal"],ctf:[]},
{t:"Container Security Scanner",u:null,d:"Scan Docker images/Dockerfiles for running as root, exposed secrets, vulnerable bases, misconfigs.",p:["projects"],sub:"Intermediate Projects",c:"free",cl:"Project",l:["int"],cp:["cloud","app"],ctf:[]},
{t:"Phishing Campaign Platform",u:null,d:"GoPhish-style: create templates, send campaigns, track opens/clicks, capture creds, reporting dashboard.",p:["projects"],sub:"Intermediate Projects",c:"free",cl:"Project",l:["int"],cp:["blue","grc"],ctf:[]},
{t:"API Security Testing Framework",u:null,d:"Auto-test REST APIs for OWASP API Top 10: BOLA, broken auth, excessive data exposure, rate limiting.",p:["projects"],sub:"Intermediate Projects",c:"free",cl:"Project",l:["int"],cp:["app","bb"],ctf:[]},
{t:"DNS Sinkhole (Pi-hole Clone)",u:null,d:"DNS server that blocks malicious domains, ad trackers, C2 servers. Web dashboard with statistics.",p:["projects"],sub:"Intermediate Projects",c:"free",cl:"Project",l:["int"],cp:["blue"],ctf:[]},
{t:"Secure File Transfer System",u:null,d:"File sharing with E2E encryption, expiring links, access controls, audit logging, malware scanning.",p:["projects"],sub:"Intermediate Projects",c:"free",cl:"Project",l:["int"],cp:["app"],ctf:[]},
{t:"AD Attack Lab & Detector",u:null,d:"Build vulnerable AD environment, create tools to detect Kerberoasting, Pass-the-Hash, DCSync, Golden Ticket.",p:["projects"],sub:"Intermediate Projects",c:"free",cl:"Project",l:["int"],cp:["red","blue"],ctf:[]},
// Advanced
{t:"Custom C2 Framework",u:null,d:"Modular C2: encrypted agent-server comms, dynamic payloads, task queuing, web operator UI. Multi-protocol.",p:["projects"],sub:"Advanced Projects",c:"free",cl:"Project",l:["adv"],cp:["red"],ctf:[]},
{t:"EDR Agent",u:null,d:"Endpoint agent monitoring processes, files, registry, network, DLLs. MITRE ATT&CK detection rules. Central console.",p:["projects"],sub:"Advanced Projects",c:"free",cl:"Project",l:["adv"],cp:["blue"],ctf:[]},
{t:"Custom Fuzzer",u:null,d:"Coverage-guided fuzzer: mutate inputs, track coverage, detect crashes, triage unique bugs with dedup.",p:["projects"],sub:"Advanced Projects",c:"free",cl:"Project",l:["adv"],cp:["red","app"],ctf:[]},
{t:"Blockchain Security Auditor",u:null,d:"Static analyzer for Solidity smart contracts: reentrancy, integer overflow, access control. Audit reports.",p:["projects"],sub:"Advanced Projects",c:"free",cl:"Project",l:["adv"],cp:["app"],ctf:[]},
{t:"Zero Trust Implementation",u:null,d:"Access proxy with mTLS, JWT, device posture checks, least-privilege policies, audit logging.",p:["projects"],sub:"Advanced Projects",c:"free",cl:"Project",l:["adv"],cp:["arch"],ctf:[]},
{t:"Threat Intelligence Platform",u:null,d:"Aggregate IOCs from feeds, enrich with WHOIS/GeoIP, map to ATT&CK, searchable dashboard, STIX export.",p:["projects"],sub:"Advanced Projects",c:"free",cl:"Project",l:["adv"],cp:["soc","blue"],ctf:[]},
{t:"Network Anomaly Detector (ML)",u:null,d:"Train ML models on traffic datasets to detect zero-days, DGA domains, lateral movement. Real-time classification.",p:["projects"],sub:"Advanced Projects",c:"free",cl:"Project",l:["adv"],cp:["blue","soc"],ctf:[]},
{t:"Binary Exploitation CTF Platform",u:null,d:"Host custom pwn challenges in Docker containers. Buffer overflows, ROP, heap. Scoring leaderboard.",p:["projects"],sub:"Advanced Projects",c:"free",cl:"Project",l:["adv"],cp:["red"],ctf:[]},
{t:"SOAR Platform",u:null,d:"Ingest alerts, automate triage via playbooks, auto-quarantine/block, case management, IR workflows.",p:["projects"],sub:"Advanced Projects",c:"free",cl:"Project",l:["adv"],cp:["soc","blue"],ctf:[]},
{t:"Custom Vulnerability Scanner",u:null,d:"Fingerprint services, cross-reference NVD/CVE, run PoC checks, CVSS scoring, prioritized remediation reports.",p:["projects"],sub:"Advanced Projects",c:"free",cl:"Project",l:["adv"],cp:["pt","blue"],ctf:[]},
{t:"DevSecOps Pipeline",u:null,d:"Full CI/CD with SAST, DAST, SCA, container scanning, secrets detection, IaC scanning, security gates.",p:["projects"],sub:"Advanced Projects",c:"free",cl:"Project",l:["adv"],cp:["app","cloud"],ctf:[]},
{t:"Red Team Implant",u:null,d:"Stealthy implant: process injection, AMSI bypass, ETW patching, encrypted C2, polymorphic code. Plus detection writeup.",p:["projects"],sub:"Advanced Projects",c:"free",cl:"Project",l:["adv"],cp:["red"],ctf:[]},
{t:"Vulnerability Management Platform",u:null,d:"Import scan results from multiple scanners, deduplicate, risk score with asset context, track remediation SLAs.",p:["projects"],sub:"Advanced Projects",c:"free",cl:"Project",l:["adv"],cp:["grc","blue"],ctf:[]},
// ====== TUTORIALS & GUIDES ======
{t:"Paul Jerimy's Security Cert Roadmap",u:"https://pauljerimy.com/security-certification-roadmap/",d:"Interactive chart mapping hundreds of certs across domains and difficulty levels.",p:["tutorials"],sub:"Career Roadmaps",c:"free",cl:"Free",l:["beg","int","adv"],cp:[],ctf:[]},
{t:"Cyberseek Career Pathway",u:"https://www.cyberseek.org/pathway.html",d:"Interactive career pathways: feeder roles, transitions, salaries, certification mappings.",p:["tutorials"],sub:"Career Roadmaps",c:"free",cl:"Free",l:["beg","int","adv"],cp:[],ctf:[]},
{t:"NICE Workforce Framework",u:"https://niccs.cisa.gov/workforce-development/nice-framework",d:"US national standard for cybersecurity work roles, knowledge, skills, and abilities.",p:["tutorials"],sub:"Career Roadmaps",c:"free",cl:"Free",l:["beg","int","adv"],cp:[],ctf:[]},
{t:"OWASP Top 10",u:"https://owasp.org/www-project-top-ten/",d:"Industry standard: ten most critical web application security risks.",p:["tutorials"],sub:"Web Security",c:"free",cl:"Free",l:["beg","int"],cp:["app","bb"],ctf:[]},
{t:"OWASP Web Security Testing Guide",u:"https://owasp.org/www-project-web-security-testing-guide/",d:"Most comprehensive open-source guide for web app security testing methodology.",p:["tutorials"],sub:"Web Security",c:"free",cl:"Free",l:["int"],cp:["app","pt"],ctf:[]},
{t:"OWASP Cheat Sheet Series",u:"https://cheatsheetseries.owasp.org",d:"Concise reference sheets on authentication, session management, input validation, and dozens more.",p:["tutorials"],sub:"Web Security",c:"free",cl:"Free",l:["int"],cp:["app"],ctf:[]},
{t:"OWASP API Security Top 10",u:"https://owasp.org/www-project-api-security/",d:"Critical API security risks. Increasingly relevant as apps become API-driven.",p:["tutorials"],sub:"Web Security",c:"free",cl:"Free",l:["int"],cp:["app","bb"],ctf:[]},
{t:"Bugcrowd University",u:"https://www.bugcrowd.com/hackers/bugcrowd-university/",d:"Free video training: web app testing methodology, mobile testing, bug bounty workflows.",p:["tutorials"],sub:"Web Security",c:"free",cl:"Free",l:["beg","int"],cp:["bb"],ctf:[]},
{t:"OWASP MASTG (Mobile Security)",u:"https://mas.owasp.org/MASTG/",d:"Comprehensive guide for mobile app security testing. iOS and Android. Industry standard.",p:["tutorials"],sub:"Web Security",c:"free",cl:"Free",l:["int","adv"],cp:["app"],ctf:[]},
{t:"Malware Unicorn RE101/RE102",u:"https://malwareunicorn.org/workshops/re101.html",d:"Free RE workshops: PE structure, x86 assembly, static analysis, dynamic analysis.",p:["tutorials"],sub:"RE & Malware",c:"free",cl:"Free",l:["beg","int"],cp:["mal"],ctf:[]},
{t:"RE for Beginners",u:"https://beginners.re",d:"Free comprehensive textbook by Dennis Yurichev: x86/x64/ARM assembly, C/C++ patterns.",p:["tutorials"],sub:"RE & Malware",c:"free",cl:"Free",l:["beg","int"],cp:["mal"],ctf:[]},
{t:"Malware Traffic Analysis",u:"https://www.malware-traffic-analysis.net",d:"PCAPs of real malware infections for traffic analysis practice with tutorials.",p:["tutorials"],sub:"RE & Malware",c:"free",cl:"Free",l:["int"],cp:["dfir","mal","soc"],ctf:[]},
{t:"OSINT Framework",u:"https://osintframework.com",d:"Interactive tree of free OSINT tools: username lookups, geolocation, social media.",p:["tutorials"],sub:"OSINT",c:"free",cl:"Free",l:["beg","int","adv"],cp:[],ctf:[]},
{t:"IntelTechniques",u:"https://inteltechniques.com/tools/",d:"Michael Bazzell's OSINT tools, search techniques, and methodology guidance.",p:["tutorials"],sub:"OSINT",c:"free",cl:"Free",l:["beg","int","adv"],cp:[],ctf:[]},
{t:"Shodan",u:"https://www.shodan.io",d:"Search engine for internet-connected devices. Tutorials on exposed infrastructure.",p:["tutorials"],sub:"OSINT",c:"freemium",cl:"Free Tier",l:["int"],cp:["pt"],ctf:[]},
{t:"Autopsy / Sleuth Kit",u:"https://sleuthkit.org/autopsy/",d:"Leading open-source digital forensics platform: disk images, timeline analysis, artifacts.",p:["tutorials"],sub:"Digital Forensics",c:"free",cl:"Free",l:["beg","int"],cp:["dfir"],ctf:[]},
{t:"SANS DFIR Posters",u:"https://www.sans.org/posters/",d:"Free reference posters for forensic analysis of Windows, Linux, memory, network, cloud.",p:["tutorials"],sub:"Digital Forensics",c:"free",cl:"Free",l:["int"],cp:["dfir"],ctf:[]},
{t:"AboutDFIR",u:"https://aboutdfir.com",d:"Community-curated DFIR resource listing: tools, training, conferences, references.",p:["tutorials"],sub:"Digital Forensics",c:"free",cl:"Free",l:["beg","int","adv"],cp:["dfir"],ctf:[]},
{t:"Khan Academy Cryptography",u:"https://www.khanacademy.org/computing/computer-science/cryptography",d:"Free video lessons: ancient ciphers through modular arithmetic to modern algorithms.",p:["tutorials"],sub:"Cryptography",c:"free",cl:"Free",l:["beg"],cp:[],ctf:[]},
{t:"Crypto 101",u:"https://www.crypto101.io",d:"Free intro book on cryptography. Fundamentals without advanced mathematics.",p:["tutorials"],sub:"Cryptography",c:"free",cl:"Free",l:["beg"],cp:[],ctf:[]},
// ====== BOOKS ======
{t:"The Web Application Hacker's Handbook",u:null,d:"By Stuttard & Pinto. Definitive guide to web vulnerabilities, by the Burp Suite creator.",p:["books"],sub:null,c:"paid",cl:"Paid",l:["int","adv"],cp:["app","bb","pt"],ctf:[]},
{t:"Hacking: The Art of Exploitation",u:null,d:"By Jon Erickson. Classic: C, networking, shellcode, exploitation from first principles.",p:["books"],sub:null,c:"paid",cl:"Paid",l:["int"],cp:["red","pt"],ctf:[]},
{t:"Penetration Testing",u:null,d:"By Georgia Weidman. Hands-on intro covering full pentesting methodology.",p:["books"],sub:null,c:"paid",cl:"Paid",l:["beg"],cp:["pt"],ctf:[]},
{t:"The Hacker Playbook 3",u:null,d:"By Peter Kim. Red-team playbook of techniques with step-by-step instructions.",p:["books"],sub:null,c:"paid",cl:"Paid",l:["int"],cp:["red","pt"],ctf:[]},
{t:"RTFM \u2014 Red Team Field Manual",u:null,d:"By Ben Clark. Pocket-sized reference of commands and techniques for pentesters.",p:["books"],sub:null,c:"paid",cl:"Paid",l:["int"],cp:["red","pt"],ctf:[]},
{t:"BTFM \u2014 Blue Team Field Manual",u:null,d:"By White & Clark. Defensive counterpart: IR, security commands, defensive techniques.",p:["books"],sub:null,c:"paid",cl:"Paid",l:["int"],cp:["blue","soc","dfir"],ctf:[]},
{t:"Practical Malware Analysis",u:null,d:"By Sikorski & Honig. Standard textbook: static, dynamic analysis, debugging, anti-analysis.",p:["books"],sub:null,c:"paid",cl:"Paid",l:["int","adv"],cp:["mal"],ctf:[]},
{t:"The Art of Memory Forensics",u:null,d:"Definitive book on memory forensics: Windows, Linux, Mac with Volatility.",p:["books"],sub:null,c:"paid",cl:"Paid",l:["int","adv"],cp:["dfir"],ctf:[]},
{t:"Serious Cryptography",u:null,d:"By Jean-Philippe Aumasson. Modern, practical crypto: implementations and pitfalls.",p:["books"],sub:null,c:"paid",cl:"Paid",l:["int"],cp:[],ctf:[]},
{t:"Security Engineering (3rd Ed.)",u:"https://www.cl.cam.ac.uk/~rja14/book.html",d:"By Ross Anderson. Broad security engineering, freely available online.",p:["books"],sub:null,c:"free",cl:"Free Online",l:["int","adv"],cp:["arch"],ctf:[]},
{t:"Applied Cryptography (Boneh & Shoup)",u:"https://toc.cryptobook.us",d:"Free, continuously updated graduate-level textbook on modern cryptography.",p:["books"],sub:null,c:"free",cl:"Free Online",l:["adv"],cp:[],ctf:[]},
{t:"Black Hat Python",u:null,d:"By Justin Seitz. Python for hackers: network sniffing, web hacking, tool building.",p:["books"],sub:null,c:"paid",cl:"Paid",l:["int"],cp:["pt","red"],ctf:[]},
{t:"Network Security Assessment",u:null,d:"By Chris McNab. Comprehensive network security testing guide.",p:["books"],sub:null,c:"paid",cl:"Paid",l:["int","adv"],cp:["pt"],ctf:[]},
{t:"Threat Modeling",u:null,d:"By Adam Shostack. Standard reference on STRIDE, attack trees, and secure design.",p:["books"],sub:null,c:"paid",cl:"Paid",l:["int"],cp:["arch","app"],ctf:[]},
{t:"Sandworm",u:null,d:"By Andy Greenberg. Narrative of Russian state-sponsored cyber operations.",p:["books"],sub:null,c:"paid",cl:"Paid",l:["beg"],cp:[],ctf:[]},
{t:"Countdown to Zero Day",u:null,d:"By Kim Zetter. The definitive Stuxnet account: nation-state weapons and ICS security.",p:["books"],sub:null,c:"paid",cl:"Paid",l:["beg"],cp:[],ctf:[]},
{t:"The Cuckoo's Egg",u:null,d:"By Cliff Stoll. Classic true story of tracking a hacker. Foundational cybersecurity history.",p:["books"],sub:null,c:"paid",cl:"Paid",l:["beg"],cp:[],ctf:[]},
{t:"Operator Handbook",u:null,d:"By NetMux. Red team, blue team, and OSINT commands and techniques field manual.",p:["books"],sub:null,c:"paid",cl:"Paid",l:["int"],cp:["red","blue"],ctf:[]},
// ====== CLOUD SECURITY ======
{t:"flaws.cloud",u:"http://flaws.cloud",d:"Free hands-on AWS misconfigs: S3 exposure, IAM issues, metadata abuse. Progressive levels.",p:["cloud"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:["cloud"],ctf:[]},
{t:"flaws2.cloud",u:"http://flaws2.cloud",d:"Sequel: attacker and defender paths, container security, ECR, advanced AWS.",p:["cloud"],sub:null,c:"free",cl:"Free",l:["int"],cp:["cloud"],ctf:[]},
{t:"CloudGoat",u:"https://github.com/RhinoSecurityLabs/cloudgoat",d:"Vulnerable-by-design AWS deployment: priv esc and lateral movement scenarios.",p:["cloud"],sub:null,c:"free",cl:"Free (AWS costs)",l:["int","adv"],cp:["cloud","pt"],ctf:[]},
{t:"IAM Vulnerable",u:"https://github.com/BishopFox/iam-vulnerable",d:"AWS IAM priv esc playground: 31 scenarios for cloud identity attacks.",p:["cloud"],sub:null,c:"free",cl:"Free (AWS costs)",l:["int","adv"],cp:["cloud"],ctf:[]},
{t:"AWSGoat",u:"https://github.com/ine-labs/AWSGoat",d:"Vulnerable AWS infrastructure: OWASP Top 10 in cloud, IAM, serverless misconfigs.",p:["cloud"],sub:null,c:"free",cl:"Free (AWS costs)",l:["int"],cp:["cloud"],ctf:[]},
{t:"AzureGoat",u:"https://github.com/ine-labs/AzureGoat",d:"Vulnerable Azure infrastructure for cloud pentesting practice.",p:["cloud"],sub:null,c:"free",cl:"Free (Azure costs)",l:["int"],cp:["cloud"],ctf:[]},
{t:"GCPGoat",u:"https://github.com/ine-labs/GCPGoat",d:"Vulnerable GCP infrastructure for cloud security training.",p:["cloud"],sub:null,c:"free",cl:"Free (GCP costs)",l:["int"],cp:["cloud"],ctf:[]},
{t:"Kubernetes Goat",u:"https://github.com/madhuakula/kubernetes-goat",d:"Vulnerable K8s cluster for container and Kubernetes security through real attacks.",p:["cloud"],sub:null,c:"free",cl:"Free",l:["int","adv"],cp:["cloud"],ctf:[]},
{t:"CloudFoxable",u:"https://github.com/BishopFox/cloudfoxable",d:"AWS pentesting playground for cloud enumeration and exploitation practice.",p:["cloud"],sub:null,c:"free",cl:"Free (AWS costs)",l:["int","adv"],cp:["cloud"],ctf:[]},
{t:"Thunder CTF",u:"https://thunder-ctf.cloud",d:"GCP-based CTF teaching GCP security through exploiting misconfigurations.",p:["cloud"],sub:null,c:"free",cl:"Free (GCP costs)",l:["int"],cp:["cloud"],ctf:[]},
{t:"Prowler",u:"https://github.com/prowler-cloud/prowler",d:"Open-source cloud security assessment for AWS, Azure, GCP. Extensive security checks.",p:["cloud"],sub:null,c:"free",cl:"Free",l:["int"],cp:["cloud"],ctf:[]},
{t:"Pacu",u:"https://github.com/RhinoSecurityLabs/pacu",d:"Open-source AWS exploitation framework for offensive cloud security testing.",p:["cloud"],sub:null,c:"free",cl:"Free",l:["int","adv"],cp:["cloud","pt"],ctf:[]},
// ====== JOBS & CAREERS ======
{t:"CyberSecJobs",u:"https://www.cybersecjobs.com",d:"Dedicated cybersecurity job board across all levels and specializations.",p:["careers"],sub:null,c:"free",cl:"Free",l:["beg","int","adv"],cp:[],ctf:[]},
{t:"InfoSec Jobs",u:"https://infosec-jobs.com",d:"Job board focused on information security roles across industries.",p:["careers"],sub:null,c:"free",cl:"Free",l:["beg","int","adv"],cp:[],ctf:[]},
{t:"ClearedJobs.Net",u:"https://www.clearedjobs.net",d:"Jobs requiring security clearances. Common in government cybersecurity.",p:["careers"],sub:null,c:"free",cl:"Free",l:["int","adv"],cp:[],ctf:[]},
{t:"CyberSeek",u:"https://www.cyberseek.org",d:"Interactive career pathway and heatmap of cybersecurity job supply/demand across the US.",p:["careers"],sub:null,c:"free",cl:"Free",l:["beg","int","adv"],cp:[],ctf:[]},
{t:"USAJobs",u:"https://www.usajobs.gov",d:"Official US federal job site: CISA, NSA, FBI, DoD cybersecurity roles.",p:["careers"],sub:null,c:"free",cl:"Free",l:["beg","int","adv"],cp:[],ctf:[]},
{t:"SANS Job Board",u:"https://www.sans.org/cyber-security-jobs/",d:"Curated listings from organizations that value SANS/GIAC certifications.",p:["careers"],sub:null,c:"free",cl:"Free",l:["int","adv"],cp:[],ctf:[]},
{t:"LinkedIn Cybersecurity Jobs",u:"https://www.linkedin.com/jobs/cybersecurity-jobs/",d:"Largest professional network with extensive cyber hiring activity.",p:["careers"],sub:null,c:"free",cl:"Free",l:["beg","int","adv"],cp:[],ctf:[]},
{t:"Dice",u:"https://www.dice.com",d:"Technology-focused job board with strong cybersecurity section and salary tools.",p:["careers"],sub:null,c:"free",cl:"Free",l:["beg","int","adv"],cp:[],ctf:[]},
{t:"We Work Remotely (Security)",u:"https://weworkremotely.com",d:"Remote job board with dedicated security/DevOps category for remote-first cyber roles.",p:["careers"],sub:null,c:"free",cl:"Free",l:["int","adv"],cp:[],ctf:[]},
// ====== SCHOLARSHIPS ======
{t:"CyberCorps: Scholarship for Service",u:"https://www.sfs.opm.gov",d:"Full scholarship: tuition, stipend, living expenses for cybersecurity studies in exchange for government service.",p:["scholarships"],sub:null,c:"free",cl:"Full Scholarship",l:["beg","int"],cp:[],ctf:[]},
{t:"CISA Cyber Talent Programs",u:"https://niccs.cisa.gov",d:"CISA's workforce: internships, fellowships, and training for aspiring cybersecurity professionals.",p:["scholarships"],sub:null,c:"free",cl:"Funded",l:["beg","int"],cp:[],ctf:[]},
{t:"ISC2 Scholarships",u:"https://www.isc2.org/scholarships",d:"Scholarships for cybersecurity education including exam vouchers and training.",p:["scholarships"],sub:null,c:"free",cl:"Scholarship",l:["beg","int"],cp:[],ctf:[]},
{t:"WiCyS Scholarships",u:"https://www.wicys.org/initiatives/scholarships/",d:"Scholarships for women in cybersecurity: conference, training, certification funding.",p:["scholarships"],sub:null,c:"free",cl:"Scholarship",l:["beg","int"],cp:[],ctf:[]},
{t:"SANS Scholarship Academies",u:"https://www.sans.org/scholarship-academies/",d:"Scholarships covering SANS tuition and GIAC certifications, including diversity tracks.",p:["scholarships"],sub:null,c:"free",cl:"Scholarship",l:["beg","int"],cp:[],ctf:[]},
{t:"National Cyber Scholarship Foundation",u:"https://www.nationalcyberscholarship.org",d:"Scholarships via Cyber FastTrack providing free SANS training to qualifying students.",p:["scholarships"],sub:null,c:"free",cl:"Scholarship",l:["beg"],cp:[],ctf:[]},
{t:"CyberPatriot",u:"https://www.cyberpatriot.org",d:"Youth cyber education program. Competition-based with scholarship opportunities.",p:["scholarships"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:[],ctf:[]},
{t:"Cyber FastTrack",u:"https://cyber-fasttrack.org",d:"Free challenge-based program awarding SANS training scholarships to top performers.",p:["scholarships"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:[],ctf:[]},
{t:"AFCEA Cybersecurity Scholarships",u:"https://www.afcea.org/site/scholarships",d:"Armed Forces Communications and Electronics Association scholarships for STEM and cybersecurity students.",p:["scholarships"],sub:null,c:"free",cl:"Scholarship",l:["beg","int"],cp:[],ctf:[]},
{t:"DoD Cyber Scholarship Program",u:"https://dodcio.defense.gov/Cyber-Workforce/CySP/",d:"Department of Defense scholarship-for-service placing students in DoD cyber roles.",p:["scholarships"],sub:null,c:"free",cl:"Full Scholarship",l:["beg","int"],cp:[],ctf:[]},
{t:"GenCyber Camps",u:"https://www.gen-cyber.com",d:"NSA/NSF-funded free summer cybersecurity camps for K-12 students and teachers.",p:["scholarships"],sub:null,c:"free",cl:"Free",l:["beg"],cp:[],ctf:[]},
{t:"SWSIS",u:"https://www.swsis.org",d:"Scholarships for Women Studying Information Security. Undergraduate and graduate level.",p:["scholarships"],sub:null,c:"free",cl:"Scholarship",l:["beg","int"],cp:[],ctf:[]},
// ====== COMMUNITY ======
{t:"ISC2",u:"https://www.isc2.org",d:"Largest security professional org. CISSP, CCSP, CC certifications and member community.",p:["community"],sub:"Professional Organizations",c:"paid",cl:"Membership",l:["int","adv"],cp:["arch","grc"],ctf:[]},
{t:"ISACA",u:"https://www.isaca.org",d:"IT governance, risk, security. CISM, CISA, CRISC certifications.",p:["community"],sub:"Professional Organizations",c:"paid",cl:"Membership",l:["int","adv"],cp:["grc"],ctf:[]},
{t:"OWASP",u:"https://owasp.org",d:"Open Web Application Security Project. Free community projects, tools, docs, local chapters.",p:["community"],sub:"Professional Organizations",c:"free",cl:"Free",l:["beg","int","adv"],cp:["app"],ctf:[]},
{t:"EFF",u:"https://www.eff.org",d:"Electronic Frontier Foundation. Defending digital privacy, free speech, innovation.",p:["community"],sub:"Professional Organizations",c:"free",cl:"Free",l:["beg","int","adv"],cp:[],ctf:[]},
{t:"Cloud Security Alliance",u:"https://cloudsecurityalliance.org",d:"Cloud security best practices. CCSK and CCAK certifications.",p:["community"],sub:"Professional Organizations",c:"paid",cl:"Membership",l:["int","adv"],cp:["cloud"],ctf:[]},
{t:"FIRST",u:"https://www.first.org",d:"Forum of Incident Response Teams. Global cooperation in incident handling.",p:["community"],sub:"Professional Organizations",c:"paid",cl:"Membership",l:["int","adv"],cp:["dfir","soc"],ctf:[]},
{t:"InfraGard",u:"https://www.infragard.org",d:"FBI-private sector partnership for threat intelligence sharing and critical infrastructure protection.",p:["community"],sub:"Professional Organizations",c:"free",cl:"Free",l:["int","adv"],cp:["blue"],ctf:[]},
// Diversity
{t:"WiCyS",u:"https://www.wicys.org",d:"Women in CyberSecurity. Conference, mentorship, scholarships, professional development.",p:["community"],sub:"Diversity & Mentorship",c:"free",cl:"Free",l:["beg","int"],cp:[],ctf:[]},
{t:"Blacks in Cybersecurity",u:"https://www.blacksincybersecurity.com",d:"Community for Black professionals: networking, mentorship, events.",p:["community"],sub:"Diversity & Mentorship",c:"free",cl:"Free",l:["beg","int"],cp:[],ctf:[]},
{t:"The Diana Initiative",u:"https://www.yourdianainitiative.com",d:"Conference and community promoting diversity in infosec.",p:["community"],sub:"Diversity & Mentorship",c:"free",cl:"Free/Low Cost",l:["beg","int"],cp:[],ctf:[]},
{t:"VetSec",u:"https://veteransec.com",d:"Helping military veterans transition into cybersecurity.",p:["community"],sub:"Diversity & Mentorship",c:"free",cl:"Free",l:["beg","int"],cp:[],ctf:[]},
{t:"Latina in Cyber",u:"https://latinaincyber.org",d:"Empowering Latinas in cybersecurity through mentorship and networking.",p:["community"],sub:"Diversity & Mentorship",c:"free",cl:"Free",l:["beg","int"],cp:[],ctf:[]},
{t:"Out in Tech",u:"https://outintech.com",d:"Supporting LGBTQ+ professionals in technology including cybersecurity.",p:["community"],sub:"Diversity & Mentorship",c:"free",cl:"Free",l:["beg","int"],cp:[],ctf:[]},
{t:"ICMCP",u:"https://www.icmcp.org",d:"Consortium for minority cybersecurity professionals. Scholarships, mentorship, career development.",p:["community"],sub:"Diversity & Mentorship",c:"free",cl:"Free",l:["beg","int"],cp:[],ctf:[]},
// Conferences
{t:"DEF CON",u:"https://defcon.org",d:"World's most famous hacker conference. Villages, CTFs, talks, workshops. Las Vegas.",p:["community"],sub:"Conferences",c:"paid",cl:"~$440",l:["int","adv"],cp:[],ctf:[]},
{t:"Black Hat",u:"https://www.blackhat.com",d:"Premier infosec conference: cutting-edge research, hands-on training. US, Europe, Asia.",p:["community"],sub:"Conferences",c:"paid",cl:"$$$$",l:["int","adv"],cp:[],ctf:[]},
{t:"BSides (Global)",u:"https://bsides.org",d:"Community-driven security conferences worldwide. Free or low-cost, grassroots.",p:["community"],sub:"Conferences",c:"free",cl:"Free/Low Cost",l:["beg","int","adv"],cp:[],ctf:[]},
{t:"RSA Conference",u:"https://www.rsaconference.com",d:"Largest enterprise cybersecurity conference. Keynotes, expo, strategy.",p:["community"],sub:"Conferences",c:"paid",cl:"$$$$",l:["adv"],cp:["grc","arch"],ctf:[]},
{t:"ShmooCon",u:"https://www.shmoocon.org",d:"East coast hacker conference in DC. Technology exploitation and critical thinking.",p:["community"],sub:"Conferences",c:"paid",cl:"$$",l:["int"],cp:[],ctf:[]},
{t:"Wild West Hackin' Fest",u:"https://www.wildwesthackinfest.com",d:"Conference by BHIS. Talks, training, OSINT challenges, community.",p:["community"],sub:"Conferences",c:"paid",cl:"$$",l:["int","adv"],cp:[],ctf:[]},
{t:"GrrCON",u:"https://grrcon.com",d:"Midwest security conference. Talks, workshops, CTFs, welcoming community.",p:["community"],sub:"Conferences",c:"paid",cl:"$",l:["int"],cp:[],ctf:[]},
{t:"HITB (Hack in the Box)",u:"https://conference.hitb.org",d:"International deep-technical security conference. Amsterdam, Abu Dhabi, and more.",p:["community"],sub:"Conferences",c:"paid",cl:"$$$",l:["int","adv"],cp:[],ctf:[]},
{t:"Hack.lu",u:"https://hack.lu",d:"European infosec conference in Luxembourg. Strong technical content and CTFs.",p:["community"],sub:"Conferences",c:"paid",cl:"$$",l:["int","adv"],cp:[],ctf:[]},
{t:"fwd:cloudsec",u:"https://fwdcloudsec.org",d:"Conference dedicated to cloud security research and practices.",p:["community"],sub:"Conferences",c:"free",cl:"Free",l:["int","adv"],cp:["cloud"],ctf:[]},
// Online Communities
{t:"r/netsec",u:"https://www.reddit.com/r/netsec/",d:"Reddit's premier infosec community. Technical content, research, vulnerability disclosures.",p:["community"],sub:"Online Communities",c:"free",cl:"Free",l:["int","adv"],cp:[],ctf:[]},
{t:"r/cybersecurity",u:"https://www.reddit.com/r/cybersecurity/",d:"Active subreddit: news, career advice, discussions.",p:["community"],sub:"Online Communities",c:"free",cl:"Free",l:["beg","int","adv"],cp:[],ctf:[]},
{t:"r/SecurityCareerAdvice",u:"https://www.reddit.com/r/SecurityCareerAdvice/",d:"Career guidance, certifications, breaking into the field.",p:["community"],sub:"Online Communities",c:"free",cl:"Free",l:["beg"],cp:[],ctf:[]},
{t:"0x00sec",u:"https://0x00sec.org",d:"Forum: hacking, malware analysis, exploit development. High-quality technical discussions.",p:["community"],sub:"Online Communities",c:"free",cl:"Free",l:["int","adv"],cp:[],ctf:[]},
{t:"The Many Hats Club",u:"https://themanyhats.club",d:"Discord-based infosec community with mentorship, career support, social channels.",p:["community"],sub:"Online Communities",c:"free",cl:"Free",l:["beg","int"],cp:[],ctf:[]},
{t:"OWASP Slack",u:"https://owasp.org/slack/invite",d:"OWASP's official Slack with channels for projects, chapters, and application security.",p:["community"],sub:"Online Communities",c:"free",cl:"Free",l:["int","adv"],cp:["app"],ctf:[]},
// ====== NEWS & PODCASTS ======
{t:"Krebs on Security",u:"https://krebsonsecurity.com",d:"Award-winning investigative journalism by Brian Krebs: cybercrime, breaches, security news.",p:["news"],sub:"Blogs & News",c:"free",cl:"Free",l:["beg","int","adv"],cp:[],ctf:[]},
{t:"Schneier on Security",u:"https://www.schneier.com",d:"Bruce Schneier on security, privacy, and technology policy.",p:["news"],sub:"Blogs & News",c:"free",cl:"Free",l:["int","adv"],cp:[],ctf:[]},
{t:"The Hacker News",u:"https://thehackernews.com",d:"Widely-read: vulnerabilities, breaches, tools, research developments.",p:["news"],sub:"Blogs & News",c:"free",cl:"Free",l:["beg","int","adv"],cp:[],ctf:[]},
{t:"Dark Reading",u:"https://www.darkreading.com",d:"Enterprise security news and analysis: threats, vulnerabilities, strategy.",p:["news"],sub:"Blogs & News",c:"free",cl:"Free",l:["int","adv"],cp:[],ctf:[]},
{t:"SANS Internet Storm Center",u:"https://isc.sans.edu",d:"Daily diary of internet security incidents and analysis by SANS handlers.",p:["news"],sub:"Blogs & News",c:"free",cl:"Free",l:["int","adv"],cp:["soc"],ctf:[]},
{t:"PortSwigger Research",u:"https://portswigger.net/research",d:"Cutting-edge web security research from the Burp Suite team.",p:["news"],sub:"Blogs & News",c:"free",cl:"Free",l:["int","adv"],cp:["app","bb"],ctf:[]},
{t:"Google Project Zero",u:"https://googleprojectzero.blogspot.com",d:"World-class vulnerability research and exploitation from Google's elite team.",p:["news"],sub:"Blogs & News",c:"free",cl:"Free",l:["adv"],cp:["red"],ctf:[]},
{t:"BleepingComputer",u:"https://www.bleepingcomputer.com",d:"Cybersecurity news: malware, ransomware, vulnerabilities, data breaches.",p:["news"],sub:"Blogs & News",c:"free",cl:"Free",l:["beg","int"],cp:[],ctf:[]},
{t:"The Record",u:"https://therecord.media",d:"Cybersecurity news by Recorded Future: cybercrime, nation-state threats, policy.",p:["news"],sub:"Blogs & News",c:"free",cl:"Free",l:["int","adv"],cp:[],ctf:[]},
{t:"Trail of Bits Blog",u:"https://blog.trailofbits.com",d:"Research blog: software security, cryptography, and blockchain security.",p:["news"],sub:"Blogs & News",c:"free",cl:"Free",l:["adv"],cp:["app"],ctf:[]},
// Newsletters
{t:"tl;dr sec",u:"https://tldrsec.com",d:"Weekly newsletter by Clint Gibler curating the best security posts, tools, talks, research.",p:["news"],sub:"Newsletters",c:"free",cl:"Free",l:["int"],cp:[],ctf:[]},
{t:"Sector035 \u2014 Week in OSINT",u:"https://sector035.nl",d:"Weekly newsletter: new OSINT tools, techniques, and tips.",p:["news"],sub:"Newsletters",c:"free",cl:"Free",l:["int"],cp:[],ctf:[]},
{t:"Daniel Miessler's Unsupervised Learning",u:"https://danielmiessler.com/newsletter/",d:"Weekly newsletter blending cybersecurity, technology, AI, and society analysis.",p:["news"],sub:"Newsletters",c:"free",cl:"Free",l:["int"],cp:[],ctf:[]},
{t:"CISA Alerts & Advisories",u:"https://www.cisa.gov/news-events/cybersecurity-advisories",d:"Official US government cybersecurity alerts, advisories, vulnerability notifications.",p:["news"],sub:"Newsletters",c:"free",cl:"Free",l:["int","adv"],cp:["soc","blue"],ctf:[]},
// Podcasts
{t:"Darknet Diaries",u:"https://darknetdiaries.com",d:"True stories from the dark side of the internet. Hackers, breaches, cybercrime. Incredibly well-produced.",p:["news"],sub:"Podcasts",c:"free",cl:"Free",l:["beg","int","adv"],cp:[],ctf:[]},
{t:"Security Now",u:"https://twit.tv/shows/security-now",d:"Weekly deep-dive by Steve Gibson. Security news and concepts since 2005.",p:["news"],sub:"Podcasts",c:"free",cl:"Free",l:["int","adv"],cp:[],ctf:[]},
{t:"Risky Business",u:"https://risky.biz",d:"Weekly infosec podcast by Patrick Gray. News analysis and expert interviews.",p:["news"],sub:"Podcasts",c:"free",cl:"Free",l:["int","adv"],cp:[],ctf:[]},
{t:"Malicious Life",u:"https://malicious.life",d:"Cybersecurity history: famous hacks, major incidents, and the people behind them.",p:["news"],sub:"Podcasts",c:"free",cl:"Free",l:["beg","int"],cp:[],ctf:[]},
{t:"CyberWire Daily",u:"https://thecyberwire.com/podcasts/daily-podcast",d:"Daily cybersecurity news briefing. Concise, professional top stories.",p:["news"],sub:"Podcasts",c:"free",cl:"Free",l:["beg","int","adv"],cp:[],ctf:[]},
{t:"Smashing Security",u:"https://www.smashingsecurity.com",d:"Award-winning podcast: cybersecurity news with humor and clarity.",p:["news"],sub:"Podcasts",c:"free",cl:"Free",l:["beg","int"],cp:[],ctf:[]},
{t:"SANS StormCast",u:"https://isc.sans.edu/podcast.html",d:"Short daily podcast summarizing threats and vulnerabilities from SANS ISC.",p:["news"],sub:"Podcasts",c:"free",cl:"Free",l:["int","adv"],cp:["soc"],ctf:[]},
{t:"Hacking Humans",u:"https://thecyberwire.com/podcasts/hacking-humans",d:"Social engineering, phishing, and scams targeting people.",p:["news"],sub:"Podcasts",c:"free",cl:"Free",l:["beg","int"],cp:[],ctf:[]},
{t:"Paul's Security Weekly",u:"https://securityweekly.com",d:"Network of cybersecurity podcasts: enterprise security, hacking, leadership.",p:["news"],sub:"Podcasts",c:"free",cl:"Free",l:["int","adv"],cp:[],ctf:[]},
{t:"Defensive Security Podcast",u:"https://defensivesecurity.org",d:"Defensive security topics, news, blue team strategies.",p:["news"],sub:"Podcasts",c:"free",cl:"Free",l:["int"],cp:["blue","soc"],ctf:[]},
// ====== STANDARDS ======
{t:"MITRE ATT&CK",u:"https://attack.mitre.org",d:"Globally-used knowledge base of adversary TTPs. Foundational for threat intel, detection, red teaming.",p:["standards"],sub:null,c:"free",cl:"Free",l:["int","adv"],cp:["soc","blue","red"],ctf:[]},
{t:"MITRE D3FEND",u:"https://d3fend.mitre.org",d:"Defensive countermeasure framework mapping to ATT&CK techniques.",p:["standards"],sub:null,c:"free",cl:"Free",l:["int"],cp:["blue"],ctf:[]},
{t:"NIST CSF 2.0",u:"https://www.nist.gov/cyberframework",d:"Voluntary framework for managing cybersecurity risk: Identify, Protect, Detect, Respond, Recover, Govern.",p:["standards"],sub:null,c:"free",cl:"Free",l:["int"],cp:["grc","arch"],ctf:[]},
{t:"NIST SP 800-53",u:"https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final",d:"Comprehensive catalog of security and privacy controls. Widely adopted.",p:["standards"],sub:null,c:"free",cl:"Free",l:["int","adv"],cp:["grc","arch"],ctf:[]},
{t:"NIST SP 800-61 (Incident Response)",u:"https://csrc.nist.gov/publications/detail/sp/800-61/rev-2/final",d:"Computer Security Incident Handling Guide. The standard IR methodology reference.",p:["standards"],sub:null,c:"free",cl:"Free",l:["int"],cp:["dfir","soc"],ctf:[]},
{t:"CIS Benchmarks",u:"https://www.cisecurity.org/cis-benchmarks",d:"Consensus-based configuration guides for securing OS, cloud, databases, apps. Free PDFs.",p:["standards"],sub:null,c:"free",cl:"Free",l:["int"],cp:["blue","grc"],ctf:[]},
{t:"CIS Controls",u:"https://www.cisecurity.org/controls",d:"18 prioritized defensive actions for cyber defense. Mapped to NIST and ATT&CK.",p:["standards"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:["blue","grc"],ctf:[]},
{t:"Cyber Kill Chain",u:"https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html",d:"Original intrusion kill chain model. Foundational defensive concept.",p:["standards"],sub:null,c:"free",cl:"Free",l:["beg"],cp:["soc","blue"],ctf:[]},
{t:"Sigma Rules",u:"https://github.com/SigmaHQ/sigma",d:"Generic open signature format for SIEM. Write rules once, convert to any SIEM.",p:["standards"],sub:null,c:"free",cl:"Free",l:["int","adv"],cp:["soc","blue"],ctf:[]},
{t:"Atomic Red Team",u:"https://github.com/redcanaryco/atomic-red-team",d:"ATT&CK-mapped tests for validating security controls. Execute TTPs, verify detections.",p:["standards"],sub:null,c:"free",cl:"Free",l:["int","adv"],cp:["blue","red"],ctf:[]},
{t:"OWASP ASVS",u:"https://owasp.org/www-project-application-security-verification-standard/",d:"Application Security Verification Standard: security requirements at three levels.",p:["standards"],sub:null,c:"free",cl:"Free",l:["int"],cp:["app"],ctf:[]},
{t:"PTES",u:"http://www.pentest-standard.org",d:"Penetration Testing Execution Standard: methodology from pre-engagement through reporting.",p:["standards"],sub:null,c:"free",cl:"Free",l:["int"],cp:["pt"],ctf:[]},
{t:"PCI-DSS Overview",u:"https://www.pcisecuritystandards.org",d:"Payment Card Industry Data Security Standard. Required for organizations handling credit card data.",p:["standards"],sub:null,c:"free",cl:"Free",l:["int"],cp:["grc"],ctf:[]},
{t:"SOC 2 Overview",u:"https://us.aicpa.org/interestareas/frc/assuranceadvisoryservices/aicpasoc2report",d:"Service Organization Control 2 standard. Trust criteria for security, availability, processing integrity.",p:["standards"],sub:null,c:"free",cl:"Free",l:["int"],cp:["grc"],ctf:[]},
{t:"ISO 27001 Overview",u:"https://www.iso.org/standard/27001",d:"International standard for information security management systems (ISMS).",p:["standards"],sub:null,c:"free",cl:"Free",l:["int"],cp:["grc","arch"],ctf:[]},
// ====== DEEP-DIVE ADDITIONS ======
// More free courses
{t:"ENISA Training Materials",u:"https://www.enisa.europa.eu/topics/training-and-exercises",d:"EU Agency for Cybersecurity: free training, exercises, and best practice guides on IR, risk management.",p:["free-courses"],sub:null,c:"free",cl:"Free",l:["int"],cp:["dfir","grc"],ctf:[]},
{t:"Cybersecurity Base (Helsinki)",u:"https://cybersecuritybase.mooc.fi",d:"Free MOOC from University of Helsinki covering web security, secure development, and ethical hacking.",p:["free-courses"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:["app"],ctf:[]},
{t:"CLARK (NSA-funded)",u:"https://clark.center",d:"NSA-funded repository of free cybersecurity curricular materials, labs, and teaching resources.",p:["free-courses"],sub:null,c:"free",cl:"Free",l:["beg","int","adv"],cp:[],ctf:[]},
{t:"HackXpert",u:"https://hackxpert.com",d:"Free hands-on cybersecurity labs: web application security, network security, and CTF-style challenges.",p:["free-courses","practice"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:["pt","app"],ctf:[]},
{t:"NICCS Training Catalog",u:"https://niccs.cisa.gov/training",d:"Comprehensive searchable catalog of free and paid cybersecurity training by topic, provider, and level.",p:["free-courses"],sub:null,c:"free",cl:"Free",l:["beg","int","adv"],cp:[],ctf:[]},
{t:"Checkmarx Codebashing",u:"https://www.codebashing.com",d:"Free interactive lessons teaching developers to identify and fix security vulnerabilities across languages.",p:["free-courses"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:["app"],ctf:[]},
{t:"MITRE ATT&CK Defender Training",u:"https://mad.mitre-engenuity.org",d:"Training on practical ATT&CK framework application for threat-informed defense.",p:["free-courses"],sub:null,c:"free",cl:"Free",l:["int","adv"],cp:["soc","blue"],ctf:[]},
{t:"AWS Security Learning Path",u:"https://explore.skillbuilder.aws/learn/security",d:"Free self-paced AWS security training: IAM, encryption, logging, IR in AWS.",p:["free-courses"],sub:null,c:"free",cl:"Free",l:["int"],cp:["cloud"],ctf:[]},
{t:"Google Cloud Security Training",u:"https://www.cloudskillsboost.google/paths",d:"Free labs and courses on GCP security: IAM, network security, data protection.",p:["free-courses"],sub:null,c:"free",cl:"Free",l:["int"],cp:["cloud"],ctf:[]},
// More practice labs
{t:"bWAPP",u:"https://github.com/raesene/bWAPP",d:"Buggy Web App with 100+ vulnerabilities covering entire OWASP Top 10. More comprehensive than DVWA.",p:["practice"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:["app","pt"],ctf:[]},
{t:"Mutillidae II",u:"https://github.com/webpwnized/mutillidae",d:"OWASP's deliberately vulnerable web app with hints and guided walkthrough for each vulnerability.",p:["practice"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:["app"],ctf:[]},
{t:"NodeGoat",u:"https://github.com/OWASP/NodeGoat",d:"OWASP's vulnerable Node.js web app for learning OWASP Top 10 in a modern JavaScript stack.",p:["practice"],sub:null,c:"free",cl:"Free",l:["int"],cp:["app"],ctf:[]},
{t:"OWASP Wrongsecrets",u:"https://github.com/OWASP/wrongsecrets",d:"Vulnerable app focused on secrets management anti-patterns. Learn how NOT to handle secrets.",p:["practice"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:["app","cloud"],ctf:[]},
{t:"VAmPI (Vulnerable API)",u:"https://github.com/erev0s/VAmPI",d:"Vulnerable REST API built on Flask for practicing OWASP API Top 10 attacks.",p:["practice"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:["app","bb"],ctf:[]},
{t:"XSS Game (Google)",u:"https://xss-game.appspot.com",d:"Google's interactive XSS learning game with progressive difficulty levels.",p:["practice"],sub:null,c:"free",cl:"Free",l:["beg"],cp:["app"],ctf:[]},
{t:"Vulnerable-AD",u:"https://github.com/WazeHell/vulnerable-AD",d:"PowerShell script creating a vulnerable Active Directory environment for attack practice.",p:["practice"],sub:null,c:"free",cl:"Free",l:["int"],cp:["red","pt"],ctf:[]},
{t:"GOAD (Game of Active Directory)",u:"https://github.com/Orange-Cyberdefense/GOAD",d:"Lab with multiple AD forests and domains for advanced Active Directory attack practice.",p:["practice"],sub:null,c:"free",cl:"Free",l:["int","adv"],cp:["red","pt"],ctf:[]},
{t:"TerraGoat",u:"https://github.com/bridgecrewio/terragoat",d:"Vulnerable-by-design Terraform repository for learning IaC security scanning.",p:["practice","cloud"],sub:null,c:"free",cl:"Free",l:["int"],cp:["cloud","app"],ctf:[]},
{t:"CI/CD Goat",u:"https://github.com/cider-security-research/cicd-goat",d:"Deliberately vulnerable CI/CD environment for learning pipeline security and supply chain attacks.",p:["practice"],sub:null,c:"free",cl:"Free",l:["int","adv"],cp:["app","cloud"],ctf:[]},
{t:"DVSA (Serverless)",u:"https://github.com/OWASP/DVSA",d:"Damn Vulnerable Serverless Application for learning serverless-specific security issues.",p:["practice","cloud"],sub:null,c:"free",cl:"Free",l:["int"],cp:["cloud","app"],ctf:[]},
{t:"CyberTalents",u:"https://cybertalents.com",d:"Middle East-based CTF platform with regular competitions, challenges, and leaderboard.",p:["ctf"],sub:null,c:"free",cl:"Free",l:["beg","int","adv"],cp:[],ctf:["web","crypto","forensics","re","misc"]},
{t:"WeChall",u:"https://www.wechall.net",d:"Meta-site linking and scoring performance across 50+ hacking challenge sites worldwide.",p:["ctf"],sub:null,c:"free",cl:"Free",l:["beg","int","adv"],cp:[],ctf:["web","crypto","forensics","re","pwn","osint","misc"]},
// More YouTube
{t:"PwnFunction",u:"https://www.youtube.com/@PwnFunction",d:"Animated web security vulnerability explanations (XSS, CSRF, SSRF). Visually outstanding and technically accurate.",p:["youtube"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:["app"],ctf:[]},
{t:"OALabs",u:"https://www.youtube.com/@OALABS",d:"Advanced malware analysis, reverse engineering streams, threat research with real-world samples.",p:["youtube"],sub:null,c:"free",cl:"Free",l:["adv"],cp:["mal"],ctf:[]},
{t:"MalwareAnalysisForHedgehogs",u:"https://www.youtube.com/@MalwareAnalysisForHedgehogs",d:"Superb YouTube channel focusing on reverse engineering, deep-dive malware analysis, and assembly level debugging.",p:["youtube"],sub:null,c:"free",cl:"Free",l:["int","adv"],cp:["mal"],ctf:[]},
{t:"Grant Collins",u:"https://www.youtube.com/@GrantCollins",d:"Cloud security, detection engineering, and security automation with practical scenarios.",p:["youtube"],sub:null,c:"free",cl:"Free",l:["int"],cp:["cloud","blue"],ctf:[]},
{t:"CryptoCat",u:"https://www.youtube.com/@_CryptoCat",d:"CTF walkthroughs, binary exploitation, and reverse engineering with clear explanations.",p:["youtube"],sub:null,c:"free",cl:"Free",l:["int"],cp:["red"],ctf:[]},
{t:"VbScrub",u:"https://www.youtube.com/@VbScrub",d:"Active Directory security, Windows internals, and red team techniques with detailed demos.",p:["youtube"],sub:null,c:"free",cl:"Free",l:["int","adv"],cp:["red","pt"],ctf:[]},
{t:"Irongeek (Conference Archive)",u:"https://www.youtube.com/@irongeek",d:"Massive archive of recorded talks from DerbyCon, BSides, and other security conferences.",p:["youtube"],sub:null,c:"free",cl:"Free",l:["beg","int","adv"],cp:[],ctf:[]},
// More news/blogs
{t:"SecurityWeek",u:"https://www.securityweek.com",d:"Enterprise security news: vulnerabilities, malware, compliance, ICS/SCADA with in-depth analysis.",p:["news"],sub:"Blogs & News",c:"free",cl:"Free",l:["int","adv"],cp:[],ctf:[]},
{t:"Graham Cluley",u:"https://grahamcluley.com",d:"Independent cybersecurity blog by veteran researcher. Threats, scams, privacy with clarity and wit.",p:["news"],sub:"Blogs & News",c:"free",cl:"Free",l:["beg","int"],cp:[],ctf:[]},
{t:"The DFIR Report",u:"https://thedfirreport.com",d:"Detailed real-world intrusion reports showing full attack chains from initial access to impact.",p:["news"],sub:"Blogs & News",c:"free",cl:"Free",l:["adv"],cp:["dfir","soc"],ctf:[]},
{t:"DFIR Diva",u:"https://dfirdiva.com",d:"A curated directory of free and low-cost digital forensics and incident response training, CTFs, and learning resources.",p:["news"],sub:"Blogs & News",c:"free",cl:"Free",l:["beg","int"],cp:["dfir"],ctf:[]},
{t:"Mandiant Blog",u:"https://www.mandiant.com/resources/blog",d:"World-class threat intelligence, APT research, and incident response insights.",p:["news"],sub:"Blogs & News",c:"free",cl:"Free",l:["adv"],cp:["dfir","soc"],ctf:[]},
{t:"Talos Intelligence Blog",u:"https://blog.talosintelligence.com",d:"Threat research and vulnerability disclosures from Cisco's Talos group.",p:["news"],sub:"Blogs & News",c:"free",cl:"Free",l:["int","adv"],cp:["soc"],ctf:[]},
{t:"SpecterOps Blog",u:"https://posts.specterops.io",d:"Cutting-edge security research, red teaming, Active Directory security, and BloodHound development posts.",p:["news"],sub:"Blogs & News",c:"free",cl:"Free",l:["int","adv"],cp:["red"],ctf:[]},
// More newsletters
{t:"Detection Engineering Weekly",u:"https://detectionengineering.net",d:"Weekly newsletter on detection engineering, SIEM rules, and threat detection content.",p:["news"],sub:"Newsletters",c:"free",cl:"Free",l:["int","adv"],cp:["soc","blue"],ctf:[]},
{t:"Cloud Security Newsletter",u:"https://cloudseclist.com",d:"Curated weekly newsletter focused exclusively on cloud security news, tools, and research.",p:["news"],sub:"Newsletters",c:"free",cl:"Free",l:["int"],cp:["cloud"],ctf:[]},
{t:"API Security Newsletter",u:"https://apisecurity.io",d:"Weekly newsletter dedicated to API security news, vulnerabilities, best practices, and tools.",p:["news"],sub:"Newsletters",c:"free",cl:"Free",l:["int"],cp:["app"],ctf:[]},
{t:"This Week in 4n6",u:"https://thisweekin4n6.com",d:"Weekly newsletter for digital forensics and incident response news, tools, and research.",p:["news"],sub:"Newsletters",c:"free",cl:"Free",l:["int"],cp:["dfir"],ctf:[]},
// More podcasts
{t:"Click Here (Recorded Future)",u:"https://therecord.media/podcast",d:"Investigative podcast exploring people and stories behind major cyber events.",p:["news"],sub:"Podcasts",c:"free",cl:"Free",l:["beg","int"],cp:[],ctf:[]},
{t:"Cyber Work Podcast",u:"https://www.infosecinstitute.com/podcast/",d:"Career-focused interviews with cybersecurity leaders about paths, skills, and industry trends.",p:["news"],sub:"Podcasts",c:"free",cl:"Free",l:["beg","int"],cp:[],ctf:[]},
// More communities
{t:"NetSec Focus Discord",u:"https://discord.gg/netsecfocus",d:"Study group for OSCP, certifications, and pentesting with active peer support.",p:["community"],sub:"Online Communities",c:"free",cl:"Free",l:["int","adv"],cp:["pt"],ctf:[]},
{t:"InfoSec Prep Discord",u:"https://discord.gg/infosecprep",d:"Cybersecurity certification prep with study groups, resources, and mentor access.",p:["community"],sub:"Online Communities",c:"free",cl:"Free",l:["beg","int"],cp:[],ctf:[]},
{t:"Blue Team Con",u:"https://www.blueteamcon.com",d:"Conference focused on defensive security operations, detection engineering, and blue team skills.",p:["community"],sub:"Conferences",c:"paid",cl:"$$",l:["int","adv"],cp:["blue","soc"],ctf:[]},
{t:"OffensiveCon",u:"https://www.offensivecon.org",d:"Advanced offensive security conference in Berlin. Exploit development, vulnerability research.",p:["community"],sub:"Conferences",c:"paid",cl:"$$$",l:["adv"],cp:["red"],ctf:[]},
{t:"NorthSec",u:"https://nsec.io",d:"Montreal security conference and CTF. Technical talks, applied security, and one of the largest onsite CTFs.",p:["community"],sub:"Conferences",c:"paid",cl:"$$",l:["int","adv"],cp:[],ctf:[]},
// More scholarships/diversity
{t:"NPower",u:"https://www.npower.org",d:"Free tech training including cybersecurity for young adults and military veterans from underserved communities.",p:["scholarships"],sub:null,c:"free",cl:"Free",l:["beg"],cp:[],ctf:[]},
{t:"Per Scholas",u:"https://perscholas.org",d:"Free technology training including cybersecurity for underserved communities. Multiple US locations.",p:["scholarships"],sub:null,c:"free",cl:"Free",l:["beg"],cp:[],ctf:[]},
{t:"CyberWarrior Academy",u:"https://www.cyberwarrior.com",d:"Bootcamp and apprenticeship providing cybersecurity training for veterans and underserved communities.",p:["scholarships"],sub:null,c:"free",cl:"Free",l:["beg","int"],cp:[],ctf:[]},
{t:"Cybersecurity Talent Initiative",u:"https://cybertalentinitiative.org",d:"Student loan assistance program for cybersecurity graduates who work in government for two years.",p:["scholarships"],sub:null,c:"free",cl:"Funded",l:["beg","int"],cp:[],ctf:[]},
// More project ideas
{t:"Subdomain Enumerator",u:null,d:"Discover subdomains using DNS brute-forcing, certificate transparency logs, and public APIs.",p:["projects"],sub:"Beginner Projects",c:"free",cl:"Project",l:["beg"],cp:["pt","bb"],ctf:[]},
{t:"Wi-Fi Network Scanner",u:null,d:"Discover nearby wireless networks, identify encryption types, flag open/WEP networks as insecure.",p:["projects"],sub:"Beginner Projects",c:"free",cl:"Project",l:["beg"],cp:[],ctf:[]},
{t:"SPF/DKIM/DMARC Validator",u:null,d:"Comprehensive email authentication checker. Validate SPF, DKIM, DMARC records. Generate compliance reports.",p:["projects"],sub:"Intermediate Projects",c:"free",cl:"Project",l:["int"],cp:["blue","grc"],ctf:[]},
{t:"Compliance Checker (CIS Benchmarks)",u:null,d:"Audit Linux/Windows systems against CIS Benchmark recommendations. Generate compliance reports.",p:["projects"],sub:"Intermediate Projects",c:"free",cl:"Project",l:["int"],cp:["grc","blue"],ctf:[]},
{t:"Canary Token System",u:null,d:"Generate trackable documents, URLs, and DNS tokens that alert when accessed by attackers.",p:["projects"],sub:"Intermediate Projects",c:"free",cl:"Project",l:["int"],cp:["blue"],ctf:[]},
{t:"Cloud Misconfiguration Scanner",u:null,d:"Use boto3 (AWS SDK) to scan for public S3 buckets, open security groups, IAM issues.",p:["projects"],sub:"Intermediate Projects",c:"free",cl:"Project",l:["int"],cp:["cloud"],ctf:[]},
{t:"Firmware Analysis Platform",u:null,d:"Extract, emulate, and analyze IoT firmware for vulnerabilities using QEMU and automated static analysis.",p:["projects"],sub:"Advanced Projects",c:"free",cl:"Project",l:["adv"],cp:["red"],ctf:[]},
{t:"Supply Chain Attack Detector",u:null,d:"Monitor package registries (npm, PyPI) for typosquatting, dependency confusion, suspicious updates.",p:["projects"],sub:"Advanced Projects",c:"free",cl:"Project",l:["adv"],cp:["app","blue"],ctf:[]},
{t:"ML-Based Malware Classifier",u:null,d:"Train ML models on PE file features (imports, sections, entropy) to classify files as malicious or benign.",p:["projects"],sub:"Advanced Projects",c:"free",cl:"Project",l:["adv"],cp:["mal"],ctf:[]},
// More tools
{t:"DetectionLab",u:"https://github.com/clong/DetectionLab",d:"Automates creation of a lab environment with security tooling and logging. Great project base.",p:["tools"],sub:"Blue Team & Detection",c:"free",cl:"Free",l:["int"],cp:["blue","soc"],ctf:[]},
{t:"Infection Monkey",u:"https://github.com/guardicore/monkey",d:"Automated breach and attack simulation. Test network security by safely simulating real attacks.",p:["tools"],sub:"Blue Team & Detection",c:"free",cl:"Free",l:["int","adv"],cp:["blue","red"],ctf:[]},
{t:"OSQuery",u:"https://github.com/osquery/osquery",d:"SQL-powered OS instrumentation, monitoring, and analytics framework by Meta.",p:["tools"],sub:"Blue Team & Detection",c:"free",cl:"Free",l:["int","adv"],cp:["soc","blue"],ctf:[]},
{t:"Velociraptor",u:"https://github.com/Velocidex/velociraptor",d:"Advanced DFIR and endpoint monitoring. Forensic evidence collection at scale.",p:["tools"],sub:"Blue Team & Detection",c:"free",cl:"Free",l:["int","adv"],cp:["dfir"],ctf:[]},
{t:"ScoutSuite",u:"https://github.com/nccgroup/ScoutSuite",d:"Multi-cloud security auditing for AWS, Azure, GCP, Alibaba, and Oracle Cloud.",p:["tools"],sub:"Blue Team & Detection",c:"free",cl:"Free",l:["int"],cp:["cloud"],ctf:[]},
{t:"GitleakS",u:"https://github.com/gitleaks/gitleaks",d:"Open-source tool for detecting secrets (API keys, passwords, tokens) in git repositories.",p:["tools"],sub:"Blue Team & Detection",c:"free",cl:"Free",l:["beg","int"],cp:["app"],ctf:[]},
// More standards
{t:"HIPAA Security Resources",u:"https://www.hhs.gov/hipaa/for-professionals/security/",d:"US healthcare data security regulations. Required for organizations handling protected health information.",p:["standards"],sub:null,c:"free",cl:"Free",l:["int"],cp:["grc"],ctf:[]},
{t:"CMMC Overview",u:"https://dodcio.defense.gov/CMMC/",d:"Cybersecurity Maturity Model Certification for DoD contractors. Multiple levels of cyber hygiene.",p:["standards"],sub:null,c:"free",cl:"Free",l:["int"],cp:["grc"],ctf:[]},
{t:"OWASP SAMM",u:"https://owaspsamm.org",d:"Software Assurance Maturity Model. Assess and improve software security practices.",p:["standards"],sub:null,c:"free",cl:"Free",l:["int"],cp:["app","arch"],ctf:[]},
// ====== TOOLS TO LEARN ======
// Network & Recon
{t:"Nmap",u:"https://nmap.org",d:"The industry-standard network scanner. Discover hosts, open ports, services, and OS details. Learn from: Nmap Book (free at nmap.org/book), TryHackMe Nmap room, StationX Nmap Cheat Sheet.",p:["learn-tools"],sub:"Network & Recon",c:"free",cl:"Free",l:["beg","int","adv"],cp:["pt","soc","blue"],ctf:[]},
{t:"Wireshark",u:"https://www.wireshark.org",d:"World's most widely used network protocol analyzer. Capture and inspect packet-level traffic. Learn from: Chris Greer's YouTube channel, Wireshark official docs, Malware Traffic Analysis exercises.",p:["learn-tools"],sub:"Network & Recon",c:"free",cl:"Free",l:["beg","int","adv"],cp:["soc","dfir","blue"],ctf:[]},
{t:"tcpdump",u:"https://www.tcpdump.org",d:"Command-line packet capture. The Unix-native predecessor to Wireshark, essential for servers without GUIs. Learn from: Daniel Miessler's tcpdump tutorial, Julia Evans tcpdump zine, official man pages.",p:["learn-tools"],sub:"Network & Recon",c:"free",cl:"Free",l:["int","adv"],cp:["soc","dfir","blue"],ctf:[]},
{t:"Masscan",u:"https://github.com/robertdavidgraham/masscan",d:"Mass IP port scanner that can scan the entire Internet in under 5 minutes. 10M packets/sec. Learn from: GitHub README, HackTricks recon section.",p:["learn-tools"],sub:"Network & Recon",c:"free",cl:"Free",l:["int","adv"],cp:["pt"],ctf:[]},
{t:"netcat",u:"https://nc110.sourceforge.io",d:"The 'TCP/IP swiss army knife.' Read/write data across network connections. Used for banner grabbing, file transfer, and reverse shells. Learn from: SANS netcat cheat sheet, OverTheWire Bandit (uses it heavily), Hacker's Playbook chapter.",p:["learn-tools"],sub:"Network & Recon",c:"free",cl:"Free",l:["beg","int"],cp:["pt","red"],ctf:[]},
{t:"theHarvester",u:"https://github.com/laramies/theHarvester",d:"Gather emails, subdomains, hosts, and employee names from public sources. Essential for OSINT and pentest recon. Learn from: TryHackMe OSINT room, GitHub README, HackerSploit YouTube tutorial.",p:["learn-tools"],sub:"Network & Recon",c:"free",cl:"Free",l:["beg","int"],cp:["pt","bb"],ctf:[]},
// Web Application Testing
{t:"Burp Suite",u:"https://portswigger.net/burp",d:"The industry-standard web application security testing platform. Intercept, modify, and replay HTTP requests. Learn from: PortSwigger Web Security Academy (FREE, the gold standard), Bugcrowd University, IppSec walkthroughs.",p:["learn-tools"],sub:"Web Application Testing",c:"freemium",cl:"Free CE",l:["beg","int","adv"],cp:["app","bb","pt"],ctf:[]},
{t:"OWASP ZAP",u:"https://www.zaproxy.org",d:"Free, open-source web application scanner by OWASP. Burp Suite alternative for those who can't afford Pro. Learn from: ZAP getting started guide, OWASP ZAP YouTube channel, Snyk ZAP tutorial.",p:["learn-tools"],sub:"Web Application Testing",c:"free",cl:"Free",l:["beg","int","adv"],cp:["app","pt"],ctf:[]},
{t:"SQLMap",u:"https://github.com/sqlmapproject/sqlmap",d:"Automatic SQL injection and database takeover tool. Detects and exploits SQLi flaws across most databases. Learn from: SQLMap user manual, TryHackMe SQLi rooms, PortSwigger SQL injection labs.",p:["learn-tools"],sub:"Web Application Testing",c:"free",cl:"Free",l:["int","adv"],cp:["pt","app","bb"],ctf:[]},
{t:"Nuclei",u:"https://github.com/projectdiscovery/nuclei",d:"Fast template-based vulnerability scanner. Community templates cover thousands of CVEs and misconfigs. Learn from: Nuclei official docs, ProjectDiscovery YouTube channel, Bug Bounty Reports Nuclei guides.",p:["learn-tools"],sub:"Web Application Testing",c:"free",cl:"Free",l:["int"],cp:["pt","bb"],ctf:[]},
{t:"ffuf",u:"https://github.com/ffuf/ffuf",d:"Fast web fuzzer in Go. Directory busting, virtual host discovery, parameter fuzzing. Learn from: ffuf README, Codingo ffuf tutorial videos, Tib3rius YouTube tutorials.",p:["learn-tools"],sub:"Web Application Testing",c:"free",cl:"Free",l:["int","adv"],cp:["pt","bb"],ctf:[]},
{t:"Gobuster",u:"https://github.com/OJ/gobuster",d:"Directory/file, DNS, and virtual host busting tool in Go. Slightly older than ffuf but still widely used. Learn from: Gobuster README, TryHackMe Recon rooms, HackerSploit tutorials.",p:["learn-tools"],sub:"Web Application Testing",c:"free",cl:"Free",l:["beg","int"],cp:["pt","bb"],ctf:[]},
{t:"Nikto",u:"https://github.com/sullo/nikto",d:"Open-source web server scanner. Tests for thousands of dangerous files, outdated software, and misconfigurations. Learn from: Nikto man page, TryHackMe Web Enumeration room, basic Hacking Articles tutorials.",p:["learn-tools"],sub:"Web Application Testing",c:"free",cl:"Free",l:["beg","int"],cp:["pt","bb"],ctf:[]},
{t:"curl",u:"https://curl.se",d:"Command-line HTTP/HTTPS client. Essential for testing APIs, debugging requests, and scripting. Learn from: Everything curl (free book by curl creator), HackerOne API testing guide, daily practice.",p:["learn-tools"],sub:"Web Application Testing",c:"free",cl:"Free",l:["beg","int","adv"],cp:["app","bb","pt"],ctf:[]},
// Exploitation & Red Team
{t:"Metasploit Framework",u:"https://www.metasploit.com",d:"World's most used pentesting framework. Hundreds of exploits, payloads, post-exploitation modules. Learn from: Offensive Security's free Metasploit Unleashed course, TryHackMe Metasploit rooms, HackerSploit Metasploit playlist.",p:["learn-tools"],sub:"Exploitation & Red Team",c:"free",cl:"Free",l:["int","adv"],cp:["pt","red"],ctf:[]},
{t:"Hashcat",u:"https://hashcat.net/hashcat/",d:"World's fastest password recovery tool. GPU-accelerated, supports 300+ hash types. Learn from: Hashcat wiki, NetworkChuck password cracking videos, SANS Hashcat cheat sheet.",p:["learn-tools"],sub:"Exploitation & Red Team",c:"free",cl:"Free",l:["int","adv"],cp:["pt","red"],ctf:[]},
{t:"John the Ripper",u:"https://www.openwall.com/john/",d:"Open-source password cracker, predates Hashcat. CPU-based, great for cracking on systems without GPUs. Learn from: John the Ripper docs, OverTheWire Bandit, TCM Security tutorials.",p:["learn-tools"],sub:"Exploitation & Red Team",c:"free",cl:"Free",l:["int","adv"],cp:["pt","red"],ctf:[]},
{t:"Hydra",u:"https://github.com/vanhauser-thc/thc-hydra",d:"Fast and flexible online password brute-forcing tool supporting numerous protocols (SSH, FTP, HTTP, etc.). Learn from: Kali docs, TryHackMe Brute-force rooms, HackerSploit Hydra playlist.",p:["learn-tools"],sub:"Exploitation & Red Team",c:"free",cl:"Free",l:["beg","int"],cp:["pt"],ctf:[]},
{t:"Mimikatz",u:"https://github.com/gentilkiwi/mimikatz",d:"Extracts plaintext passwords, hashes, PIN codes, and Kerberos tickets from Windows memory. The go-to AD credential theft tool. Learn from: Adsecurity.org Mimikatz guide, ired.team docs, TryHackMe AD rooms.",p:["learn-tools"],sub:"Exploitation & Red Team",c:"free",cl:"Free",l:["int","adv"],cp:["red","pt"],ctf:[]},
{t:"BloodHound",u:"https://github.com/BloodHoundAD/BloodHound",d:"Active Directory attack path visualization. Maps trust relationships and privilege escalation paths using graph theory. Learn from: BloodHound docs, SpecterOps blog, IppSec BloodHound walkthroughs.",p:["learn-tools"],sub:"Exploitation & Red Team",c:"free",cl:"Free",l:["int","adv"],cp:["red","pt"],ctf:[]},
{t:"Impacket",u:"https://github.com/fortra/impacket",d:"Python network protocol classes. Essential for AD pentesting: SMB, WMI, Kerberos, DCSync, secretsdump, and more. Learn from: ired.team Impacket guides, The Hacker Recipes, HackTricks AD section.",p:["learn-tools"],sub:"Exploitation & Red Team",c:"free",cl:"Free",l:["int","adv"],cp:["red","pt"],ctf:[]},
{t:"NetExec (CrackMapExec)",u:"https://github.com/Pennyw0rth/NetExec",d:"Swiss Army knife for AD pentesting. Credential testing, enumeration, command execution across Windows networks. Learn from: NetExec wiki, ired.team CME guides, Tib3rius AD videos.",p:["learn-tools"],sub:"Exploitation & Red Team",c:"free",cl:"Free",l:["int","adv"],cp:["red","pt"],ctf:[]},
{t:"Responder",u:"https://github.com/lgandx/Responder",d:"LLMNR, NBT-NS, and MDNS poisoner. Captures credentials on internal networks via name resolution attacks. Learn from: ired.team Responder guide, TryHackMe AD rooms, BHIS YouTube videos.",p:["learn-tools"],sub:"Exploitation & Red Team",c:"free",cl:"Free",l:["int","adv"],cp:["red","pt"],ctf:[]},
{t:"Aircrack-ng",u:"https://www.aircrack-ng.org",d:"Complete suite for WiFi network security testing: packet capture, replay attacks, WPA/WEP cracking. Learn from: Aircrack-ng documentation, NetworkChuck WiFi hacking videos, HackerSploit wireless playlist.",p:["learn-tools"],sub:"Exploitation & Red Team",c:"free",cl:"Free",l:["int","adv"],cp:["pt","red"],ctf:[]},
// Reverse Engineering & Malware
{t:"Ghidra",u:"https://ghidra-sre.org",d:"NSA's free reverse engineering framework. Disassembly, decompilation, scripting, collaborative analysis. Learn from: Ghidra Class (official tutorials), HackadayU Ghidra course, Stacksmashing Ghidra videos.",p:["learn-tools"],sub:"Reverse Engineering & Malware",c:"free",cl:"Free",l:["int","adv"],cp:["mal","red"],ctf:[]},
{t:"Radare2 / Cutter",u:"https://github.com/radareorg/radare2",d:"Open-source RE framework with a CLI (r2) and GUI (Cutter). Powerful, scriptable, and steep learning curve. Learn from: Radare2 book (free), r2 cheat sheet, LiveOverflow r2 videos.",p:["learn-tools"],sub:"Reverse Engineering & Malware",c:"free",cl:"Free",l:["int","adv"],cp:["mal","red"],ctf:[]},
{t:"x64dbg",u:"https://github.com/x64dbg/x64dbg",d:"Open-source x64/x32 debugger for Windows. The go-to tool for dynamic malware analysis. Learn from: x64dbg blog tutorials, Malware Unicorn RE101, MalwareAnalysisForHedgehogs videos.",p:["learn-tools"],sub:"Reverse Engineering & Malware",c:"free",cl:"Free",l:["int","adv"],cp:["mal","red"],ctf:[]},
{t:"Frida",u:"https://frida.re",d:"Dynamic instrumentation toolkit. Hook into running processes for mobile and desktop reverse engineering. Learn from: Frida docs, OWASP MASTG, learnfrida.info tutorials.",p:["learn-tools"],sub:"Reverse Engineering & Malware",c:"free",cl:"Free",l:["int","adv"],cp:["mal","app"],ctf:[]},
{t:"YARA",u:"https://github.com/VirusTotal/yara",d:"Pattern-matching engine for malware identification and classification. Define rules to hunt for malware families. Learn from: YARA docs, Malware Unicorn YARA writeups, VirusTotal YARA tutorials.",p:["learn-tools"],sub:"Reverse Engineering & Malware",c:"free",cl:"Free",l:["int","adv"],cp:["mal","dfir","blue"],ctf:[]},
{t:"pwntools",u:"https://github.com/Gallopsled/pwntools",d:"CTF framework and exploit development library. Rapid prototyping of binary exploits in Python. Learn from: pwntools docs, Nightmare binary exploitation course, LiveOverflow pwntools series.",p:["learn-tools"],sub:"Reverse Engineering & Malware",c:"free",cl:"Free",l:["int","adv"],cp:["red"],ctf:[]},
// Forensics & DFIR
{t:"Volatility",u:"https://volatility3.readthedocs.io",d:"Premier open-source memory forensics framework. Analyze RAM dumps for malware, rootkits, and forensic artifacts. Learn from: Volatility docs, 13Cubed memory forensics videos, The Art of Memory Forensics book.",p:["learn-tools"],sub:"Forensics & DFIR",c:"free",cl:"Free",l:["int","adv"],cp:["dfir","mal"],ctf:[]},
{t:"Autopsy",u:"https://www.autopsy.com",d:"Free, open-source digital forensics platform. GUI for The Sleuth Kit. Disk image analysis, timeline analysis, artifact extraction. Learn from: Autopsy training (free, official), 13Cubed videos, NIST CFTT.",p:["learn-tools"],sub:"Forensics & DFIR",c:"free",cl:"Free",l:["beg","int"],cp:["dfir"],ctf:[]},
{t:"Eric Zimmerman's Tools",u:"https://ericzimmerman.github.io",d:"Free Windows forensic tools: Registry Explorer, MFTECmd, Timeline Explorer, KAPE. The DFIR practitioner's go-to. Learn from: Eric Zimmerman's tool docs, 13Cubed tutorials, SANS DFIR posters.",p:["learn-tools"],sub:"Forensics & DFIR",c:"free",cl:"Free",l:["int"],cp:["dfir"],ctf:[]},
{t:"Velociraptor",u:"https://github.com/Velocidex/velociraptor",d:"Advanced DFIR and endpoint monitoring. Forensic evidence collection at scale across endpoints. Learn from: Velociraptor docs, Mike Cohen YouTube channel, Antisyphon Velociraptor course.",p:["learn-tools"],sub:"Forensics & DFIR",c:"free",cl:"Free",l:["int","adv"],cp:["dfir"],ctf:[]},
// Blue Team & SIEM
{t:"Splunk",u:"https://www.splunk.com",d:"Industry-leading SIEM platform. Search, analyze, and visualize logs at scale. Learn from: Splunk Free Training, Splunk Boss of the SOC (BOTS), splunk.com docs.",p:["learn-tools"],sub:"Blue Team & SIEM",c:"freemium",cl:"Free Tier",l:["beg","int","adv"],cp:["soc","blue","dfir"],ctf:[]},
{t:"Elasticsearch / ELK Stack",u:"https://www.elastic.co/elastic-stack",d:"Free SIEM alternative. Elasticsearch + Logstash + Kibana for log ingestion, search, and visualization. Learn from: Elastic Security Training (free), Elastic blog, Pluralsight ELK courses.",p:["learn-tools"],sub:"Blue Team & SIEM",c:"freemium",cl:"Free Tier",l:["int","adv"],cp:["soc","blue"],ctf:[]},
{t:"Wazuh",u:"https://wazuh.com",d:"Free, open-source SIEM and XDR. Intrusion detection, log analysis, vulnerability detection, compliance monitoring. Learn from: Wazuh docs, official YouTube channel, TryHackMe Wazuh rooms.",p:["learn-tools"],sub:"Blue Team & SIEM",c:"free",cl:"Free",l:["int","adv"],cp:["soc","blue"],ctf:[]},
{t:"Sysmon",u:"https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon",d:"Windows system service for detailed activity logging. Critical for blue team visibility on Windows endpoints. Learn from: Microsoft Sysmon docs, SwiftOnSecurity Sysmon config, BHIS Sysmon webcasts.",p:["learn-tools"],sub:"Blue Team & SIEM",c:"free",cl:"Free",l:["int","adv"],cp:["soc","blue"],ctf:[]},
{t:"Suricata",u:"https://suricata.io",d:"High-performance network IDS, IPS, and security monitoring engine. The modern alternative to Snort. Learn from: Suricata user guide, OISF training, Security Onion docs.",p:["learn-tools"],sub:"Blue Team & SIEM",c:"free",cl:"Free",l:["int","adv"],cp:["soc","blue"],ctf:[]},
{t:"Snort",u:"https://www.snort.org",d:"Classic open-source IDS/IPS. Real-time traffic analysis and packet logging. Learn from: Snort 3 docs, Cisco Snort tutorials, TryHackMe Snort rooms.",p:["learn-tools"],sub:"Blue Team & SIEM",c:"free",cl:"Free",l:["int","adv"],cp:["soc","blue"],ctf:[]},
{t:"Zeek",u:"https://zeek.org",d:"Powerful network analysis framework focused on security monitoring at scale. Generates rich connection logs. Learn from: Zeek docs, BHIS RITA + Zeek videos, Active Countermeasures training.",p:["learn-tools"],sub:"Blue Team & SIEM",c:"free",cl:"Free",l:["int","adv"],cp:["soc","blue"],ctf:[]},
// OSINT & Cloud
{t:"Maltego",u:"https://www.maltego.com",d:"Visual link analysis and data mining for OSINT investigations. Map relationships between entities. Learn from: Maltego documentation, OSINT Combine training, Bellingcat tutorials.",p:["learn-tools"],sub:"OSINT & Cloud",c:"freemium",cl:"Free CE",l:["int"],cp:[],ctf:[]},
{t:"Shodan",u:"https://www.shodan.io",d:"Search engine for internet-connected devices. Find exposed databases, webcams, ICS systems, and more. Learn from: Shodan documentation, Daniel Miessler Shodan tutorials, John Matherly's Shodan book.",p:["learn-tools"],sub:"OSINT & Cloud",c:"freemium",cl:"Free Tier",l:["int"],cp:["pt","bb"],ctf:[]},
{t:"SpiderFoot",u:"https://github.com/smicallef/spiderfoot",d:"OSINT automation tool. Queries 200+ data sources to map an organization's attack surface. Learn from: SpiderFoot docs, OSINT Curious tutorials, Hackmag SpiderFoot guide.",p:["learn-tools"],sub:"OSINT & Cloud",c:"free",cl:"Free",l:["int"],cp:[],ctf:[]},
{t:"Prowler",u:"https://github.com/prowler-cloud/prowler",d:"Open-source cloud security assessment tool for AWS, Azure, GCP. Hundreds of security checks across providers. Learn from: Prowler docs, Toni de la Fuente YouTube, fwd:cloudsec talks.",p:["learn-tools"],sub:"OSINT & Cloud",c:"free",cl:"Free",l:["int"],cp:["cloud"],ctf:[]},
{t:"Pacu",u:"https://github.com/RhinoSecurityLabs/pacu",d:"Open-source AWS exploitation framework. Like Metasploit but for cloud. Test offensive cloud security techniques. Learn from: Pacu README, Rhino Security Labs blog, CloudGoat companion exercises.",p:["learn-tools"],sub:"OSINT & Cloud",c:"free",cl:"Free",l:["int","adv"],cp:["cloud","pt"],ctf:[]},
// General Utilities
{t:"CyberChef",u:"https://gchq.github.io/CyberChef/",d:"The 'Cyber Swiss Army Knife' by GCHQ. Web-based tool for encoding, decoding, encryption, hashing, data analysis. Learn from: CyberChef GitHub, CyberChef recipes site, John Hammond CyberChef videos.",p:["learn-tools"],sub:"General Utilities",c:"free",cl:"Free",l:["beg","int"],cp:[],ctf:[]},
{t:"Kali Linux",u:"https://www.kali.org",d:"Debian-based distribution with 600+ pre-installed pentesting tools. The standard pentest OS. Learn from: Kali official docs, Kali Linux Revealed (free book), HackerSploit Kali playlist.",p:["learn-tools"],sub:"General Utilities",c:"free",cl:"Free",l:["beg","int","adv"],cp:["pt","red"],ctf:[]},
{t:"Parrot OS",u:"https://www.parrotsec.org",d:"Lightweight Debian-based pentesting distribution. Kali alternative with a focus on privacy. Learn from: Parrot docs, official YouTube channel.",p:["learn-tools"],sub:"General Utilities",c:"free",cl:"Free",l:["beg","int"],cp:["pt"],ctf:[]},
{t:"Git (for security)",u:"https://git-scm.com",d:"Version control \u2014 essential for managing scripts, exploits, notes, and collaborating. Also: detect secrets in repos, audit history. Learn from: Pro Git book (free), GitHub Skills, Atlassian Git tutorials.",p:["learn-tools"],sub:"General Utilities",c:"free",cl:"Free",l:["beg","int"],cp:["app"],ctf:[]},
{t:"Docker (for security)",u:"https://www.docker.com",d:"Containerization for spinning up labs, running tools in isolation, and security testing. Learn from: Docker docs, Bret Fisher courses, Snyk container security training.",p:["learn-tools"],sub:"General Utilities",c:"free",cl:"Free",l:["int"],cp:["cloud","app"],ctf:[]},
{t:"Python (for security)",u:"https://www.python.org",d:"The de facto scripting language for security work. Automation, exploit dev, tool building. Learn from: Black Hat Python book, Automate the Boring Stuff, TryHackMe Python rooms.",p:["learn-tools"],sub:"General Utilities",c:"free",cl:"Free",l:["beg","int","adv"],cp:["pt","red","mal","app"],ctf:[]},
{t:"PowerShell (for security)",u:"https://learn.microsoft.com/en-us/powershell/",d:"Windows admin and red team scripting language. Critical for AD attacks and Windows post-exploitation. Learn from: Microsoft PowerShell docs, ired.team PowerShell pages, TryHackMe PowerShell rooms.",p:["learn-tools"],sub:"General Utilities",c:"free",cl:"Free",l:["int","adv"],cp:["red","blue","soc"],ctf:[]},
{t:"Vim & tmux",u:"https://www.vim.org",d:"Modal text editor and terminal multiplexer \u2014 the backbone of efficient CLI workflows for security work. Learn from: Vim Adventures (interactive game), built-in 'vimtutor' command, tmuxcheatsheet.com.",p:["learn-tools"],sub:"General Utilities",c:"free",cl:"Free",l:["beg","int","adv"],cp:[],ctf:[]},
];

// ============================================================
// STATE
// ============================================================
const S={page:'landing',search:'',level:'all',cost:'all',career:null,ctf:'all',openStep:0,theme:localStorage.getItem('ch-theme')||'light'};

// ============================================================
// INIT
// ============================================================
function init(){
  document.body.className=S.theme;
  updTheme();
  buildSidebar();
  bindGlobal();
  go('landing');
  const tc = document.getElementById('totalCount');
  if(tc) tc.textContent=R.length;
}

function bindGlobal(){
  $('search').addEventListener('input',debounce(e=>{S.search=e.target.value.toLowerCase();if(S.page!=='landing')renderPage();},180));
  $('themeBtn').addEventListener('click',()=>{S.theme=S.theme==='light'?'dark':'light';document.body.className=S.theme;localStorage.setItem('ch-theme',S.theme);updTheme();});
  $('menuBtn').addEventListener('click',()=>{$('sidebar').classList.add('open');$('overlay').classList.add('show');});
  $('sidebarClose').addEventListener('click',closeSidebar);
  $('overlay').addEventListener('click',closeSidebar);
  $('btt').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
  window.addEventListener('scroll',()=>{
    $('btt').classList.toggle('show',window.scrollY>400);
    const hero = document.querySelector('.landing h1');
    if(hero){
      const weight = Math.min(900, Math.max(650, 700 + Math.round(window.scrollY / 4)));
      hero.style.setProperty('--hero-weight', weight);
    }
  });
}

function closeSidebar(){$('sidebar').classList.remove('open');$('overlay').classList.remove('show');}

function buildSidebar(){
  const nav=$('sidebarNav');
  nav.innerHTML=PAGES.map(p=>`<button class="nav-item${p.id===S.page?' active':''}" data-page="${p.id}"><span class="nav-icon">${ICONS[p.icon]||''}</span><span class="nav-label">${p.name}</span></button>`).join('');
  nav.querySelectorAll('.nav-item').forEach(b=>b.addEventListener('click',()=>{go(b.dataset.page);closeSidebar();}));
}

function go(pageId){
  S.page=pageId;S.ctf='all';S.search='';$('search').value='';
  document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.page===pageId));
  window.scrollTo({top:0});
  if(pageId==='landing')renderLanding();
  else if(pageId==='career-guide')renderCareerGuide();
  else renderPage();
}

// ============================================================
// CAREER GUIDE
// ============================================================
const CAREER_INFO={
  soc:{n:"SOC Analyst",d:"Monitor security alerts, triage incidents, investigate threats, and respond to security events in a Security Operations Center."},
  pt:{n:"Penetration Tester",d:"Simulate cyber attacks against systems, networks, and applications to identify vulnerabilities before malicious actors do."},
  cloud:{n:"Cloud Security Engineer",d:"Secure cloud environments (AWS, Azure, GCP) \u2014 IAM, network security, data protection, container security, and compliance."},
  grc:{n:"GRC / Compliance",d:"Governance, Risk, and Compliance \u2014 manage policies, risk assessments, audits, and ensure regulatory compliance (SOC 2, ISO 27001, HIPAA, etc.)."},
  mal:{n:"Malware Analyst",d:"Reverse engineer malicious software, understand attacker techniques, and develop detection signatures."},
  dfir:{n:"DFIR Specialist",d:"Digital Forensics & Incident Response \u2014 investigate breaches, collect evidence, perform memory/disk forensics, and lead IR efforts."},
  app:{n:"AppSec Engineer",d:"Build secure software, conduct code reviews, implement SAST/DAST, and educate developers on secure coding practices."},
  arch:{n:"Security Architect",d:"Design secure systems and infrastructure at scale \u2014 threat modeling, security patterns, and enterprise security strategy."},
  bb:{n:"Bug Bounty Hunter",d:"Find vulnerabilities in production applications and earn rewards through responsible disclosure programs."},
  red:{n:"Red Team Operator",d:"Emulate advanced adversaries to test an organization's detection and response capabilities \u2014 C2 frameworks, evasion, and Active Directory attacks."},
  blue:{n:"Blue Team Defender",d:"Defend networks and systems \u2014 detection engineering, threat hunting, SIEM tuning, and security monitoring."},
};

// Each path has 5 steps. Each step has 2-4 hand-picked resources by title (matched against R array).
// Steps: 1=Foundations, 2=Core Skills, 3=Hands-On, 4=Certify, 5=Stay Current
const PATHS={
  soc:[
    {n:"Foundations",icon:"step_found",d:"Understand networking, Linux, and security basics. No rush \u2014 take your time here.",picks:["Professor Messer","SANS Cyber Aces","Google Cybersecurity Certificate"]},
    {n:"Core Skills",icon:"step_core",d:"Learn SIEM, log analysis, and the SOC workflow.",picks:["Splunk Free Training","Elastic Security Training","MITRE ATT&CK","AttackIQ Academy"]},
    {n:"Hands-On Practice",icon:"step_hands",d:"Simulate real SOC work \u2014 triage alerts, hunt threats, respond to incidents.",picks:["LetsDefend","CyberDefenders","Blue Team Labs Online","Splunk BOTS"]},
    {n:"Get Certified",icon:"step_cert",d:"Prove your skills with one of these industry certs.",picks:["CompTIA Security+","CompTIA CySA+","BTL1 / BTL2"]},
    {n:"Stay Current",icon:"step_signal",d:"Follow the best daily sources for threat intel and SOC news.",picks:["SANS Internet Storm Center","The Hacker News","Darknet Diaries","CyberWire Daily"]},
  ],
  pt:[
    {n:"Foundations",icon:"step_found",d:"Networking, Linux, and web basics. Don't skip these \u2014 they're non-negotiable.",picks:["SANS Cyber Aces","OverTheWire","Harvard CS50 Cybersecurity"]},
    {n:"Core Skills",icon:"step_core",d:"Learn offensive techniques, web security, and exploitation methodology.",picks:["PortSwigger Web Security Academy","TCM Security Academy","The Cyber Mentor","HackTricks"]},
    {n:"Hands-On Practice",icon:"step_hands",d:"Break into machines. This is where you actually become a pentester.",picks:["TryHackMe","Hack The Box","OffSec Proving Grounds","PicoCTF"]},
    {n:"Get Certified",icon:"step_cert",d:"Certs prove you can do the work \u2014 pick one and commit.",picks:["PNPT (TCM Security)","OSCP","CompTIA PenTest+"]},
    {n:"Stay Current",icon:"step_signal",d:"Follow these to keep your techniques sharp.",picks:["IppSec","John Hammond","PayloadsAllTheThings","PortSwigger Research"]},
  ],
  cloud:[
    {n:"Foundations",icon:"step_found",d:"Understand cloud basics before diving into security.",picks:["AWS Security Learning Path","Google Cloud Security Training","Microsoft Security Training"]},
    {n:"Core Skills",icon:"step_core",d:"Learn cloud attack surfaces, IAM, and the specific security model of each provider.",picks:["HackTricks Cloud","Hacking the Cloud","Prowler"]},
    {n:"Hands-On Practice",icon:"step_hands",d:"Exploit deliberately vulnerable cloud environments.",picks:["flaws.cloud","CloudGoat","AWSGoat","Kubernetes Goat"]},
    {n:"Get Certified",icon:"step_cert",d:"Cloud-specific certs make you stand out.",picks:["AWS Security Specialty","Azure AZ-500","CompTIA Security+"]},
    {n:"Stay Current",icon:"step_signal",d:"Cloud security moves fast \u2014 these sources keep you ahead.",picks:["Cloud Security Newsletter","fwd:cloudsec","tl;dr sec"]},
  ],
  grc:[
    {n:"Foundations",icon:"step_found",d:"Learn the security basics before diving into frameworks.",picks:["Google Cybersecurity Certificate","Simply Cyber","ISC2 CC (Certified in Cybersecurity)"]},
    {n:"Core Skills",icon:"step_core",d:"Master the frameworks and standards GRC work is built on.",picks:["NIST CSF 2.0","NIST SP 800-53","CIS Controls","ISO 27001 Overview"]},
    {n:"Hands-On Practice",icon:"step_hands",d:"Practical exercises and policy work.",picks:["CISA Cybersecurity Training","MITRE ATT&CK","Compliance Checker (CIS Benchmarks)"]},
    {n:"Get Certified",icon:"step_cert",d:"GRC is cert-heavy \u2014 these are the ones hiring managers look for.",picks:["CompTIA Security+","CISM (ISACA)","CISSP (ISC2)"]},
    {n:"Stay Current",icon:"step_signal",d:"Stay on top of regulatory changes and best practices.",picks:["Krebs on Security","Dark Reading","CISA Alerts & Advisories"]},
  ],
  mal:[
    {n:"Foundations",icon:"step_found",d:"Learn assembly, C, and Windows/Linux internals.",picks:["OpenSecurityTraining2","RE for Beginners","Hacking: The Art of Exploitation"]},
    {n:"Core Skills",icon:"step_core",d:"Master static and dynamic malware analysis.",picks:["Malware Unicorn RE101/RE102","Practical Malware Analysis","Ghidra (NSA)"]},
    {n:"Hands-On Practice",icon:"step_hands",d:"Analyze real malware in safe environments.",picks:["FLARE VM","REMnux","Malware Traffic Analysis","crackmes.one"]},
    {n:"Get Certified",icon:"step_cert",d:"RE/malware certs are rarer but highly valuable.",picks:["Sektor7 Institute","SANS Institute"]},
    {n:"Stay Current",icon:"step_signal",d:"Follow the best malware researchers.",picks:["OALabs","MalwareAnalysisForHedgehogs","The DFIR Report","Talos Intelligence Blog"]},
  ],
  dfir:[
    {n:"Foundations",icon:"step_found",d:"Learn operating system internals and forensic basics.",picks:["SANS Cyber Aces","13Cubed","AboutDFIR"]},
    {n:"Core Skills",icon:"step_core",d:"Master memory, disk, and network forensics tools.",picks:["Volatility 3","Autopsy / Sleuth Kit","Eric Zimmerman's Tools","SANS DFIR Posters"]},
    {n:"Hands-On Practice",icon:"step_hands",d:"Solve real forensic challenges.",picks:["CyberDefenders","Blue Team Labs Online","Splunk BOTS","Malware Traffic Analysis"]},
    {n:"Get Certified",icon:"step_cert",d:"DFIR certs pay well and open doors.",picks:["BTL1 / BTL2","SANS Institute","CompTIA CySA+"]},
    {n:"Stay Current",icon:"step_signal",d:"DFIR moves with the threat landscape.",picks:["The DFIR Report","This Week in 4n6","DFIR Diva","13Cubed"]},
  ],
  app:[
    {n:"Foundations",icon:"step_found",d:"Understand web fundamentals and the OWASP Top 10.",picks:["OWASP Top 10","Harvard CS50 Cybersecurity","PortSwigger Web Security Academy"]},
    {n:"Core Skills",icon:"step_core",d:"Learn web attacks, secure coding, and AppSec testing.",picks:["OWASP Web Security Testing Guide","OWASP Cheat Sheet Series","Checkmarx Codebashing","Snyk Learn"]},
    {n:"Hands-On Practice",icon:"step_hands",d:"Break real web apps to learn how to defend them.",picks:["OWASP Juice Shop","DVWA","PentesterLab","OWASP WebGoat"]},
    {n:"Get Certified",icon:"step_cert",d:"AppSec certs that matter.",picks:["OSCP","CompTIA Security+","CompTIA CASP+"]},
    {n:"Stay Current",icon:"step_signal",d:"Top AppSec research and news.",picks:["PortSwigger Research","tl;dr sec","Nahamsec","PwnFunction"]},
  ],
  arch:[
    {n:"Foundations",icon:"step_found",d:"Broad security fundamentals across all domains.",picks:["Security Engineering (3rd Ed.)","Google Cybersecurity Certificate","Stanford CS155"]},
    {n:"Core Skills",icon:"step_core",d:"Master threat modeling, frameworks, and secure design patterns.",picks:["NIST CSF 2.0","NIST SP 800-53","Threat Modeling","MITRE ATT&CK"]},
    {n:"Hands-On Practice",icon:"step_hands",d:"Design and review real architectures.",picks:["MIT 6.858 Computer Systems Security","MIT 6.857 Network & Computer Security","CIS Benchmarks"]},
    {n:"Get Certified",icon:"step_cert",d:"Architect-level certs signal senior expertise.",picks:["CISSP (ISC2)","CompTIA CASP+","CISM (ISACA)"]},
    {n:"Stay Current",icon:"step_signal",d:"Senior-level sources for the latest security thinking.",picks:["Schneier on Security","Krebs on Security","Dark Reading"]},
  ],
  bb:[
    {n:"Foundations",icon:"step_found",d:"Web basics are non-negotiable. Learn how the web actually works.",picks:["PortSwigger Web Security Academy","OWASP Top 10","The Cyber Mentor"]},
    {n:"Core Skills",icon:"step_core",d:"Learn bug bounty methodology, recon, and payload crafting.",picks:["Bugcrowd University","PayloadsAllTheThings","Nahamsec","HackTricks"]},
    {n:"Hands-On Practice",icon:"step_hands",d:"Practice on intentionally vulnerable targets before real programs.",picks:["Hacker101 CTF","OWASP Juice Shop","PentesterLab","YesWeHack DOJO"]},
    {n:"Get Certified",icon:"step_cert",d:"Certs aren't required but help. Practical > theoretical.",picks:["PNPT (TCM Security)","OSCP"]},
    {n:"Stay Current",icon:"step_signal",d:"Bug bounty moves fast. Follow these.",picks:["STOK","InsiderPhD","Intigriti","HackerOne"]},
  ],
  red:[
    {n:"Foundations",icon:"step_found",d:"You need solid pentest fundamentals before going red.",picks:["TCM Security Academy","TryHackMe","HackTricks"]},
    {n:"Core Skills",icon:"step_core",d:"Active Directory attacks, C2 frameworks, evasion.",picks:["Red Team Notes","The Hacker Recipes","BloodHound","Impacket"]},
    {n:"Hands-On Practice",icon:"step_hands",d:"Simulate real red team engagements.",picks:["GOAD (Game of Active Directory)","Vulnerable-AD","Hack The Box","Nightmare \u2014 Binary Exploitation"]},
    {n:"Get Certified",icon:"step_cert",d:"Red team certs are the ones that matter for the role.",picks:["OSCP","Altered Security (CRTP/CRTE)","Zero Point Security (CRTO)"]},
    {n:"Stay Current",icon:"step_signal",d:"Red team research and TTPs.",picks:["SpecterOps Blog","IppSec","Tib3rius","VbScrub"]},
  ],
  blue:[
    {n:"Foundations",icon:"step_found",d:"Build your defensive fundamentals first.",picks:["Professor Messer","SANS Cyber Aces","MITRE ATT&CK"]},
    {n:"Core Skills",icon:"step_core",d:"Detection engineering, SIEM, and threat hunting.",picks:["Splunk Free Training","Sigma Rules","AttackIQ Academy","MITRE D3FEND"]},
    {n:"Hands-On Practice",icon:"step_hands",d:"Set up detection labs and hunt real threats.",picks:["CyberDefenders","Blue Team Labs Online","DetectionLab","Atomic Red Team"]},
    {n:"Get Certified",icon:"step_cert",d:"Blue team cert path.",picks:["BTL1 / BTL2","CompTIA CySA+","CompTIA Security+"]},
    {n:"Stay Current",icon:"step_signal",d:"Detection engineering + threat intel sources.",picks:["Detection Engineering Weekly","The DFIR Report","SANS Internet Storm Center","Mandiant Blog"]},
  ],
};

function renderCareerGuide(){
  const sel=S.career||'';
  let h='<div class="content">';
  h+='<div class="cg-hero">';
  h+='<h1>Career Path Guide</h1>';
  h+='<p>Pick a career and follow a curated 5-step path \u2014 no firehose of resources, just what you need at each stage. Each step has 3\u20134 hand-picked picks.</p>';
  h+='<div class="cg-picker">';
  CAREERS.forEach(c=>{h+=`<button class="cg-pick${sel===c.id?' active':''}" data-cg="${c.id}"><span class="cg-pick-icon">${ICONS[c.i]||''}</span>${c.n}</button>`;});
  h+='</div></div>';

  if(!sel){
    h+=`<div class="cg-empty"><div class="cg-empty-icon">${ICONS.career}</div>Select a career above to see a step-by-step roadmap.</div>`;
  } else {
    const info=CAREER_INFO[sel];
    const path=PATHS[sel];

    h+='<div class="path-wrap">';
    h+=`<div class="cg-summary"><h3>${info.n}</h3><p>${info.d}</p></div>`;

    if(path){
      // Progress indicator
      const openStep=S.openStep==null?0:S.openStep;
      h+=`<div class="path-progress"><span class="path-progress-text">Step ${openStep+1} of ${path.length}</span><div class="path-progress-bar"><div class="path-progress-fill" style="width:${((openStep+1)/path.length)*100}%"></div></div></div>`;

      path.forEach((step,idx)=>{
        const isOpen=idx===openStep;
        const picks=step.picks.map(name=>R.find(r=>r.t===name)).filter(Boolean);
        h+=`<div class="step${isOpen?' open':''}" data-step="${idx}">`;
        h+=`<div class="step-num">${idx+1}</div>`;
        h+='<div class="step-card">';
        h+=`<div class="step-header" data-toggle="${idx}"><span class="step-icon">${ICONS[step.icon]||''}</span><span class="step-title">${step.n}</span><span class="step-count">${picks.length} picks</span><span class="step-toggle">${ICONS_chevron}</span></div>`;
        h+='<div class="step-body">';
        h+=`<div class="step-desc">${step.d}</div>`;
        h+=`<div class="step-picks">${picks.map(cardH).join('')}</div>`;
        h+='</div></div></div>';
      });

      h+='<div class="cg-actions" style="margin-top:24px"><button class="cg-action-btn" id="cgEmailMe">Email this path to myself</button><button class="cg-action-btn" id="cgCopyList">Copy as text</button></div>';
    }
    h+='</div>';
  }
  h+='</div>';
  $('view').innerHTML=h;

  // Bind career picker
  document.querySelectorAll('[data-cg]').forEach(b=>b.addEventListener('click',()=>{
    const newCareer=S.career===b.dataset.cg?null:b.dataset.cg;
    S.career=newCareer;
    S.openStep=0; // reset to first step when switching careers
    renderCareerGuide();
  }));

  // Bind step toggles
  document.querySelectorAll('[data-toggle]').forEach(h=>h.addEventListener('click',()=>{
    const idx=parseInt(h.dataset.toggle);
    S.openStep=S.openStep===idx?null:idx;
    renderCareerGuide();
  }));


  // Helper to build path text for email/copy
  const buildPathText=()=>{
    const info=CAREER_INFO[S.career];
    const path=PATHS[S.career];
    if(!info||!path)return '';
    let txt=`${info.n.toUpperCase()} \u2014 LEARNING PATH\n${'='.repeat(50)}\n\n${info.d}\n\n`;
    path.forEach((step,i)=>{
      txt+=`\nSTEP ${i+1}: ${step.n.toUpperCase()}\n${'-'.repeat(40)}\n${step.d}\n\n`;
      step.picks.forEach(name=>{
        const r=R.find(x=>x.t===name);
        if(r)txt+=`  \u2022 ${r.t}${r.u?' \u2014 '+r.u:''}\n    ${r.d}\n\n`;
      });
    });
    txt+=`\n---\nFrom CyberSec Hub by Shark Byte\nSubscribe: https://sharkybyte.substack.com`;
    return txt;
  };

  // Email path
  const eml=document.getElementById('cgEmailMe');
  if(eml){
    eml.addEventListener('click',()=>{
      const info=CAREER_INFO[S.career];
      const subject=encodeURIComponent('CyberSec Hub \u2014 '+info.n+' Learning Path');
      const body=encodeURIComponent(buildPathText());
      window.location.href=`mailto:?subject=${subject}&body=${body}`;
    });
  }

  // Copy path
  const cp=document.getElementById('cgCopyList');
  if(cp){
    cp.addEventListener('click',()=>{
      navigator.clipboard.writeText(buildPathText()).then(()=>{
        cp.textContent='Copied!';
        setTimeout(()=>cp.textContent='Copy as text',2000);
      });
    });
  }
}

// ============================================================
// LANDING
// ============================================================
function renderLanding(){
  let h='<div class="landing">';
  h+='<h1>CyberSec Hub</h1><p>A curated collection of cybersecurity resources \u2014 courses, tools, platforms, communities, and career paths.</p>';
  h+=`<div class="stats-row"><div><div class="stat-n">${R.length}</div><div class="stat-l">Resources</div></div><div><div class="stat-n">${PAGES.length-1}</div><div class="stat-l">Categories</div></div><div><div class="stat-n">${CAREERS.length}</div><div class="stat-l">Career Paths</div></div></div>`;
  // Career selector
  h+='<div class="career-section"><h3>Filter by career path</h3><div class="career-grid">';
  CAREERS.forEach(c=>{h+=`<button class="career-pill${S.career===c.id?' active':''}" data-cp="${c.id}"><span class="career-pill-icon">${ICONS[c.i]||''}</span>${c.n}</button>`;});
  h+=`</div><button class="career-clear${S.career?' show':''}" id="cc">Clear career filter</button></div>`;
  // Section cards
  h+='<div class="landing-grid">';
  PAGES.filter(p=>p.id!=='landing').forEach(p=>{
    const cnt=R.filter(r=>r.p.includes(p.id)&&(!S.career||r.cp.includes(S.career))).length;
    const countLabel = p.id === 'career-guide' ? 'Step-by-step roadmaps' : `${cnt} resources`;
    h+=`<div class="landing-card" data-page="${p.id}"><div class="landing-card-icon">${ICONS[p.icon]||''}</div><div class="landing-card-name">${p.name}</div><div class="landing-card-count">${countLabel}</div></div>`;
  });
  h+='</div></div>';
  $('view').innerHTML=h;
  // Bind
  document.querySelectorAll('.career-pill').forEach(b=>b.addEventListener('click',()=>{S.career=S.career===b.dataset.cp?null:b.dataset.cp;renderLanding();}));
  const cc=document.getElementById('cc');if(cc)cc.addEventListener('click',()=>{S.career=null;renderLanding();});
  document.querySelectorAll('.landing-card').forEach(c=>c.addEventListener('click',()=>go(c.dataset.page)));
}

// ============================================================
// PAGE RENDERING
// ============================================================
function renderPage(){
  const pg=PAGES.find(p=>p.id===S.page);
  if(!pg)return;
  let items=R.filter(r=>r.p.includes(S.page));
  // Subs for this page
  const subs=[...new Set(items.filter(r=>r.sub).map(r=>r.sub))];

  let h='<div class="content">';
  // Filters
  h+='<div class="filter-bar">';
  h+='<div class="filter-group"><span class="filter-label">Level</span>';
  ['all','beg','int','adv'].forEach(v=>{const lb=v==='all'?'All':v==='beg'?'Beginner':v==='int'?'Intermediate':'Advanced';h+=`<button class="pill${S.level===v?' active':''}" data-fl="${v}">${lb}</button>`;});
  h+='</div><div class="filter-group"><span class="filter-label">Cost</span>';
  ['all','free','paid'].forEach(v=>{const lb=v==='all'?'All':v==='free'?'Free':'Paid';h+=`<button class="pill${S.cost===v?' active':''}" data-fc="${v}">${lb}</button>`;});
  h+='</div>';
  // Career filter
  h+='<div class="filter-group"><span class="filter-label">Career</span>';
  h+=`<select id="careerSelect" style="padding:3px 8px;border-radius:6px;border:1px solid var(--border);background:var(--surface);color:var(--text);font-size:.72rem;font-family:inherit;"><option value="">All Careers</option>`;
  CAREERS.forEach(c=>{h+=`<option value="${c.id}"${S.career===c.id?' selected':''}>${c.n}</option>`;});
  h+='</select></div>';
  h+='</div>';
  // CTF filters
  if(S.page==='ctf'){
    h+='<div style="display:flex;gap:4px;flex-wrap:wrap;margin-bottom:14px;">';
    ['all',...CTF_CATS].forEach(v=>{const lb=v==='all'?'All Types':v==='re'?'Reverse Engineering':v==='pwn'?'Pwn / Binary':v.charAt(0).toUpperCase()+v.slice(1);h+=`<button class="chip${S.ctf===v?' active':''}" data-ctf="${v}">${lb}</button>`;});
    h+='</div>';
  }
  // Apply filters
  if(S.search)items=items.filter(r=>r.t.toLowerCase().includes(S.search)||r.d.toLowerCase().includes(S.search));
  if(S.level!=='all')items=items.filter(r=>r.l.includes(S.level));
  if(S.cost!=='all')items=items.filter(r=>S.cost==='free'?(r.c==='free'||r.c==='freemium'):r.c==='paid');
  if(S.career)items=items.filter(r=>r.cp.includes(S.career));
  if(S.page==='ctf'&&S.ctf!=='all')items=items.filter(r=>r.ctf.includes(S.ctf));

  // Section header
  h+=`<div class="section-header"><span class="section-icon">${ICONS[pg.icon]||''}</span><h2>${pg.name}</h2><span class="section-count">${items.length} resources</span></div>`;

  if(items.length===0){
    h+='<div class="empty">No resources match your filters. Try broadening your search.</div>';
  } else if(subs.length>0){
    subs.forEach(sub=>{
      const si=items.filter(r=>r.sub===sub);
      if(si.length===0)return;
      h+=`<div class="subsection"><h3>${sub}</h3><div class="grid">${si.map(cardH).join('')}</div></div>`;
    });
    const noSub=items.filter(r=>!r.sub);
    if(noSub.length>0)h+=`<div class="grid">${noSub.map(cardH).join('')}</div>`;
  } else {
    // For projects page, group by subsection (level)
    if(S.page==='projects'){
      ['Beginner Projects','Intermediate Projects','Advanced Projects'].forEach(lvl=>{
        const li=items.filter(r=>r.sub===lvl);
        if(li.length===0)return;
        const cls=lvl.includes('Beginner')?'pl-beg':lvl.includes('Intermediate')?'pl-int':'pl-adv';
        h+=`<div class="project-level"><h3 class="${cls}">${lvl} (${li.length})</h3><div class="grid">${li.map(cardH).join('')}</div></div>`;
      });
    } else {
      h+=`<div class="grid">${items.map(cardH).join('')}</div>`;
    }
  }
  h+='</div>';
  $('view').innerHTML=h;

  // Bind filter events
  document.querySelectorAll('[data-fl]').forEach(b=>b.addEventListener('click',()=>{S.level=b.dataset.fl;renderPage();}));
  document.querySelectorAll('[data-fc]').forEach(b=>b.addEventListener('click',()=>{S.cost=b.dataset.fc;renderPage();}));
  document.querySelectorAll('[data-ctf]').forEach(b=>b.addEventListener('click',()=>{S.ctf=b.dataset.ctf;renderPage();}));
  const cs=document.getElementById('careerSelect');
  if(cs)cs.addEventListener('change',()=>{S.career=cs.value||null;renderPage();});
}

function cardH(r){
  const hl=S.career&&r.cp.includes(S.career)?' hl':'';
  const link=r.u?`<a href="${r.u}" target="_blank" rel="noopener">${esc(r.t)}</a>`:esc(r.t);
  const cc=r.c==='freemium'?'t-freemium':`t-${r.c}`;
  const lt=r.l.length>2?'<span class="tag t-all">All Levels</span>':r.l.map(l=>`<span class="tag t-${l}">${l==='beg'?'Beginner':l==='int'?'Intermediate':'Advanced'}</span>`).join('');
  return `<div class="card${hl}"><div class="card-t">${link}</div><div class="card-d">${esc(r.d)}</div><div class="card-m"><span class="tag ${cc}">${esc(r.cl)}</span>${lt}</div></div>`;
}

// ============================================================
// UTIL
// ============================================================
function $(id){return document.getElementById(id);}
function debounce(fn,ms){let t;return(...a)=>{clearTimeout(t);t=setTimeout(()=>fn(...a),ms);};}
function esc(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML;}
function updTheme(){$('themeBtn').innerHTML=S.theme==='light'?ICONS.moon:ICONS.sun;}

// Submit Modal Logic
function openModal(){
  $('modalOverlay').classList.add('show');
  $('modalForm').style.display='block';
  $('modalSuccess').style.display='none';
}
function closeModal(){$('modalOverlay').classList.remove('show');}

$('submitFab').addEventListener('click',openModal);
$('submitNavBtn').addEventListener('click',()=>{openModal();closeSidebar();});
$('modalClose').addEventListener('click',closeModal);
$('modalOverlay').addEventListener('click',(e)=>{if(e.target===$('modalOverlay'))closeModal();});

$('resSubmit').addEventListener('click',()=>{
  const name=$('resName').value.trim();
  const url=$('resUrl').value.trim();
<<<<<<< HEAD
  if(!name||!url) return alert('Please fill in both name and URL.');
  
  // Simulated submission
  $('modalForm').style.display='none';
  $('modalSuccess').style.display='block';
  
  // Reset form
  $('resName').value='';
  $('resUrl').value='';
=======
  const catVal=$('resCat').value;
  if(!name||!url) return alert('Please fill in both name and URL.');
  
  // Map standard option value to exact page IDs (expanding tools to cover both sub-tools sections)
  let pageIds = ['practice'];
  if(catVal === 'ctf') pageIds = ['ctf'];
  else if(catVal === 'tools') pageIds = ['tools', 'learn-tools'];
  else if(catVal === 'news') pageIds = ['news'];

  // Add the newly submitted resource dynamically with resilient property arrays
  // By pre-populating all levels and careers, we guarantee that the new resource
  // will never be hidden by active filters (such as active career paths or levels).
  const newRes = {
    t: name,
    u: url,
    d: "Suggested by user. Under verification.",
    p: pageIds,
    sub: "User Suggestions",
    c: "free",
    cl: "Suggested",
    l: ["beg", "int", "adv"], // Match all levels by default so level filters do not hide it
    cp: ["soc", "pt", "cloud", "grc", "mal", "dfir", "app", "arch", "bb", "red", "blue"], // Match all careers by default so career filters do not hide it
    ctf: ["web", "crypto", "forensics", "re", "pwn", "osint", "misc"] // Match all CTF categories
  };
  R.push(newRes);

  // Transition form state to show success modal
  $('modalForm').style.display='none';
  $('modalSuccess').style.display='block';
  
  // Reset input fields
  $('resName').value='';
  $('resUrl').value='';

  // Instantly re-render the page to reflect the new resource
  if(S.page === 'landing') renderLanding();
  else if(S.page === 'career-guide') renderCareerGuide();
  else renderPage();
>>>>>>> 9439e60 (title logo)
});

$('modalDone').addEventListener('click',closeModal);

try { init(); } catch(e) { console.error('init() crashed:',e); }
