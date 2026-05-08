import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

const transactionData = [
  { name: 'Mon', g2p: 4000, p2g: 2400, vouchers: 2400 },
  { name: 'Tue', g2p: 3000, p2g: 1398, vouchers: 2210 },
  { name: 'Wed', g2p: 2000, p2g: 9800, vouchers: 2290 },
  { name: 'Thu', g2p: 2780, p2g: 3908, vouchers: 2000 },
  { name: 'Fri', g2p: 1890, p2g: 4800, vouchers: 2181 },
  { name: 'Sat', g2p: 2390, p2g: 3800, vouchers: 2500 },
  { name: 'Sun', g2p: 3490, p2g: 4300, vouchers: 2100 },
];

const failureRateData = [
  { name: 'Completed', value: 98.2, color: '#10b981' },
  { name: 'Failed', value: 1.8, color: '#ef4444' },
];

export function AnalyticsDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Transaction Volume Area Chart */}
      <div className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl backdrop-blur-xl">
        <h3 className="text-lg font-bold mb-6 text-slate-200">Orchestration Volume (Weekly)</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={transactionData}>
              <defs>
                <linearGradient id="colorG2P" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                itemStyle={{ color: '#f8fafc' }}
              />
              <Area type="monotone" dataKey="g2p" stroke="#3b82f6" fillOpacity={1} fill="url(#colorG2P)" />
              <Area type="monotone" dataKey="p2g" stroke="#a855f7" fillOpacity={0} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Failure Rate Distribution */}
      <div className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl backdrop-blur-xl relative">
        <h3 className="text-lg font-bold mb-6 text-slate-200">Success vs Failure Distribution</h3>
        <div className="h-[300px] flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={failureRateData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {failureRateData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute flex flex-col items-center">
            <span className="text-2xl font-bold text-white">1.8%</span>
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Failure Rate</span>
          </div>
        </div>
      </div>
    </div>
  );
}
