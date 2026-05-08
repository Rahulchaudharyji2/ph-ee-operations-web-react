import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Layout } from '../../components/Layout';
import { Search, Filter, ArrowRight, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

const mockBatches = [
  { id: 'B-29384', startedAt: '2024-05-08 10:30', totalAmount: '45,000', currency: 'USD', count: 150, status: 'COMPLETED', ministry: 'Ministry of Health' },
  { id: 'B-29385', startedAt: '2024-05-08 11:15', totalAmount: '12,200', currency: 'USD', count: 45, status: 'PROCESSING', ministry: 'Ministry of Education' },
  { id: 'B-29386', startedAt: '2024-05-08 12:00', totalAmount: '8,500', currency: 'USD', count: 20, status: 'FAILED', ministry: 'Social Services' },
];

export default function BatchesPage() {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Batch Management</h1>
          <p className="text-slate-400 mt-1">Manage and monitor bulk G2P/P2G orchestration batches.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-all font-medium shadow-lg shadow-blue-600/20">
            Bulk Import
          </button>
        </div>
      </header>

      {/* Filters Bar */}
      <div className="bg-slate-800/40 border border-slate-700/50 p-4 rounded-xl backdrop-blur-xl flex flex-wrap gap-4 items-center">
        <div className="relative flex-1 min-w-[300px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search by Batch ID, Ministry or Reference..."
            className="w-full bg-slate-900/50 border border-slate-700 rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 transition-colors text-sm">
          <Filter className="w-4 h-4" />
          Filters
        </button>
      </div>

      {/* Batches Table */}
      <div className="bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden backdrop-blur-md shadow-2xl">
        <table className="w-full text-left">
          <thead className="bg-slate-900/40 text-slate-400 text-xs uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4 font-semibold">Batch ID</th>
              <th className="px-6 py-4 font-semibold">Source Ministry</th>
              <th className="px-6 py-4 font-semibold">Total Amount</th>
              <th className="px-6 py-4 font-semibold">Instructions</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold">Start Time</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-700/30">
            {mockBatches.map((batch) => (
              <tr key={batch.id} className="group hover:bg-slate-700/20 transition-all cursor-pointer">
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="font-mono text-blue-400 font-semibold">{batch.id}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-300 font-medium">{batch.ministry}</td>
                <td className="px-6 py-4 text-white font-bold">{batch.totalAmount} {batch.currency}</td>
                <td className="px-6 py-4 text-slate-400">{batch.count} items</td>
                <td className="px-6 py-4">
                  {batch.status === 'COMPLETED' && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <CheckCircle2 className="w-3 h-3" />
                      Completed
                    </span>
                  )}
                  {batch.status === 'PROCESSING' && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Clock className="w-3 h-3 animate-spin-slow" />
                      Processing
                    </span>
                  )}
                  {batch.status === 'FAILED' && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
                      <AlertCircle className="w-3 h-3" />
                      Failed
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-slate-400 text-sm">{batch.startedAt}</td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 hover:bg-slate-700 rounded-lg text-slate-400 group-hover:text-blue-400 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
