import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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

const FlowerIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12,2A3,3 0 0,1 15,5V8A3,3 0 0,1 12,11A3,3 0 0,1 9,8V5A3,3 0 0,1 12,2M19,5A3,3 0 0,1 22,8V11A3,3 0 0,1 19,14A3,3 0 0,1 16,11V8A3,3 0 0,1 19,5M5,5A3,3 0 0,1 8,8V11A3,3 0 0,1 5,14A3,3 0 0,1 2,11V8A3,3 0 0,1 5,5M12,12A3,3 0 0,1 15,15V18A3,3 0 0,1 12,21A3,3 0 0,1 9,18V15A3,3 0 0,1 12,12Z"/>
  </svg>
);

interface ProductCardProps {
  title: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor?: string;
  size?: 'default' | 'large';
}

const ProductCard = ({ title, icon, bgColor, textColor = 'text-gray-800', size = 'default' }: ProductCardProps) => {
  const cardSize = size === 'large' ? 'col-span-2 h-32' : 'h-24';
  
  return (
    <Card className={`${bgColor} ${cardSize} border-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer group`}>
      <CardContent className="p-4 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className={`${textColor} text-sm font-medium leading-tight`}>
            {title}
          </div>
          <div className={`${textColor} opacity-60 group-hover:opacity-100 transition-opacity`}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TrinDataLogo = () => (
  <div className="flex items-center gap-3">
    <div className="w-12 h-12 bg-trindata-burgundy rounded-lg flex items-center justify-center">
      <div className="text-white font-bold text-xl transform rotate-12">P</div>
    </div>
    <div>
      <h1 className="text-2xl font-bold text-trindata-burgundy">TRINDATA</h1>
    </div>
  </div>
);

export default function Index() {
  const [selectedPlan] = useState('starter');

  const productCards = [
    // First row
    { title: 'Templates\nGratitude', icon: <LeafIcon className="w-5 h-5" />, bgColor: 'bg-trindata-cream' },
    { title: 'Dashboard', icon: <CircleIcon className="w-5 h-5" />, bgColor: 'bg-trindata-orange text-white', textColor: 'text-white' },
    { title: 'Notion', icon: <CircleIcon className="w-5 h-5" />, bgColor: 'bg-trindata-orange text-white', textColor: 'text-white' },
    
    // Second row
    { title: 'Tutorials', icon: <FlowerIcon className="w-5 h-5" />, bgColor: 'bg-trindata-yellow' },
    { title: 'Plantihan', icon: <LeafIcon className="w-5 h-5" />, bgColor: 'bg-trindata-orange text-white', textColor: 'text-white' },
    { title: 'Controle de\ntarefas', icon: <StarIcon className="w-5 h-5" />, bgColor: 'bg-trindata-yellow' },
    { title: 'Gestão\nfinanceira', icon: <CircleIcon className="w-5 h-5" />, bgColor: 'bg-trindata-purple text-white', textColor: 'text-white' },
  ];

  return (
    <div className="min-h-screen bg-trindata-background-light">
      {/* Header */}
      <header className="p-6">
        <TrinDataLogo />
      </header>

      {/* Main Content */}
      <div className="px-6 pb-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-trindata-burgundy mb-4">
            Transformando dados e rotinas em decisões inteligentes
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Templates e dashboards prontos para estudantes: veja suas finanças e tarefas com clareza e tome decisões com confiança.
          </p>
        </div>

        {/* Product Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {productCards.map((card, index) => (
              <ProductCard
                key={index}
                title={card.title}
                icon={card.icon}
                bgColor={card.bgColor}
                textColor={card.textColor}
              />
            ))}
          </div>

          {/* Large product cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <ProductCard
              title="Controle de tarefas"
              icon={<StarIcon className="w-6 h-6" />}
              bgColor="bg-trindata-yellow"
              size="large"
            />
            <ProductCard
              title="Gestão financeira"
              icon={<CircleIcon className="w-6 h-6" />}
              bgColor="bg-trindata-purple text-white"
              textColor="text-white"
              size="large"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="text-center mb-8">
              <TrinDataLogo />
            </div>

            {/* Product Selection */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-600 mb-4">CHOICE BOARD TITLE</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-trindata-orange text-white border-0 h-24">
                  <CardContent className="p-4 h-full flex items-center justify-center">
                    <span className="text-sm font-medium">Add a Link</span>
                  </CardContent>
                </Card>
                <Card className="bg-trindata-yellow border-0 h-24">
                  <CardContent className="p-4 h-full flex items-center justify-center">
                    <span className="text-sm font-medium">Add a Link</span>
                  </CardContent>
                </Card>
                <Card className="bg-trindata-cream border-0 h-24">
                  <CardContent className="p-4 h-full flex items-center justify-center">
                    <span className="text-sm font-medium">Add a Link</span>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Today's Agenda Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-trindata-burgundy mb-4">Today's Agenda</h3>
                <p className="text-gray-600 mb-6">
                  Organize your day by checking your tasks, appointments and setting reminders for better productivity and organization
                </p>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start text-left">
                    Schedule Meeting
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-left">
                    Activities
                  </Button>
                </div>
              </div>

              <Card className="bg-trindata-orange text-white border-0">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-3">Reminder</h4>
                  <p className="text-sm mb-4 opacity-90">
                    Help the students remember deadlines, test dates, and assignments, reducing stress and improving their organization
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-trindata-burgundy mb-4">
            Pronto para transformar seus dados?
          </h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Comece hoje mesmo com nossos templates e dashboards. Clareza para decidir, economia de tempo, rotina menos estressante.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-trindata-orange hover:bg-trindata-orange-light text-white px-8 py-3">
              Começar Agora
            </Button>
            <Button variant="outline" className="border-trindata-burgundy text-trindata-burgundy px-8 py-3">
              Ver Demos
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
