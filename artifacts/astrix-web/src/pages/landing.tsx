import { useState } from "react";
import { Link } from "wouter";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { VerifyModal } from "@/components/ui/verify-modal";
import { GlobePulse } from "@/components/ui/cobe-globe-pulse";
import { TechEcosystemGrid } from "@/components/ui/tech-ecosystem";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Code2,
  Globe2,
  ShieldCheck,
  ArrowRight,
  Search,
  QrCode,
  Palette,
  Shield,
  TrendingUp,
  Users as UsersIcon,
  CheckCircle2,
  FileText,
  Calendar,
  Building,
  GraduationCap,
  ChevronRight,
  ShoppingCart,
  Bot,
  Server,
  LayoutDashboard,
  Cpu,
  Layers,
  Sparkles,
  Award,
  Globe,
  Zap,
  Brain,
  Smartphone,
  Database,
  Network,
  Cloud,
  Briefcase,
  ShoppingBag,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { services } from "@/data/services";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "ingenieria-software": <Code2 className="w-6 h-6" />,
  "infraestructura-cloud": <Globe2 className="w-6 h-6" />,
  "consultoria-tecnologica": <LayoutDashboard className="w-6 h-6" />,
  "tiendas-virtuales": <ShoppingCart className="w-6 h-6" />,
  "erp-crm": <Server className="w-6 h-6" />,
  "ciberseguridad": <ShieldCheck className="w-6 h-6" />,
  "bots-automatizacion": <Bot className="w-6 h-6" />,
};

export default function LandingPage() {
  const [certId, setCertId] = useState("");
  const [verifyModalOpen, setVerifyModalOpen] = useState(false);

  // Contact form state
  const [profile, setProfile] = useState<"b2b" | "practicante">("b2b");
  const [contactEmail, setContactEmail] = useState("");
  const [contactWA, setContactWA] = useState("");
  const [contactService, setContactService] = useState("");
  const [contactBudget, setContactBudget] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactSent, setContactSent] = useState(false);
  const [contactLoading, setContactLoading] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (certId.trim()) {
      window.location.href = `/verificar/${certId.trim()}`;
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setContactLoading(false);
    setContactSent(true);
  };

  return (
    <div className="min-h-screen bg-black text-foreground selection:bg-primary/30">
      <Header />
      <VerifyModal open={verifyModalOpen} onOpenChange={setVerifyModalOpen} />

      <main>
        {/* ── HERO ───────────────────────────────────────────── */}
        <section id="inicio" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-6">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-start gap-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#00E5FF]/30 text-xs font-mono text-[#00E5FF] uppercase tracking-widest shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                Arquitectura Enterprise
              </div>

              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight">
                El núcleo<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00E5FF] to-white/70">
                  tecnológico
                </span><br />
                de las empresas escalables.
              </h1>

              <p className="text-xl text-[#00E5FF] font-medium tracking-wide">
                No creamos sistemas adaptables, construimos arquitecturas para el futuro.
              </p>

              <p className="text-muted-foreground text-lg max-w-lg">
                Soluciones de software de la siguiente escala. Somos AVENTORIX S.A.C.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
                <Link
                  href="/calificar"
                  className="w-full sm:w-auto px-8 py-4 bg-[#00E5FF] text-black font-semibold rounded-full hover:bg-[#00E5FF]/90 transition-all flex items-center justify-center gap-2 hover:gap-3 shadow-[0_0_20px_rgba(0,229,255,0.4)]"
                  data-testid="button-request-consultation"
                >
                  Solicitar Consultoría
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border border-white/20 font-medium rounded-full hover:bg-white/5 transition-all flex items-center justify-center"
                  data-testid="button-view-services"
                >
                  Ver Servicios
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full max-w-lg mx-auto lg:max-w-none"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-10 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[120%] h-[120%] border border-[#00E5FF]/20 rounded-full animate-[spin_60s_linear_infinite]" />
                <div className="absolute w-[100%] h-[100%] border border-accent/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
              </div>
              <GlobePulse className="w-full h-auto drop-shadow-[0_0_30px_rgba(0,229,255,0.3)]" speed={0.005} />
            </motion.div>
          </div>
        </section>

        {/* ── NOSOTROS ───────────────────────────────────────── */}
        <section id="nosotros" className="py-24 px-6 bg-[#050505] relative border-y border-white/5">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-center space-y-4">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#00E5FF]">
                  Identidad Corporativa
                </span>
                <h2 className="text-3xl md:text-5xl font-display font-bold text-white max-w-4xl mx-auto leading-tight">
                  AVENTORIX S.A.C. — El núcleo tecnológico de las empresas escalables
                </h2>
              </div>

              <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed shadow-xl">
                <p>
                  Somos una firma de ingeniería de software, consultoría de arquitecturas cloud y automatización fundada con la convicción de acelerar la evolución tecnológica en Perú y Latinoamérica.
                </p>
                <p>
                  Diseñamos, construimos y desplegamos arquitecturas de software multi-inquilino (Multi-tenancy), ecosistemas conversacionales con inteligencia artificial, sistemas de gestión interna de alto rendimiento e infraestructuras seguras bajo estándares internacionales de ciberseguridad.
                </p>
              </div>

              <div className="pt-6">
                <h3 className="text-2xl font-display font-bold text-white mb-8 text-center">
                  ¿Qué nos diferencia en la industria?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      num: "01",
                      title: "Infraestructura Propietaria",
                      desc: "No adaptamos sistemas legados ni dependemos de soluciones genéricas; construimos infraestructura propietaria desde cero pensada para el futuro.",
                      color: "#00E5FF",
                    },
                    {
                      num: "02",
                      title: "Cultura Aventoriana",
                      desc: "Formamos y operamos bajo la \"Cultura Aventoriana\", un ecosistema remoto altamente estructurado dividido en 5 Áreas Core y 11 Equipos Especializados que garantizan la trazabilidad total de cada proyecto.",
                      color: "#3B82F6",
                    },
                    {
                      num: "03",
                      title: "Seguridad Desde la Primera Línea",
                      desc: "Integramos ciberseguridad en el código desde la primera línea: gobernanza estricta en repositorios, canalización de identidades y validaciones criptográficas públicas para cada activo de la empresa.",
                      color: "#8B5CF6",
                    },
                  ].map((diff) => (
                    <motion.div
                      key={diff.num}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="p-7 rounded-2xl bg-black border border-white/10 hover:border-[#00E5FF]/40 transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span
                            className="text-3xl font-display font-bold"
                            style={{ color: diff.color }}
                          >
                            {diff.num}
                          </span>
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: diff.color }}
                          />
                        </div>
                        <h4 className="text-lg font-display font-bold text-white mb-3 group-hover:text-[#00E5FF] transition-colors">
                          {diff.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {diff.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CAPACIDADES CORE & CATÁLOGO DE 10 SERVICIOS B2B ────── */}
        <section id="servicios" className="py-24 px-6 bg-black relative border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            {/* Core Capabilities Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center mx-auto max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-xs font-mono text-[#00E5FF] uppercase tracking-widest mb-4">
                Estrategia End-to-End
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">Capacidades Core</h2>
              <p className="text-muted-foreground text-lg text-center mx-auto">
                Los 3 pilares estratégicos de alto impacto de negocio diseñados para la transformación digital integral de empresas escalables.
              </p>
            </motion.div>

            {/* 3 Strategic End-to-End Core Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              {[
                {
                  slug: "ingenieria-software",
                  icon: <Code2 className="w-8 h-8 text-[#00E5FF]" />,
                  title: "Arquitectura de Software Enterprise",
                  desc: "Diseño y desarrollo de plataformas transaccionales, APIs REST/Microservicios y sistemas multi-tenancy escalables de alto impacto.",
                  badge: "Estrategia End-to-End",
                },
                {
                  slug: "infraestructura-cloud",
                  icon: <Globe2 className="w-8 h-8 text-[#3B82F6]" />,
                  title: "Infraestructura Cloud & DevOps",
                  desc: "Despliegue elástico, automatización CI/CD, orquestación de contenedores Docker/Kubernetes y optimización de servidores en AWS/Azure.",
                  badge: "Estrategia End-to-End",
                },
                {
                  slug: "consultoria-tecnologica",
                  icon: <ShieldCheck className="w-8 h-8 text-[#8B5CF6]" />,
                  title: "Consultoría de Transformación Digital B2B",
                  desc: "Asesoría técnica ejecutiva, auditorías de arquitectura, optimización de procesos de software y roadmaps de escala estratégica.",
                  badge: "Estrategia End-to-End",
                },
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={`/servicios/${service.slug}`}
                    className="group relative p-8 rounded-2xl bg-[#09090b] border border-white/10 hover:bg-[#18181b] hover:border-[#00E5FF]/50 transition-all duration-500 overflow-hidden block cursor-pointer h-full"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3.5 rounded-xl bg-black border border-white/10 group-hover:border-[#00E5FF]/40 transition-colors">
                        {service.icon}
                      </div>
                      <span className="text-[10px] font-mono text-[#00E5FF] bg-[#00E5FF]/10 border border-[#00E5FF]/30 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {service.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-display font-bold mb-3 text-white group-hover:text-[#00E5FF] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                      {service.desc}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-xs text-[#00E5FF] font-medium group-hover:gap-2.5 transition-all">
                      Ver impacto estratégico <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Full 10 B2B Services Catalog Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mx-auto max-w-5xl mb-12"
            >
              <h3 className="text-2xl md:text-4xl font-display font-bold mb-3 text-white">
                Catálogo Completo de Soluciones B2B
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                10 verticales tecnológicas interactivas diseñadas para maximizar la eficiencia y competitividad operacional.
              </p>
            </motion.div>

            {/* 10 Services Interactive Grid in Dark Mode (#09090b / #18181b) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
              {[
                {
                  title: "1. Inteligencia Artificial Empresarial",
                  badge: "Bot / Brain",
                  subtitle: "Agentes IA & LLM",
                  desc: "Implementación de agentes de IA, modelos LLM personalizados y asistentes virtuales integrados a bases de datos corporativas.",
                  icon: <Brain className="w-6 h-6 text-[#00E5FF]" />,
                  slug: "bots-automatizacion",
                },
                {
                  title: "2. Desarrollo de Apps Móviles & Tabletas",
                  badge: "Smartphone",
                  subtitle: "Android, iOS & Multiplataforma",
                  desc: "Creación de aplicaciones móviles nativas (Java / Kotlin) y multiplataforma de alto rendimiento para gestión empresarial y clientes.",
                  icon: <Smartphone className="w-6 h-6 text-[#3B82F6]" />,
                  slug: "ingenieria-software",
                },
                {
                  title: "3. Desarrollo de Software a Medida",
                  badge: "Code",
                  subtitle: "Arquitectura & Web",
                  desc: "Creación de plataformas web, sistemas a medida y soluciones transaccionales escalables diseñadas para alta demanda.",
                  icon: <Code2 className="w-6 h-6 text-[#8B5CF6]" />,
                  slug: "ingenieria-software",
                },
                {
                  title: "4. Automatización de Procesos (RPA)",
                  badge: "Cpu / Workflow",
                  subtitle: "Bots & Workflows",
                  desc: "Desarrollo de bots de integración, scripts de automatización operativa y conexión de sistemas vía API REST/Websockets.",
                  icon: <Cpu className="w-6 h-6 text-[#10B981]" />,
                  slug: "bots-automatizacion",
                },
                {
                  title: "5. Sistemas de Gestión ERP / CRM",
                  badge: "Database",
                  subtitle: "Software Empresarial",
                  desc: "Implementación y personalización de plataformas centrales para el control de inventarios, ventas y operaciones.",
                  icon: <Database className="w-6 h-6 text-[#F59E0B]" />,
                  slug: "erp-crm",
                },
                {
                  title: "6. Integración de APIs & Microservicios",
                  badge: "Network",
                  subtitle: "Conectividad & Backend",
                  desc: "Interconexión de sistemas heterogéneos, pasarelas de pago y desarrollo de arquitecturas en microservicios seguras.",
                  icon: <Network className="w-6 h-6 text-[#EC4899]" />,
                  slug: "ingenieria-software",
                },
                {
                  title: "7. Infraestructura Cloud & DevOps",
                  badge: "Cloud",
                  subtitle: "Servidores & Escalabilidad",
                  desc: "Despliegue continuo (CI/CD), orquestación de contenedores Docker y optimización de servidores en AWS/Render/Azure.",
                  icon: <Cloud className="w-6 h-6 text-[#00E5FF]" />,
                  slug: "infraestructura-cloud",
                },
                {
                  title: "8. Ciberseguridad & SecOps",
                  badge: "ShieldCheck",
                  subtitle: "Pentesting & Protección",
                  desc: "Auditorías de seguridad, pruebas de penetración, gestión de identidades y protección de credenciales/tokens.",
                  icon: <ShieldCheck className="w-6 h-6 text-[#EF4444]" />,
                  slug: "ciberseguridad",
                },
                {
                  title: "9. Consultoría & Transformación Digital",
                  badge: "Briefcase",
                  subtitle: "Estrategia B2B",
                  desc: "Asesoría técnica ejecutiva, arquitectura de datos y optimización de procesos de software para empresas.",
                  icon: <Briefcase className="w-6 h-6 text-[#A855F7]" />,
                  slug: "consultoria-tecnologica",
                },
                {
                  title: "10. Plataformas E-Commerce B2B / B2C",
                  badge: "ShoppingBag",
                  subtitle: "Ventas Digitales",
                  desc: "Desarrollo de tiendas virtuales de alto rendimiento con pasarelas de pago locales e internacionales.",
                  icon: <ShoppingBag className="w-6 h-6 text-[#F97316]" />,
                  slug: "tiendas-virtuales",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={`/servicios/${item.slug}`}
                    className="group p-6 rounded-2xl bg-[#09090b] border border-white/10 hover:border-[#00E5FF]/40 hover:bg-[#18181b] transition-all duration-300 block cursor-pointer shadow-lg h-full"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-black border border-white/10 group-hover:border-[#00E5FF]/40 transition-colors">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-base font-display font-bold text-white group-hover:text-[#00E5FF] transition-colors leading-snug">
                            {item.title}
                          </h4>
                          <span className="text-xs font-mono text-muted-foreground">{item.subtitle}</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-[#00E5FF] bg-[#00E5FF]/10 border border-[#00E5FF]/20 px-2 py-0.5 rounded-full flex-shrink-0">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed pl-1">
                      {item.desc}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ECOSISTEMA TECNOLÓGICO (18 FLIP CARDS 3D) ─────────── */}
        <section id="ecosistema" className="py-24 px-6 bg-black relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#00E5FF] mb-2 block">
                Más de 15 tecnologías y frameworks
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">Ecosistema Tecnológico</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                La infraestructura interactiva que potencia nuestras soluciones. Toca o haz clic en cualquier tarjeta 3D para inspeccionar su rol técnico.
              </p>
            </motion.div>

            {/* 18 Interactive 3D Flip Cards Grid */}
            <TechEcosystemGrid />
          </div>
        </section>

        {/* ── CULTURA Y CROMÁTICA ORGANIZACIONAL ────────────── */}
        <section id="cultura" className="py-24 px-6 bg-[#050505] relative border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">Cultura Astriana</h2>
              <p className="text-lg md:text-xl text-[#00E5FF] font-medium max-w-4xl mx-auto leading-relaxed">
                "Sin fronteras geográficas: Uniendo el talento tecnológico global para construir arquitecturas del futuro desde cualquier continente".
              </p>
            </motion.div>

            {/* Full grid features */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {[
                { title: "Experiencia Real", desc: "Proyectos B2B con retos y entregables que llegan a producción.", icon: <Zap className="w-5 h-5 text-[#00E5FF]" /> },
                { title: "Metodología Agile", desc: "Sprints, code reviews y decisiones visibles para cada equipo.", icon: <Layers className="w-5 h-5 text-blue-400" /> },
                { title: "Autonomía Remota", desc: "Colaboración distribuida con ownership y comunicación asíncrona.", icon: <Globe className="w-5 h-5 text-emerald-400" /> },
                { title: "Desarrollo Continuo", desc: "Mentoría, aprendizaje y mejora técnica como hábito.", icon: <Sparkles className="w-5 h-5 text-amber-400" /> },
                { title: "Entregables Globales", desc: "Capacidad para operar con clientes en América, Europa y otros continentes.", icon: <Globe2 className="w-5 h-5 text-purple-400" /> },
                { title: "Mentoría Directa", desc: "Acompañamiento cercano de arquitectos y líderes Astrianos.", icon: <Award className="w-5 h-5 text-rose-400" /> },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#00E5FF]/40 transition-all flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-black border border-white/10 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold mb-1.5 text-white">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* ── FUSIÓN: 5 ÁREAS CORPORATIVAS E IDENTIDAD CROMÁTICA ───── */}
        <section id="areas-core" className="py-24 px-6 bg-black relative border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#00E5FF] mb-3 block">
                Estructura Organizacional
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">
                5 Áreas Corporativas &amp; Identidad Cromática
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Cada especialidad técnica y de liderazgo operativo en AVENTORIX S.A.C. está emparejada directamente con su color corporativo representativo.
              </p>
            </motion.div>

            <Tabs defaultValue="diseno" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 bg-transparent h-auto p-0 mb-10">
                {[
                  { value: "diseno", label: "Diseño & UX", colorName: "Morado", color: "#8b5cf6" },
                  { value: "ingenieria", label: "Ingeniería", colorName: "Azul Eléctrico", color: "#3b82f6" },
                  { value: "sistemas", label: "Sistemas & Sec", colorName: "Verde Neón", color: "#22c55e" },
                  { value: "crecimiento", label: "Crecimiento B2B", colorName: "Naranja / Coral", color: "#f97316" },
                  { value: "talento", label: "Talento Humano", colorName: "Verde Esmeralda", color: "#10b981" },
                ].map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="data-[state=active]:bg-white/10 data-[state=active]:border-l-4 py-3.5 px-4 text-left rounded-xl transition-all border-l-4 border-l-transparent bg-white/[0.02]"
                    style={{ borderLeftColor: tab.color }}
                    data-testid={`tab-${tab.value}`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: tab.color }} />
                      <span className="font-semibold text-sm">{tab.label}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>

              {[
                {
                  value: "diseno",
                  color: "#8b5cf6",
                  colorName: "Morado Corporate",
                  icon: <Palette className="w-7 h-7" style={{ color: "#8b5cf6" }} />,
                  title: "Arquitectura y Diseño Visual",
                  sub: "Diseño centrado en el usuario y sistemas de diseño escalables",
                  items: [
                    "Consultoría de requerimientos y especificaciones en Notion",
                    "Diseño UI/UX avanzado en Figma con componentes responsivos",
                    "Construcción de Sistemas de Diseño (Design System) y Design Tokens",
                    "Prototipado interactivo navegable para validación ejecutiva",
                  ],
                },
                {
                  value: "ingenieria",
                  color: "#3b82f6",
                  colorName: "Azul Eléctrico",
                  icon: <Code2 className="w-7 h-7" style={{ color: "#3b82f6" }} />,
                  title: "Ingeniería de Software Full-Stack",
                  sub: "Desarrollo de plataformas complejas y arquitecturas distribuidas",
                  items: [
                    "Landing pages y plataformas web de alto rendimiento en React/Next.js",
                    "Sistemas de gestión ERP y CRM empresariales en Java y PostgreSQL",
                    "APIs RESTful y microservicios escalables construidos en Laravel y Node.js",
                    "Arquitectura de bases de datos PostgreSQL con soporte Multi-tenancy",
                  ],
                },
                {
                  value: "sistemas",
                  color: "#22c55e",
                  colorName: "Verde Neón",
                  icon: <Shield className="w-7 h-7" style={{ color: "#22c55e" }} />,
                  title: "Sistemas e Investigación / Ciberseguridad",
                  sub: "Automatización, protección de activos e innovación en IA",
                  items: [
                    "Bots operativos y scripts de automatización de flujos repetitivos",
                    "Auditorías de ciberseguridad, análisis SAST y protección de repositorios",
                    "Monitoreo continuo de infraestructura y telemetría de rendimiento 24/7",
                    "Investigación aplicada e integración de modelos de Inteligencia Artificial (IA/ML)",
                  ],
                },
                {
                  value: "crecimiento",
                  color: "#f97316",
                  colorName: "Naranja / Coral",
                  icon: <TrendingUp className="w-7 h-7" style={{ color: "#f97316" }} />,
                  title: "Crecimiento y Pauta Digital B2B",
                  sub: "Posicionamiento de marca, generación de demanda y estrategia",
                  items: [
                    "Estrategia de prospección B2B directa y desarrollo de pipeline en LinkedIn",
                    "Gestión y posicionamiento institucional en redes sociales corporativas",
                    "Campañas de pauta digital optimizada en Meta Ads y Google Ads",
                    "Estrategia y producción de contenidos de alta conversión B2B",
                  ],
                },
                {
                  value: "talento",
                  color: "#10b981",
                  colorName: "Verde Esmeralda",
                  icon: <UsersIcon className="w-7 h-7" style={{ color: "#10b981" }} />,
                  title: "Talento Humano y Cultura Aventoriana",
                  sub: "Gestión de talento, convenios universitarios y mentoría",
                  items: [
                    "Headhunting técnico especializado y formación de células de desarrollo",
                    "Gestión de convenios universitarios e integración de practicantes preprofesionales",
                    "Comunicación corporativa interna y fortalecimiento de la Cultura Aventoriana",
                    "Programa de mentoría técnica continua impartido por arquitectos senior",
                  ],
                },
              ].map((tab) => (
                <TabsContent key={tab.value} value={tab.value} className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-8 sm:p-10 rounded-3xl bg-[#09090b] border border-white/10 relative overflow-hidden"
                    style={{ borderLeft: `6px solid ${tab.color}` }}
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
                      <div className="flex items-center gap-4">
                        <div
                          className="p-3.5 rounded-2xl border"
                          style={{ backgroundColor: `${tab.color}15`, borderColor: `${tab.color}30` }}
                        >
                          {tab.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-display font-bold text-white mb-1">{tab.title}</h3>
                          <p className="text-sm text-muted-foreground">{tab.sub}</p>
                        </div>
                      </div>
                      <div
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono font-semibold uppercase tracking-wider"
                        style={{ backgroundColor: `${tab.color}15`, borderColor: `${tab.color}40`, color: tab.color }}
                      >
                        <span className="w-2 h-2 rounded-full shadow-[0_0_8px_currentColor]" style={{ backgroundColor: tab.color }} />
                        Identidad: {tab.colorName}
                      </div>
                    </div>

                    <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
                      Funciones y Entregables Clave
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {tab.items.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                          <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: tab.color }} />
                          <span className="text-sm text-white/90 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* ── BROCHURE LEAD MAGNET (DIRECT PDF DOWNLOAD) ──────── */}
        <section id="brochure" className="py-20 px-6 bg-[#050505] border-y border-white/5">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center gap-8 p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center">
                <FileText className="w-8 h-8 text-[#00E5FF]" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl font-display font-bold mb-2 text-white">
                  ¿Necesitas presentar nuestra propuesta a tu directorio?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Descarga directamente el <strong className="text-white">Dossier Técnico de AVENTORIX S.A.C.</strong> (PDF) — stack tecnológico, casos de éxito, metodología y esquemas de inversión sin formularios previos.
                </p>
              </div>
              <a
                href="/AVENTORIX DOSSIER.pdf"
                download="AVENTORIX DOSSIER.pdf"
                className="flex-shrink-0 flex items-center gap-2 px-6 py-3 bg-[#00E5FF] text-black font-semibold rounded-full hover:bg-[#00E5FF]/90 transition-all hover:gap-3 whitespace-nowrap shadow-[0_0_15px_rgba(0,229,255,0.3)]"
              >
                Descargar Dossier PDF
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── FAQ ACCORDION ─────────────────────────────────── */}
        <section id="faq" className="py-24 px-6 bg-black">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Preguntas Frecuentes</h2>
              <p className="text-muted-foreground">
                Respuestas directas a las preguntas que hacen los directivos antes de contratar.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible className="space-y-3">
                {[
                  {
                    q: "¿Cómo garantizan la seguridad y propiedad del código fuente?",
                    a: "El código fuente es 100% propiedad del cliente desde el primer commit. Trabajamos directamente en el repositorio privado del cliente en GitHub — nunca en repositorios intermedios. Todo el desarrollo usa ramas protegidas con revisión obligatoria de código, y al finalizar el proyecto hacemos un handoff completo: documentación técnica, variables de entorno y accesos. No aplicamos restricciones de licencia ni dependencias de AVENTORIX en la arquitectura entregada.",
                  },
                  {
                    q: "¿Cuál es la metodología de trabajo con los 11 equipos de AVENTORIX S.A.C.?",
                    a: "Operamos en sprints ágiles de 2 semanas (GitHub Flow). Cada proyecto tiene un Tech Lead asignado de AVENTORIX que coordina con el equipo del cliente. Las reuniones de seguimiento son semanales (demo + retrospectiva) y la comunicación diaria es vía Slack o el canal de preferencia del cliente. El cliente aprueba cada sprint antes de continuar con el siguiente, asegurando control total del roadmap y presupuesto.",
                  },
                  {
                    q: "¿Cómo funciona el proceso de convenios universitarios y validación QR para practicantes (Aventorianos)?",
                    a: "AVENTORIX firma convenios marco con universidades peruanas que permiten a los estudiantes acreditar hasta 480 horas de prácticas preprofesionales con validez académica. Al finalizar, cada Aventoriano recibe una Credencial Digital con un código QR único. Cualquier empresa o universidad puede verificar la autenticidad de esa credencial en tiempo real consultando nuestra API en /verificar.",
                  },
                  {
                    q: "¿Qué garantías de soporte y mantenimiento 24/7 ofrecen a las empresas?",
                    a: "Ofrecemos tres niveles de soporte post-entrega. El plan Starter incluye 30–60 días de soporte por correo y WhatsApp en horario hábil. El plan Scale incluye 90 días con SLA de respuesta < 4 horas. El plan Enterprise incluye soporte 24/7 con un canal de emergencias dedicado, SLA de tiempo de respuesta < 1 hora y tiempo de resolución < 4 horas para incidentes críticos. Todos los contratos incluyen actualizaciones de seguridad sin costo adicional durante el período de soporte contratado.",
                  },
                ].map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="border border-white/10 rounded-xl px-6 bg-white/[0.02] data-[state=open]:border-primary/30 transition-all"
                  >
                    <AccordionTrigger className="text-left text-sm sm:text-base font-medium py-5 hover:no-underline hover:text-primary transition-colors">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* ── CONTACT + SCHEDULING ─────────────────────────── */}
        <section id="contacto" className="py-24 px-6 bg-[#050505] border-y border-white/5">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Contáctanos</h2>
              <p className="text-muted-foreground text-lg">
                Cuéntanos sobre tu proyecto o postulación. Respondemos en menos de 24 horas hábiles.
              </p>

              {/* Capacity badge */}
              <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-sm text-green-400">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Capacidad operativa actual: <strong>2 Slots disponibles</strong> para nuevos proyectos este trimestre
              </div>
            </motion.div>

            {/* Scheduling CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 p-6 rounded-2xl border border-accent/30 bg-accent/5 flex flex-col sm:flex-row items-center gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="font-semibold text-white mb-1">Agendar Sesión Técnica Directa de 15 Minutos</p>
                <p className="text-sm text-muted-foreground">
                  Habla directamente con un arquitecto de AVENTORIX. Sin ventas, solo soluciones.
                </p>
              </div>
              <Link
                href="/calificar"
                className="flex-shrink-0 flex items-center gap-2 px-6 py-3 bg-accent text-black font-semibold rounded-full hover:bg-accent/90 transition-all whitespace-nowrap"
              >
                Agendar ahora
              </Link>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/10"
            >
              {contactSent ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 mx-auto bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20">
                    <CheckCircle2 className="w-7 h-7 text-green-400" />
                  </div>
                  <h3 className="text-xl font-display font-bold">¡Mensaje recibido!</h3>
                  <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                    Nuestro equipo se pondrá en contacto contigo en menos de 24 horas hábiles.
                  </p>
                  <a
                    href="https://wa.me/51991488770?text=Hola%20AVENTORIX%2C%20acabo%20de%20enviar%20mi%20consulta%20desde%20el%20sitio%20web."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 rounded-full text-sm font-medium transition-all"
                  >
                    <SiWhatsapp className="w-4 h-4" />
                    También puedes escribirnos por WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  {/* Profile selector */}
                  <div>
                    <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3 block">
                      Soy...
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { value: "b2b" as const, icon: <Building className="w-4 h-4" />, label: "Cliente B2B / Empresa" },
                        { value: "practicante" as const, icon: <GraduationCap className="w-4 h-4" />, label: "Postulante Aventoriano (Practicante)" },
                      ].map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => setProfile(opt.value)}
                          className={`flex items-center gap-3 p-4 rounded-xl border text-sm font-medium transition-all text-left ${
                            profile === opt.value
                              ? "bg-[#00E5FF]/10 border-[#00E5FF]/40 text-[#00E5FF]"
                              : "bg-white/[0.02] border-white/10 text-muted-foreground hover:border-white/20"
                          }`}
                        >
                          {opt.icon}
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2 block">
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder={profile === "b2b" ? "cto@empresa.com" : "usuario@universidad.edu.pe"}
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-[#00E5FF]/50 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all text-sm"
                      />
                    </div>

                    {/* WhatsApp */}
                    <div>
                      <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2 block">
                        WhatsApp (con código de país)
                      </label>
                      <div className="flex">
                        <span className="flex items-center px-3 bg-white/5 border border-r-0 border-white/10 rounded-l-xl text-sm text-muted-foreground font-mono">
                          +51
                        </span>
                        <input
                          type="tel"
                          placeholder="991 488 770"
                          value={contactWA}
                          onChange={(e) => setContactWA(e.target.value)}
                          className="flex-1 bg-white/5 border border-white/10 rounded-r-xl py-3 px-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-[#00E5FF]/50 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service */}
                    <div>
                      <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2 block">
                        {profile === "b2b" ? "Servicio de interés" : "Área de interés"}
                      </label>
                      <select
                        value={contactService}
                        onChange={(e) => setContactService(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-[#00E5FF]/50 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all text-sm appearance-none"
                      >
                        <option value="" className="bg-black">Seleccionar...</option>
                        {profile === "b2b" ? (
                          <>
                            <option value="ingenieria" className="bg-black">Ingeniería de Software</option>
                            <option value="cloud" className="bg-black">Infraestructura Cloud</option>
                            <option value="consultoria" className="bg-black">Consultoría Tecnológica B2B</option>
                            <option value="ecommerce" className="bg-black">Tiendas Virtuales</option>
                            <option value="erp" className="bg-black">Sistemas ERP / CRM</option>
                            <option value="seguridad" className="bg-black">Auditorías de Ciberseguridad</option>
                            <option value="bots" className="bg-black">Bots de Automatización</option>
                          </>
                        ) : (
                          <>
                            <option value="diseno" className="bg-black">Diseño y UI/UX</option>
                            <option value="ingenieria" className="bg-black">Ingeniería de Software</option>
                            <option value="sistemas" className="bg-black">Sistemas y Ciberseguridad</option>
                            <option value="crecimiento" className="bg-black">Crecimiento Digital</option>
                            <option value="talento" className="bg-black">Talento Humano</option>
                          </>
                        )}
                      </select>
                    </div>

                    {/* Budget */}
                    {profile === "b2b" && (
                      <div>
                        <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2 block">
                          Presupuesto estimado
                        </label>
                        <select
                          value={contactBudget}
                          onChange={(e) => setContactBudget(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-[#00E5FF]/50 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all text-sm appearance-none"
                        >
                          <option value="" className="bg-black">Seleccionar rango...</option>
                          <option value="<5k" className="bg-black">Menos de S/. 5,000</option>
                          <option value="5k-15k" className="bg-black">S/. 5,000 – S/. 15,000</option>
                          <option value="15k-50k" className="bg-black">S/. 15,000 – S/. 50,000</option>
                          <option value=">50k" className="bg-black">Más de S/. 50,000</option>
                          <option value="monthly" className="bg-black">Servicio mensual (retainer)</option>
                        </select>
                      </div>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2 block">
                      {profile === "b2b" ? "Cuéntanos sobre tu proyecto" : "¿Por qué quieres ser Aventoriano?"}
                    </label>
                    <textarea
                      rows={4}
                      placeholder={
                        profile === "b2b"
                          ? "Describe brevemente el reto o solución que necesitas..."
                          : "Tu carrera, universidad y por qué te interesa el área..."
                      }
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-muted-foreground focus:outline-none focus:border-[#00E5FF]/50 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all text-sm resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <button
                      type="submit"
                      disabled={contactLoading}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-[#00E5FF] text-black font-semibold rounded-full hover:bg-[#00E5FF]/90 transition-all disabled:opacity-60 disabled:cursor-wait shadow-[0_0_15px_rgba(0,229,255,0.3)]"
                    >
                      {contactLoading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar consulta
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-xs text-muted-foreground text-center sm:text-left font-mono">
                      asistente.gerencia.aventorix@gmail.com · Respuesta en &lt; 24 hrs hábiles
                    </p>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </section>

        {/* ── CREDENTIALS, ALWAYS LAST BEFORE FOOTER ───────────── */}
        <section id="verificacion" className="py-32 px-6 relative overflow-hidden bg-[#050505]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.08)_0%,transparent_70%)]" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 sm:p-12 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl shadow-[#00E5FF]/5"
            >
              <div className="w-16 h-16 mx-auto bg-[#00E5FF]/10 rounded-2xl flex items-center justify-center mb-8 border border-[#00E5FF]/20">
                <ShieldCheck className="w-8 h-8 text-[#00E5FF]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
                Verificación de Credenciales Aventorianas
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                Valida la autenticidad de convenios y prácticas preprofesionales emitidas por AVENTORIX S.A.C. mediante consulta directa a nuestra API Nexus-Core.
              </p>
              <form onSubmit={handleVerify} className="max-w-md mx-auto relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="ID de Certificado (ej. AST-2025-001)"
                  value={certId}
                  onChange={(e) => setCertId(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-32 text-white placeholder:text-muted-foreground focus:outline-none focus:border-[#00E5FF]/50 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all font-mono"
                />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-[#00E5FF] text-black font-semibold rounded-full hover:bg-[#00E5FF]/90 transition-colors">
                  Verificar
                </button>
              </form>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <QrCode className="w-4 h-4 text-[#00E5FF]" />
                Escanea el código QR de tu certificado para una validación instantánea.
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <div id="footer">
        <Footer onVerifyClick={() => setVerifyModalOpen(true)} />
      </div>
    </div>
  );
}
