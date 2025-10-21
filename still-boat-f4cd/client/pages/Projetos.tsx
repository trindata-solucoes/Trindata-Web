import React, { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";

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

// Dados fictícios anuais para entradas e saídas
const months = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];
const entradasAno = [
  2200, 2100, 2350, 2200, 2400, 2600, 2300, 2450, 2350, 2700, 2500, 2550,
];
const saidasAno = [
  1200, 980, 1450, 1100, 1320, 1680, 940, 1500, 1100, 1720, 1360, 1580,
];

const baseTransactions = [
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
  {
    id: 6,
    date: "15/09",
    desc: "Cinema",
    category: "Lazer",
    amount: -60,
    type: "out",
  },
  {
    id: 7,
    date: "20/09",
    desc: "Gorjeta",
    category: "Renda",
    amount: 120,
    type: "in",
  },
  {
    id: 8,
    date: "03/11",
    desc: "Farmácia",
    category: "Saúde",
    amount: -120,
    type: "out",
  },
];

function parseMonth(date: string) {
  const m = Number(date.split("/")[1]);
  return isNaN(m) ? 0 : m; // 1-12
}

export default function Projetos() {
  const [ano, setAno] = useState("2024");
  const [mes, setMes] = useState<string>("Todos");
  const categorias = useMemo(
    () => Array.from(new Set(baseTransactions.map((t) => t.category))),
    [],
  );
  const [activeCats, setActiveCats] = useState<string[]>(categorias);

  const filteredTransactions = useMemo(() => {
    return baseTransactions.filter(
      (t) =>
        activeCats.includes(t.category) &&
        (mes === "Todos"
          ? true
          : parseMonth(t.date) === months.indexOf(mes) + 1),
    );
  }, [activeCats, mes]);

  const totalIn = filteredTransactions
    .filter((t) => t.type === "in")
    .reduce((s, t) => s + t.amount, 0);
  const totalOut = Math.abs(
    filteredTransactions
      .filter((t) => t.type === "out")
      .reduce((s, t) => s + t.amount, 0),
  );
  const balance = totalIn - totalOut;

  const seriesResumo = useMemo(
    () =>
      months.map((m, i) => ({
        mes: m,
        Entradas: entradasAno[i],
        Saídas: saidasAno[i],
      })),
    [],
  );
  const saldoSerie = useMemo(
    () =>
      seriesResumo.map((d) => ({ mes: d.mes, Saldo: d.Entradas - d.Saídas })),
    [seriesResumo],
  );

  const gastosPorCategoria = useMemo(() => {
    const map = new Map<string, number>();
    filteredTransactions.forEach((t) => {
      if (t.type === "out") {
        map.set(t.category, (map.get(t.category) || 0) + Math.abs(t.amount));
      }
    });
    return Array.from(map.entries()).map(([name, value]) => ({ name, value }));
  }, [filteredTransactions]);

  const pieColors = [
    "#6C5CE7",
    "#F26B38",
    "#00B894",
    "#0984E3",
    "#B38AD6",
    "#E8B23A",
    "#b8d4e3",
  ];

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
        <div className="mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-trindata-burgundy">
            Projetos
          </h1>
          <p className="text-gray-600 mt-2">
            Dashboard financeiro pessoal com dados fictícios
          </p>
        </div>

        {/* Slicers (Power BI style) */}
        <Card className="border-0 shadow-md mb-6">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <div className="text-xs font-semibold text-gray-500 mb-1">
                  Ano
                </div>
                <Select value={ano} onValueChange={setAno}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <div className="text-xs font-semibold text-gray-500 mb-1">
                  Mês
                </div>
                <Select value={mes} onValueChange={setMes}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Todos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Todos">Todos</SelectItem>
                    {months.map((m) => (
                      <SelectItem key={m} value={m}>
                        {m}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-2">
                <div className="text-xs font-semibold text-gray-500 mb-1">
                  Categorias
                </div>
                <div className="flex flex-wrap gap-2">
                  {categorias.map((c) => {
                    const active = activeCats.includes(c);
                    return (
                      <button
                        key={c}
                        onClick={() =>
                          setActiveCats((prev) =>
                            prev.includes(c)
                              ? prev.filter((x) => x !== c)
                              : [...prev, c],
                          )
                        }
                        className={`text-xs px-3 py-1 rounded-full border ${active ? "bg-trindata-purple text-white border-trindata-purple" : "border-gray-200 text-gray-600 hover:border-trindata-purple"}`}
                      >
                        {c}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* KPIs */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
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

        <Tabs defaultValue="resumo" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="resumo">Resumo</TabsTrigger>
            <TabsTrigger value="receitas">Receitas</TabsTrigger>
            <TabsTrigger value="despesas">Despesas</TabsTrigger>
          </TabsList>

          {/* Resumo */}
          <TabsContent value="resumo">
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-trindata-burgundy">
                    Saldo ao longo do ano
                  </CardTitle>
                </CardHeader>
                <CardContent className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={saldoSerie}
                      margin={{ left: 0, right: 8, top: 8, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="saldoGrad"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#6C5CE7"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="95%"
                            stopColor="#6C5CE7"
                            stopOpacity={0.1}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e6ecf4" />
                      <XAxis
                        dataKey="mes"
                        tickLine={false}
                        axisLine={{ stroke: "#e6ecf4" }}
                      />
                      <YAxis
                        tickLine={false}
                        axisLine={{ stroke: "#e6ecf4" }}
                      />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="Saldo"
                        stroke="#6C5CE7"
                        fill="url(#saldoGrad)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-trindata-burgundy">
                    Gastos por categoria
                  </CardTitle>
                </CardHeader>
                <CardContent className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={gastosPorCategoria}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={80}
                      >
                        {gastosPorCategoria.map((_, i) => (
                          <Cell
                            key={i}
                            fill={pieColors[i % pieColors.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </section>
          </TabsContent>

          {/* Receitas */}
          <TabsContent value="receitas">
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-trindata-burgundy">
                    Entradas x Saídas
                  </CardTitle>
                </CardHeader>
                <CardContent className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={seriesResumo}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e6ecf4" />
                      <XAxis
                        dataKey="mes"
                        tickLine={false}
                        axisLine={{ stroke: "#e6ecf4" }}
                      />
                      <YAxis
                        tickLine={false}
                        axisLine={{ stroke: "#e6ecf4" }}
                      />
                      <Tooltip />
                      <Legend />
                      <Bar
                        dataKey="Entradas"
                        fill="#00B894"
                        radius={[4, 4, 0, 0]}
                      />
                      <Bar
                        dataKey="Saídas"
                        fill="#F26B38"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-trindata-burgundy">
                    Tendência de entradas
                  </CardTitle>
                </CardHeader>
                <CardContent className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={seriesResumo}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e6ecf4" />
                      <XAxis
                        dataKey="mes"
                        tickLine={false}
                        axisLine={{ stroke: "#e6ecf4" }}
                      />
                      <YAxis
                        tickLine={false}
                        axisLine={{ stroke: "#e6ecf4" }}
                      />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="Entradas"
                        stroke="#0984E3"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </section>
          </TabsContent>

          {/* Despesas */}
          <TabsContent value="despesas">
            <section className="grid grid-cols-1 gap-6">
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
                    {filteredTransactions.map((t) => (
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
          </TabsContent>
        </Tabs>
      </main>

      <footer className="py-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} TrinData. Todos os direitos reservados.
      </footer>
    </div>
  );
}
