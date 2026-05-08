import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Layers, 
  Send, 
  Ticket, 
  Settings, 
  User, 
  LogOut,
  ShieldCheck,
  ChevronDown,
  Globe
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Layout({ children }: { children: React.ReactNode }) {
  const { t, i18n } = useTranslation();
  const [userRole, setUserRole] = useState('Admin'); // Simulated Role

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(nextLang);
  };

  const navItems = [
    { name: t('sidebar.dashboard'), icon: LayoutDashboard, path: '/dashboard' },
    { name: t('sidebar.batches'), icon: Layers, path: '/batches' },
    { name: t('sidebar.transfers'), icon: Send, path: '/transfers' },
    { name: t('sidebar.vouchers'), icon: Ticket, path: '/vouchers' },
    { name: t('sidebar.settings'), icon: Settings, path: '/settings' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex font-sans selection:bg-blue-500/30">
      {/* Sidebar */}
      <aside className="w-72 bg-slate-900/80 border-r border-slate-800 flex flex-col sticky top-0 h-screen backdrop-blur-2xl">
        <div className="p-8 border-b border-slate-800/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold tracking-tight text-white">Payment Hub</h2>
              <span className="text-[10px] uppercase tracking-widest text-blue-400 font-bold">Enterprise Edition</span>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
                ${isActive 
                  ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100 border border-transparent'}
              `}
            >
              <item.icon className={`w-5 h-5 transition-transform group-hover:scale-110`} />
              <span className="font-medium">{item.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* User / Role Switcher */}
        <div className="p-6 border-t border-slate-800/50 bg-slate-900/40">
          <div className="flex items-center justify-between mb-4">
             <button onClick={toggleLanguage} className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 flex items-center gap-2 text-xs">
                <Globe className="w-3 h-3" />
                {i18n.language.toUpperCase()}
             </button>
             <div className="px-2 py-1 bg-indigo-500/10 text-indigo-400 rounded text-[10px] font-bold border border-indigo-500/20 uppercase tracking-tighter">
                {userRole}
             </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-700 flex items-center justify-center font-bold text-slate-200 shadow-inner">
              R
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate text-slate-100">Rahul Chaudhary</p>
              <p className="text-xs text-slate-500 truncate">rahul@c4gt.org</p>
            </div>
            <button className="text-slate-500 hover:text-red-400 transition-colors">
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-x-hidden">
        <div className="max-w-7xl mx-auto p-10 pb-20">
          {children}
        </div>
      </main>
    </div>
  );
}
