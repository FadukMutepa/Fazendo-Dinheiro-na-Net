import { Article, ToolItem, OpportunityItem } from '../types';

export const ARTICLES_DATA: Article[] = [
  {
    id: 'art-1',
    slug: '7-formas-de-ganhar-renda-extra-pela-internet',
    title: '7 formas reais de ganhar renda extra pela internet em Moçambique',
    category: 'renda-extra',
    categoryName: 'Renda Extra',
    excerpt: 'Descubra alternativas práticas e legítimas para gerar rendimentos adicionais sem cair em promessas milagrosas.',
    readTime: '6 min de leitura',
    publishedAt: 'Outubro de 2026',
    image: '/src/assets/images/hero_digital_work_1791024223779.jpg',
    difficulty: 'Iniciante',
    estimatedIncome: '3.000 a 20.000 MT/mês',
    startupCost: '0 MT (apenas dados móveis e tempo)',
    riskLevel: 'Muito Baixo',
    isFeatured: true,
    requirements: [
      'Celular (smartphone) ou computador simples',
      'Conexão com internet (pacotes diários ou semanais)',
      'Conta M-Pesa, e-Mola ou conta bancária local',
      'Disponibilidade de 1 a 3 horas por dia'
    ],
    payoutMethods: ['M-Pesa', 'e-Mola', 'Transferência Bancária (BIM, BCI, Standard Bank)'],
    content: [
      'Ganhar dinheiro na internet não é mágica e não acontece de um dia para a noite. Em Moçambique e no espaço lusófono, milhares de jovens já utilizam a internet para complementar a renda familiar oferecendo serviços reais a pessoas e pequenas empresas.',
      'Aqui reunimos 7 caminhos comprovados que funcionam hoje, com custos de entrada quase nulos e pagamentos facilitados por carteiras móveis ou bancos locais.',
      '1. Gestão básica de redes sociais para pequenos comércios do bairro (restaurantes, salões, lojas de roupa). Criar artes simples no Canva e responder clientes no WhatsApp.',
      '2. Transcrição de áudio e digitação de relatórios acadêmicos ou corporativos para estudantes e consultores.',
      '3. Venda de produtos sob encomenda através de grupos no WhatsApp e páginas no Facebook/Instagram (sem necessidade de estoque físico inicial).',
      '4. Explicações e aulas particulares online (matemática, português, inglês, informática básica).',
      '5. Microtarefas e testes de usabilidade de aplicativos em plataformas internacionais como Remotasks e Clickworker.',
      '6. Criação e formatação de currículos profissionais (CVs) e cartas de apresentação otimizadas para candidatos a empregos.',
      '7. Afiliados de produtos e serviços locais: ganhar comissões conectando compradores a fornecedores de confiança.'
    ],
    steps: [
      {
        title: 'Passo 1: Identifique a habilidade que você já possui',
        desc: 'Não tente fazer tudo ao mesmo tempo. Se você sabe escrever bem, comece com revisão ou redação. Se domina o celular, comece com gestão de WhatsApp para negócios.'
      },
      {
        title: 'Passo 2: Defina seu método de cobrança',
        desc: 'Para clientes em Moçambique, ofereça M-Pesa e e-Mola sem complicação. Para clientes estrangeiros, crie conta na Payoneer ou carteira compatível.'
      },
      {
        title: 'Passo 3: Comece oferecendo para conhecidos',
        desc: 'Seu primeiro cliente pode ser o comércio do seu bairro ou um colega de faculdade. Faça um bom trabalho inicial para colher depoimentos.'
      }
    ],
    cautions: [
      'Nunca pague dinheiro para "ativar vagas" ou "liberar comissões". Se pedirem pagamento prévio, é golpe.',
      'Desconfie de promessas de retornos diários fixos (como 20% ao dia em supostas plataformas de investimento).',
      'Controle seus gastos com pacotes de dados de internet móvel para não consumir seu lucro antes de faturar.'
    ]
  },
  {
    id: 'art-2',
    slug: 'como-comecar-a-trabalhar-como-freelancer',
    title: 'Como começar a trabalhar como freelancer do zero',
    category: 'trabalho-online',
    categoryName: 'Trabalho Online',
    excerpt: 'Guia definitivo para criar seu portfólio, cadastrar-se em plataformas e conquistar seus primeiros clientes internacionais e locais.',
    readTime: '8 min de leitura',
    publishedAt: 'Setembro de 2026',
    image: '/src/assets/images/freelance_services_1791024236314.jpg',
    difficulty: 'Iniciante',
    estimatedIncome: '8.000 a 45.000 MT/mês',
    startupCost: '0 MT inicial',
    riskLevel: 'Baixo',
    isFeatured: true,
    requirements: [
      'Computador ou smartphone com teclado para produção de conteúdo',
      'Habilidade específica (Design, Redação, Tradução, Programação, Edição)',
      'Documento de identidade válido (BI ou Passaporte para verificação)',
      'E-mail profissional e paciência nas primeiras semanas'
    ],
    payoutMethods: ['Payoneer', 'Wise', 'Conta Bancária Internacional', 'M-Pesa via parceiros'],
    content: [
      'O freelancing é uma das formas mais seguras e meritocráticas de gerar rendimento através da internet. Como freelancer, você presta serviços sob demanda para clientes do mundo todo, recebendo por projeto ou por hora trabalhada.',
      'Plataformas como Upwork, Fiverr e Workana aceitam profissionais residentes em Moçambique e em toda a África. O segredo para começar sem experiência prévia é focar em nichos específicos e ter um portfólio mesmo que simulado.',
      'A grande vantagem é a possibilidade de faturar em moedas fortes como Dólares (USD) ou Euros (EUR), o que amplia muito o poder de compra quando convertido para Meticais (MZN).'
    ],
    steps: [
      {
        title: '1. Crie 3 peças de exemplo para seu portfólio',
        desc: 'Não espere um cliente pagar para você criar algo. Se você é designer, recrie a identidade visual de uma marca moçambicana fictícia. Guarde tudo em uma pasta pública do Google Drive ou no Behance.'
      },
      {
        title: '2. Complete 100% do seu perfil no Upwork ou Workana',
        desc: 'Use uma foto profissional, clara e com fundo neutro. Escreva uma descrição direta focando nos problemas que você resolve para o cliente, não apenas nas suas qualidades pessoais.'
      },
      {
        title: '3. Envie propostas personalizadas (não use copia e cola)',
        desc: 'Leia a descrição do projeto com atenção. Mencione o nome do cliente se disponível e ofereça uma solução ou dica rápida já no primeiro parágrafo da proposta.'
      }
    ],
    cautions: [
      'Nunca aceite pagamentos fora da plataforma nas primeiras negociações, pois você perde a garantia contra calotes.',
      'Mantenha uma reserva financeira para lidar com meses de menor volume de projetos.'
    ]
  },
  {
    id: 'art-3',
    slug: 'ferramentas-gratuitas-para-trabalhar-online',
    title: 'Ferramentas 100% gratuitas para quem trabalha online',
    category: 'ferramentas',
    categoryName: 'Ferramentas',
    excerpt: 'Economize dinheiro usando aplicativos profissionais sem pagar nada por assinaturas caras.',
    readTime: '5 min de leitura',
    publishedAt: 'Outubro de 2026',
    image: '/src/assets/images/ecommerce_digital_1791024246705.jpg',
    difficulty: 'Iniciante',
    estimatedIncome: 'Economia direta em custos operacionais',
    startupCost: '0 MT',
    riskLevel: 'Muito Baixo',
    isFeatured: true,
    requirements: [
      'Aparelho Android/iOS ou Navegador web',
      'Conta Google gratuita'
    ],
    payoutMethods: ['N/A - Ferramentas de apoio'],
    content: [
      'Você não precisa gastar rios de dinheiro em softwares caros para começar a trabalhar online com padrão profissional.',
      'Existem alternativas de altíssimo nível totalmente gratuitas que rodam direto no navegador e consomem pouca memória e poucos megabytes de internet.',
      'Nesta seleção, destacamos as melhores ferramentas testadas e aprovadas para o cotidiano de quem atua em Moçambique.'
    ],
    steps: [
      {
        title: 'Canva (Design e Redes Sociais)',
        desc: 'Criação de posts, panfletos, logomarcas simples e apresentações profissionais sem precisar de computador potente.'
      },
      {
        title: 'Google Docs e Sheets (Escritório na Nuvem)',
        desc: 'Substituto perfeito e gratuito para o pacote Office. Salva tudo automaticamente e funciona pelo celular.'
      },
      {
        title: 'CapCut ou DaVinci Resolve (Edição de Vídeo)',
        desc: 'CapCut no celular permite legendar e cortar vídeos para TikTok e Reels com qualidade profissional sem marcas d’água abusivas.'
      },
      {
        title: 'Notion e Trello (Organização e Tarefas)',
        desc: 'Gerencie prazos de entrega e projetos com clientes sem esquecer nenhum compromisso.'
      }
    ],
    cautions: [
      'Cuidado ao baixar aplicativos modificados (APKs piratas); eles colocam suas senhas bancárias em risco. Use sempre as lojas oficiais (Google Play e App Store).'
    ]
  },
  {
    id: 'art-4',
    slug: 'como-criar-um-negocio-digital-comecando-do-zero',
    title: 'Como criar um negócio digital começando do zero',
    category: 'negocios-digitais',
    categoryName: 'Negócios Digitais',
    excerpt: 'Passo a passo realista para validar uma ideia, atrair clientes no WhatsApp e construir uma renda sólida.',
    readTime: '7 min de leitura',
    publishedAt: 'Setembro de 2026',
    difficulty: 'Intermediário',
    estimatedIncome: '10.000 a 70.000+ MT/mês',
    startupCost: '500 a 2.000 MT (divulgação e embalagem inicial)',
    riskLevel: 'Moderado',
    isFeatured: true,
    requirements: [
      'WhatsApp Business instalado no smartphone',
      'Página no Instagram ou Facebook com fotos claras',
      'Capacidade de atendimento rápido aos clientes',
      'Controle rigoroso de entradas e saídas de caixa'
    ],
    payoutMethods: ['M-Pesa', 'e-Mola', 'POS Móvel', 'Transferência IZI/BIM'],
    content: [
      'Empreender no ambiente digital em Moçambique tem um potencial gigantesco devido ao crescimento constante do acesso aos smartphones e aos pagamentos móveis.',
      'O grande erro da maioria dos iniciantes é alugar espaço físico ou comprar estoques gigantescos antes mesmo de comprovar se as pessoas realmente querem comprar o produto.',
      'O modelo mais seguro é o de "validação prévia": criar a oferta, testar o interesse do público e encomendar conforme a demanda confirmada.'
    ],
    steps: [
      {
        title: '1. Encontre um problema real não resolvido',
        desc: 'Pode ser a dificuldade das pessoas em encontrar roupas com tamanhos específicos na sua cidade, calçados de qualidade, cosméticos importados ou serviços de entrega rápida.'
      },
      {
        title: '2. Monte seu catálogo no WhatsApp Business',
        desc: 'Adicione fotos de alta qualidade, descrições claras com tamanhos/medidas e preços visíveis. Clientes desistem de comprar quando precisam perguntar "preço no inbox".'
      },
      {
        title: '3. Parcerias com motoboys ou serviços de entrega confiáveis',
        desc: 'A entrega é o ponto crítico do comércio eletrônico em Moçambique. Combine valores fixos com entregadores de confiança para garantir rapidez.'
      }
    ],
    cautions: [
      'Nunca misture o dinheiro do negócio com seus gastos pessoais.',
      'Não faça compras grandes de fornecedores desconhecidos sem verificar recomendações físicas de outros clientes.'
    ]
  },
  {
    id: 'art-5',
    slug: 'como-vender-servicos-pela-internet',
    title: 'Como vender serviços pela internet e fechar clientes fiéis',
    category: 'dicas',
    categoryName: 'Dicas',
    excerpt: 'Estratégias para se posicionar, negociar valores justos e receber pagamentos pontuais sem dores de cabeça.',
    readTime: '5 min de leitura',
    publishedAt: 'Agosto de 2026',
    difficulty: 'Iniciante',
    estimatedIncome: 'Varia conforme o tipo de serviço (5.000 a 30.000 MT/cliente)',
    startupCost: '0 MT',
    riskLevel: 'Baixo',
    requirements: [
      'Perfil bem estruturado no LinkedIn ou Instagram',
      'Modelo de proposta simples em PDF ou mensagem estruturada',
      'Comunicação clara e pontualidade'
    ],
    payoutMethods: ['M-Pesa', 'e-Mola', 'Transferência Bancária'],
    content: [
      'Vender serviços (como consultoria, manutenção de sites, redação, design ou contabilidade básica) é o modelo com maior margem de lucro porque seu custo principal é o seu tempo e conhecimento.',
      'Para vender pela internet, você não precisa ser um influenciador com milhões de seguidores. Basta falar com as 20 pessoas certas que já precisam do seu serviço hoje.'
    ],
    steps: [
      {
        title: 'Prospecção ativa direcionada',
        desc: 'Pesquise 10 empresas na sua região que possuem redes sociais abandonadas ou sites desatualizados. Entre em contato educadamente mostrando como você pode ajudá-las a faturar mais.'
      },
      {
        title: 'Apresente uma proposta irresistível de baixo risco',
        desc: 'Ofereça um primeiro projeto menor (ex: 3 posts de teste ou 1 relatório) com valor de entrada para demonstrar sua seriedade e qualidade.'
      },
      {
        title: 'Peça 50% de adiantamento sempre',
        desc: 'Nunca inicie a execução de um trabalho sem um sinal prévio de pelo menos 30% a 50% do valor acordado. Isso afasta clientes oportunistas.'
      }
    ],
    cautions: [
      'Sempre formalize o acordo por mensagem escrita (WhatsApp ou e-mail) com os prazos e escopo bem descritos para evitar discussões posteriores.'
    ]
  },
  {
    id: 'art-6',
    slug: 'erros-que-iniciantes-devem-evitar-ao-tentar-ganhar-dinheiro-online',
    title: 'Erros que iniciantes devem evitar ao tentar ganhar dinheiro online',
    category: 'guias',
    categoryName: 'Guias',
    excerpt: 'Aprenda a reconhecer esquemas fraudulentos, falsos gurus e armadilhas que fazem você perder tempo e dinheiro.',
    readTime: '6 min de leitura',
    publishedAt: 'Agosto de 2026',
    difficulty: 'Iniciante',
    estimatedIncome: 'Proteção contra prejuízos financeiros',
    startupCost: '0 MT',
    riskLevel: 'Muito Baixo',
    isFeatured: true,
    requirements: [
      'Atenção aos sinais de alerta',
      'Mentalidade realista e paciência'
    ],
    payoutMethods: ['N/A - Guia de proteção'],
    content: [
      'Infelizmente, a busca legítima por renda extra atrai golpistas que se aproveitam da necessidade das pessoas. Em Moçambique e em vários países africanos, esquemas de pirâmide mascarados de "plataformas de tarefas" ou "investimentos com robôs" causam prejuízos frequentes.',
      'A regra de ouro da internet: se parece bom demais para ser verdade, é golpe. Dinheiro legítimo é sempre a troca de valor real (tempo, habilidade ou produto) por compensação monetária.'
    ],
    steps: [
      {
        title: 'Erro 1: Pagar taxa para ter direito a trabalhar',
        desc: 'Empresas sérias contratam você e pagam você. Nenhuma empresa legítima cobra taxa de inscrição de 500 MT ou 2.000 MT para liberar tarefas.'
      },
      {
        title: 'Erro 2: Acreditar em rendimentos garantidos de 10% a 30% ao dia',
        desc: 'Nem os maiores bancos do mundo conseguem esses lucros. Essas plataformas usam o dinheiro dos novos membros para pagar os antigos até fecharem repentinamente.'
      },
      {
        title: 'Erro 3: Não ter foco e pular de galho em galho a cada semana',
        desc: 'Aprender uma habilidade leva de 3 a 6 semanas de prática constante. Quem muda de ideia a cada 3 dias nunca colhe resultados sólidos.'
      }
    ],
    cautions: [
      'Antes de se cadastrar em qualquer site novo, faça uma busca rápida no Google por "[Nome do Site] é confiável" ou consulte comunidades de freelancers.'
    ]
  },
  {
    id: 'art-7',
    slug: 'como-receber-pagamentos-internacionais-em-mocambique',
    title: 'Como receber pagamentos internacionais em Moçambique',
    category: 'guias',
    categoryName: 'Guias',
    excerpt: 'Tudo sobre Payoneer, Wise, cartões virtuais e como transferir seus dólares de freelancers diretamente para sua conta bancária ou M-Pesa.',
    readTime: '7 min de leitura',
    publishedAt: 'Outubro de 2026',
    difficulty: 'Intermediário',
    estimatedIncome: 'Economize taxas de câmbio abusivas',
    startupCost: '0 MT (taxas cobradas apenas sobre as transferências)',
    riskLevel: 'Baixo',
    requirements: [
      'Documento de Identidade (BI ou Passaporte válido)',
      'Comprovativo de morada ou extrato bancário local',
      'Conta bancária com código IBAN/SWIFT em Moçambique'
    ],
    payoutMethods: ['Payoneer', 'Wise', 'Transferência SWIFT direta', 'Cartão Pré-pago'],
    content: [
      'Uma das principais dúvidas de quem deseja trabalhar para clientes do exterior em Moçambique é: "Como o dinheiro chega na minha mão?".',
      'Enquanto o PayPal possui limitações para saques diretos para bancos em certos países africanos, a Payoneer é atualmente a melhor alternativa oficial compatível com Upwork, Fiverr e clientes privados.',
      'Com a Payoneer, você recebe uma conta bancária virtual americana (USD) e europeia (EUR), podendo transferir os fundos diretamente para sua conta bancária em Meticais nos bancos moçambicanos (Millennium BIM, BCI, Standard Bank, Moza, etc.).'
    ],
    steps: [
      {
        title: '1. Abra sua conta gratuita na Payoneer',
        desc: 'Cadastre-se com seu nome oficial exatamente como consta no seu BI. Complete a verificação com foto do documento.'
      },
      {
        title: '2. Conecte sua conta local moçambicana',
        desc: 'Adicione os dados do seu banco com o código SWIFT e o seu número de conta. O banco fará a conversão automática de USD para MZN na cotação oficial.'
      },
      {
        title: '3. Vincule a Payoneer ao Upwork ou Fiverr',
        desc: 'Nas configurações de faturamento ("Get Paid") da plataforma, selecione Payoneer como método preferencial de pagamento.'
      }
    ],
    cautions: [
      'Fique atento às taxas mínimas de saque (geralmente compensa acumular a partir de $50 ou $100 USD antes de transferir).'
    ]
  }
];

export const TOOLS_DATA: ToolItem[] = [
  {
    id: 'tool-1',
    name: 'Canva',
    category: 'Design',
    description: 'Crie artes para redes sociais, cartões de visita, currículos e propostas comerciais mesmo sem saber desenhar.',
    pricing: 'Plano Grátis Disponível',
    url: 'https://canva.com',
    mobileFriendly: true,
    popularInMZ: true,
    highlights: ['Modelos prontos', 'Funciona no celular', 'Exporta em PDF e PNG']
  },
  {
    id: 'tool-2',
    name: 'WhatsApp Business',
    category: 'E-commerce',
    description: 'Catálogo de produtos, respostas automáticas e organização de clientes com etiquetas para fechar vendas.',
    pricing: '100% Gratuito',
    url: 'https://whatsapp.com/business',
    mobileFriendly: true,
    popularInMZ: true,
    highlights: ['Catálogo com preços', 'Mensagens de ausência', 'Muito popular em Moçambique']
  },
  {
    id: 'tool-3',
    name: 'Upwork',
    category: 'Trabalho Remoto',
    description: 'A maior plataforma do mundo para freelancers em redação, tradução, suporte ao cliente, programação e design.',
    pricing: 'Plano Grátis Disponível',
    url: 'https://upwork.com',
    mobileFriendly: true,
    popularInMZ: true,
    highlights: ['Pagamentos em Dólares', 'Garantia contra calotes', 'Milhares de vagas diárias']
  },
  {
    id: 'tool-4',
    name: 'Payoneer',
    category: 'Pagamentos',
    description: 'Conta internacional para receber pagamentos de empresas do exterior e transferir para bancos de Moçambique.',
    pricing: 'Plano Grátis Disponível',
    url: 'https://payoneer.com',
    mobileFriendly: true,
    popularInMZ: true,
    highlights: ['Compatível com Upwork', 'Saque para bancos locais', 'Suporte a USD e EUR']
  },
  {
    id: 'tool-5',
    name: 'CapCut',
    category: 'Marketing',
    description: 'Editor de vídeo leve para celular, ideal para criar vídeos comerciais para TikTok, Instagram Reels e YouTube.',
    pricing: 'Plano Grátis Disponível',
    url: 'https://capcut.com',
    mobileFriendly: true,
    popularInMZ: true,
    highlights: ['Legendas automáticas', 'Transições modernas', 'Sem marca d’água abusiva']
  },
  {
    id: 'tool-6',
    name: 'Google Workspace (Docs / Sheets)',
    category: 'Produtividade',
    description: 'Crie relatórios, contratos e planilhas de controle financeiro sem precisar pagar pelo pacote Office.',
    pricing: '100% Gratuito',
    url: 'https://docs.google.com',
    mobileFriendly: true,
    popularInMZ: true,
    highlights: ['Salva na nuvem', 'Funciona offline', 'Compartilhamento em tempo real']
  },
  {
    id: 'tool-7',
    name: 'Workana',
    category: 'Trabalho Remoto',
    description: 'Plataforma de freelancing em língua portuguesa e espanhola, excelente para quem não domina o inglês.',
    pricing: 'Plano Grátis Disponível',
    url: 'https://workana.com',
    mobileFriendly: true,
    popularInMZ: true,
    highlights: ['100% em Português', 'Projetos de clientes lusófonos', 'Intermediação segura']
  },
  {
    id: 'tool-8',
    name: 'Notion',
    category: 'Produtividade',
    description: 'Caderno digital completo para organizar seus estudos, finanças do negócio e tarefas com clientes.',
    pricing: 'Plano Grátis Disponível',
    url: 'https://notion.so',
    mobileFriendly: true,
    popularInMZ: false,
    highlights: ['Super versátil', 'Sincronização entre dispositivos', 'Modelos gratuitos']
  }
];

export const OPPORTUNITIES_DATA: OpportunityItem[] = [
  {
    id: 'opp-1',
    title: 'Google Career Certificates – Bolsas de Formação Digital',
    organization: 'Google & Coursera',
    type: 'Bolsa de Formação',
    deadline: 'Inscrições Contínuas',
    location: '100% Online (África / Global)',
    compensation: 'Certificação profissional reconhecida globalmente',
    url: 'https://grow.google/certificates',
    verified: true,
    description: 'Cursos práticos com bolsas integrais disponíveis via auxílio financeiro do Coursera em Análise de Dados, Gestão de Projetos, Suporte de TI e Design de UX.',
    requirements: ['Conhecimento básico de inglês ou espanhol', 'Computador ou celular com internet', 'Dedicação de 5h a 10h semanais']
  },
  {
    id: 'opp-2',
    title: 'ALX Africa – Programas de Capacitação em Tecnologia e Liderança',
    organization: 'ALX & Mastercard Foundation',
    type: 'Programa de Aceleração',
    deadline: 'Turmas trimestrais',
    location: 'Online e Hubs em África',
    compensation: 'Acesso a rede de empregabilidade e estágio remoto',
    url: 'https://alxafrica.com',
    verified: true,
    description: 'Capacitação intensiva de classe mundial em Engenharia de Software, Cloud Computing e Assistência Virtual com foco em jovens africanos.',
    requirements: ['Idade entre 18 e 35 anos', 'Disponibilidade de tempo', 'Computador com acesso à internet']
  },
  {
    id: 'opp-3',
    title: 'Vagas de Assistente Virtual & Suporte ao Cliente em Português',
    organization: 'Remote & WeWorkRemotely',
    type: 'Vaga Remota Internacional',
    deadline: 'Vagas abertas semanalmente',
    location: 'Trabalho Remoto em Casa',
    compensation: '500 a 1.200 USD/mês (~32.000 a 76.000 MT)',
    url: 'https://weworkremotely.com',
    verified: true,
    description: 'Empresas internacionais que atendem clientes no Brasil e em Portugal buscam profissionais fluentes em português para atendimento via chat e e-mail.',
    requirements: ['Excelente escrita em português', 'Computador com boa velocidade de digitação', 'Conexão estável']
  },
  {
    id: 'opp-4',
    title: 'Auxílio Financeiro Integral do Coursera para Cursos Profissionais',
    organization: 'Coursera Financial Aid',
    type: 'Bolsa de Formação',
    deadline: 'Aberto o ano todo',
    location: 'Online',
    compensation: 'Isenção de 100% da taxa de certificados oficiais',
    url: 'https://coursera.org',
    verified: true,
    description: 'O Coursera oferece isenção de pagamento para estudantes de países em desenvolvimento que preencham a solicitação de ajuda financeira com honestidade.',
    requirements: ['Preenchimento de formulário justificando a necessidade', 'Compromisso de concluir o curso']
  }
];
