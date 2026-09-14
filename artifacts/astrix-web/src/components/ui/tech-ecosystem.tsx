import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SiLaravel,
  SiReact,
  SiNextdotjs,
  SiFastapi,
  SiNodedotjs,
  SiPython,
  SiPhp,
  SiPostgresql,
  SiMysql,
  SiKalilinux,
  SiWireshark,
  SiHostinger,
  SiDocker,
  SiGithubactions,
} from "react-icons/si";
import { Shield, RotateCw } from "lucide-react";

interface TechItem {
  id: string;
  name: string;
  category: string;
  color: string;
  icon: React.ReactNode;
  description: string;
}

// Java custom SVG icon
function JavaIcon({ className = "w-9 h-9", color = "#ED8B00" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color }}>
      <path d="M12 21.35c-2.4 0-4.8-.45-6.5-1.35 1.7.15 3.7.1 5.3-.3 2.1-.55 3.7-1.75 3.7-1.75s-1.2.35-2.8.35c-2.7 0-4.8-.8-4.8-.8s2.2.65 4.9.45c3.2-.2 5.5-1.5 5.5-1.5s-1.4.45-3.3.45c-3.1 0-5.8-1.25-7.7-2.6 1.4.35 3.3.65 5.7.55 3.7-.15 6.4-1.6 6.4-1.6s-1.5.5-3.7.5c-3.3 0-6.1-1.3-7.8-2.65 1.5.4 3.7.75 6.3.6 4.3-.25 7.4-2.15 7.4-2.15s-2.1.7-4.8.7c-3.7 0-7-1.85-8.7-3.8 2.2 1.1 5.2 1.8 8.4 1.5 4.8-.45 8.1-3.2 8.1-3.2s-2.7 1.15-6 1.15c-4.4 0-8.5-2.4-10-5.2 0 0 .5 1.3 1.8 2.4C10.5 1.7 12 .8 12 .8s-1.1.9-2.1 2.3c-1.5 2.1-1.5 4.3-.5 6.4-1.8-1.7-2.4-4-2.4-4s.2 2 1.4 3.6c1.5 2 3.8 3.3 3.8 3.3s-2.4-.4-3.9-1.8c-1.7-1.6-2.1-3.7-2.1-3.7s-.4 2.1.7 4.1c1.4 2.5 4.1 4.3 4.1 4.3s-3.2-.2-5.2-1.8C3.7 12.6 3.2 10.3 3.2 10.3s-.7 2.4.6 4.8c1.6 2.9 4.8 5 4.8 5s-3.8 0-6.2-1.7c-1.7-1.2-2.4-2.9-2.4-2.9s-.4 2.1.8 3.7c1.7 2.3 5.3 4.1 5.3 4.1s-4.5.3-7.4-1.3c2.4 2.5 6.9 4.35 11.4 4.35z" />
    </svg>
  );
}

// AWS custom SVG icon
function AwsIcon({ className = "w-9 h-9", color = "#FF9900" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color }}>
      <path d="M18.74 15.6c-2.31 1.7-5.55 2.6-8.74 2.6-4.47 0-8.5-1.63-11.53-4.36-.24-.22-.03-.52.26-.35 3.26 1.9 7.37 3.04 11.53 3.04 2.83 0 5.88-.73 8.16-2.12.35-.22.67.16.32.39zM20.16 14.4c-.3-.38-1.95-.18-2.69-.09-.22.03-.26-.16-.06-.3.1.28 3.5.25 3.86.69.36.45-.19 3.87-.46 4.19-.18.21-.35.09-.27-.14.28-.73.68-2.3.26-2.68z" />
      <path d="M7.78 10.96c0-1.12.59-1.74 1.77-1.74.52 0 .96.11 1.32.33v-1.7c-.45-.15-.99-.23-1.62-.23-1.19 0-2.09.35-2.69 1.05-.6.7-1 1.7-1 3.01 0 1.3.38 2.3 1.02 2.99.64.69 1.54 1.03 2.7 1.03.63 0 1.2-.08 1.7-.24v-1.71c-.38.23-.84.35-1.38.35-1.18 0-1.84-.68-1.84-1.89zm5.55-3.34h-1.66v8.03h1.66V7.62zm4.1 0l-1.4 5.37-1.28-5.37h-1.7l2.12 7.74h1.75l2.25-7.74h-1.74z" />
    </svg>
  );
}

// Azure custom SVG icon
function AzureIcon({ className = "w-9 h-9", color = "#0089D6" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} style={{ color }}>
      <path d="M13.05 2.16L5.8 15.65h5.45l-3.32 6.19 11.27-12.78h-5.46l3.31-6.9h-4.04z" />
    </svg>
  );
}

// Metasploit custom icon
function MetasploitIcon({ className = "w-9 h-9", color = "#E83F24" }: { className?: string; color?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <Shield className="w-full h-full" style={{ color }} />
      <span className="absolute text-[9px] font-bold font-mono text-white">M</span>
    </div>
  );
}

const TECH_ECOSYSTEM: TechItem[] = [
  {
    id: "laravel",
    name: "Laravel",
    category: "Backend",
    color: "#FF2D20",
    icon: <SiLaravel className="w-9 h-9" style={{ color: "#FF2D20" }} />,
    description: "Framework PHP robusto para APIs y arquitecturas backend escalables.",
  },
  {
    id: "react",
    name: "React",
    category: "Frontend",
    color: "#61DAFB",
    icon: <SiReact className="w-9 h-9" style={{ color: "#61DAFB" }} />,
    description: "Librería UI de alto rendimiento para interfaces dinámicas y SPAs.",
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "Fullstack",
    color: "#FFFFFF",
    icon: <SiNextdotjs className="w-9 h-9 text-white" />,
    description: "Framework React full-stack optimizado para SSR, SEO y velocidad extrema.",
  },
  {
    id: "fastapi",
    name: "FastAPI",
    category: "Backend / IA",
    color: "#009688",
    icon: <SiFastapi className="w-9 h-9" style={{ color: "#009688" }} />,
    description: "Framework Python ultra rápido especializado en APIs REST e IA.",
  },
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    color: "#5FA04E",
    icon: <SiNodedotjs className="w-9 h-9" style={{ color: "#5FA04E" }} />,
    description: "Entorno de ejecución asíncrono en JavaScript para microservicios.",
  },
  {
    id: "python",
    name: "Python",
    category: "IA / Scripting",
    color: "#3776AB",
    icon: <SiPython className="w-9 h-9" style={{ color: "#3776AB" }} />,
    description: "Lenguaje versátil para bots, automatizaciones y scripts de IA.",
  },
  {
    id: "java",
    name: "Java",
    category: "Enterprise",
    color: "#ED8B00",
    icon: <JavaIcon className="w-9 h-9" color="#ED8B00" />,
    description: "Lenguaje enterprise para sistemas pesados, CRMs, ERPs y alta concurrencia.",
  },
  {
    id: "php",
    name: "PHP",
    category: "Backend",
    color: "#777BB4",
    icon: <SiPhp className="w-9 h-9" style={{ color: "#777BB4" }} />,
    description: "Lenguaje servidor para aplicaciones web modernas y arquitecturas MVC.",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Database",
    color: "#4169E1",
    icon: <SiPostgresql className="w-9 h-9" style={{ color: "#4169E1" }} />,
    description: "Base de datos relacional de nivel empresarial con soporte Multi-tenancy.",
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "Database",
    color: "#4479A1",
    icon: <SiMysql className="w-9 h-9" style={{ color: "#4479A1" }} />,
    description: "Sistema de gestión de bases de datos relacionales ágil y confiable.",
  },
  {
    id: "kali",
    name: "Kali Linux",
    category: "Ciberseguridad",
    color: "#557C94",
    icon: <SiKalilinux className="w-9 h-9" style={{ color: "#557C94" }} />,
    description: "Distribución especializada en auditorías de ciberseguridad y pentesting.",
  },
  {
    id: "metasploit",
    name: "Metasploit",
    category: "Ciberseguridad",
    color: "#E83F24",
    icon: <MetasploitIcon className="w-9 h-9" color="#E83F24" />,
    description: "Framework de pruebas de penetración y análisis de vulnerabilidades.",
  },
  {
    id: "wireshark",
    name: "Wireshark",
    category: "Redes & Sec",
    color: "#167EC1",
    icon: <SiWireshark className="w-9 h-9" style={{ color: "#167EC1" }} />,
    description: "Herramienta de análisis de protocolos de red y tráfico en tiempo real.",
  },
  {
    id: "aws",
    name: "AWS",
    category: "Cloud",
    color: "#FF9900",
    icon: <AwsIcon className="w-9 h-9" color="#FF9900" />,
    description: "Infraestructura cloud elástica, computación distribuida y almacenamiento.",
  },
  {
    id: "azure",
    name: "Azure",
    category: "Cloud",
    color: "#0089D6",
    icon: <AzureIcon className="w-9 h-9" color="#0089D6" />,
    description: "Plataforma cloud de Microsoft para gestión de identidades y recursos.",
  },
  {
    id: "hostinger",
    name: "Hostinger",
    category: "Hosting",
    color: "#673DE6",
    icon: <SiHostinger className="w-9 h-9" style={{ color: "#673DE6" }} />,
    description: "Alojamiento web de alta disponibilidad y gestión de dominios.",
  },
  {
    id: "docker",
    name: "Docker",
    category: "DevOps",
    color: "#2496ED",
    icon: <SiDocker className="w-9 h-9" style={{ color: "#2496ED" }} />,
    description: "Contenedorización de aplicaciones para despliegues portables y uniformes.",
  },
  {
    id: "github-actions",
    name: "GitHub Actions",
    category: "CI/CD",
    color: "#2088FF",
    icon: <SiGithubactions className="w-9 h-9" style={{ color: "#2088FF" }} />,
    description: "CI/CD automatizado para integración y despliegue continuo de código.",
  },
];

export function TechEcosystemGrid() {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
      {TECH_ECOSYSTEM.map((tech, index) => {
        const isFlipped = !!flippedCards[tech.id];

        return (
          <motion.div
            key={tech.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04 }}
            className="h-48 sm:h-52 w-full cursor-pointer select-none"
            style={{ perspective: "1000px" }}
            onClick={() => toggleFlip(tech.id)}
          >
            <div
              className="relative w-full h-full transition-transform duration-700 rounded-2xl shadow-xl"
              style={{
                transformStyle: "preserve-3d",
                transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* FRONT FACE */}
              <div
                className="absolute inset-0 w-full h-full rounded-2xl p-5 border border-white/10 bg-[#09090b] flex flex-col items-center justify-between overflow-hidden group hover:border-[#00E5FF]/60 transition-colors"
                style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
              >
                {/* Cybernetic grid canvas background */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle at 50% 50%, ${tech.color}35 0%, transparent 70%), linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
                    backgroundSize: "100% 100%, 20px 20px, 20px 20px",
                  }}
                />

                {/* Top Badge */}
                <div className="w-full flex items-center justify-between z-10">
                  <span
                    className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border bg-black/60"
                    style={{ borderColor: `${tech.color}40`, color: tech.color }}
                  >
                    {tech.category}
                  </span>
                  <RotateCw className="w-3 h-3 text-muted-foreground opacity-40 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Center Icon */}
                <div className="relative z-10 my-auto flex items-center justify-center p-3 rounded-2xl bg-black/40 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>

                {/* Bottom Title */}
                <div className="text-center z-10 w-full">
                  <p className="text-sm font-display font-bold text-white tracking-wide group-hover:text-[#00E5FF] transition-colors">
                    {tech.name}
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">Toca para voltear</p>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#00E5FF]/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#00E5FF]/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* BACK FACE */}
              <div
                className="absolute inset-0 w-full h-full rounded-2xl p-5 border border-[#00E5FF]/40 bg-[#050B14] flex flex-col justify-between overflow-hidden shadow-[0_0_25px_rgba(0,229,255,0.15)]"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                {/* Glow accent */}
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${tech.color} 0%, transparent 80%)`,
                  }}
                />

                <div className="z-10 flex items-center justify-between border-b border-white/10 pb-2">
                  <span className="text-xs font-display font-bold text-[#00E5FF]">{tech.name}</span>
                  <span className="text-[10px] font-mono text-muted-foreground uppercase">{tech.category}</span>
                </div>

                <p className="z-10 text-xs text-white/90 leading-relaxed my-auto font-sans">
                  {tech.description}
                </p>

                <div className="z-10 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-[#00E5FF]/80">
                  <span className="font-mono">AVENTORIX CORE</span>
                  <span className="flex items-center gap-1 font-mono">
                    <RotateCw className="w-2.5 h-2.5" /> Volver
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
