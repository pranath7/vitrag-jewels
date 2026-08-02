import React, { useState, useEffect } from 'react';
import { X, Lock, Download, Trash2, Search, Users, Sparkles, Phone, Mail, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function AdminPortalModal({ isOpen, onClose }) {
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinError, setPinError] = useState('');
  const [entries, setEntries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Load entries from LocalStorage
  const loadEntries = () => {
    try {
      const data = JSON.parse(localStorage.getItem('vitrag_waitlist_entries') || '[]');
      setEntries(data);
    } catch (e) {
      setEntries([]);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadEntries();
    }
  }, [isOpen]);

  const handlePinSubmit = (e) => {
    e.preventDefault();
    if (pin === '1234' || pin === 'admin') {
      setIsAuthenticated(true);
      setPinError('');
    } else {
      setPinError('Invalid Admin PIN. Try "1234"');
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this waitlist entry?')) {
      const updated = entries.filter(item => item.id !== id);
      setEntries(updated);
      localStorage.setItem('vitrag_waitlist_entries', JSON.stringify(updated));
    }
  };

  const handleExportCSV = () => {
    if (entries.length === 0) {
      alert('No entries available to export.');
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl glass-panel rounded-3xl overflow-hidden border border-[#D4AF37]/50 shadow-2xl max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#061614] border-b border-[#D4AF37]/30 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-luxury text-xl font-bold gold-gradient-text">
                VITRAG JEWELS — ADMIN PORTAL
              </h3>
              <p className="text-[10px] text-[#E6C687]/70 uppercase tracking-widest">
                VIP WAITLIST & LEADS MANAGEMENT
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-2 text-[#E6C687] hover:text-[#D4AF37] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Auth PIN View vs Dashboard View */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-12 text-center max-w-sm mx-auto space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center mx-auto">
              <Lock className="w-8 h-8" />
            </div>

            <div>
              <h4 className="font-serif-luxury text-xl font-bold text-white">Owner PIN Access</h4>
              <p className="text-xs text-[#E6C687]/70 mt-1">
                Enter your Admin Security PIN to view pre-registered customer entries. (Default PIN: <strong className="text-[#D4AF37]">1234</strong>)
              </p>
            </div>

            <form onSubmit={handlePinSubmit} className="space-y-4">
              <input
                type="password"
                maxLength={8}
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter PIN (1234)"
                className="w-full text-center tracking-widest text-lg bg-[#051310] border border-[#D4AF37]/40 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37]"
              />

              {pinError && (
                <p className="text-xs text-rose-400 font-semibold">{pinError}</p>
              )}

              <button
                type="submit"
                className="w-full gold-gradient-bg text-[#050C0A] font-bold text-xs py-3.5 rounded-xl uppercase tracking-wider shadow-lg"
              >
                UNLOCK ADMIN PORTAL
              </button>
            </form>
          </div>
        ) : (
          /* Admin Dashboard Content */
          <div className="p-6 flex-1 overflow-y-auto space-y-6">
            
            {/* Stats Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-[#081C17] p-4 rounded-xl border border-[#D4AF37]/30 text-center">
                <span className="text-[10px] uppercase text-[#E6C687]/70 tracking-widest">TOTAL PRE-REGISTRATIONS</span>
                <p className="font-serif-luxury text-3xl font-bold gold-gradient-text mt-1">{entries.length}</p>
              </div>

              <div className="bg-[#081C17] p-4 rounded-xl border border-[#D4AF37]/30 text-center">
                <span className="text-[10px] uppercase text-[#E6C687]/70 tracking-widest">20% VOUCHERS ISSUED</span>
                <p className="font-serif-luxury text-3xl font-bold text-white mt-1">{entries.length}</p>
              </div>

              <div className="bg-[#081C17] p-4 rounded-xl border border-[#D4AF37]/30 text-center">
                <span className="text-[10px] uppercase text-[#E6C687]/70 tracking-widest">TARGET LAUNCH</span>
                <p className="font-serif-luxury text-xl font-bold text-[#D4AF37] mt-2">MARCH 2027</p>
              </div>
            </div>

            {/* Controls Bar: Search & Export CSV */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Search Box */}
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-[#D4AF37] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search name, phone, code..."
                  className="w-full bg-[#051310] border border-[#D4AF37]/30 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-[#E6C687]/40 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              {/* CSV Export Button */}
              <button
                onClick={handleExportCSV}
                className="w-full sm:w-auto gold-gradient-bg text-[#050C0A] font-bold text-xs px-5 py-2.5 rounded-xl shadow-lg flex items-center justify-center gap-2 tracking-wider uppercase cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>EXPORT ALL LEADS (CSV)</span>
              </button>
            </div>

            {/* Leads Data Table */}
            <div className="border border-[#D4AF37]/20 rounded-xl overflow-hidden bg-[#051310]">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-white">
                  <thead className="bg-[#081C17] text-[#D4AF37] uppercase tracking-wider text-[10px] border-b border-[#D4AF37]/20">
                    <tr>
                      <th className="p-3">Customer Name</th>
                      <th className="p-3">WhatsApp / Phone</th>
                      <th className="p-3">Email</th>
                      <th className="p-3">Jewelry Interest</th>
                      <th className="p-3">20% Voucher</th>
                      <th className="p-3">Date</th>
                      <th className="p-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#D4AF37]/10">
                    {filteredEntries.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="p-8 text-center text-xs text-[#E6C687]/60">
                          {entries.length === 0 
                            ? 'No pre-registrations received yet. Submissions from the website form will appear here live!'
                            : 'No matching records found for search term.'}
                        </td>
                      </tr>
                    ) : (
                      filteredEntries.map(entry => (
                        <tr key={entry.id} className="hover:bg-[#0D2924]/50 transition-colors">
                          <td className="p-3 font-semibold text-[#F5E8C7]">{entry.fullName}</td>
                          <td className="p-3 text-[#D4AF37] font-medium">{entry.whatsapp}</td>
                          <td className="p-3 text-[#E6C687]">{entry.email}</td>
                          <td className="p-3">
                            <span className="bg-[#0D2924] text-[#D4AF37] text-[10px] px-2 py-0.5 rounded border border-[#D4AF37]/30">
                              {entry.category}
                            </span>
                          </td>
                          <td className="p-3 font-mono font-bold text-emerald-400">{entry.voucherCode}</td>
                          <td className="p-3 text-[10px] text-[#E6C687]/70">{entry.date}</td>
                          <td className="p-3 text-right">
                            <button
                              onClick={() => handleDelete(entry.id)}
                              className="text-rose-400 hover:text-rose-300 p-1"
                              title="Delete Record"
                            >
                              <Trash2 className="w-4 h-4" />
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
