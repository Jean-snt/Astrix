export interface ServicePlan {
  name: string;
  label: string;
  price: string;
  features: string[];
  highlight?: boolean;
}

export type VisualStyle = "engineering" | "automation" | "consulting" | "ecommerce";

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  color: string;
  visualStyle: VisualStyle;
  description: string;
  problem: string;
  roiMetrics: { label: string; value: string }[];
  plans: ServicePlan[];
  processSteps: string[];
  guarantees: string[];
  waText: string;
}

export const services: Service[] = [
  {
    slug: "ingenieria-software",
    title: "Ingeniería de Software",
    tagline: "Arquitecturas backend robustas para operaciones críticas a escala",
    category: "Ingeniería",
    color: "#3b82f6",
    visualStyle: "engineering",
    description:
      "Diseñamos y construimos sistemas backend de alta disponibilidad usando microservicios, APIs RESTful y arquitecturas event-driven. Cada componente es construido con escalabilidad como requisito de diseño, no como afterthought. Trabajamos con Laravel, Node.js, Java y PostgreSQL Multi-tenant.",
    problem:
      "Las empresas en crecimiento enfrentan sistemas legacy que colapsan bajo demanda, APIs inconsistentes que frenan la integración con clientes y partners, y deuda técnica que duplica el tiempo de cada nueva feature.",
    roiMetrics: [
      { label: "Reducción de downtime", value: "87%" },
      { label: "Velocidad de desarrollo", value: "+3×" },
      { label: "Cobertura de tests", value: ">90%" },
      { label: "TTM de nuevas features", value: "−60%" },
    ],
    plans: [
      {
        name: "starter",
        label: "Solución PyME",
        price: "Desde S/. 3,500",
        features: [
          "API RESTful con Laravel + PostgreSQL",
          "Autenticación JWT y control de roles",
          "Documentación Swagger/OpenAPI",
          "1 integración de terceros",
          "Soporte 30 días post-entrega",
        ],
      },
      {
        name: "scale",
        label: "Escala Empresarial",
        price: "Desde S/. 9,800",
        highlight: true,
        features: [
          "Microservicios con Docker + Redis",
          "Multi-tenancy con PostgreSQL",
          "CI/CD con GitHub Actions",
          "Queue workers y jobs asíncronos",
          "Monitoreo con Prometheus / Grafana",
          "Soporte 90 días + SLA",
        ],
      },
      {
        name: "enterprise",
        label: "Arquitectura Enterprise",
        price: "Cotización a medida",
        features: [
          "Arquitectura event-driven (Kafka/RabbitMQ)",
          "Zero-downtime deployments",
          "Auditoría de código y pen-testing",
          "Equipo dedicado AVENTORIX (3–8 ingenieros)",
          "Soporte 24/7 + Manager de cuenta",
          "SLA garantizado 99.9%",
        ],
      },
    ],
    processSteps: [
      "Kickoff técnico y levantamiento de requerimientos (Notion)",
      "Diseño de arquitectura del sistema y revisión con cliente",
      "Desarrollo iterativo en sprints de 2 semanas (GitHub Flow)",
      "Code review continuo + auditoría de seguridad en cada PR",
      "Testing automatizado: unitario, integración y end-to-end",
      "Despliegue en staging → aprobación cliente → producción",
      "Documentación técnica, handoff completo y soporte post-launch",
    ],
    guarantees: [
      "Código fuente 100% propiedad del cliente desde el primer commit",
      "Repositorio privado en GitHub del cliente",
      "Encriptación TLS 1.3 + variables de entorno seguras (.env cifrado)",
      "Política de no-vendor-lock: stack portable y estándar de la industria",
    ],
    waText:
      "Hola%20AVENTORIX%20S.A.C.%20Deseo%20solicitar%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20Ingenier%C3%ADa%20de%20Software.",
  },
  {
    slug: "infraestructura-cloud",
    title: "Infraestructura Cloud",
    tagline: "Despliegue, escalado y resiliencia en AWS, GCP y Azure",
    category: "Infraestructura",
    color: "#33ccdd",
    visualStyle: "automation",
    description:
      "Diseñamos arquitecturas cloud-native con alta disponibilidad, CI/CD automatizado y costos optimizados. Desde migraciones lift-and-shift hasta arquitecturas serverless multi-región. Gestionamos su infraestructura como código (IaC) con Terraform y Ansible.",
    problem:
      "Los equipos técnicos desperdigan recursos en servidores mal dimensionados, despliegues manuales que generan errores humanos, y sin visibilidad real del estado de sus sistemas en producción.",
    roiMetrics: [
      { label: "Reducción de costos cloud", value: "−40%" },
      { label: "Tiempo de despliegue", value: "−80%" },
      { label: "Uptime garantizado", value: "99.9%" },
      { label: "Incidentes por despliegue manual", value: "−95%" },
    ],
    plans: [
      {
        name: "starter",
        label: "Cloud Starter",
        price: "Desde S/. 2,800",
        features: [
          "Setup inicial en AWS o GCP",
          "Pipeline CI/CD con GitHub Actions",
          "Configuración de dominio + SSL/TLS",
          "Backups automatizados diarios",
          "Dashboard de monitoreo básico",
        ],
      },
      {
        name: "scale",
        label: "Cloud Managed",
        price: "Desde S/. 7,500 / mes",
        highlight: true,
        features: [
          "Infraestructura como código (Terraform)",
          "Auto-scaling y load balancing",
          "CDN + WAF (Web Application Firewall)",
          "Alertas proactivas y on-call rotation",
          "Multi-environment (dev/staging/prod)",
          "Reporte mensual de costos y optimización",
        ],
      },
      {
        name: "enterprise",
        label: "Enterprise Cloud",
        price: "Cotización a medida",
        features: [
          "Arquitectura multi-región y disaster recovery",
          "Kubernetes (EKS / GKE) con Helm",
          "Cumplimiento ISO 27001 / SOC2",
          "Dedicated DevOps engineer (AVENTORIX)",
          "SLA 99.99% con RTO < 1 hora",
          "Auditoría de seguridad trimestral",
        ],
      },
    ],
    processSteps: [
      "Auditoría del estado actual de infraestructura",
      "Diseño de arquitectura cloud objetivo (diagrams + cost estimate)",
      "Implementación IaC en rama de staging",
      "Pruebas de carga, failover y disaster recovery",
      "Migración zero-downtime a producción",
      "Configuración de alertas, dashboards y runbooks",
      "Handoff + capacitación al equipo técnico del cliente",
    ],
    guarantees: [
      "Toda la infraestructura documentada como código (IaC)",
      "Acceso root/owner al cliente en todo momento",
      "Sin vendor-lock con abstracciones agnósticas al proveedor",
      "Encriptación at-rest y in-transit en todos los servicios",
    ],
    waText:
      "Hola%20AVENTORIX%20S.A.C.%20Deseo%20solicitar%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20Infraestructura%20Cloud.",
  },
  {
    slug: "consultoria-tecnologica",
    title: "Consultoría Tecnológica B2B",
    tagline: "Roadmaps de transformación digital para organizaciones que exigen escala",
    category: "Consultoría",
    color: "#8b5cf6",
    visualStyle: "consulting",
    description:
      "Realizamos auditorías profundas de arquitectura, procesos tecnológicos y equipos de desarrollo. Entregamos roadmaps accionables con priorización por impacto de negocio. Sin jerga innecesaria — resultados medibles.",
    problem:
      "Directivos técnicos enfrentan deuda técnica acumulada sin visibilidad, equipos que no saben qué construir primero, y decisiones de arquitectura tomadas por costumbre en lugar de por datos.",
    roiMetrics: [
      { label: "Reducción de deuda técnica", value: "−65%" },
      { label: "Claridad de roadmap", value: "100%" },
      { label: "Ahorro en contrataciones redundantes", value: "S/. 50K+" },
      { label: "Velocidad de toma de decisiones", value: "+4×" },
    ],
    plans: [
      {
        name: "starter",
        label: "Auditoría Express",
        price: "S/. 1,800",
        features: [
          "Revisión de arquitectura existente (hasta 5 repositorios)",
          "Informe de hallazgos y riesgos técnicos",
          "Priorización de deuda técnica",
          "1 sesión de presentación ejecutiva",
          "Entrega en 5 días hábiles",
        ],
      },
      {
        name: "scale",
        label: "Transformación Digital",
        price: "Desde S/. 5,500",
        highlight: true,
        features: [
          "Auditoría completa de procesos tecnológicos",
          "Roadmap de 12 meses con hitos medibles",
          "Definición de stack tecnológico recomendado",
          "Evaluación y estructura de equipos",
          "3 sesiones ejecutivas + seguimiento mensual",
          "Acceso a red de especialistas AVENTORIX",
        ],
      },
      {
        name: "enterprise",
        label: "CTO Advisor",
        price: "Cotización a medida",
        features: [
          "CTO Fraccionado de AVENTORIX asignado",
          "Presencia en reuniones de directorio",
          "Definición de cultura de ingeniería",
          "Due diligence tecnológico para inversores",
          "Disponibilidad de emergencia 24/7",
          "Compromiso mínimo 3 meses",
        ],
      },
    ],
    processSteps: [
      "Entrevistas con stakeholders técnicos y de negocio",
      "Revisión de código, arquitectura y documentación existente",
      "Benchmark contra estándares de la industria",
      "Análisis de riesgos y brechas críticas",
      "Elaboración del informe ejecutivo y roadmap técnico",
      "Presentación a directivos y Q&A",
      "Plan de acompañamiento durante implementación",
    ],
    guarantees: [
      "Confidencialidad total: NDA firmado antes del inicio",
      "Informe final 100% propiedad del cliente",
      "Sin conflicto de intereses: no vendemos tecnología propia",
      "Recomendaciones basadas en datos, no en preferencias de stack",
    ],
    waText:
      "Hola%20AVENTORIX%20S.A.C.%20Deseo%20solicitar%20informaci%C3%B3n%20sobre%20Consultor%C3%ADa%20Tecnol%C3%B3gica%20B2B.",
  },
  {
    slug: "tiendas-virtuales",
    title: "Desarrollo de Tiendas Virtuales",
    tagline: "E-commerce de alta conversión con infraestructura preparada para Black Friday",
    category: "E-commerce",
    color: "#f97316",
    visualStyle: "ecommerce",
    description:
      "Construimos plataformas de comercio electrónico personalizadas con checkout optimizado, gestión de inventario en tiempo real, integración de pasarelas de pago locales (Culqi, Niubiz, Yape) e internacionales (Stripe, PayPal), y paneles administrativos intuitivos.",
    problem:
      "El 70% de las tiendas online en Latam pierden ventas por checkouts lentos, interfaces no optimizadas para móvil y falta de integración con métodos de pago locales que el consumidor peruano usa a diario.",
    roiMetrics: [
      { label: "Incremento en tasa de conversión", value: "+45%" },
      { label: "Abandono de carrito reducido", value: "−35%" },
      { label: "Carga de página", value: "<2s" },
      { label: "Uptime en campañas pico", value: "99.95%" },
    ],
    plans: [
      {
        name: "starter",
        label: "Tienda PyME",
        price: "Desde S/. 4,200",
        features: [
          "Catálogo hasta 500 productos",
          "Integración Culqi o Niubiz",
          "Panel administrativo de órdenes",
          "Diseño mobile-first responsive",
          "SEO técnico básico",
          "Soporte 45 días post-lanzamiento",
        ],
      },
      {
        name: "scale",
        label: "E-commerce Avanzado",
        price: "Desde S/. 11,000",
        highlight: true,
        features: [
          "Catálogo ilimitado con búsqueda avanzada",
          "Multi-pasarela (Culqi + Niubiz + Yape + Stripe)",
          "Gestión de inventario multi-almacén",
          "Sistema de descuentos, cupones y afiliados",
          "Analytics de conversión en tiempo real",
          "Integración con ERP / sistema contable",
        ],
      },
      {
        name: "enterprise",
        label: "Marketplace Enterprise",
        price: "Cotización a medida",
        features: [
          "Arquitectura marketplace multi-vendor",
          "Escala para 10M+ visitas/mes",
          "Infraestructura cloud con auto-scaling",
          "App móvil (iOS + Android) incluida",
          "Equipo dedicado de desarrollo y diseño",
          "SLA comercial garantizado",
        ],
      },
    ],
    processSteps: [
      "Definición del catálogo, flujos de compra y pasarelas requeridas",
      "Diseño UI/UX en Figma con prototipos navegables",
      "Desarrollo frontend React + backend Laravel/Node.js",
      "Integración y testing de pasarelas de pago en sandbox",
      "Pruebas de carga y optimización de performance",
      "Lanzamiento controlado con monitoreo activo",
      "Entrenamiento al equipo de gestión de la tienda",
    ],
    guarantees: [
      "Código fuente entregado al cliente 100%",
      "PCI-DSS compliance en manejo de datos de pago",
      "Encriptación HTTPS con certificado SSL renovado automáticamente",
      "Backups diarios del catálogo e historial de órdenes",
    ],
    waText:
      "Hola%20AVENTORIX%20S.A.C.%20Deseo%20solicitar%20informaci%C3%B3n%20sobre%20el%20desarrollo%20de%20Tiendas%20Virtuales.",
  },
  {
    slug: "erp-crm",
    title: "Sistemas ERP / CRM",
    tagline: "Centraliza operaciones, ventas y finanzas en un solo sistema empresarial",
    category: "Sistemas",
    color: "#22c55e",
    visualStyle: "engineering",
    description:
      "Desarrollamos ERPs y CRMs a medida adaptados a los procesos específicos de su empresa. Construidos en Java Enterprise + PostgreSQL con interfaces React, integrados con SUNAT (factura electrónica, libros contables) y exportaciones a Excel/PDF para reportería ejecutiva.",
    problem:
      "Las empresas medianas operan con datos dispersos en hojas de cálculo, múltiples herramientas desconectadas y sin visibilidad en tiempo real de su situación financiera, inventario y relaciones comerciales.",
    roiMetrics: [
      { label: "Reducción de tiempo en reportes", value: "−75%" },
      { label: "Errores de facturación", value: "−92%" },
      { label: "Visibilidad de KPIs en tiempo real", value: "100%" },
      { label: "ROI primer año", value: "3.2×" },
    ],
    plans: [
      {
        name: "starter",
        label: "CRM Empresarial",
        price: "Desde S/. 6,500",
        features: [
          "Gestión de contactos, leads y pipeline",
          "Registro de interacciones y seguimiento",
          "Reportes de ventas y embudo",
          "Integración con WhatsApp Business API",
          "Hasta 10 usuarios",
          "Soporte 60 días",
        ],
      },
      {
        name: "scale",
        label: "ERP Operacional",
        price: "Desde S/. 18,000",
        highlight: true,
        features: [
          "Módulos: Facturación, Inventario, RRHH, Contabilidad",
          "Integración SUNAT (FE, GRE, libros electrónicos)",
          "Multi-sucursal y multi-moneda",
          "Roles y permisos granulares",
          "API para integraciones externas",
          "Usuarios ilimitados + soporte 1 año",
        ],
      },
      {
        name: "enterprise",
        label: "ERP Enterprise a Medida",
        price: "Cotización a medida",
        features: [
          "Flujos de trabajo totalmente personalizados",
          "Integración con sistemas legacy existentes",
          "Business Intelligence y data warehouse",
          "App móvil para campo / ventas externas",
          "Equipo dedicado + gerente de proyecto",
          "SLA y soporte 24/7 garantizados",
        ],
      },
    ],
    processSteps: [
      "Mapeo completo de procesos operativos y contables",
      "Definición de módulos y flujos de trabajo prioritarios",
      "Diseño de base de datos y arquitectura del sistema",
      "Desarrollo modular con validación progresiva del cliente",
      "Integración con SUNAT y sistemas externos",
      "Migración de datos históricos desde sistemas anteriores",
      "Capacitación por roles + manual de usuario + soporte activo",
    ],
    guarantees: [
      "Sistema configurado para cumplir normativa SUNAT vigente",
      "Datos del cliente encriptados y con backups automáticos",
      "Contrato de mantenimiento y actualizaciones legales incluido",
      "Código fuente entregado sin restricciones de uso",
    ],
    waText:
      "Hola%20AVENTORIX%20S.A.C.%20Deseo%20solicitar%20informaci%C3%B3n%20sobre%20sistemas%20ERP%20%2F%20CRM%20empresariales.",
  },
  {
    slug: "ciberseguridad",
    title: "Auditorías de Ciberseguridad",
    tagline: "Identifica y elimina vulnerabilidades antes que los atacantes las exploten",
    category: "Seguridad",
    color: "#dc2626",
    visualStyle: "consulting",
    description:
      "Realizamos pruebas de penetración (pentesting), análisis estático de código fuente (SAST), auditorías de configuración de infraestructura y simulaciones de ataques reales. Entregamos un informe ejecutivo con hallazgos priorizados por criticidad y plan de remediación.",
    problem:
      "El 60% de las pymes latinoamericanas no detectan una brecha de seguridad hasta 6 meses después de ocurrida. Un solo incidente puede costar más que 10 años de auditorías preventivas.",
    roiMetrics: [
      { label: "Vulnerabilidades críticas identificadas", value: "Promedio 12" },
      { label: "Reducción de superficie de ataque", value: "−78%" },
      { label: "Costo promedio de una brecha evitada", value: "S/. 180K+" },
      { label: "Tiempo de detección de incidentes", value: "−85%" },
    ],
    plans: [
      {
        name: "starter",
        label: "Auditoría Web App",
        price: "Desde S/. 2,500",
        features: [
          "Análisis OWASP Top 10",
          "Escaneo de vulnerabilidades con Burp Suite",
          "Revisión de autenticación y autorización",
          "Informe técnico + ejecutivo",
          "Plan de remediación priorizado",
          "Entrega en 7 días hábiles",
        ],
      },
      {
        name: "scale",
        label: "Pentesting Completo",
        price: "Desde S/. 7,000",
        highlight: true,
        features: [
          "Pentesting web + API + infraestructura",
          "Análisis estático de código fuente (SAST)",
          "Simulación de ataques de ingeniería social",
          "Análisis de configuración cloud (AWS/GCP/Azure)",
          "Informe ejecutivo para directorio",
          "Sesión de presentación + Q&A incluida",
        ],
      },
      {
        name: "enterprise",
        label: "Security Retainer",
        price: "Cotización a medida",
        features: [
          "Auditorías trimestrales programadas",
          "Monitoreo continuo de amenazas",
          "Respuesta a incidentes 24/7",
          "Capacitación de equipo en seguridad",
          "Certificación de cumplimiento (ISO 27001)",
          "CISO Fraccionado de AVENTORIX disponible",
        ],
      },
    ],
    processSteps: [
      "Definición del alcance (scope) y firma de autorización de pruebas",
      "Reconocimiento pasivo y activo del objetivo",
      "Explotación controlada de vulnerabilidades identificadas",
      "Documentación de evidencias y vector de ataque",
      "Elaboración del informe técnico y ejecutivo",
      "Sesión de presentación de hallazgos con el equipo",
      "Verificación post-remediación (re-testing gratuito incluido)",
    ],
    guarantees: [
      "Acuerdo de confidencialidad (NDA) y autorización formal firmados",
      "Sin modificación de datos ni sistemas sin aprobación explícita",
      "Entorno de pruebas aislado para no afectar producción",
      "Hallazgos clasificados según CVSS 3.1 (estándar internacional)",
    ],
    waText:
      "Hola%20AVENTORIX%20S.A.C.%20Deseo%20solicitar%20informaci%C3%B3n%20sobre%20Auditor%C3%ADas%20de%20Ciberseguridad.",
  },
  {
    slug: "bots-automatizacion",
    title: "Bots de Automatización",
    tagline: "Elimina el trabajo repetitivo y multiplica la capacidad de tu equipo sin contratar",
    category: "Automatización",
    color: "#10b981",
    visualStyle: "automation",
    description:
      "Desarrollamos bots operativos para WhatsApp Business, Telegram, Discord y web scraping. Automatizamos flujos de ventas, soporte al cliente, reportería de datos y procesos internos usando Python, Node.js y plataformas no-code como Make y n8n cuando aplica.",
    problem:
      "Los equipos comerciales y operativos pierden entre 3 y 5 horas diarias en tareas repetitivas: responder preguntas frecuentes, generar reportes manuales, registrar datos en CRMs y hacer seguimiento a prospectos que ya deberían ser clientes.",
    roiMetrics: [
      { label: "Horas recuperadas por semana", value: "20–40 hrs" },
      { label: "Tiempo de respuesta a leads", value: "De 4 hrs a 2 min" },
      { label: "Reducción de carga operativa", value: "−65%" },
      { label: "ROI en primeros 6 meses", value: "4×" },
    ],
    plans: [
      {
        name: "starter",
        label: "Bot Básico",
        price: "Desde S/. 1,800",
        features: [
          "Bot de WhatsApp con flujos FAQ",
          "Integración con Google Sheets",
          "Notificaciones automáticas por evento",
          "Panel de configuración sin código",
          "Soporte 30 días",
        ],
      },
      {
        name: "scale",
        label: "Automatización Operacional",
        price: "Desde S/. 5,500",
        highlight: true,
        features: [
          "Bot multicanal (WhatsApp + Telegram + Web)",
          "Integración con CRM y base de datos",
          "Flujos de ventas y calificación de leads",
          "Reportes automáticos diarios/semanales",
          "Web scraping de competidores / mercado",
          "Dashboard de métricas del bot",
        ],
      },
      {
        name: "enterprise",
        label: "Automatización Enterprise",
        price: "Cotización a medida",
        features: [
          "Integración con ERP, CRM y sistemas propios",
          "IA conversacional con GPT-4 / Claude",
          "Flujos complejos multi-step con lógica de negocio",
          "Bots de monitoreo de infraestructura",
          "SLA de uptime del bot garantizado",
          "Soporte 24/7 + mantenimiento incluido",
        ],
      },
    ],
    processSteps: [
      "Mapeo de procesos candidatos a automatización por ROI",
      "Definición de flujos y lógica de negocio",
      "Desarrollo del bot en entorno de staging",
      "Testing exhaustivo con casos borde y escenarios reales",
      "Despliegue gradual con monitoreo activo",
      "Ajuste fino basado en uso real (primeras 2 semanas)",
      "Entrenamiento al equipo + manual de operación",
    ],
    guarantees: [
      "Código fuente del bot 100% propiedad del cliente",
      "Sin dependencia de plataformas de terceros donde no sea necesario",
      "Logs completos de interacciones para auditoría interna",
      "Respaldo automático de configuración y conversaciones",
    ],
    waText:
      "Hola%20AVENTORIX%20S.A.C.%20Deseo%20solicitar%20informaci%C3%B3n%20sobre%20Bots%20de%20Automatizaci%C3%B3n.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
