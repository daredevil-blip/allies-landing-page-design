
import { Progress } from '@/components/ui/progress';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const industries = [
  { name: 'ביטוח חיים', value: 35 },
  { name: 'ביטוח בריאות', value: 25 },
  { name: 'ביטוח רכב', value: 20 },
  { name: 'ביטוח דירה', value: 15 },
  { name: 'אחר', value: 5 }
];

const COLORS = ['#10B981', '#6366F1', '#F59E0B', '#3B82F6', '#EC4899'];

const IndustryStats = () => {
  const chartConfig = {
    category1: { label: "ביטוח חיים", theme: { light: "#10B981", dark: "#047857" } },
    category2: { label: "ביטוח בריאות", theme: { light: "#6366F1", dark: "#4F46E5" } },
    category3: { label: "ביטוח רכב", theme: { light: "#F59E0B", dark: "#D97706" } },
    category4: { label: "ביטוח דירה", theme: { light: "#3B82F6", dark: "#2563EB" } },
    category5: { label: "אחר", theme: { light: "#EC4899", dark: "#DB2777" } }
  };

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            התמחות שלנו לפי תחומים
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            אנו מציעים מגוון רחב של פתרונות ביטוח בכל התחומים
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="w-full md:w-1/2 h-80">
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Pie
                    data={industries.map((item, index) => ({ 
                      name: item.name, 
                      value: item.value, 
                      key: `category${index + 1}` 
                    }))}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={120}
                    innerRadius={60}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="key"
                  >
                    {industries.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          </div>

          <div className="w-full md:w-1/2 space-y-6 text-right">
            {industries.map((industry, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{industry.value}%</span>
                  <span className="text-sm font-medium">{industry.name}</span>
                </div>
                <Progress value={industry.value} className="h-2" 
                  style={{ '--progress-background-color': COLORS[index % COLORS.length] } as React.CSSProperties} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryStats;
