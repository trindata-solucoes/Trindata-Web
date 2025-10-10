import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// High-quality vector tablet mockup with charts
const MockTablet = ({
  className = "w-full max-w-md mx-auto drop-shadow-2xl",
}: {
  className?: string;
}) => (
  <svg
    viewBox="0 0 360 720"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="TrinData tablet mockup with charts"
  >
    <defs>
      <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#e9f2fb" />
        <stop offset="100%" stopColor="#d7e6f6" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow
          dx="0"
          dy="8"
          stdDeviation="12"
          floodColor="#000"
          floodOpacity="0.25"
        />
      </filter>
    </defs>
    {/* Tablet body */}
    <rect
      x="10"
      y="10"
      rx="28"
      ry="28"
      width="340"
      height="700"
      fill="#ffffff"
      filter="url(#shadow)"
    />
    {/* Top bar */}
    <rect x="22" y="24" rx="12" width="316" height="44" fill="#f6f7fb" />
    <circle cx="44" cy="46" r="6" fill="#d2d6e6" />
    <rect x="58" y="36" rx="8" width="60" height="20" fill="#e9ebf5" />
    <rect x="290" y="34" rx="8" width="48" height="24" fill="#6C5CE7" />
    <text
      x="302"
      y="50"
      fontFamily="Inter, system-ui, Arial"
      fontSize="10"
      fill="#fff"
    >
      Sign in
    </text>

    {/* Screen */}
    <rect
      x="22"
      y="80"
      rx="12"
      width="316"
      height="590"
      fill="url(#screenGrad)"
    />

    {/* Title */}
    <text
      x="180"
      y="120"
      textAnchor="middle"
      fontFamily="Inter, system-ui, Arial"
      fontWeight="800"
      fontSize="22"
      fill="#2d3436"
    >
      TrindaTa
    </text>
    <text
      x="180"
      y="144"
      textAnchor="middle"
      fontFamily="Inter, system-ui, Arial"
      fontSize="14"
      fill="#2d3436"
    >
      <tspan fill="#e84393" fontWeight="700">
        Soluções
      </tspan>{" "}
      para dados
    </text>
    <text
      x="180"
      y="166"
      textAnchor="middle"
      fontFamily="Inter, system-ui, Arial"
      fontSize="10"
      fill="#657082"
    >
      To create any grid by scaling and
    </text>
    <text
      x="180"
      y="178"
      textAnchor="middle"
      fontFamily="Inter, system-ui, Arial"
      fontSize="10"
      fill="#657082"
    >
      resizing
    </text>

    {/* Grid cards */}
    <rect x="84" y="198" rx="8" width="54" height="48" fill="#e8b23a" />
    <rect x="146" y="198" rx="8" width="54" height="48" fill="#b9cde4" />
    <rect x="208" y="198" rx="8" width="54" height="48" fill="#e3542a" />

    <rect x="84" y="254" rx="8" width="54" height="48" fill="#b38ad6" />
    <rect x="146" y="254" rx="8" width="54" height="48" fill="#e3542a" />
    <rect x="208" y="254" rx="8" width="54" height="48" fill="#b9cde4" />

    {/* Charts area */}
    {/* Bar chart (reduced) */}
    <g transform="translate(60,360)">
      <rect
        x="0"
        y="0"
        width="240"
        height="90"
        rx="12"
        fill="#ffffff"
        stroke="#e6ecf4"
      />
      <rect x="28" y="50" width="28" height="38" fill="#6C5CE7" rx="4" />
      <rect x="76" y="34" width="28" height="54" fill="#00B894" rx="4" />
      <rect x="124" y="20" width="28" height="68" fill="#0984E3" rx="4" />
      <rect x="172" y="42" width="28" height="46" fill="#F26B38" rx="4" />
    </g>

    {/* Scroll dot */}
    <circle cx="180" cy="662" r="12" fill="#ffffff" stroke="#e6ecf4" />
    <path
      d="M174 660 L180 666 L186 660"
      stroke="#9aa3b2"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

// Icon components for the design
const LeafIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
  </svg>
);

const CircleIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const StarIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
  </svg>
);

const ChartIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M3 3v18h18" />
    <path d="m19 9-5 5-4-4-3 3" />
  </svg>
);

const ZapIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
  </svg>
);

const ThumbsUpIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M7 10v12" />
    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h3.73a2 2 0 0 1 1.92 2.56z" />
  </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

interface ProductCardProps {
  title: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor?: string;
  size?: "default" | "large";
  description?: string;
}

const ProductCard = ({
  title,
  icon,
  bgColor,
  textColor = "text-gray-800",
  size = "default",
  description,
}: ProductCardProps) => {
  const cardSize = size === "large" ? "col-span-2 h-40" : "h-32";

  return (
    <Card
      className={`${bgColor} ${cardSize} border-0 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-105`}
    >
      <CardContent className="p-6 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className={`${textColor} text-base font-semibold leading-tight`}>
            {title}
          </div>
          <div
            className={`${textColor} opacity-70 group-hover:opacity-100 transition-opacity`}
          >
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

const FeatureCard = ({
  icon,
  title,
  description,
  bgColor,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
}) => (
  <div className="flex flex-col items-center text-center">
    <div
      className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mb-4 shadow-lg`}
    >
      <div className="text-trindata-cream-light">{icon}</div>
    </div>
    <h3 className="text-xl font-bold text-trindata-burgundy mb-3">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
    <Button
      variant="outline"
      className="border-trindata-purple text-trindata-purple hover:bg-trindata-purple hover:text-white transition-colors"
    >
      Saiba mais
    </Button>
  </div>
);

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

// Power BI-like Finance Dashboard embedded in Home
function FinanceDashboard() {
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
  const parseMonth = (date: string) => Number(date.split("/")[1]) || 0;

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
    <div>
      {/* Slicers */}
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
        <Card className="border-0 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Saldo
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-end justify-between">
              <div className="text-3xl font-bold text-trindata-burgundy">{`R$ ${balance.toLocaleString("pt-BR")}`}</div>
              <span
                className={`text-xs font-semibold px-2 py-1 rounded-full ${balance >= 0 ? "bg-trindata-cream text-trindata-burgundy" : "bg-red-100 text-red-700"}`}
              >
                {balance >= 0 ? "+ estável" : "- atenção"}
              </span>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Entradas
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-end justify-between">
              <div className="text-3xl font-bold text-trindata-burgundy">{`R$ ${totalIn.toLocaleString("pt-BR")}`}</div>
              <span className="text-xs font-semibold px-2 py-1 rounded-full bg-green-100 text-green-700">
                +12%
              </span>
            </div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">
              Saídas
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex items-end justify-between">
              <div className="text-3xl font-bold text-trindata-burgundy">{`R$ ${totalOut.toLocaleString("pt-BR")}`}</div>
              <span className="text-xs font-semibold px-2 py-1 rounded-full bg-red-100 text-red-700">
                -5%
              </span>
            </div>
          </CardContent>
        </Card>
      </section>

      <Tabs defaultValue="resumo" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="resumo">Resumo</TabsTrigger>
          <TabsTrigger value="receitas">Receitas</TabsTrigger>
          <TabsTrigger value="despesas">Despesas</TabsTrigger>
        </TabsList>

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
                    <YAxis tickLine={false} axisLine={{ stroke: "#e6ecf4" }} />
                    <RechartsTooltip />
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
                          fill={
                            [
                              "#6C5CE7",
                              "#F26B38",
                              "#00B894",
                              "#0984E3",
                              "#B38AD6",
                              "#E8B23A",
                              "#b8d4e3",
                            ][i % 7]
                          }
                        />
                      ))}
                    </Pie>
                    <RechartsTooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </section>
        </TabsContent>

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
                    <YAxis tickLine={false} axisLine={{ stroke: "#e6ecf4" }} />
                    <RechartsTooltip />
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
                    <YAxis tickLine={false} axisLine={{ stroke: "#e6ecf4" }} />
                    <RechartsTooltip />
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
    </div>
  );
}

// Tasks (To-do) Dashboard
function TaskDashboard() {
  type Task = { id: number; title: string; completed: boolean; createdAt: Date };
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Estudar React", completed: true, createdAt: new Date() },
    { id: 2, title: "Organizar finanças", completed: false, createdAt: new Date() },
    { id: 3, title: "Revisar projeto", completed: false, createdAt: new Date(Date.now() - 1000*60*60*24) },
  ]);

  const total = tasks.length;
  const done = tasks.filter(t=>t.completed).length;
  const pending = total - done;

  const addTask = () => {
    const t = title.trim();
    if (!t) return;
    setTasks(prev => [{ id: Date.now(), title: t, completed: false, createdAt: new Date() }, ...prev]);
    setTitle("");
  };

  const toggleTask = (id: number, value: boolean) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: value } : t));
  };

  const last7 = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    const key = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
    const label = d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
    const createdThatDay = tasks.filter(t => {
      const td = t.createdAt;
      const k = `${td.getFullYear()}-${td.getMonth()+1}-${td.getDate()}`;
      return k === key;
    });
    const concluidas = createdThatDay.filter(t=>t.completed).length;
    const pendentes = createdThatDay.filter(t=>!t.completed).length;
    return { dia: label, Concluídas: concluidas, Pendentes: pendentes };
  });

  const pieData = [
    { name: "Concluídas", value: done },
    { name: "Pendentes", value: pending },
  ];

  const pieColors = ["#00B894", "#F26B38"];

  return (
    <div>
      {/* KPIs */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="border-0 shadow-md"><CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-gray-500">Tarefas</CardTitle></CardHeader><CardContent className="pt-0"><div className="flex items-end justify-between"><div className="text-3xl font-bold text-trindata-burgundy">{total}</div></div></CardContent></Card>
        <Card className="border-0 shadow-md"><CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-gray-500">Concluídas</CardTitle></CardHeader><CardContent className="pt-0"><div className="flex items-end justify-between"><div className="text-3xl font-bold text-green-700">{done}</div></div></CardContent></Card>
        <Card className="border-0 shadow-md"><CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-gray-500">Pendentes</CardTitle></CardHeader><CardContent className="pt-0"><div className="flex items-end justify-between"><div className="text-3xl font-bold text-red-600">{pending}</div></div></CardContent></Card>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className="lg:col-span-2 border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-trindata-burgundy">Tarefas criadas (últimos 7 dias)</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={last7}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e6ecf4" />
                <XAxis dataKey="dia" tickLine={false} axisLine={{ stroke: '#e6ecf4' }} />
                <YAxis tickLine={false} axisLine={{ stroke: '#e6ecf4' }} />
                <RechartsTooltip />
                <Legend />
                <Bar dataKey="Concluídas" stackId="a" fill="#00B894" radius={[4,4,0,0]} />
                <Bar dataKey="Pendentes" stackId="a" fill="#F26B38" radius={[4,4,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-trindata-burgundy">Status das tarefas</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={80}>
                  {pieData.map((_, i) => (<Cell key={i} fill={pieColors[i % pieColors.length]} />))}
                </Pie>
                <RechartsTooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </section>

      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle className="text-trindata-burgundy">Minha lista de tarefas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-4">
            <Input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Descreva a tarefa" onKeyDown={e=>{ if(e.key==='Enter') addTask(); }} />
            <Button className="bg-trindata-purple hover:bg-trindata-purple-light text-white" onClick={addTask}>Adicionar</Button>
          </div>

          <div className="divide-y divide-gray-100">
            {tasks.map(t => (
              <div key={t.id} className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <Checkbox checked={t.completed} onCheckedChange={(v)=>toggleTask(t.id, Boolean(v))} />
                  <span className={`text-sm ${t.completed ? 'line-through text-gray-400' : 'text-trindata-burgundy'}`}>{t.title}</span>
                </div>
                <span className="text-xs text-gray-500">{t.createdAt.toLocaleDateString('pt-BR')}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// E-commerce Inventory Dashboard
function InventoryDashboard() {
  type Item = {
    id: number;
    sku: string;
    name: string;
    category: string;
    stock: number;
    reorderPoint: number;
    weeklySales: number[]; // last 12 weeks
  };

  const categories = ["Eletrônicos", "Moda", "Casa"] as const;
  const makeItem = (
    id: number,
    sku: string,
    name: string,
    category: typeof categories[number],
    stock: number,
    reorderPoint: number,
    weeklySales: number[],
  ): Item => ({ id, sku, name, category, stock, reorderPoint, weeklySales });

  const initialItems: Item[] = [
    makeItem(1, "EL-001", "Fone Bluetooth", "Eletrônicos", 42, 20, [9,8,7,10,6,8,7,9,8,6,7,8]),
    makeItem(2, "EL-002", "Teclado Mecânico", "Eletrônicos", 12, 15, [3,2,4,2,3,3,2,4,3,2,2,3]),
    makeItem(3, "MD-101", "Camiseta Básica", "Moda", 5, 25, [5,6,4,3,6,5,7,6,5,6,4,5]),
    makeItem(4, "MD-202", "Tênis Esportivo", "Moda", 0, 10, [2,1,2,2,1,2,1,2,2,1,1,2]),
    makeItem(5, "CS-310", "Cafeteira", "Casa", 28, 12, [2,3,2,3,2,2,3,2,3,2,2,3]),
    makeItem(6, "CS-311", "Aspirador Robô", "Casa", 7, 10, [1,1,2,1,2,2,1,1,2,1,1,2]),
  ];

  const [items, setItems] = useState<Item[]>(initialItems);
  const [catFilter, setCatFilter] = useState<string>("Todas");
  const [statusFilter, setStatusFilter] = useState<string>("Todos");
  const [query, setQuery] = useState("");

  const statusOf = (it: Item) =>
    it.stock === 0 ? "Sem estoque" : it.stock <= it.reorderPoint ? "Baixo" : "OK";

  const filtered = useMemo(() => {
    return items.filter((it) => {
      const queryMatch =
        !query ||
        it.name.toLowerCase().includes(query.toLowerCase()) ||
        it.sku.toLowerCase().includes(query.toLowerCase());
      const catMatch = catFilter === "Todas" || it.category === catFilter;
      const s = statusOf(it);
      const statusMatch =
        statusFilter === "Todos" ||
        (statusFilter === "OK" && s === "OK") ||
        (statusFilter === "Baixo" && s === "Baixo") ||
        (statusFilter === "Sem estoque" && s === "Sem estoque");
      return queryMatch && catMatch && statusMatch;
    });
  }, [items, catFilter, statusFilter, query]);

  const totals = useMemo(() => {
    const totalSkus = items.length;
    const totalUnits = items.reduce((s, it) => s + it.stock, 0);
    const low = items.filter((it) => statusOf(it) === "Baixo").length;
    const out = items.filter((it) => statusOf(it) === "Sem estoque").length;
    return { totalSkus, totalUnits, low, out };
  }, [items]);

  const byCategory = useMemo(() => {
    const map = new Map<string, number>();
    items.forEach((it) => map.set(it.category, (map.get(it.category) || 0) + it.stock));
    return categories.map((c) => ({ categoria: c, Unidades: map.get(c) || 0 }));
  }, [items]);

  const statusData = useMemo(() => {
    const ok = items.filter((it) => statusOf(it) === "OK").length;
    const low = items.filter((it) => statusOf(it) === "Baixo").length;
    const out = items.filter((it) => statusOf(it) === "Sem estoque").length;
    return [
      { name: "OK", value: ok },
      { name: "Baixo", value: low },
      { name: "Sem estoque", value: out },
    ];
  }, [items]);

  const weeklyTotalSales = useMemo(() => {
    const weeks = Array.from({ length: 12 }, (_, i) => i);
    return weeks.map((i) => ({
      semana: `S${i + 1}`,
      Vendas: items.reduce((s, it) => s + (it.weeklySales[i] || 0), 0),
    }));
  }, [items]);

  const restock = (id?: number) => {
    setItems((prev) =>
      prev.map((it) => {
        if (id && it.id !== id) return it;
        if (!id && statusOf(it) === "OK") return it;
        const need = Math.max(it.reorderPoint * 2 - it.stock, 0);
        return { ...it, stock: it.stock + (need || 10) };
      }),
    );
  };

  return (
    <div>
      {/* Filters */}
      <Card className="border-0 shadow-md mb-6">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-2">
              <div className="text-xs font-semibold text-gray-500 mb-1">Buscar</div>
              <Input placeholder="Nome ou SKU" value={query} onChange={(e)=>setQuery(e.target.value)} />
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-500 mb-1">Categoria</div>
              <Select value={catFilter} onValueChange={setCatFilter}>
                <SelectTrigger className="w-full"><SelectValue placeholder="Todas" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Todas">Todas</SelectItem>
                  {categories.map(c=> (<SelectItem key={c} value={c}>{c}</SelectItem>))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-500 mb-1">Status</div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full"><SelectValue placeholder="Todos" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="Todos">Todos</SelectItem>
                  <SelectItem value="OK">OK</SelectItem>
                  <SelectItem value="Baixo">Baixo</SelectItem>
                  <SelectItem value="Sem estoque">Sem estoque</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button className="w-full bg-trindata-orange hover:bg-trindata-orange-light text-white" onClick={()=>restock()}>Repor itens com baixo estoque</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* KPIs */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <Card className="border-0 shadow-md"><CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-gray-500">SKUs</CardTitle></CardHeader><CardContent className="pt-0"><div className="text-3xl font-bold text-trindata-burgundy">{totals.totalSkus}</div></CardContent></Card>
        <Card className="border-0 shadow-md"><CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-gray-500">Unidades</CardTitle></CardHeader><CardContent className="pt-0"><div className="text-3xl font-bold text-trindata-burgundy">{totals.totalUnits}</div></CardContent></Card>
        <Card className="border-0 shadow-md"><CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-gray-500">Baixo estoque</CardTitle></CardHeader><CardContent className="pt-0"><div className="text-3xl font-bold text-yellow-600">{totals.low}</div></CardContent></Card>
        <Card className="border-0 shadow-md"><CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-gray-500">Sem estoque</CardTitle></CardHeader><CardContent className="pt-0"><div className="text-3xl font-bold text-red-600">{totals.out}</div></CardContent></Card>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <Card className="lg:col-span-2 border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-trindata-burgundy">Unidades por categoria</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={byCategory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e6ecf4" />
                <XAxis dataKey="categoria" tickLine={false} axisLine={{ stroke: '#e6ecf4' }} />
                <YAxis tickLine={false} axisLine={{ stroke: '#e6ecf4' }} />
                <RechartsTooltip />
                <Bar dataKey="Unidades" fill="#6C5CE7" radius={[4,4,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-trindata-burgundy">Distribuição de status</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={statusData} dataKey="value" nameKey="name" outerRadius={80}>
                  {statusData.map((d, i) => (
                    <Cell key={i} fill={["#00B894", "#E8B23A", "#F26B38"][i % 3]} />
                  ))}
                </Pie>
                <RechartsTooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </section>

      <Card className="border-0 shadow-md mb-6">
        <CardHeader>
          <CardTitle className="text-trindata-burgundy">Vendas semanais (12 semanas)</CardTitle>
        </CardHeader>
        <CardContent className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weeklyTotalSales}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e6ecf4" />
              <XAxis dataKey="semana" tickLine={false} axisLine={{ stroke: '#e6ecf4' }} />
              <YAxis tickLine={false} axisLine={{ stroke: '#e6ecf4' }} />
              <RechartsTooltip />
              <Line type="monotone" dataKey="Vendas" stroke="#0984E3" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-md">
        <CardHeader>
          <CardTitle className="text-trindata-burgundy">Inventário</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>SKU</TableHead>
                <TableHead>Produto</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead className="text-right">Estoque</TableHead>
                <TableHead className="text-right">Reposição</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Progresso</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((it) => {
                const status = statusOf(it);
                const pct = Math.min(100, Math.round((it.stock / Math.max(it.reorderPoint, 1)) * 100));
                const badgeCls =
                  status === "OK"
                    ? "bg-green-100 text-green-700"
                    : status === "Baixo"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700";
                return (
                  <TableRow key={it.id}>
                    <TableCell className="font-mono text-xs">{it.sku}</TableCell>
                    <TableCell className="text-trindata-burgundy font-medium">{it.name}</TableCell>
                    <TableCell>{it.category}</TableCell>
                    <TableCell className="text-right">{it.stock}</TableCell>
                    <TableCell className="text-right">{it.reorderPoint}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs ${badgeCls}`}>{status}</span>
                    </TableCell>
                    <TableCell className="w-48">
                      <Progress value={pct} />
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="outline" onClick={()=>restock(it.id)}>Repor</Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

// Section that lets users switch between projects
function ProjectsSection() {
  return (
    <Tabs defaultValue="financeiro" className="w-full">
      <TabsList className="mb-4 flex flex-wrap gap-2">
        <TabsTrigger value="financeiro">Controle financeiro</TabsTrigger>
        <TabsTrigger value="tarefas">Lista de tarefas</TabsTrigger>
      </TabsList>
      <TabsContent value="financeiro">
        <FinanceDashboard />
      </TabsContent>
      <TabsContent value="tarefas">
        <TaskDashboard />
      </TabsContent>
    </Tabs>
  );
}

export default function Index() {
  const [activePlan, setActivePlan] = useState("pro");

  const productShowcase = [
    {
      title: "Dashboard Financeiro",
      icon: <ChartIcon className="w-6 h-6" />,
      bgColor: "bg-trindata-orange text-white",
      textColor: "text-white",
      description: "Visualize suas finanças de forma clara",
    },
    {
      title: "Templates Notion",
      icon: <LeafIcon className="w-6 h-6" />,
      bgColor: "bg-trindata-cream",
      description: "Modelos prontos para organização",
    },
    {
      title: "Planejamento",
      icon: <StarIcon className="w-6 h-6" />,
      bgColor: "bg-trindata-yellow",
      description: "Organize suas tarefas e metas",
    },
    {
      title: "Power BI",
      icon: <ZapIcon className="w-6 h-6" />,
      bgColor: "bg-trindata-purple text-white",
      textColor: "text-white",
      description: "Dashboards profissionais",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "Grátis",
      period: "",
      description: "Para estudantes iniciantes",
      features: [
        "Templates básicos",
        "Dashboard simples",
        "Suporte por email",
        "Tutoriais básicos",
      ],
      buttonText: "Começar grátis",
      popular: false,
    },
    {
      name: "Pro",
      price: "R$ 29",
      period: "/mês",
      description: "Para estudantes avançados",
      features: [
        "Todos os templates",
        "Dashboards avançados",
        "Suporte prioritário",
        "Personalizações",
        "Exportação ilimitada",
      ],
      buttonText: "Assinar Pro",
      popular: true,
    },
    {
      name: "Premium",
      price: "R$ 49",
      period: "/mês",
      description: "Para grupos e equipes",
      features: [
        "Tudo do Pro",
        "Templates exclusivos",
        "Consultoria 1:1",
        "Criação personalizada",
        "Acesso antecipado",
      ],
      buttonText: "Assinar Premium",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-trindata-blue-light">
      {/* Modern Navigation Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <TrinDataLogo />
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#como-funciona"
              className="text-gray-600 hover:text-trindata-burgundy transition-colors"
            >
              Como funciona
            </a>
            <a
              href="#produtos"
              className="text-gray-600 hover:text-trindata-burgundy transition-colors"
            >
              Produtos
            </a>
            <a
              href="#projetos"
              className="text-gray-600 hover:text-trindata-burgundy transition-colors"
            >
              Projetos
            </a>
            <a
              href="#precos"
              className="text-gray-600 hover:text-trindata-burgundy transition-colors"
            >
              Preços
            </a>
            <a
              href="#contato"
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

      {/* Ochre Hero Section (per diff) */}
      <section className="relative overflow-hidden bg-trindata-ochre min-h-[720px]">
        {/* Decorative dots at top-right */}
        <div className="absolute right-48 top-12 opacity-30">
          <div className="grid grid-cols-6 gap-4">
            {Array.from({ length: 30 }).map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-white/70" />
            ))}
          </div>
        </div>
        {/* Rotated rounded shape */}
        <div className="absolute -left-80 top-32 w-96 h-96 bg-white/20 rounded-3xl rotate-45" />

        <div className="relative z-10 w-full mx-auto px-6 py-8">
          <div className="grid md:grid-cols-2 items-center gap-12 min-h-[720px]">
            <div>
              <div className="text-white font-extrabold text-[96px] leading-[96px] tracking-[4.8px] drop-shadow-sm">
                TRINDATA
              </div>
            </div>
            <div className="relative flex flex-col justify-end items-center">
              {/* Browser-like card */}
              <div className="mx-auto max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-200 p-4">
                  <div className="flex items-center text-slate-600">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-slate-600"
                    >
                      <path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"></path>
                      <path d="M20.054 15.987H3.946"></path>
                    </svg>
                    <div className="ml-3 text-xl font-bold">Grid</div>
                  </div>
                  <div className="bg-slate-800 text-white text-sm font-bold rounded-lg px-4 py-2">
                    Sign In
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-b from-[#b8d4e3] to-transparent">
                  <div className="text-center">
                    <div className="text-slate-800 text-3xl font-black">
                      TrindaTa
                    </div>
                    <h3 className="mt-4 text-[28px] font-bold">
                      <span className="text-[#d2522c]">Soluções</span>
                      <span className="text-slate-800"> para dados</span>
                    </h3>
                    <div className="mt-4 text-slate-800 text-base font-semibold max-w-xs mx-auto">
                      To create any grid by scaling and resizing
                    </div>
                    <div className="mt-4 inline-block rounded-full bg-[#a8c8d9]/40 px-4 py-1" />
                  </div>

                  {/* Tiles */}
                  <div className="mt-8 grid grid-cols-3 gap-3">
                    <div className="aspect-square rounded-md bg-trindata-ochre" />
                    <div className="aspect-[3/4] rounded-md bg-[#a8c8d8]" />
                    <div className="aspect-square rounded-md bg-[#d2522c]" />
                    <div className="aspect-[4/3] rounded-md bg-[#b19cd9]" />
                    <div className="aspect-square rounded-md bg-[#e5633d]" />
                    <div className="aspect-[3/4] rounded-md bg-[#b8d4e3]" />
                  </div>

                  {/* Bars */}
                  <div className="mt-6 flex justify-center">
                    <button className="backdrop-blur rounded-full border-2 border-[#a088c9] p-3 bg-white/30">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-[#a088c9] rotate-90"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Hero Section */}
      <section className="relative bg-gradient-to-br from-trindata-blue-light to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-trindata-burgundy mb-6">
              Combine <span className="text-trindata-orange">dados</span>{" "}
              inteligentes
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
              Para representar seus objetivos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Use grades mistas com imagens, substitua por suas próprias fotos e
              descrições. Templates e dashboards prontos para estudantes.
            </p>
            <Button className="bg-trindata-orange hover:bg-trindata-orange-light text-white text-lg px-8 py-4 rounded-xl">
              Conhecer produtos
            </Button>
          </div>

          {/* Product Showcase Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            id="produtos"
          >
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

      {/* Projects (Power BI-like Dashboard) */}
      <section id="projetos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6 text-center md:text-left">
            <h2 className="text-4xl font-bold text-trindata-burgundy">
              Projetos
            </h2>
            <p className="text-gray-600 mt-2">
              Dashboard financeiro pessoal com dados fictícios
            </p>
          </div>

          <ProjectsSection />
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
              Somos as primeiras soluções de kit de design multipropósito para
              estudantes. Ajudamos você a conectar seus layouts, templates e
              desenvolvedores para capacitar todos os envolvidos.
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
              Escolha{" "}
              <span className="text-trindata-purple font-semibold">mensal</span>{" "}
              • anual
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "ring-2 ring-trindata-purple shadow-xl scale-105" : ""} hover:shadow-lg transition-all duration-300`}
              >
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
                      <span className="text-4xl font-bold text-trindata-burgundy">
                        {plan.price}
                      </span>
                      <span className="text-gray-500">{plan.period}</span>
                    </div>
                    <h4 className="text-xl font-semibold text-trindata-burgundy">
                      {plan.name}
                    </h4>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm"
                      >
                        <svg
                          className="w-4 h-4 text-trindata-orange mr-3 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-trindata-purple hover:bg-trindata-purple-light text-white"
                        : "bg-trindata-cream hover:bg-trindata-cream-light text-trindata-burgundy border border-trindata-burgundy"
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
                <a
                  href="#"
                  className="block hover:text-trindata-burgundy transition-colors"
                >
                  Sobre a TrinData
                </a>
                <a
                  href="#"
                  className="block hover:text-trindata-burgundy transition-colors"
                >
                  Entre em contato
                </a>
                <a
                  href="#"
                  className="block hover:text-trindata-burgundy transition-colors"
                >
                  Coisas que gostamos
                </a>
                <a
                  href="#"
                  className="block hover:text-trindata-burgundy transition-colors"
                >
                  Política de privacidade
                </a>
                <a
                  href="#"
                  className="block hover:text-trindata-burgundy transition-colors"
                >
                  Termos de serviço
                </a>
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
        <svg
          className="w-full h-24"
          viewBox="0 0 1440 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-0.333822 104L-0.583526 19.1366C-0.583526 19.1366 102.172 51.726 220.913 19.2075C339.654 -13.311 399.901 4.67057 565.331 61.0554C730.762 117.44 808.875 9.45977 1046 52.0384C1283.12 94.6171 1251.81 -44.9066 1439.77 19.611C1439.81 97.8883 1440.01 485.507 1440.04 104C1295.17 104 -0.333822 104 -0.333822 104Z"
            fill="hsl(var(--trindata-yellow-light))"
          />
        </svg>
      </div>
    </div>
  );
}
