import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// High-quality vector tablet mockup with charts
const MockTablet = () => (
  <svg viewBox="0 0 360 720" className="w-full max-w-md mx-auto drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="TrinData tablet mockup with charts">
    <defs>
      <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#e9f2fb"/>
        <stop offset="100%" stopColor="#d7e6f6"/>
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.25"/>
      </filter>
    </defs>
    {/* Tablet body */}
    <rect x="10" y="10" rx="28" ry="28" width="340" height="700" fill="#ffffff" filter="url(#shadow)"/>
    {/* Top bar */}
    <rect x="22" y="24" rx="12" width="316" height="44" fill="#f6f7fb"/>
    <circle cx="44" cy="46" r="6" fill="#d2d6e6"/>
    <rect x="58" y="36" rx="8" width="60" height="20" fill="#e9ebf5"/>
    <rect x="290" y="34" rx="8" width="48" height="24" fill="#6C5CE7"/>
    <text x="302" y="50" fontFamily="Inter, system-ui, Arial" fontSize="10" fill="#fff">Sign in</text>

    {/* Screen */}
    <rect x="22" y="80" rx="12" width="316" height="590" fill="url(#screenGrad)"/>

    {/* Title */}
    <text x="180" y="120" textAnchor="middle" fontFamily="Inter, system-ui, Arial" fontWeight="800" fontSize="22" fill="#2d3436">TrindaTa</text>
    <text x="180" y="144" textAnchor="middle" fontFamily="Inter, system-ui, Arial" fontSize="14" fill="#2d3436">
      <tspan fill="#e84393" fontWeight="700">Soluções</tspan> para dados
    </text>
    <text x="180" y="166" textAnchor="middle" fontFamily="Inter, system-ui, Arial" fontSize="10" fill="#657082">To create any grid by scaling and
    </text>
    <text x="180" y="178" textAnchor="middle" fontFamily="Inter, system-ui, Arial" fontSize="10" fill="#657082">resizing</text>

    {/* Grid cards */}
    <rect x="84" y="198" rx="8" width="54" height="48" fill="#e8b23a"/>
    <rect x="146" y="198" rx="8" width="54" height="48" fill="#b9cde4"/>
    <rect x="208" y="198" rx="8" width="54" height="48" fill="#e3542a"/>

    <rect x="84" y="254" rx="8" width="54" height="48" fill="#b38ad6"/>
    <rect x="146" y="254" rx="8" width="54" height="48" fill="#e3542a"/>
    <rect x="208" y="254" rx="8" width="54" height="48" fill="#b9cde4"/>

    {/* Charts area */}
    {/* Bar chart */}
    <g transform="translate(60,330)">
      <rect x="0" y="0" width="240" height="110" rx="12" fill="#ffffff" stroke="#e6ecf4"/>
      <rect x="20" y="70" width="24" height="30" fill="#6C5CE7" rx="4"/>
      <rect x="54" y="50" width="24" height="50" fill="#00B894" rx="4"/>
      <rect x="88" y="30" width="24" height="70" fill="#0984E3" rx="4"/>
      <rect x="122" y="56" width="24" height="44" fill="#FFEAA7" rx="4"/>
      <rect x="156" y="20" width="24" height="80" fill="#E84393" rx="4"/>
      <rect x="190" y="42" width="24" height="58" fill="#F26B38" rx="4"/>
    </g>

    {/* Pie chart */}
    <g transform="translate(60,452)">
      <rect x="0" y="0" width="240" height="110" rx="12" fill="#ffffff" stroke="#e6ecf4"/>
      <circle cx="65" cy="56" r="36" fill="#eaeff6"/>
      <path d="M65,56 L65,20 A36,36 0 0,1 96,47 Z" fill="#6C5CE7"/>
      <path d="M65,56 L96,47 A36,36 0 1,1 35,82 Z" fill="#00B894"/>
      <rect x="130" y="28" width="90" height="12" rx="6" fill="#6C5CE7"/>
      <rect x="130" y="48" width="70" height="12" rx="6" fill="#00B894"/>
      <rect x="130" y="68" width="86" height="12" rx="6" fill="#0984E3"/>
    </g>

    {/* Scroll dot */}
    <circle cx="180" cy="662" r="12" fill="#ffffff" stroke="#e6ecf4"/>
    <path d="M174 660 L180 666 L186 660" stroke="#9aa3b2" strokeWidth="2" fill="none"/>
  </svg>
);

// Icon components for the design
const LeafIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
  </svg>
);

const CircleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/>
  </svg>
);

const ChartIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 3v18h18"/>
    <path d="m19 9-5 5-4-4-3 3"/>
  </svg>
);

const ZapIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
  </svg>
);

const ThumbsUpIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 10v12"/>
    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h3.73a2 2 0 0 1 1.92 2.56z"/>
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

interface ProductCardProps {
  title: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor?: string;
  size?: 'default' | 'large';
  description?: string;
}

const ProductCard = ({ title, icon, bgColor, textColor = 'text-gray-800', size = 'default', description }: ProductCardProps) => {
  const cardSize = size === 'large' ? 'col-span-2 h-40' : 'h-32';
  
  return (
    <Card className={`${bgColor} ${cardSize} border-0 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-105`}>
      <CardContent className="p-6 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className={`${textColor} text-base font-semibold leading-tight`}>
            {title}
          </div>
          <div className={`${textColor} opacity-70 group-hover:opacity-100 transition-opacity`}>
            {icon}
          </div>
        </div>
        {description && (
          <p className={`${textColor} text-sm opacity-80 mt-2`}>
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

const FeatureCard = ({ icon, title, description, bgColor }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
}) => (
  <div className="flex flex-col items-center text-center">
    <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mb-4 shadow-lg`}>
      <div className="text-trindata-cream-light">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-trindata-burgundy mb-3">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
    <Button variant="outline" className="border-trindata-purple text-trindata-purple hover:bg-trindata-purple hover:text-white transition-colors">
      Saiba mais
    </Button>
  </div>
);

const TrinDataLogo = () => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 bg-trindata-burgundy rounded-lg flex items-center justify-center">
      <div className="text-white font-bold text-lg transform rotate-12">P</div>
    </div>
    <div>
      <h1 className="text-xl font-bold text-trindata-burgundy">TRINDATA</h1>
    </div>
  </div>
);

export default function Index() {
  const [activePlan, setActivePlan] = useState('pro');

  const productShowcase = [
    { 
      title: 'Dashboard Financeiro', 
      icon: <ChartIcon className="w-6 h-6" />, 
      bgColor: 'bg-trindata-orange text-white', 
      textColor: 'text-white',
      description: 'Visualize suas finanças de forma clara'
    },
    { 
      title: 'Templates Notion', 
      icon: <LeafIcon className="w-6 h-6" />, 
      bgColor: 'bg-trindata-cream',
      description: 'Modelos prontos para organização'
    },
    { 
      title: 'Planejamento', 
      icon: <StarIcon className="w-6 h-6" />, 
      bgColor: 'bg-trindata-yellow',
      description: 'Organize suas tarefas e metas'
    },
    { 
      title: 'Power BI', 
      icon: <ZapIcon className="w-6 h-6" />, 
      bgColor: 'bg-trindata-purple text-white', 
      textColor: 'text-white',
      description: 'Dashboards profissionais'
    },
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 'Grátis',
      period: '',
      description: 'Para estudantes iniciantes',
      features: [
        'Templates básicos',
        'Dashboard simples',
        'Suporte por email',
        'Tutoriais básicos'
      ],
      buttonText: 'Começar grátis',
      popular: false
    },
    {
      name: 'Pro',
      price: 'R$ 29',
      period: '/mês',
      description: 'Para estudantes avançados',
      features: [
        'Todos os templates',
        'Dashboards avançados',
        'Suporte prioritário',
        'Personalizações',
        'Exportação ilimitada'
      ],
      buttonText: 'Assinar Pro',
      popular: true
    },
    {
      name: 'Premium',
      price: 'R$ 49',
      period: '/mês',
      description: 'Para grupos e equipes',
      features: [
        'Tudo do Pro',
        'Templates exclusivos',
        'Consultoria 1:1',
        'Criação personalizada',
        'Acesso antecipado'
      ],
      buttonText: 'Assinar Premium',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-trindata-blue-light">
      {/* Modern Navigation Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <TrinDataLogo />
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#como-funciona" className="text-gray-600 hover:text-trindata-burgundy transition-colors">Como funciona</a>
            <a href="#produtos" className="text-gray-600 hover:text-trindata-burgundy transition-colors">Produtos</a>
            <a href="#precos" className="text-gray-600 hover:text-trindata-burgundy transition-colors">Preços</a>
            <a href="#contato" className="text-gray-600 hover:text-trindata-burgundy transition-colors">Contato</a>
          </nav>
          <Button className="bg-trindata-purple hover:bg-trindata-purple-light text-white">
            Começar
          </Button>
        </div>
      </header>

      {/* Promo Header Section (as requested) */}
      <section className="bg-trindata-ochre py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-wide drop-shadow-sm flex-1">
            TRINDATA
          </h2>
          <div className="flex-1 w-full md:w-auto">
            <MockTablet />
          </div>
        </div>
      </section>

      {/* Modern Hero Section */}
      <section className="relative bg-gradient-to-br from-trindata-blue-light to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-trindata-burgundy mb-6">
              Combine <span className="text-trindata-orange">dados</span> inteligentes
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
              Para representar seus objetivos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Use grades mistas com imagens, substitua por suas próprias fotos e descrições. 
              Templates e dashboards prontos para estudantes.
            </p>
            <Button className="bg-trindata-orange hover:bg-trindata-orange-light text-white text-lg px-8 py-4 rounded-xl">
              Conhecer produtos
            </Button>
          </div>

          {/* Product Showcase Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" id="produtos">
            {productShowcase.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                icon={product.icon}
                bgColor={product.bgColor}
                textColor={product.textColor}
                description={product.description}
              />
            ))}
          </div>

          {/* Large Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProductCard
              title="Controle financeiro completo"
              icon={<ChartIcon className="w-8 h-8" />}
              bgColor="bg-trindata-yellow"
              size="large"
              description="Dashboards que ajudam estudantes a entender e controlar suas finanças pessoais"
            />
            <ProductCard
              title="Gestão de rotina acadêmica"
              icon={<StarIcon className="w-8 h-8" />}
              bgColor="bg-trindata-purple text-white"
              textColor="text-white"
              size="large"
              description="Organize estudos, prazos e atividades com clareza e eficiência"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white" id="como-funciona">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-trindata-burgundy mb-4">
              Criando soluções desde 2024 🚀✨
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Somos as primeiras soluções de kit de design multipropósito para estudantes. 
              Ajudamos você a conectar seus layouts, templates e desenvolvedores para capacitar todos os envolvidos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <FeatureCard
              icon={<PhoneIcon className="w-8 h-8" />}
              title="Suporte"
              description="Oferecendo suporte mais rápido e personalizado com telas compartilhadas e sistemas de design inteligentes"
              bgColor="bg-trindata-blue"
            />
            <FeatureCard
              icon={<ChartIcon className="w-8 h-8" />}
              title="Crescimento acadêmico"
              description="Identificamos estudantes qualificados com chat ao vivo fácil de usar e Bot de IA educacional"
              bgColor="bg-trindata-purple"
            />
            <FeatureCard
              icon={<ZapIcon className="w-8 h-8" />}
              title="Baseado em componentes"
              description="Oferecendo suporte mais rápido e personalizado com telas compartilhadas e sistemas de design inteligentes"
              bgColor="bg-trindata-yellow"
            />
            <FeatureCard
              icon={<ThumbsUpIcon className="w-8 h-8" />}
              title="Fácil personalização"
              description="Você pode alternar qualquer ícone dentro das Instâncias e personalizar o traço para mais ousado ou mais claro"
              bgColor="bg-trindata-cream"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-trindata-blue-light" id="precos">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-trindata-burgundy mb-4">
              Preços acessíveis
            </h2>
            <p className="text-gray-600 mb-8">
              Escolha <span className="text-trindata-purple font-semibold">mensal</span> • anual
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-trindata-purple shadow-xl scale-105' : ''} hover:shadow-lg transition-all duration-300`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-trindata-purple text-white">
                    MAIS POPULAR
                  </Badge>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                      {plan.description}
                    </h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-trindata-burgundy">{plan.price}</span>
                      <span className="text-gray-500">{plan.period}</span>
                    </div>
                    <h4 className="text-xl font-semibold text-trindata-burgundy">{plan.name}</h4>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <svg className="w-4 h-4 text-trindata-orange mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${plan.popular 
                      ? 'bg-trindata-purple hover:bg-trindata-purple-light text-white' 
                      : 'bg-trindata-cream hover:bg-trindata-cream-light text-trindata-burgundy border border-trindata-burgundy'
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contato">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                SIGA-NOS
              </p>
              <div className="flex space-x-4 mb-12">
                <div className="w-10 h-10 bg-trindata-cream rounded-full flex items-center justify-center">
                  <span className="text-trindata-purple text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-trindata-cream rounded-full flex items-center justify-center">
                  <span className="text-trindata-purple text-sm">in</span>
                </div>
                <div className="w-10 h-10 bg-trindata-cream rounded-full flex items-center justify-center">
                  <span className="text-trindata-purple text-sm">@</span>
                </div>
                <div className="w-10 h-10 bg-trindata-cream rounded-full flex items-center justify-center">
                  <span className="text-trindata-purple text-sm">tw</span>
                </div>
              </div>

              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                INFORMAÇÕES
              </p>
              <div className="space-y-3 text-sm text-gray-600">
                <a href="#" className="block hover:text-trindata-burgundy transition-colors">Sobre a TrinData</a>
                <a href="#" className="block hover:text-trindata-burgundy transition-colors">Entre em contato</a>
                <a href="#" className="block hover:text-trindata-burgundy transition-colors">Coisas que gostamos</a>
                <a href="#" className="block hover:text-trindata-burgundy transition-colors">Política de privacidade</a>
                <a href="#" className="block hover:text-trindata-burgundy transition-colors">Termos de serviço</a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                ENTRE EM CONTATO
              </p>
              <h3 className="text-3xl font-bold text-trindata-purple mb-8">
                contato@trindata.com
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-trindata-purple"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="E-mail"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-trindata-purple"
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    placeholder="Deixe sua mensagem"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 border-2 border-trindata-purple rounded-lg focus:outline-none focus:ring-2 focus:ring-trindata-purple text-trindata-purple font-medium"
                  />
                </div>
                <Button className="bg-trindata-purple hover:bg-trindata-purple-light text-white px-8 py-3 text-lg">
                  ENVIAR
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Wave */}
      <div className="relative">
        <svg className="w-full h-24" viewBox="0 0 1440 104" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-0.333822 104L-0.583526 19.1366C-0.583526 19.1366 102.172 51.726 220.913 19.2075C339.654 -13.311 399.901 4.67057 565.331 61.0554C730.762 117.44 808.875 9.45977 1046 52.0384C1283.12 94.6171 1251.81 -44.9066 1439.77 19.611C1439.81 97.8883 1440.01 485.507 1440.04 104C1295.17 104 -0.333822 104 -0.333822 104Z" fill="hsl(var(--trindata-yellow-light))"/>
        </svg>
      </div>
    </div>
  );
}
