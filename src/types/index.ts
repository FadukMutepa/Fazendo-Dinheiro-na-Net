export type CategoryType = 
  | 'renda-extra' 
  | 'trabalho-online' 
  | 'ferramentas' 
  | 'negocios-digitais' 
  | 'dicas' 
  | 'oportunidades' 
  | 'guias';

export type DifficultyLevel = 'Iniciante' | 'Intermediário' | 'Avançado';
export type RiskLevel = 'Muito Baixo' | 'Baixo' | 'Moderado';

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: CategoryType;
  categoryName: string;
  excerpt: string;
  content: string[];
  readTime: string;
  publishedAt: string;
  image?: string;
  difficulty: DifficultyLevel;
  estimatedIncome: string; // Ex: "5.000 a 25.000 MT/mês"
  startupCost: string; // Ex: "0 MT (Apenas Internet e Celular)"
  riskLevel: RiskLevel;
  requirements: string[];
  payoutMethods: string[]; // Ex: ["M-Pesa", "Conta Bancária", "Wise", "Payoneer"]
  steps?: { title: string; desc: string }[];
  cautions?: string[];
  isFeatured?: boolean;
}

export interface ToolItem {
  id: string;
  name: string;
  category: 'Design' | 'Produtividade' | 'Pagamentos' | 'Trabalho Remoto' | 'E-commerce' | 'Marketing';
  description: string;
  pricing: '100% Gratuito' | 'Plano Grátis Disponível' | 'Pago';
  url: string;
  mobileFriendly: boolean;
  popularInMZ: boolean;
  highlights: string[];
}

export interface OpportunityItem {
  id: string;
  title: string;
  organization: string;
  type: 'Bolsa de Formação' | 'Vaga Remota Internacional' | 'Programa de Aceleração' | 'Plataforma Aberta';
  deadline: string;
  location: string;
  compensation: string;
  url: string;
  verified: boolean;
  description: string;
  requirements: string[];
}
