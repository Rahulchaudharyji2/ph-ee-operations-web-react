import React from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '../../components/Layout';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { TrendingUp, Users, AlertCircle, FileText, Download } from 'lucide-react';

export default function DashboardPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">{t('dashboard.title')}</h1>
          <p className="text-slate-400 mt-2 font-medium">{t('dashboard.subtitle')}</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700 transition-all font-semibold text-sm shadow-xl">
          <Download className="w-4 h-4" />
          Export Data
        </button>
      </header>

      {/* Modern Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard 
          title={t('dashboard.metrics.total_transactions')} 
          value="1,245,092" 
          change="+12.5%" 
          trend="up" 
          icon={TrendingUp} 
          color="blue" 
        />
        <MetricCard 
          title={t('dashboard.metrics.active_vouchers')} 
          value="8,234" 
          change="+3.2%" 
          trend="up" 
          icon={FileText} 
          color="purple" 
        />
        <MetricCard 
          title={t('dashboard.metrics.failure_rate')} 
          value="1.2%" 
          change="+0.4%" 
          trend="down" 
          icon={AlertCircle} 
          color="red" 
        />
        <MetricCard 
          title={t('dashboard.metrics.pending_batches')} 
          value="42" 
          change="Action Required" 
          trend="neutral" 
          icon={Users} 
          color="amber" 
        />
      </div>

      {/* Analytics Section */}
      <AnalyticsDashboard />

      {/* Recent Activity Mini Table */}
      <div className="bg-slate-900/50 border border-slate-800/50 rounded-2xl p-8 backdrop-blur-xl">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Recent Orchestration Activity</h3>
          <button className="text-sm text-blue-400 font-bold hover:underline">View All Activity</button>
        </div>
        <div className="space-y-4">
           {[1, 2, 3].map((i) => (
             <div key={i} className="flex items-center justify-between p-4 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-blue-500/30 transition-colors">
               <div className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center font-mono text-xs text-blue-400">
                   G2P
                 </div>
                 <div>
                   <p className="text-sm font-bold text-slate-100">Batch #B-9238{i} Approved</p>
                   <p className="text-xs text-slate-500">Ministry of Social Services • 2 mins ago</p>
                 </div>
               </div>
               <div className="text-right">
                 <p className="text-sm font-bold">$12,400.00</p>
                 <p className="text-xs text-emerald-400 font-medium">Verified</p>
               </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value, change, trend, icon: Icon, color }: any) {
  const colorMap: any = {
    blue: 'from-blue-600/20 to-transparent text-blue-400 border-blue-500/20',
    purple: 'from-purple-600/20 to-transparent text-purple-400 border-purple-500/20',
    red: 'from-red-600/20 to-transparent text-red-400 border-red-500/20',
    amber: 'from-amber-600/20 to-transparent text-amber-400 border-amber-500/20',
  };

  return (
    <div className={`bg-slate-800/40 border ${colorMap[color].split(' ').pop()} rounded-2xl p-6 backdrop-blur-xl relative overflow-hidden group hover:scale-[1.02] transition-all duration-300`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${colorMap[color].split(' ')[0]} opacity-40`}></div>
      <div className="relative z-10 flex justify-between items-start mb-4">
        <div className={`p-2 rounded-lg bg-slate-900/50 border border-slate-700/50 ${colorMap[color].split(' ')[2]}`}>
          <Icon className="w-5 h-5" />
        </div>
        <span className={`text-xs font-bold px-2 py-1 rounded-md bg-slate-900/50 border border-slate-700/50 ${trend === 'up' ? 'text-emerald-400' : trend === 'down' ? 'text-red-400' : 'text-slate-400'}`}>
          {change}
        </span>
      </div>
      <p className="relative z-10 text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{title}</p>
      <h3 className="relative z-10 text-3xl font-black text-white">{value}</h3>
    </div>
  );
}
