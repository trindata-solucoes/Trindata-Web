import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TrinDataLogo = () => (
  <div className="flex items-center gap-3">
    <img
      src="https://cdn.builder.io/api/v1/image/assets%2F6f3d7143f55e40d1a198b877b696dd3b%2Fb66cee802beb48f29a64a356687f9bd4?format=webp&width=200"
      alt="TRINDATA logo"
      className="h-8 w-auto md:h-10 select-none"
      loading="eager"
      decoding="async"
    />
    <h1 className="text-xl font-bold text-trindata-burgundy">TRINDATA</h1>
  </div>
);

const SummaryCard = ({
  label,
  value,
  delta,
  color,
}: {
  label: string;
  value: string;
  delta?: string;
  color: string;
}) => (
  <Card className="border-0 shadow-md">
    <CardHeader className="pb-2">
      <CardTitle className="text-sm font-medium text-gray-500">
        {label}
      </CardTitle>
    </CardHeader>
    <CardContent className="pt-0">
      <div className="flex items-end justify-between">
        <div className="text-3xl font-bold text-trindata-burgundy">{value}</div>
        {delta && (
          <span
            className={`text-xs font-semibold px-2 py-1 rounded-full ${color}`}
          >
            {delta}
          </span>
        )}
      </div>
    </CardContent>
  </Card>
);

const BarChart = ({ data }: { data: { label: string; value: number }[] }) => {
  const max = Math.max(...data.map((d) => d.value), 1);
  return (
    <div className="w-full overflow-hidden">
      <div className="grid grid-cols-12 gap-3 h-48 items-end">
        {data.map((d, i) => {
          const height = Math.round((d.value / max) * 100);
          return (
            <div key={i} className="flex flex-col items-center gap-2">
              <div
                className="w-full rounded-md bg-gradient-to-t from-trindata-purple to-trindata-purple-light"
                style={{ height: `${height}%` }}
              />
              <div className="text-[10px] text-gray-500">{d.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const transactions = [
  {
    id: 1,
    date: "05/10",
    desc: "Salário",
    category: "Renda",
    amount: 4200,
    type: "in",
  },
  {
    id: 2,
    date: "07/10",
    desc: "Aluguel",
    category: "Moradia",
    amount: -1500,
    type: "out",
  },
  {
    id: 3,
    date: "09/10",
    desc: "Mercado",
    category: "Alimentação",
    amount: -520,
    type: "out",
  },
  {
    id: 4,
    date: "11/10",
    desc: "Transporte App",
    category: "Transporte",
    amount: -86,
    type: "out",
  },
  {
    id: 5,
    date: "12/10",
    desc: "Freelance",
    category: "Renda",
    amount: 800,
    type: "in",
  },
];

export default function Projetos() {
  const monthly = [
    { label: "Jan", value: 1200 },
    { label: "Fev", value: 980 },
    { label: "Mar", value: 1450 },
    { label: "Abr", value: 800 },
    { label: "Mai", value: 1320 },
    { label: "Jun", value: 1680 },
    { label: "Jul", value: 940 },
    { label: "Ago", value: 1500 },
    { label: "Set", value: 1100 },
    { label: "Out", value: 1720 },
    { label: "Nov", value: 1360 },
    { label: "Dez", value: 1580 },
  ];

  const totalIn = transactions
    .filter((t) => t.type === "in")
    .reduce((s, t) => s + t.amount, 0);
  const totalOut = Math.abs(
    transactions
      .filter((t) => t.type === "out")
      .reduce((s, t) => s + t.amount, 0),
  );
  const balance = totalIn - totalOut;

  return (
    <div className="min-h-screen bg-trindata-blue-light">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <TrinDataLogo />
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/#como-funciona"
              className="text-gray-600 hover:text-trindata-burgundy transition-colors"
            >
              Como funciona
            </a>
            <a
              href="/#produtos"
              className="text-gray-600 hover:text-trindata-burgundy transition-colors"
            >
              Produtos
            </a>
            <a
              href="/projetos"
              className="text-trindata-burgundy font-semibold"
            >
              Projetos
            </a>
            <a
              href="/#precos"
              className="text-gray-600 hover:text-trindata-burgundy transition-colors"
            >
              Preços
            </a>
            <a
              href="/#contato"
              className="text-gray-600 hover:text-trindata-burgundy transition-colors"
            >
              Contato
            </a>
          </nav>
          <Button className="bg-trindata-purple hover:bg-trindata-purple-light text-white">
            Começar
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-trindata-burgundy">
            Projetos
          </h1>
          <p className="text-gray-600 mt-2">
            Dashboard financeiro pessoal com dados fictícios
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <SummaryCard
            label="Saldo"
            value={`R$ ${balance.toLocaleString("pt-BR")}`}
            delta={balance >= 0 ? "+ estável" : "- atenção"}
            color={
              balance >= 0
                ? "bg-trindata-cream text-trindata-burgundy"
                : "bg-red-100 text-red-700"
            }
          />
          <SummaryCard
            label="Entradas"
            value={`R$ ${totalIn.toLocaleString("pt-BR")}`}
            delta="+12%"
            color="bg-green-100 text-green-700"
          />
          <SummaryCard
            label="Saídas"
            value={`R$ ${totalOut.toLocaleString("pt-BR")}`}
            delta="-5%"
            color="bg-red-100 text-red-700"
          />
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2 border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-trindata-burgundy">
                Despesas por mês
              </CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart data={monthly} />
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-trindata-burgundy">
                Ações rápidas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full bg-trindata-orange hover:bg-trindata-orange-light text-white">
                Adicionar transação
              </Button>
              <Button
                variant="outline"
                className="w-full border-trindata-purple text-trindata-purple hover:bg-trindata-purple hover:text-white"
              >
                Exportar dados
              </Button>
              <Button variant="outline" className="w-full">
                Gerar relatório
              </Button>
            </CardContent>
          </Card>
        </section>

        <section className="mt-8">
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-trindata-burgundy">
                Transações recentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-12 text-xs font-semibold text-gray-500 mb-2">
                <div className="col-span-2">Data</div>
                <div className="col-span-5">Descrição</div>
                <div className="col-span-3">Categoria</div>
                <div className="col-span-2 text-right">Valor</div>
              </div>
              <div className="divide-y divide-gray-100">
                {transactions.map((t) => (
                  <div
                    key={t.id}
                    className="grid grid-cols-12 py-3 items-center text-sm"
                  >
                    <div className="col-span-2 text-gray-600">{t.date}</div>
                    <div className="col-span-5 text-trindata-burgundy font-medium">
                      {t.desc}
                    </div>
                    <div className="col-span-3">
                      <span className="inline-flex items-center rounded-full bg-gray-100 text-gray-700 px-2 py-0.5 text-xs">
                        {t.category}
                      </span>
                    </div>
                    <div
                      className={`col-span-2 text-right font-semibold ${t.type === "in" ? "text-green-600" : "text-red-600"}`}
                    >
                      {t.type === "in" ? "+" : "-"} R${" "}
                      {Math.abs(t.amount).toLocaleString("pt-BR")}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="py-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} TrinData. Todos os direitos reservados.
      </footer>
    </div>
  );
}
