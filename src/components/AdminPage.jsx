import React, { useState, useEffect } from 'react';
import { Lock, Download, Trash2, Search, Users, ArrowLeft, RefreshCw, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function AdminPage({ onBackToHome }) {
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinError, setPinError] = useState('');
  const [entries, setEntries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const loadEntries = () => {
    try {
      const data = JSON.parse(localStorage.getItem('vitrag_waitlist_entries') || '[]');
      setEntries(data);
    } catch (e) {
      setEntries([]);
    }
  };

  useEffect(() => {
    loadEntries();
  }, []);

  const handlePinSubmit = (e) => {
    e.preventDefault();
    if (pin === '1234' || pin === 'admin') {
      setIsAuthenticated(true);
      setPinError('');
    } else {
      setPinError('Invalid Security PIN. Access Denied.');
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this customer entry?')) {
      const updated = entries.filter(item => item.id !== id);
      setEntries(updated);
      localStorage.setItem('vitrag_waitlist_entries', JSON.stringify(updated));
    }
  };

  const handleExportCSV = () => {
    if (entries.length === 0) {
      alert('No records available to export.');
      return;
    }

    const headers = ['ID', 'Full Name', 'Email', 'WhatsApp Number', 'Category Interest', 'Voucher Code', 'Date Registered'];
    const csvRows = [
      headers.join(','),
      ...entries.map(e => [
        e.id,
        `"${e.fullName}"`,
        `"${e.email}"`,
        `"${e.whatsapp}"`,
        `"${e.category}"`,
        `"${e.voucherCode}"`,
        `"${e.date}"`
      ].join(','))
    ];

    const csvContent = 'data:text/csv;charset=utf-8,' + csvRows.join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Vitrag_Jewels_VIP_Waitlist_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredEntries = entries.filter(item => 
    item.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.whatsapp.includes(searchTerm) ||
    item.voucherCode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#050C0A] text-[#F3E5AB] py-12 px-4 sm:px-6 lg:px-8 font-fontfabric-sans bklit-grid-pattern">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-[#D4AF37]/20">
          <button 
            onClick={onBackToHome}
            className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] hover:text-white bg-[#091F1A] px-4 py-2 rounded-xl border border-[#D4AF37]/30 transition-all font-fontfabric-tenor"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← Back to Main Website</span>
          </button>

          <div className="flex items-center space-x-3">
            <img 
              src="/logo-light.png" 
              alt="Vitrag Jewels Logo" 
              className="h-10 w-auto object-contain"
            />
            <div className="text-left">
              <h1 className="font-fontfabric-brand text-lg font-bold gold-gradient-text uppercase leading-none">
                ADMIN PORTAL
              </h1>
              <p className="text-[9px] text-[#E6C687]/70 uppercase tracking-[0.2em] font-fontfabric-tenor mt-0.5">
                OWNER LEADS DATABASE
              </p>
            </div>
          </div>
        </div>

        {!isAuthenticated ? (
          /* Security PIN Screen */
          <div className="max-w-md mx-auto glass-panel p-8 sm:p-10 rounded-2xl border border-[#D4AF37]/35 shadow-2xl text-center space-y-6">
            <div className="w-16 h-16 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37] text-[#D4AF37] flex items-center justify-center mx-auto shadow-xl">
              <Lock className="w-8 h-8" />
            </div>

            <div>
              <h2 className="font-fontfabric-serif text-2xl font-bold text-white">Owner Security Login</h2>
              <p className="text-xs text-[#E6C687]/80 mt-1">
                Enter your private Admin Security PIN to access the customer database. (Default PIN: <strong className="text-[#D4AF37]">1234</strong>)
              </p>
            </div>

            <form onSubmit={handlePinSubmit} className="space-y-4 font-fontfabric-tenor">
              <input
                type="password"
                maxLength={8}
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter PIN (1234)"
                className="w-full text-center tracking-widest text-xl font-mono bg-[#051310] border border-[#D4AF37]/30 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#D4AF37]"
              />

              {pinError && (
                <p className="text-xs text-rose-400 font-semibold">{pinError}</p>
              )}

              <button
                type="submit"
                className="w-full gold-gradient-bg text-[#050C0A] font-bold text-xs py-3.5 rounded-xl uppercase tracking-widest shadow-xl cursor-pointer"
              >
                UNLOCK ADMIN DATABASE
              </button>
            </form>
          </div>
        ) : (
          /* Authenticated Dashboard View */
          <div className="space-y-6 animate-fadeIn font-fontfabric-sans">
            
            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="glass-panel p-5 rounded-xl border border-[#D4AF37]/25 text-center">
                <span className="text-[10px] uppercase text-[#E6C687]/70 tracking-widest font-semibold font-fontfabric-tenor">TOTAL PRE-REGISTRATIONS</span>
                <p className="font-fontfabric-serif text-3xl font-extrabold gold-gradient-text mt-2">{entries.length}</p>
              </div>

              <div className="glass-panel p-5 rounded-xl border border-[#D4AF37]/25 text-center">
                <span className="text-[10px] uppercase text-[#E6C687]/70 tracking-widest font-semibold font-fontfabric-tenor">20% VOUCHERS ISSUED</span>
                <p className="font-fontfabric-serif text-3xl font-extrabold text-white mt-2">{entries.length}</p>
              </div>

              <div className="glass-panel p-5 rounded-xl border border-[#D4AF37]/25 text-center">
                <span className="text-[10px] uppercase text-[#E6C687]/70 tracking-widest font-semibold font-fontfabric-tenor">TARGET LAUNCH DATE</span>
                <p className="font-fontfabric-serif text-xl font-bold text-[#D4AF37] mt-2">MARCH 2027</p>
              </div>
            </div>

            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-3.5 rounded-xl border border-[#D4AF37]/25">
              
              {/* Search Bar */}
              <div className="relative w-full sm:w-80 font-fontfabric-sans">
                <Search className="w-4 h-4 text-[#D4AF37] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search name, phone, code..."
                  className="w-full bg-[#051310] border border-[#D4AF37]/30 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-[#E6C687]/40 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3 w-full sm:w-auto font-fontfabric-tenor">
                <button
                  onClick={loadEntries}
                  className="p-2 bg-[#091F1A] text-[#D4AF37] rounded-xl border border-[#D4AF37]/30 hover:bg-[#D4AF37] hover:text-[#050C0A] transition-all cursor-pointer"
                  title="Refresh Database"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>

                <button
                  onClick={handleExportCSV}
                  className="flex-1 sm:flex-initial gold-gradient-bg text-[#050C0A] font-bold text-xs px-5 py-2 rounded-xl shadow-lg flex items-center justify-center gap-2 tracking-widest uppercase cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>EXPORT LEADS (CSV)</span>
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="glass-panel rounded-xl border border-[#D4AF37]/25 overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-white">
                  <thead className="bg-[#081C17] text-[#D4AF37] uppercase tracking-widest text-[10px] border-b border-[#D4AF37]/25 font-fontfabric-tenor">
                    <tr>
                      <th className="p-3.5">Customer Name</th>
                      <th className="p-3.5">WhatsApp / Phone</th>
                      <th className="p-3.5">Email</th>
                      <th className="p-3.5">Jewelry Interest</th>
                      <th className="p-3.5">20% Voucher</th>
                      <th className="p-3.5">Registered Date</th>
                      <th className="p-3.5 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#D4AF37]/10 font-fontfabric-sans">
                    {filteredEntries.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="p-10 text-center text-xs text-[#E6C687]/60">
                          {entries.length === 0 
                            ? 'No pre-registrations received yet. Form submissions from your website will display here live!'
                            : 'No matching customer records found for search filter.'}
                        </td>
                      </tr>
                    ) : (
                      filteredEntries.map(entry => (
                        <tr key={entry.id} className="hover:bg-[#0D2924]/50 transition-colors">
                          <td className="p-3.5 font-semibold text-[#F5E8C7]">{entry.fullName}</td>
                          <td className="p-3.5 text-[#D4AF37] font-medium">{entry.whatsapp}</td>
                          <td className="p-3.5 text-[#E6C687]">{entry.email}</td>
                          <td className="p-3.5">
                            <span className="bg-[#091F1A] text-[#D4AF37] text-[10px] px-2 py-0.5 rounded-lg border border-[#D4AF37]/30 font-semibold font-fontfabric-tenor">
                              {entry.category}
                            </span>
                          </td>
                          <td className="p-3.5 font-mono font-bold text-emerald-400 text-xs">{entry.voucherCode}</td>
                          <td className="p-3.5 text-[10px] text-[#E6C687]/70">{entry.date}</td>
                          <td className="p-3.5 text-right">
                            <button
                              onClick={() => handleDelete(entry.id)}
                              className="text-rose-400 hover:text-rose-300 p-1.5 rounded bg-rose-500/10 border border-rose-500/30 cursor-pointer"
                              title="Delete Record"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
