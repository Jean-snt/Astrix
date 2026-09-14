import { useEffect } from "react";
import { useParams, Link } from "wouter";
import { Header } from "@/components/layout/header";
import { getServiceBySlug } from "@/data/services";
import { ServiceVisual } from "@/components/services/service-visual";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, ArrowRight, Shield, GitBranch, Clock, Award } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import NotFound from "./not-found";

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [slug]);

  if (!service) return <NotFound />;

  return (
    <div className="min-h-screen bg-black text-foreground selection:bg-primary/30">
      <Header />

      <main>
        {/* Hero / Header */}
        <section className="relative pt-28 pb-16 px-6 overflow-hidden border-b border-white/5">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              background: `radial-gradient(ellipse at 20% 50%, ${service.color} 0%, transparent 70%)`,
            }}
          />
          <div className="max-w-5xl mx-auto relative z-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Volver al Catálogo General
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest border"
                  style={{
                    backgroundColor: `${service.color}15`,
                    borderColor: `${service.color}30`,
                    color: service.color,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: service.color }}
                  />
                  {service.category}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4 leading-[1.1]">
                {service.title}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                {service.tagline}
              </p>
              <ServiceVisual service={service} />
            </motion.div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">
          {/* Description + Problem */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          >
            <div>
              <h2 className="text-2xl font-display font-bold mb-4">¿Qué es esta solución?</h2>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <h3 className="text-base font-semibold mb-3 text-white/80">El problema que resolvemos</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{service.problem}</p>
            </div>
          </motion.section>

          {/* ROI Metrics */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-display font-bold mb-8">
              Retorno de Inversión y Beneficios B2B
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {service.roiMetrics.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-primary/30 transition-all text-center"
                >
                  <p
                    className="text-3xl font-display font-bold mb-2"
                    style={{ color: service.color }}
                  >
                    {m.value}
                  </p>
                  <p className="text-xs text-muted-foreground leading-snug">{m.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Pricing Plans */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-display font-bold mb-3">
              Transparencia de Precios y Esquemas de Inversión
            </h2>
            <p className="text-muted-foreground mb-8">
              Sin cargos ocultos. Precios referenciales en soles peruanos (S/.) + IGV.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.plans.map((plan, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative p-7 rounded-2xl border flex flex-col transition-all ${
                    plan.highlight
                      ? "bg-white/[0.04] border-primary/40 shadow-lg shadow-primary/5"
                      : "bg-white/[0.02] border-white/10"
                  }`}
                >
                  {plan.highlight && (
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest text-black"
                      style={{ backgroundColor: service.color }}
                    >
                      Más popular
                    </div>
                  )}
                  <div className="mb-5">
                    <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">
                      {plan.label}
                    </p>
                    <p
                      className="text-2xl font-display font-bold"
                      style={{ color: plan.highlight ? service.color : "white" }}
                    >
                      {plan.price}
                    </p>
                  </div>
                  <ul className="space-y-2.5 flex-1 mb-6">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          style={{ color: service.color }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/51991488770?text=${service.waText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border text-sm font-medium transition-all hover:gap-3"
                    style={
                      plan.highlight
                        ? {
                            backgroundColor: `${service.color}20`,
                            borderColor: `${service.color}40`,
                            color: service.color,
                          }
                        : { borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }
                    }
                  >
                    Solicitar este plan
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Process */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-display font-bold mb-8">
              Proceso Seguro de Desarrollo
            </h2>
            <div className="relative">
              <div className="absolute left-4 top-4 bottom-4 w-px bg-white/10" />
              <div className="space-y-4">
                {service.processSteps.map((step, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-5 pl-2"
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-mono flex-shrink-0 mt-0.5 border"
                      style={{
                        backgroundColor: `${service.color}15`,
                        borderColor: `${service.color}40`,
                        color: service.color,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="text-sm text-muted-foreground pt-1.5 leading-relaxed">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Guarantees */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-display font-bold mb-6">
              Garantías y Seguridad
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.guarantees.map((g, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-5 rounded-xl bg-white/[0.02] border border-white/10"
                >
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{g}</p>
                </div>
              ))}
            </div>

            {/* Methodology badges */}
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { icon: <GitBranch className="w-4 h-4" />, label: "GitHub Flow" },
                { icon: <Clock className="w-4 h-4" />, label: "Sprints ágiles de 2 semanas" },
                { icon: <Award className="w-4 h-4" />, label: "Estándares Silicon Valley" },
                { icon: <Shield className="w-4 h-4" />, label: "ISO / OWASP compliance" },
              ].map((b, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-muted-foreground"
                >
                  {b.icon}
                  {b.label}
                </span>
              ))}
            </div>
          </motion.section>

          {/* CTA Block */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-12 rounded-3xl border border-white/10 bg-[#050505] text-center relative overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                background: `radial-gradient(ellipse at 50% 0%, ${service.color} 0%, transparent 70%)`,
              }}
            />
            <div className="relative z-10">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
                ¿Listo para escalar?
              </p>
              <h3 className="text-3xl font-display font-bold mb-4">
                Solicitar consultoría de {service.title}
              </h3>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Agenda una sesión técnica gratuita de 15 minutos y recibe un diagnóstico inicial
                sin compromiso.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`https://wa.me/51991488770?text=${service.waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-black transition-all hover:opacity-90 hover:gap-3"
                  style={{ backgroundColor: service.color }}
                >
                  <SiWhatsapp className="w-5 h-5" />
                  Consultar por WhatsApp
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-all text-sm"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Ver todos los servicios
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}
