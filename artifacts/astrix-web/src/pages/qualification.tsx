import { useState } from "react";
import { Link } from "wouter";
import { Header } from "@/components/layout/header";
import { ArrowLeft, Building2, CheckCircle2, GraduationCap, Send } from "lucide-react";

type Profile = "b2b" | "practicante";

export default function QualificationPage() {
  const [profile, setProfile] = useState<Profile>("b2b");
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-black text-foreground">
      <Header />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-32">
        <Link href="/" className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
          <ArrowLeft className="h-4 w-4" /> Volver al inicio
        </Link>
        <div className="mb-10">
          <p className="mb-3 text-xs font-mono uppercase tracking-[0.25em] text-primary">Aventorix / primer contacto</p>
          <h1 className="text-4xl font-display font-bold sm:text-5xl">Califiquemos tu próximo paso.</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Selecciona tu perfil para dirigir tu solicitud al equipo correcto. La conversación comienza con contexto, no con formularios interminables.
          </p>
        </div>
        {sent ? (
          <div className="rounded-3xl border border-green-500/30 bg-green-500/10 p-10 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-green-400" />
            <h2 className="mt-5 text-2xl font-display font-bold">Solicitud recibida</h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">Revisaremos tu información y te contactaremos para coordinar la siguiente conversación.</p>
            <Link href="/" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black">Volver al sitio</Link>
          </div>
        ) : (
          <form onSubmit={(event) => { event.preventDefault(); setSent(true); }} className="space-y-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10">
            <div>
              <label className="mb-3 block text-xs font-mono uppercase tracking-widest text-muted-foreground">Tu perfil</label>
              <div className="grid gap-3 sm:grid-cols-2">
                {([
                  { value: "b2b" as const, label: "Empresa / B2B", icon: <Building2 className="h-5 w-5" />, description: "Quiero resolver un reto tecnológico." },
                  { value: "practicante" as const, label: "Postulante Astriano", icon: <GraduationCap className="h-5 w-5" />, description: "Quiero crecer con el equipo." },
                ]).map((option) => (
                  <button key={option.value} type="button" onClick={() => setProfile(option.value)} className={`rounded-2xl border p-5 text-left transition-all ${profile === option.value ? "border-primary bg-primary/10" : "border-white/10 bg-black/20 hover:border-white/25"}`}>
                    <span className="flex items-center gap-3 font-semibold text-white">{option.icon}{option.label}</span>
                    <span className="mt-2 block text-sm text-muted-foreground">{option.description}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm text-white/70">Nombre<input required className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-primary" placeholder="Tu nombre" /></label>
              <label className="text-sm text-white/70">Correo<input required type="email" className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-primary" placeholder="tu@empresa.com" /></label>
            </div>
            <label className="block text-sm text-white/70">{profile === "b2b" ? "¿Qué quieres construir o mejorar?" : "¿Qué área tecnológica te interesa?"}<textarea required rows={5} className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-primary" placeholder={profile === "b2b" ? "Cuéntanos brevemente sobre el reto..." : "Cuéntanos sobre tu perfil y objetivos..."} /></label>
            <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-black transition-opacity hover:opacity-90"><Send className="h-4 w-4" /> Enviar calificación</button>
          </form>
        )}
      </main>
    </div>
  );
}