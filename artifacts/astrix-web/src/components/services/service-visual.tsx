import { useEffect, useState } from "react";
import { Activity, ArrowUpRight, Bot, Cloud, Database, LockKeyhole, ShoppingBag, Sparkles, Terminal, Zap } from "lucide-react";
import type { Service } from "@/data/services";

type Props = { service: Service };

const pillLabels = ["intent.detected", "workflow.ready", "latency 42ms", "secure.channel"];

export function ServiceVisual({ service }: Props) {
  if (service.visualStyle === "ecommerce") return <PhoneVisual color={service.color} />;
  if (service.visualStyle === "consulting") return <GlassVisual service={service} />;
  if (service.visualStyle === "automation") return <AutomationVisual service={service} />;
  return <EngineeringVisual service={service} />;
}

function EngineeringVisual({ service }: Props) {
  return (
    <div className="mt-10 max-w-xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 shadow-2xl shadow-black/30">
      <div className="mb-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.25em] text-white/40">
        <span>operating system</span>
        <span style={{ color: service.color }}>live architecture</span>
      </div>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <div className="space-y-2">
          {["Ventas", "Inventario", "Finanzas"].map((item) => (
            <div key={item} className="rounded-xl border border-white/10 bg-black/40 px-3 py-3 text-xs text-white/70">
              {item}
            </div>
          ))}
        </div>
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/15 bg-white/10 shadow-[0_0_40px_rgba(34,197,94,0.12)]">
          <Database className="h-7 w-7" style={{ color: service.color }} />
          <span className="absolute -bottom-6 whitespace-nowrap text-[10px] font-mono text-white/40">single source</span>
        </div>
        <div className="space-y-2">
          {["CRM", "ERP", "Analytics"].map((item) => (
            <div key={item} className="rounded-xl border border-white/10 bg-black/40 px-3 py-3 text-right text-xs text-white/70">
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex justify-center">
        <div className="relative text-5xl leading-none text-white/80" aria-label="Diseño de operación de manos libres">
          <span className="inline-block -rotate-12">⌁</span>
          <span className="absolute -right-8 top-4 text-2xl" style={{ color: service.color }}>⌁</span>
        </div>
      </div>
      <p className="mt-2 text-center text-xs text-white/45">Una operación conectada, sin fricción entre equipos.</p>
    </div>
  );
}

function AutomationVisual({ service }: Props) {
  const [line, setLine] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setLine((value) => (value + 1) % 3), 1800);
    return () => window.clearInterval(timer);
  }, []);
  const lines = ["$ aventorix deploy --production", "→ syncing cloud resources", "✓ automation pipeline online"];
  return (
    <div className="mt-10 max-w-xl rounded-[2rem] border border-white/10 bg-[#06100f]/80 p-5 shadow-2xl shadow-emerald-500/5">
      <div className="mb-5 flex items-center gap-2 text-xs font-mono text-white/40">
        <Terminal className="h-4 w-4" style={{ color: service.color }} />
        aventorix / automation
      </div>
      <div className="min-h-14 rounded-xl bg-black/50 p-4 font-mono text-sm text-white/80">
        {lines[line]}
        <span className="ml-1 animate-pulse" style={{ color: service.color }}>▍</span>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {pillLabels.map((pill, index) => (
          <span
            key={pill}
            className={`rounded-full border px-3 py-1.5 text-[10px] font-mono transition-all ${index === line ? "border-primary/50 bg-primary/15 text-primary" : "border-white/10 bg-white/5 text-white/45"}`}
          >
            {pill}
          </span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-2 text-xs text-white/45">
        <Cloud className="h-4 w-4" style={{ color: service.color }} />
        autoscaling enabled
      </div>
    </div>
  );
}

function GlassVisual({ service }: Props) {
  return (
    <div className="relative mt-10 max-w-xl overflow-hidden rounded-[2rem] border border-white/20 bg-white/[0.07] p-6 shadow-2xl shadow-violet-500/10 backdrop-blur-2xl">
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-violet-400/20 blur-3xl" />
      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/45">risk surface</p>
          <p className="mt-2 text-3xl font-display font-bold text-white">98.4<span className="text-lg text-white/45">%</span></p>
        </div>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
          {service.category === "Seguridad" ? <LockKeyhole className="h-6 w-6" style={{ color: service.color }} /> : <Sparkles className="h-6 w-6" style={{ color: service.color }} />}
        </div>
      </div>
      <div className="relative mt-7 grid grid-cols-3 gap-3">
        {["Audit", "Strategy", "Shield"].map((label, index) => (
          <div key={label} className="rounded-xl border border-white/15 bg-white/10 p-3 text-center">
            <Activity className="mx-auto mb-2 h-4 w-4" style={{ color: index === 1 ? service.color : "#ffffff99" }} />
            <span className="text-[10px] text-white/60">{label}</span>
          </div>
        ))}
      </div>
      <div className="relative mt-5 flex flex-wrap gap-2">
        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] text-white/70">ISO-ready</span>
        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] text-white/70">OWASP</span>
        <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] text-white/70">B2B focus</span>
      </div>
    </div>
  );
}

function PhoneVisual({ color }: { color: string }) {
  const [active, setActive] = useState(0);
  const products = ["Aurora Lamp", "Orbit Chair", "Nova Desk"];
  return (
    <div className="mt-10 flex max-w-xl items-center gap-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
      <div className="relative mx-auto w-36 rotate-[-6deg] rounded-[2rem] border-4 border-white/20 bg-[#101114] p-2 shadow-2xl shadow-orange-500/20 transition-transform duration-500 hover:rotate-0">
        <div className="overflow-hidden rounded-[1.4rem] bg-[#f7f3ec] text-black">
          <div className="flex items-center justify-between px-3 py-3 text-[8px] font-bold">
            <span>aventorix.store</span><ShoppingBag className="h-3 w-3" />
          </div>
          <div className="mx-3 rounded-xl bg-gradient-to-br from-orange-200 to-amber-50 p-4">
            <Sparkles className="h-7 w-7 text-orange-700" />
          </div>
          <div className="p-3">
            <p className="text-[9px] text-black/50">featured</p>
            <p className="mt-1 text-[11px] font-bold">{products[active]}</p>
            <button type="button" onClick={() => setActive((value) => (value + 1) % products.length)} className="mt-3 w-full rounded-full py-2 text-[9px] font-bold text-white" style={{ backgroundColor: color }}>
              Ver producto
            </button>
          </div>
        </div>
      </div>
      <div className="hidden flex-1 sm:block">
        <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/40">mobile commerce</p>
        <h3 className="mt-3 text-2xl font-display font-bold text-white">Convierte cada scroll en una oportunidad.</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/50">Mockup interactivo: toca el producto para recorrer la experiencia de compra.</p>
        <div className="mt-5 flex items-center gap-2 text-xs text-white/50"><Zap className="h-4 w-4" style={{ color }} /> checkout optimizado</div>
      </div>
    </div>
  );
}