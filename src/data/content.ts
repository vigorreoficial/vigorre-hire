import {
  LayoutGrid,
  Globe2,
  Workflow,
  Bot,
  UserRound,
  FileStack,
  UserSearch,
  Mic,
  BarChart3,
  Users,
  ShieldCheck,
  Palette,
  Brain,
  Gauge,
  HeartHandshake,
  Network,
  Target,
  ClipboardList,
  type LucideIcon,
} from "lucide-react";

export type Accent = "navy" | "steel" | "azure" | "silver" | "graphite";

/** Tonal navy + metallic-gray accents — sophisticated, on-brand. */
export const accentMap: Record<Accent, { text: string; ring: string; glow: string; from: string }> = {
  navy: { text: "text-navy-700", ring: "ring-navy-600/20", glow: "group-hover:shadow-navy-600/20", from: "from-navy-600" },
  steel: { text: "text-navy-600", ring: "ring-navy-500/20", glow: "group-hover:shadow-navy-500/20", from: "from-navy-500" },
  azure: { text: "text-navy-500", ring: "ring-navy-400/25", glow: "group-hover:shadow-navy-400/20", from: "from-navy-400" },
  silver: { text: "text-graphite-500", ring: "ring-graphite-500/20", glow: "group-hover:shadow-graphite-500/15", from: "from-silver-400" },
  graphite: { text: "text-graphite-600", ring: "ring-graphite-600/20", glow: "group-hover:shadow-graphite-600/15", from: "from-graphite-600" },
};

/** The 12 master modules of the Vigorre One™ ecosystem. */
export const modules: {
  id: string;
  n: string;
  title: string;
  tag: string;
  desc: string;
  icon: LucideIcon;
  accent: Accent;
}[] = [
  { id: "arch", n: "01", title: "Arquitetura Vigorre One™", tag: "Foundation", desc: "Núcleo unificado multi-tenant que integra dados, identidade e IA em uma plataforma 360°.", icon: LayoutGrid, accent: "navy" },
  { id: "jobs", n: "02", title: "Portal Mundial de Vagas", tag: "Marketplace", desc: "Vitrine global com match comportamental, busca semântica e publicação em múltiplos canais.", icon: Globe2, accent: "azure" },
  { id: "ats", n: "03", title: "ATS Inteligente", tag: "Pipeline", desc: "Funil de seleção automatizado com kanban colaborativo, SLA e automações no-code.", icon: Workflow, accent: "steel" },
  { id: "ai-recruiter", n: "04", title: "IA Recrutadora", tag: "Autonomous", desc: "Triagem preditiva, ranking por fit cultural e shortlist pronta para o recrutador.", icon: Bot, accent: "navy" },
  { id: "ai-candidate", n: "05", title: "IA para Participante", tag: "Candidate UX", desc: "Coach de carreira que prepara currículo, simulados e insights personalizados.", icon: UserRound, accent: "silver" },
  { id: "resumes", n: "06", title: "Central de Currículos", tag: "Talent Base", desc: "Banco inteligente com perfis enriquecidos, versionamento e busca por competências.", icon: FileStack, accent: "azure" },
  { id: "linkedin", n: "07", title: "LinkedIn Intelligence", tag: "Sourcing", desc: "Enriquecimento de perfis e sourcing ativo com sinais de movimento e intenção.", icon: UserSearch, accent: "steel" },
  { id: "interview", n: "08", title: "Interview AI Premium", tag: "Assessment", desc: "Entrevistas estruturadas por vídeo com transcrição e análise de competências.", icon: Mic, accent: "graphite" },
  { id: "bi", n: "09", title: "BI Executivo", tag: "Analytics", desc: "Dashboards preditivos de turnover, custo por contratação e diversidade.", icon: BarChart3, accent: "silver" },
  { id: "crm", n: "10", title: "CRM de Recrutamento", tag: "Relationship", desc: "Gestão de talentos, talent pools, nurtures e afiliados em um só lugar.", icon: Users, accent: "navy" },
  { id: "admin", n: "11", title: "Administração Master", tag: "Governance", desc: "Controle total de papéis, auditoria, SSO e conformidade LGPD/GDPR.", icon: ShieldCheck, accent: "azure" },
  { id: "design", n: "12", title: "Design System Global", tag: "Experience", desc: "Identidade internacional acessível, white-label e multi-idioma.", icon: Palette, accent: "graphite" },
];

/** Core People Analytics capabilities. */
export const features: { title: string; desc: string; icon: LucideIcon; accent: Accent }[] = [
  { title: "People Analytics", desc: "Dashboards executivos com indicadores preditivos de turnover, performance e clima organizacional.", icon: Brain, accent: "navy" },
  { title: "Análise DISC Profissional", desc: "Mapeamento de perfil comportamental para liderança, comunicação e produtividade.", icon: Gauge, accent: "azure" },
  { title: "Inteligência Emocional", desc: "Avaliação de autoconhecimento, resiliência, empatia e gestão de conflitos.", icon: HeartHandshake, accent: "silver" },
  { title: "Fit Cultural e Valores", desc: "Compatibilidade entre candidato, liderança, equipe e cultura organizacional.", icon: Target, accent: "steel" },
  { title: "Assessment Corporativo", desc: "Laudo completo com recomendações estratégicas, PDI e métricas de evolução.", icon: ClipboardList, accent: "graphite" },
  { title: "Sistema Comportamental", desc: "Plataforma dedicada para assessments, laudos e acompanhamento de PDI.", icon: Network, accent: "navy" },
];

export const sectors: {
  emoji: string;
  title: string;
  desc: string;
  bullets: string[];
  accent: Accent;
}[] = [
  {
    emoji: "🌾",
    title: "Agro e Agronegócio",
    desc: "Recrutamento para operações de campo, gestão rural, logística agrícola e indústria de alimentos.",
    bullets: ["Mapeamento de perfil operacional", "Assessment para lideranças de campo", "Fit com cultura rural e segurança"],
    accent: "silver",
  },
  {
    emoji: "🏗️",
    title: "Construção Civil",
    desc: "Seleção técnica e comportamental para engenharia, mestre de obras e equipes de execução.",
    bullets: ["Validação de competências técnicas", "Resiliência sob pressão", "Normas de segurança (NR's)"],
    accent: "steel",
  },
  {
    emoji: "🌐",
    title: "Mercado Geral",
    desc: "Soluções flexíveis para tecnologia, serviços, indústria, varejo e saúde — do startup à multinacional.",
    bullets: ["Recrutamento em escala", "People Analytics integrado", "Desenvolvimento de liderança"],
    accent: "azure",
  },
];

export const plans: {
  name: string;
  price: string;
  blurb: string;
  cta: string;
  featured?: boolean;
  features: string[];
}[] = [
  {
    name: "Essential",
    price: "Sob consulta",
    blurb: "Para equipes que começam com People Analytics.",
    cta: "Falar com Especialista",
    features: ["Avaliações comportamentais", "DISC e Fit Cultural básico", "Dashboard simplificado", "Conformidade LGPD", "1 usuário administrador"],
  },
  {
    name: "Business",
    price: "Sob consulta",
    blurb: "O mais escolhido para RH de alto desempenho.",
    cta: "Solicitar Proposta",
    featured: true,
    features: ["Avaliações avançadas", "Todas as análises comportamentais", "People Analytics completo", "API de integração", "Suporte prioritário", "Até 5 usuários"],
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    blurb: "Governança total para grandes organizações.",
    cta: "Falar com Especialista",
    features: ["Avaliações ilimitadas", "Modelos customizados por setor", "IA preditiva e relatórios executivos", "SSO e LGPD/GDPR avançada", "Gerente de conta dedicado", "Usuários ilimitados"],
  },
];

export const hireFeatures: { title: string; desc: string; icon: string }[] = [
  { title: "Cadastro de Currículo", desc: "Perfil profissional com autoavaliação comportamental integrada.", icon: "📄" },
  { title: "Vagas de Empresas", desc: "Publicação inteligente com match automático de perfil.", icon: "💼" },
  { title: "Programa de Afiliados", desc: "Indique talentos ou vagas e receba comissões por contratação.", icon: "🤝" },
  { title: "Busca Inteligente", desc: "Filtros por setor, localização, senioridade e compatibilidade DISC.", icon: "🔎" },
];

export const sampleJobs: { role: string; company: string; loc: string; type: string; match: number; tag: string }[] = [
  { role: "Analista de People Analytics", company: "Vigorre Corp", loc: "São Paulo, BR · Híbrido", type: "CLT", match: 94, tag: "DISC: I" },
  { role: "Tech Recruiter Sênior", company: "Nexa Talent", loc: "Remoto", type: "PJ", match: 88, tag: "Fit 92%" },
  { role: "Gerente de Operações Agro", company: "Verde Field", loc: "Cuiabá, BR", type: "CLT", match: 91, tag: "Liderança" },
  { role: "Engenheiro Civil", company: "Construtora Altus", loc: "Belo Horizonte, BR", type: "CLT", match: 85, tag: "NR-35" },
];

export const testimonials: { quote: string; name: string; role: string; initials: string }[] = [
  {
    quote: "Reduzimos o tempo de contratação em 40% e elevamos a retenção para 94%. A análise DISC mudou nossa forma de contratar.",
    name: "Laurent Delache",
    role: "Diretor de RH · Sintelmark",
    initials: "LD",
  },
  {
    quote: "Os dashboards preditivos de turnover viraram nossa principal ferramenta de gestão. Padrão internacional de verdade.",
    name: "Marina Costa",
    role: "Head de Pessoas · Nexa Talent",
    initials: "MC",
  },
  {
    quote: "O match comportamental com a cultura da empresa é absurdo. Contratações muito mais assertivas desde o primeiro dia.",
    name: "Rafael Andrade",
    role: "CEO · Verde Field",
    initials: "RA",
  },
];

export const heroStats: { value: number; suffix: string; label: string; star?: boolean }[] = [
  { value: 20000, suffix: "+", label: "Vagas Ativas" },
  { value: 4.8, suffix: "", label: "Avaliação Média", star: true },
  { value: 85, suffix: "%", label: "Match Médio" },
];

export const trustStats = [
  { value: 500, suffix: "+", label: "Empresas Atendidas" },
  { value: 94, suffix: "%", label: "Retenção de Talentos" },
  { value: 92, suffix: "%", label: "Fit Cultural Médio" },
  { value: 120, suffix: "k+", label: "Avaliações Comportamentais" },
];

export const partners = [
  "Sintelmark",
  "Nexa Talent",
  "Verde Field",
  "Altus Build",
  "Cobar",
  "Reachr",
  "Vigor",
  "Grupo Agro",
];
